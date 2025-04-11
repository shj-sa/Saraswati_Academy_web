// routes/facebookRoutes.js
const express = require("express");
const router = express.Router();
const { getFacebookReviews } = require("../controllers/GetFacebookReviews");
const { sendEnquiry } = require("../controllers/sendEnquiryController");

router.get("/facebook-reviews", getFacebookReviews);
router.post("/enquiry", sendEnquiry);
module.exports = router;
