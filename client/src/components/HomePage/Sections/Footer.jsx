import {
  Github,
  Twitter,
  Facebook,
  Instagram,
  Phone,
  Mail,
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Nishant040305", id: "github" },
  { icon: Twitter, href: "/twitter", id: "twitter" },
  { icon: Facebook, href: "/facebook", id: "facebook" },
  { icon: Instagram, href: "/instagram", id: "instagram" },
];

const footerLinks = [
  {
    title: "Our Courses",
    links: [
      "Beginner Hindi",
      "Intermediate Hindi",
      "Advanced Hindi",
      "Kids Special",
      "One-on-One Tutoring",
    ],
  },
  {
    title: "Resources",
    links: ["Online Classes", "Live Sessions", "Blog", "FAQs", "Support"],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Our Teachers",
      "Success Stories",
      "Contact",
      "Careers",
    ],
  },
  {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Terms & Conditions",
      "Refund Policy",
      "Cookies Policy",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pt-12 pb-8 text-white bg-gray-900" id="contact">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-between gap-6 mb-12 md:flex-row">
          <h3 className="text-3xl font-bold tracking-tight text-yellow-400">
            Saraswati Academy
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
                      href="#"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mb-8 text-center">
          <h4 className="text-lg font-semibold text-gray-300">📞 Contact Us</h4>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-yellow-400" /> +91 98765 43210
          </p>
          <p className="text-gray-400 flex items-center justify-center gap-2 mt-2">
            <Mail className="w-5 h-5 text-yellow-400" />{" "}
            support@saraswatiacademy.com
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-gray-700 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Saraswati Academy. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Developed by{" "}
            <a
              href="https://github.com/Nishant040305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              Nishant Mohan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
