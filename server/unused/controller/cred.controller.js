const AuthService = require("../services/AuthService");

// Create Admin
const createAdmin = async (req, res) => {
  try {
    const { email, name } = req.body;
    // Input validation
    if (!email || !name) {
      return res.status(400).json({ message: "Email and name are required" });
    }

    if (!AuthService.isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (name.length < 3) {
      return res
        .status(400)
        .json({ message: "Name must be at least 3 characters" });
    }

    await AuthService.createUser(req, res, "Admin");
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Create Teacher
const createTeacher = async (req, res) => {
  try {
    const { email, name } = req.body;
    // Input validation
    if (!email || !name) {
      return res.status(400).json({ message: "Email and name are required" });
    }

    if (!AuthService.isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (name.length < 3) {
      return res
        .status(400)
        .json({ message: "Name must be at least 3 characters" });
    }

    await AuthService.createUser(req, res, "Teacher");
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Create Student
const createStudent = async (req, res) => {
  try {
    const { email, name } = req.body;
    // Input validation
    if (!email || !name) {
      return res.status(400).json({ message: "Email and name are required" });
    }

    if (!AuthService.isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (name.length < 3) {
      return res
        .status(400)
        .json({ message: "Name must be at least 3 characters" });
    }

    await AuthService.createUser(req, res, "Student");
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Log In
const LogIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Input validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and Password are required" });
    }

    if (!AuthService.isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    await AuthService.login(req, res);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Password Recovery
const PasswordRecovery = async (req, res) => {
  try {
    if (!req.body.EMAIL) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!AuthService.isValidEmail(req.body.EMAIL)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    await AuthService.passwordRecovery(req, res);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Confirm Password Change
const ConfirmPasswordChange = async (req, res) => {
  try {
    await AuthService.confirmPasswordChange(req, res);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Log Out
const logout = (req, res) => {
  try {
    AuthService.logout(req, res);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createAdmin,
  createTeacher,
  createStudent,
  LogIn,
  PasswordRecovery,
  ConfirmPasswordChange,
  logout,
};
