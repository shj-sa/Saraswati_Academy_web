import React, { useState } from "react";

const TermsAndConditionsPopup = ({ setIsOpen }) => {
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-screen overflow-hidden flex flex-col relative">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-orange-600 shadow-md z-10"
        >
          ✕
        </button>

        <div className="bg-orange-500 text-white p-4">
          <h2 className="text-xl font-bold text-center">
            Terms and Conditions
          </h2>
          <p className="text-sm text-center mt-1">
            Effective Date: April 01, 2025 | Last Updated: March 30, 2025
          </p>
        </div>

        <div className="p-6 overflow-y-auto" style={{ maxHeight: "70vh" }}>
          <div className="prose prose-sm max-w-none">
            <p>
              Welcome to <strong>Saraswati Hindi Jagat</strong>, a Saraswati
              Academy Enterprise ("we," "our," or "us"), a company registered as
              a <strong>Limited Liability Partnership (LLP) in India</strong>.
              These Terms and Conditions govern your use of our website (the
              "Website") and the educational services we provide. By accessing
              or using our Website, you agree to be bound by these Terms. If you
              do not agree, please refrain from using our services.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">1. ELIGIBILITY</h3>
            <p>
              Our services are designed for school students of Indian origin
              residing in{" "}
              <strong>
                Singapore, the US, the UK, the Middle East, Australia, and
                Europe
              </strong>
              . Parents or guardians must provide consent for students under the
              applicable age of consent (13 in the US, 16 in Europe, 18 in some
              countries).
            </p>
            <p>
              By using our Website, you confirm that you are either a student
              with parental consent or an adult user (such as a parent,
              guardian, or educator).
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">
              2. ACCOUNT REGISTRATION
            </h3>
            <p>
              Users may need to create an account to access certain features.
            </p>
            <p>
              You agree to provide{" "}
              <strong>accurate and complete information</strong> during
              registration and to update your details as needed.
            </p>
            <p>
              You are responsible for maintaining the{" "}
              <strong>confidentiality of your account credentials</strong>.
            </p>
            <p>
              We reserve the right to{" "}
              <strong>suspend or terminate accounts</strong> that violate these
              Terms.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">3. ACCEPTABLE USE</h3>
            <p>
              You agree to use our Website and services only for lawful
              purposes. You <strong>must not</strong>:
            </p>
            <ul className="list-disc pl-6">
              <li>Violate any applicable laws or regulations.</li>
              <li>
                Use our services to transmit harmful, obscene, or inappropriate
                content.
              </li>
              <li>
                Attempt to hack, disrupt, or interfere with the Website's
                security.
              </li>
              <li>Engage in any fraudulent or misleading activities.</li>
              <li>
                Use automated means (bots, scrapers) to access or collect data
                from the Website.
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-6 mb-2">
              4. CONTENT OWNERSHIP & INTELLECTUAL PROPERTY
            </h3>
            <p>
              All content on the Website, including text, videos, graphics, and
              course materials, is <strong>owned by us or our licensors</strong>{" "}
              and is protected by copyright, trademark, and intellectual
              property laws.
            </p>
            <p>
              You may not{" "}
              <strong>copy, distribute, modify, or reproduce</strong> any
              content without our prior written consent.
            </p>
            <p>
              Any content you submit (such as feedback or user-generated
              content) grants us a{" "}
              <strong>non-exclusive, worldwide, royalty-free license</strong> to
              use and display such content.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">
              5. PAYMENTS & REFUNDS
            </h3>
            <p>
              Some services may require payment. Pricing and payment details
              will be displayed at the time of purchase.
            </p>
            <p>
              Payments are processed through{" "}
              <strong>secure third-party payment providers</strong>.
            </p>
            <p>
              Refunds, if applicable, are subject to our{" "}
              <strong>Refund Policy</strong>, which will be specified on the
              Website.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">6. PRIVACY POLICY</h3>
            <p>
              Your use of our Website is also governed by our{" "}
              <strong>Privacy Policy</strong>, which outlines how we collect,
              use, and protect your data. By using our services, you consent to
              our data practices as described in the Privacy Policy.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">
              7. TERMINATION OF SERVICES
            </h3>
            <p>
              We reserve the right to suspend or terminate your access to our
              services if:
            </p>
            <ul className="list-disc pl-6">
              <li>You violate these Terms.</li>
              <li>You engage in unlawful or harmful activities.</li>
              <li>
                We discontinue or modify our services for operational reasons.
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-6 mb-2">
              8. THIRD-PARTY LINKS
            </h3>
            <p>
              Our Website may contain links to third-party sites. We do not
              control or endorse these sites and are{" "}
              <strong>not responsible for their content or practices</strong>.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">
              9. DISCLAIMERS & LIMITATION OF LIABILITY
            </h3>
            <p>
              Our services are provided{" "}
              <strong>"as is" and "as available."</strong> We do not guarantee
              uninterrupted, error-free operation.
            </p>
            <p>
              We are{" "}
              <strong>
                not liable for any direct, indirect, incidental, or
                consequential damages
              </strong>{" "}
              arising from the use of our services.
            </p>
            <p>
              Users assume full responsibility for their interactions and
              reliance on educational materials provided on our Website.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">10. INDEMNIFICATION</h3>
            <p>
              You agree to <strong>indemnify and hold us harmless</strong> from
              any claims, liabilities, damages, or expenses arising from your
              violation of these Terms.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">
              11. CHANGES TO THESE TERMS
            </h3>
            <p>
              We may update these Terms periodically. Any significant changes
              will be communicated through our Website or via email.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">
              12. GOVERNING LAW & JURISDICTION
            </h3>
            <p>
              These Terms are governed by the laws of <strong>India</strong>.
            </p>
            <p>
              Any disputes shall be subject to the exclusive jurisdiction of the
              courts in <strong>Prayagraj, Uttar Pradesh, India</strong>.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-2">13. CONTACT US</h3>
            <p>
              If you have any questions regarding these Terms, please contact us
              at:
            </p>
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
              id="agree"
              className="mr-2 h-5 w-5 accent-orange-500"
            />
            <label htmlFor="agree">
              I have read and agree to these Terms and Conditions
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

export default TermsAndConditionsPopup;
