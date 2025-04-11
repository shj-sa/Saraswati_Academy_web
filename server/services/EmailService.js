const fs = require("fs");
const nodemailer = require("nodemailer");
const path = require("path");

// Load HTML template and replace placeholders
async function loadTemplate(filePath, replacements) {
  const resolvedPath = path.resolve(__dirname, filePath);

  try {
    let template = await fs.promises.readFile(resolvedPath, "utf-8");
    for (const key in replacements) {
      template = template.replace(
        new RegExp(`{{${key}}}`, "g"),
        replacements[key]
      );
    }
    return template;
  } catch (error) {
    console.error("Error reading email template:", error);
    throw error;
  }
}

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

/**
 * Send enquiry email to client
 * @param {Object} enquiryData - Contains name, contact, email, course, note
 */
const sendEnquiryEmail = async (enquiryData) => {
  try {
    const filePath = path.join(__dirname, "../Messages/EnquireEmail.html");

    const htmlTemplate = await loadTemplate(filePath, {
      name: enquiryData.name,
      contact: enquiryData.contact,
      email: enquiryData.email,
      course: enquiryData.course,
      note: enquiryData.note,
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.CLIENT_EMAIL,
      subject: `New Enquiry from ${enquiryData.name} - Saraswati Academy`,
      html: htmlTemplate,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Enquiry email sent:", info.response);
  } catch (error) {
    console.error("Error sending enquiry email:", error);
  }
};
const sendCustomerResponseEmail = async (customerEmail, data) => {
  try {
    const filePath = path.join(
      __dirname,
      "../Messages/ResponseToCustomer.html"
    );
    const htmlTemplate = await loadTemplate(filePath, {
      name: data.name,
      contact: data.contact,
      email: data.email,
      course: data.course,
      note: data.note,
      year: new Date().getFullYear(),
    });
    const mailOptions = {
      from: process.env.EMAIL,
      to: customerEmail,
      subject: "Thank You for Your Enquiry - Saraswati Academy",
      html: htmlTemplate,
      attachments: [
        {
          filename: "logo.ico",
          path: path.join(__dirname, "../public/favicon.ico"),
          cid: "academy-logo", // Same as `cid:` used in the HTML
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Customer confirmation sent:", info.response);
  } catch (error) {
    console.error("Error sending confirmation to customer:", error);
  }
};

module.exports = { sendEnquiryEmail, sendCustomerResponseEmail };
