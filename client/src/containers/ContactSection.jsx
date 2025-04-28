import React from "react";
import { Phone, Mail, Home } from "lucide-react";
import EnquiryForm from "../lib/EnquieryForm";
import Wrapper from "./Wrapper";
import contactDetails from "../constants/contactUs"; // <- Import here

const ContactCard = ({ icon, title, children }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col items-center text-center transition hover:shadow-lg text-sm sm:text-base">
    <div className="text-primary mb-2 sm:mb-3">{icon}</div>
    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{title}</h3>
    <div className="text-gray-700 text-xs sm:text-sm space-y-1">{children}</div>
  </div>
);

const ContactForm = () => {
  return <EnquiryForm />;
};

const ContactSection = () => {
  return (
    <section id="contact-us" className="py-8 sm:py-12 bg-gray-50 mt-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          The team at{" "}
          <a href="/" className="text-blue-600 underline font-medium">
            Saraswati Academy
          </a>{" "}
          is dedicated to helping you learn Indian languages through
          personalized classes.
        </p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
          {/* Form */}
          <ContactForm />
          <div className="space-y-4 sm:space-y-6 w-full max-w-md">
            <ContactCard icon={<Phone size={24} />} title="Contact">
              {contactDetails.phoneNumbers.map((phone, index) => (
                <div key={index}>
                  <a href={`tel:${phone}`} className="block">
                    {phone}
                  </a>
                </div>
              ))}
            </ContactCard>

            <ContactCard icon={<Mail size={24} />} title="Email">
              {contactDetails.emails.map((email, index) => (
                <div key={index}>
                  <a href={`mailto:${email}`} className="block">
                    {email}
                  </a>
                </div>
              ))}
            </ContactCard>

            <ContactCard icon={<Home size={24} />} title="Address">
              {contactDetails.address.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </ContactCard>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactComponent = () => {
  return (
    <Wrapper>
      <ContactSection />
    </Wrapper>
  );
};

export default ContactComponent;
