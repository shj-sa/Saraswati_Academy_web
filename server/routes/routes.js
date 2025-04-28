// routes/facebookRoutes.js
const express = require("express");
const router = express.Router();
const { sendEnquiry } = require("../controllers/sendEnqueryController");

router.post("/enquiry", sendEnquiry);
module.exports = router;
