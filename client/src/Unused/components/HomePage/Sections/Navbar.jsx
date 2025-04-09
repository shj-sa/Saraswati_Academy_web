import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full text-white bg-black bg-opacity-90 shadow-md z-50">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text"
        >
          Saraswati Academy
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden space-x-8 md:flex">
          <li>
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#courses" className="hover:text-yellow-400 transition">
              Courses
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Admissions
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contacts
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:text-yellow-400 transition"
            >
              Parent's Response
            </a>
          </li>
        </ul>

        {/* Call to Action Button */}
        <Link
          to="/login"
          className="hidden md:inline-block px-6 py-3 text-white rounded-md bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 transition transform hover:scale-105"
        >
          Join Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-95 absolute top-full left-0 w-full py-4 text-center">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block text-lg hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-lg hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="block text-lg hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/admissions"
                className="block text-lg hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-lg hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link
            to="/join"
            className="mt-4 inline-block px-6 py-3 text-white rounded-md bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 transition transform hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            Join Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
