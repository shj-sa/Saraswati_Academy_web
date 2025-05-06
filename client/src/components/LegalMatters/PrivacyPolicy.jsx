import React, { useState } from "react";

const PrivacyPolicyPopup = ({ setIsOpen }) => {
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-screen overflow-hidden flex flex-col relative">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-orange-600 shadow-md z-10"
        >
          ✕
        </button>

        <div className="bg-orange-500 text-white p-4">
          <h2 className="text-xl font-bold text-center">Privacy Policy</h2>
          <p className="text-sm text-center mt-1">
            Effective Date: April 01, 2025 | Last Updated: March 30, 2025
          </p>
        </div>

        <div className="p-6 overflow-y-auto " style={{ maxHeight: "70vh" }}>
          <div className="prose prose-sm max-w-none">
            <p>
              Saraswati Hindi Jagat an enterprise of{" "}
              <strong>Saraswati Academy</strong>, a company registered as a{" "}
              <strong>Limited Liability Partnership (LLP) in India</strong>{" "}
              ("we," "our," or "us"), respects the privacy of our users,
              including school students and their parents, and is committed to
              protecting it. This Privacy Policy explains how we collect, use,
              disclose, and protect your personal information when you visit our
              website (the "Website") and use our educational services.
            </p>

            <p>
              By accessing or using our Website, you agree to the terms of this
              Privacy Policy. If you do not agree, please refrain from using our
              services.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">
              1. APPLICABILITY & COMPLIANCE
            </h3>
            <p>
              This Privacy Policy is designed to comply with applicable data
              protection laws, including but not limited to:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>
                  General Data Protection Regulation (GDPR) -- Europe
                </strong>
              </li>
              <li>
                <strong>California Consumer Privacy Act (CCPA) -- USA</strong>
              </li>
              <li>
                <strong>
                  Children's Online Privacy Protection Act (COPPA) -- USA
                </strong>
              </li>
              <li>
                <strong>
                  Personal Data Protection Act (PDPA) -- Singapore
                </strong>
              </li>
              <li>
                <strong>
                  Data Protection Laws applicable in the UK, Middle East, and
                  Australia
                </strong>
              </li>
              <li>
                <strong>
                  Information Technology (Reasonable Security Practices and
                  Procedures and Sensitive Personal Data or Information) Rules,
                  2011 -- India
                </strong>
              </li>
            </ul>

            <p>
              This policy applies to users accessing our platform from
              Singapore, the US, the UK, the Middle East, Australia, and Europe.
              Parents and guardians must review and accept this Privacy Policy
              before allowing their child to use our services.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">
              2. INFORMATION WE COLLECT
            </h3>
            <p>
              We collect both personal and non-personal data to improve our
              services.
            </p>

            <p>
              <strong>a. Personal Information</strong>
            </p>
            <p>
              We collect personal information only with parental consent for
              students below the applicable age of consent (13 in the US, 16 in
              Europe, 18 in some countries). This may include:
            </p>
            <ul className="list-disc pl-6">
              <li>Name (Student & Parent)</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Account Credentials (Username, Password)</li>
              <li>Location Data (Country of Residence)</li>
              <li>Payment Information (if applicable for premium services)</li>
              <li>Learning Preferences & Academic Progress</li>
            </ul>

            <p>
              <strong>b. Non-Personal Information</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>Browser type and version</li>
              <li>IP address</li>
              <li>Device Information (OS, model)</li>
              <li>Website interaction data</li>
              <li>Cookies and usage data</li>
            </ul>

            <h3 className="text-lg font-bold mt-6 mb-2">
              3. HOW WE USE YOUR INFORMATION
            </h3>
            <p>We use collected information for:</p>
            <ul className="list-disc pl-6">
              <li>Delivering and improving our educational services</li>
              <li>Managing accounts and authentication</li>
              <li>Processing payments and subscriptions</li>
              <li>Providing customer support</li>
              <li>
                Sending notifications, newsletters, and service updates (with
                parental consent)
              </li>
              <li>Ensuring compliance with child protection laws</li>
              <li>
                Conducting research and analytics to enhance user experience
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-6 mb-2">
              4. DATA SHARING & DISCLOSURE
            </h3>
            <p>
              We do <strong>not</strong> sell personal data. However, we may
              share it under the following circumstances:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>With Service Providers:</strong> Third-party vendors
                (hosting, payment processors, analytics tools) that assist in
                service delivery.
              </li>
              <li>
                <strong>For Legal Compliance:</strong> When required by law,
                court order, or law enforcement agencies, including compliance
                with Indian laws.
              </li>
              <li>
                <strong>With Parental Consent:</strong> For educational
                collaborations or third-party integrations.
              </li>
              <li>
                <strong>Business Transfers:</strong> In case of a merger,
                acquisition, or business reorganization, your data may be
                transferred to new owners.
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-6 mb-2">
              5. COOKIES & TRACKING TECHNOLOGIES
            </h3>
            <p>
              We use cookies, web beacons, and similar technologies to enhance
              website functionality. Users can manage cookie preferences via
              their browser settings.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">6. DATA SECURITY</h3>
            <p>
              We implement strict security measures such as encryption,
              firewalls, and access controls to protect your data. However, no
              system is 100% secure. If you suspect any data breach, contact us
              immediately.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">
              7. CHILDREN'S PRIVACY & PARENTAL RIGHTS
            </h3>
            <ul className="list-disc pl-6">
              <li>
                We do not knowingly collect data from children under the legal
                age without parental consent.
              </li>
              <li>
                Parents can review, request deletion, or modify their child's
                information by contacting us.
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-6 mb-2">
              8. USER RIGHTS (GDPR, CCPA, INDIAN IT RULES & OTHERS)
            </h3>
            <p>
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Access:</strong> Request a copy of your data.
              </li>
              <li>
                <strong>Correction:</strong> Update inaccurate data.
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of personal data.
              </li>
              <li>
                <strong>Restriction:</strong> Limit how we process your data.
              </li>
              <li>
                <strong>Objection:</strong> Opt-out of certain data uses.
              </li>
              <li>
                <strong>Data Portability:</strong> Receive data in a
                machine-readable format.
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Stop receiving
                communications.
              </li>
            </ul>

            <p>
              To exercise these rights, contact us at
              priyanka.mishra@tutornline.com.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">9. DATA RETENTION</h3>
            <p>
              We retain personal data only as long as necessary to fulfill
              educational services and comply with legal obligations under
              Indian and international laws. Upon request, we will securely
              delete your information.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">
              10. THIRD-PARTY LINKS & EXTERNAL WEBSITES
            </h3>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for their privacy practices and encourage you to
              review their policies.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">
              11. INTERNATIONAL DATA TRANSFERS
            </h3>
            <p>
              As our services cater to users in multiple regions, your data may
              be stored or processed in India and other countries with
              appropriate safeguards in place.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">
              12. CHANGES TO THIS PRIVACY POLICY
            </h3>
            <p>
              We may update this Privacy Policy periodically. Any significant
              changes will be notified via email or a prominent notice on our
              Website.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">13. CONTACT US</h3>
            <p>If you have any questions or concerns, please contact us at:</p>
            <p>
              <strong>Saraswati Academy</strong>
              <br />
              Prayagraj, Uttar Pradesh, India
              <br />
              Email: <strong>priyanka.mishra@tutornline.com</strong>
            </p>
          </div>
        </div>

        {/* <div className="bg-gray-100 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacy-agree"
              className="mr-2 h-5 w-5 accent-orange-500"
            />
            <label htmlFor="privacy-agree">
              I have read and agree to this Privacy Policy
            </label>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={closePopup}
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded flex-1 sm:flex-auto hover:bg-gray-400 font-medium"
            >
              Decline
            </button>
            <button
              onClick={closePopup}
              className="bg-orange-500 text-white px-6 py-2 rounded flex-1 sm:flex-auto hover:bg-orange-600 font-medium"
            >
              Accept
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PrivacyPolicyPopup;
