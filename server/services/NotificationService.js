require("dotenv").config();
const nodemailer = require("nodemailer");
const twilio = require("twilio");

class NotificationService {
  constructor() {
    // Configure Nodemailer (Email Service)
    this.transporter = nodemailer.createTransport({
      service: "gmail", // Change if using another provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configure Twilio (SMS Service)
    this.twilioClient = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
    this.twilioNumber = process.env.TWILIO_PHONE_NUMBER;
  }

  /**
   * Send an email notification
   * @param {string} to - Recipient email address
   * @param {string} subject - Email subject
   * @param {string} text - Email body
   */
  async sendEmailNotification(to, subject, text) {
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
      };
      const info = await this.transporter.sendMail(mailOptions);
      console.log("Email sent: ", info.response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  /**
   * Send an SMS notification
   * @param {string} phoneNumber - Recipient phone number
   * @param {string} message - SMS content
   */
  async sendSmsNotification(phoneNumber, message) {
    try {
      const sms = await this.twilioClient.messages.create({
        body: message,
        from: this.twilioNumber,
        to: phoneNumber,
      });
      console.log("SMS sent: ", sms.sid);
    } catch (error) {
      console.error("Error sending SMS:", error);
    }
  }

  /**
   * Send notifications to a teacher
   * @param {Object} teacher - Teacher details
   * @param {string} teacher.email - Teacher's email
   * @param {string} teacher.phone - Teacher's phone number
   * @param {string} classDetails - Class schedule details
   */
  async notifyTeacher(teacher, classDetails) {
    const emailSubject = "Class Schedule Notification";
    const emailBody = `Dear ${teacher.name},\n\nYou have a scheduled class:\n${classDetails}\n\nBest Regards,\nSaraswati Academy`;

    const smsMessage = `Hello ${teacher.name}, you have a class scheduled: ${classDetails}`;

    await this.sendEmailNotification(teacher.email, emailSubject, emailBody);
    await this.sendSmsNotification(teacher.phone, smsMessage);
  }
}

module.exports = NotificationService;
