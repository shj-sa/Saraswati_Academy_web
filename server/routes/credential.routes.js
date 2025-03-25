const express = require("express");
const router = express.Router();
const { permission, authorize } = require("../middleware/authMiddleware");
const { UserVerifier } = require("../middleware/credMiddleware");
const {
  createAdmin,
  createTeacher,
  createStudent,
  LogIn,
  PasswordRecovery,
  ConfirmPasswordChange,
  logout,
} = require("../controller/cred.controller");

//@desc - Create Admin
//@route - POST /api/credential/createAdmin
router.post(
  "/createAdmin",
  UserVerifier,
  authorize(permission.createAdmin),
  createAdmin
);
//@desc - Create Teacher
//@route - POST /api/credential/createTeacher
router.post(
  "/createTeacher",
  UserVerifier,
  authorize(permission.createTeacher),
  createTeacher
);
//@desc - Create Student
//@route - POST /api/credential/createStudent
router.post(
  "/createStudent",
  UserVerifier,
  authorize(permission.createStudent),
  createStudent
);
//@desc - Log In
//@route - POST /api/credential/LogIn
router.post("/LogIn", LogIn);
//@desc - Password Recovery
//@route - POST /api/credential/PasswordRecovery
router.post("/PasswordRecovery", PasswordRecovery);
//@desc - Confirm Password Change
//@route - POST /api/credential/ConfirmPasswordChange
router.post("/ConfirmPasswordChange", ConfirmPasswordChange);
//@desc - Log Out
//@route - POST /api/credential/logout
router.post("/logout", logout);

module.exports = router;
