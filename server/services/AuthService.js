const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwtToken = require("jsonwebtoken");
const User = require("../models/User");
const Token = require("../models/Token");
const {
  sendOtpEmail,
  sendPasswordRecoverEmail,
} = require("../utils/SendEmail");
const { generateOTP } = require("../utils/index");

// AuthService class handles authentication-related operations
class AuthService {
  // Generates a random 8-character hexadecimal password
  static generatePassword() {
    return crypto.randomBytes(4).toString("hex");
  }

  // Validates email format using regex
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Creates a new user with specified role
  static async createUser(req, res, role) {
    try {
      const { name, email } = req.body;
      // Check for existing user
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Create new user with hashed password
      const password = this.generatePassword();
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = new User({
        name,
        email,
        password: hashedPassword,
        role,
        verify: true,
      });

      await user.save();
      await sendOtpEmail(email, password); // Using existing implementation

      return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error: error.message,
      });
    }
  }

  // Handles user login
  static async login(req, res) {
    try {
      const { EMAIL: email, PASSWORD: password } = req.body;

      const user = await User.findOne({ email }).lean();
      if (!user) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!user.verify || !isPasswordValid) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      // Prepare user data for JWT
      const userData = { ...user };
      delete userData.password;
      delete userData.verify;

      const token = jwtToken.sign(userData, process.env.JWTSECRET, {
        expiresIn: "1h",
      });
      res.cookie("uid", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
      });

      return res.status(200).json({
        info: userData,
        message: "Login successful",
      });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // Initiates password recovery process
  static async passwordRecovery(req, res) {
    try {
      const { EMAIL } = req.body;
      const user = await User.findOne({ email: EMAIL });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const otp = generateOTP();
      const token = await Token.create({
        userId: user._id,
        token: otp,
        type: "PasswordChangeOTP",
        email: EMAIL,
        expiresAt: Date.now() + 15 * 60 * 1000, // 15 minutes expiration
      });

      await sendPasswordRecoverEmail(EMAIL, otp);
      return res.status(200).json({
        type: "PasswordChangeOTP",
        AUTH: token._id,
      });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // Confirms password change with OTP
  static async confirmPasswordChange(req, res) {
    try {
      const { AUTHENTICATION, PASSWORD } = req.body;

      const token = await Token.findOne({
        _id: AUTHENTICATION,
        type: "PasswordChangeOTP",
      });
      if (!token || token.expiresAt < Date.now()) {
        return res.status(400).json({ message: "Invalid or expired OTP" });
      }

      const user = await User.findById(token.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(PASSWORD, salt);
      await user.save();

      await Token.findByIdAndDelete(token._id);

      const userData = { ...user.toObject() };
      delete userData.password;
      delete userData.verify;

      const jwtData = jwtToken.sign(userData, process.env.JWTSECRET, {
        expiresIn: "1h",
      });
      res.cookie("uid", jwtData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
      });

      return res.status(200).json({
        info: userData,
        message: "Password updated successfully",
      });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // Handles user logout
  static logout(req, res) {
    res.clearCookie("uid", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
    });
    return res.status(200).json({ message: "Logged out successfully" });
  }
}

// Export authentication functions
module.exports = new AuthService();
