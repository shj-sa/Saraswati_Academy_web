import {
  Github,
  Twitter,
  Facebook,
  Instagram,
  Phone,
  Mail,
  Youtube,
  Linkedin,
  Blogger,
} from "lucide-react";
import Social from "../../constants/socialLinks.json";
import contact from "../../constants/contactUs.json";
import TermsAndConditionsPopup from "../LegalMatters/termsandconditions";
import PrivacyPolicyPopup from "../LegalMatters/PrivacyPolicy";
import { useState } from "react";

const socialLinks = [
  { icon: X, href: Social.twitter, id: "twitter" },
  { icon: Facebook, href: Social.facebook, id: "facebook" },
  { icon: Instagram, href: Social.instagram, id: "instagram" },
  { icon: Youtube, href: Social.youtube, id: "youtube" },
  { icon: Linkedin, href: Social.linkedin, id: "linkedin" },
  { icon: Blogger, href: Social.Blogger, id: "Blogger" },
];

const footerLinks = [
  {
    title: "Our Courses",
    links: [
      { title: "Beginner Hindi", link: "/courses" },
      { title: "Intermediate Hindi", link: "/courses" },
      { title: "Advanced Hindi", link: "/courses" },
      { title: "Kids Special", link: "/courses" },
    ],
  },
  {
    title: "Links",
    links: [
      { title: "Blog", link: https://saraswatihindijagat.blogspot.com/ },
      { title: "FAQs", link: "/home/#faq" },
      { title: "Support", link: "/contact" },
    ],
  },
];

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  return (
    <footer className="pt-12 pb-8 text-white bg-gray-900" id="contact">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-between gap-6 mb-12 md:flex-row">
          <h3 className="text-3xl font-bold tracking-tight text-yellow-400">
            Saraswati Hindi Jagat
          </h3>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, id }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors bg-gray-700 rounded-full hover:bg-gray-600"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 gap-8 mb-12 sm:grid-cols-2 md:grid-cols-4">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-lg font-semibold text-gray-300">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link}`}>
                    <a
                      href={link.link}
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div key="legal">
            <h4 className="mb-4 text-lg font-semibold text-gray-300">Legal</h4>
            <ul className="space-y-2">
              <li key={`${"Terms & Conditions"}`}>
                <div
                  onClick={() => setIsOpen(true)}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Terms & Conditions
                </div>
              </li>
              <li key={`${"Privacy Policy"}`}>
                <div
                  onClick={() => setOpenPrivacy(true)}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Privacy Policy
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-8 text-center">
          <h4 className="text-lg font-semibold text-gray-300">Contact Us</h4>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-yellow-400" />{" "}
            {contact.phoneNumbers[0]}
          </p>
          <p className="text-gray-400 flex items-center justify-center gap-2 mt-2">
            <Mail className="w-5 h-5 text-yellow-400" /> {contact.emails[0]}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-gray-700 md:flex-row">
          <p className="text-sm text-gray-400" style={{ fontStyle: "italic" }}>
            © {new Date().getFullYear()} Saraswati Hindi Jagat - A Saraswati
            Academy Enterprise. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/nishant040305/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              Nishant Mohan
            </a>
          </p>
        </div>
      </div>
      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Dark overlay */}
          <div
            className="fixed inset-0 bg-black transition-opacity"
            style={{ opacity: 0.5 }}
          ></div>
          <div className="flex items-center justify-center min-h-screen text-black">
            <TermsAndConditionsPopup setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
      {openPrivacy && (
        <div className="fixed inset-0 z-50 overflow-y-auto text-black">
          {/* Dark overlay */}
          <div
            className="fixed inset-0 bg-black transition-opacity"
            style={{ opacity: 0.5 }}
          ></div>
          <div className="flex items-center justify-center min-h-screen">
            <PrivacyPolicyPopup setIsOpen={setOpenPrivacy} />
          </div>
        </div>
      )}
    </footer>
  );
}
