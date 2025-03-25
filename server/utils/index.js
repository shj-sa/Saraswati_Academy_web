const Users = require("../models/User");
const crypto = require("crypto");

// Generate a 6-digit OTP code
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};

module.exports = { generateOTP };
