const {
  sendCustomerResponseEmail,
  sendEnquiryEmail,
} = require("../services/EmailService");
const sendEnquiry = async (req, res) => {
  const { name, contact, email, course, note } = req.body;
  console.log(req.body);
  // Basic validation
  console.log(name, contact, email, course);
  if (!name || !contact || !email || !course) {
    return res.status(400).json({
      success: false,
      message:
        "Please provide all required fields: name, contact, email, and course.",
    });
  }

  // Simple email & phone format check (can use better validators like Joi if needed)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format.",
    });
  }

  // if (!phoneRegex.test(contact)) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "Invalid contact number format.",
  //   });
  // }

  try {
    const enquiryData = { name, contact, email, course, note: note || "N/A" };

    // Send email to admin/client
    await sendEnquiryEmail(enquiryData, process.env.CLIENT_EMAIL);

    // Send confirmation to customer
    await sendCustomerResponseEmail(email, enquiryData);

    return res.status(200).json({
      success: true,
      message: "Enquiry submitted successfully. You will be contacted soon!",
    });
  } catch (error) {
    console.error("Error sending enquiry:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

module.exports = { sendEnquiry };
