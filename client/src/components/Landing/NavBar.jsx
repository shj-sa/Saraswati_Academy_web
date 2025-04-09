import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImage from "../../assets/images/Logo_background_less.png";
import FrontPageData from "../../constants/FrontPage.json";
import PhoneIcon from "../../lib/PhoneIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const PhoneButton = () => (
    <div
      onClick={handleLinkClick}
      className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 text-white rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:ring-2 hover:ring-orange-300 shadow-md cursor-pointer"
    >
      <PhoneIcon color="#1a1601" size={22} />
      <span className="font-semibold tracking-wide uppercase text-sm drop-shadow-sm">
        {FrontPageData.phone}
      </span>
    </div>
  );
  const toggleMenu = () => {
    if (isOpen) {
      // Trigger fade-out before removing the menu
      setMenuVisible(false);
      setTimeout(() => setIsOpen(false), 400); // match transition duration
    } else {
      setIsOpen(true);
      setTimeout(() => setMenuVisible(true), 10); // slight delay to trigger transition
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full text-white bg-black bg-opacity-90 shadow-md z-50">
      <div className="container flex items-center justify-between px-4 md:px-6 py-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logoImage}
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <div className="text-xl md:text-2xl font-bold tracking-tight text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
            Saraswati Academy
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden space-x-8 md:flex">
          <li>
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400 transition">
              Courses
            </a>
          </li>
          <li>
            <a href="#courses" className="hover:text-yellow-400 transition">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#resources" className="hover:text-yellow-400 transition">
              Resources
            </a>
          </li>
        </ul>

        {/* Phone Button - Desktop */}
        <div className="hidden md:block">
          <PhoneButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-black pl-10 bg-opacity-95 overflow-hidden transition-all duration-400 ease-in-out transform ${
            menuVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
          }`}
        >
          <ul className="space-y-4 py-4 px-4 text-left ">
            <li>
              <a
                href="#home"
                className="block text-lg hover:text-yellow-400"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-lg hover:text-yellow-400"
                onClick={toggleMenu}
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="block text-lg hover:text-yellow-400"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-lg hover:text-yellow-400"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="block text-lg hover:text-yellow-400"
                onClick={toggleMenu}
              >
                Resources
              </a>
            </li>

            {/* Phone Button */}
            <div className="flex justify-center">
              <PhoneButton />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
