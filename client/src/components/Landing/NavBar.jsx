import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Navigation } from "lucide-react";
import logoImage from "../../assets/images/Logo.png";
import PhoneIcon from "../../lib/PhoneIcon";
import CourseDropdownItem from "../ui/Courses";
import NavigationBar from "../../constants/Navigation_Bar.json";
import CourseDetails from "../../constants/CourseDetails.json";
import contact from "../../constants/contactUs.json";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  // constant size in px
  const size = 1700;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  const PhoneButton = () => (
    <a
      href={`tel:${contact.phoneNumbers[0]}`}
      className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 text-white rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:ring-2 hover:ring-orange-300 shadow-md cursor-pointer no-underline"
    >
      <PhoneIcon color="#1a1601" size={22} />
      <span className="font-semibold tracking-wide uppercase text-sm drop-shadow-sm">
        {contact.phoneNumbers[0]}
      </span>
    </a>
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

  const toggleMobileCourses = (e) => {
    e.preventDefault();
    setMobileCoursesOpen(!mobileCoursesOpen);
  };

  const MobileCoursesDropdown = () => (
    <div
      className={`pl-4 mt-2 space-y-3 transition-all duration-300 ${
        mobileCoursesOpen
          ? "max-h-96 opacity-100"
          : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <div className="border-l-2 border-yellow-500 pl-4">
        {Object.values(CourseDetails).map((program) => (
          <div className="mb-3" key={program.title}>
            <div className="font-semibold text-yellow-400 flex items-center mb-1">
              {program.title}
            </div>
            <ul className="ml-2 space-y-2 text-gray-300">
              {Object.values(program.courses).map((course) => (
                <li
                  key={course.title}
                  className="hover:text-yellow-400 cursor-pointer transition-colors"
                >
                  • {course.title}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-3 text-center">
          <a
            href="/courses"
            className="text-yellow-400 hover:text-yellow-500 text-sm font-medium inline-flex items-center"
          >
            View all courses <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 w-full text-white bg-black bg-opacity-90 shadow-md z-50">
      <div className="container flex items-center justify-between px-4 md:px-6 py-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logoImage}
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <div className="text-xl md:text-2xl font-bold tracking-tight text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
            Saraswati Hindi Jagat
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className={`${windowWidth >= size ? "flex space-x-8" : "hidden"}`}>
          {NavigationBar.Home.present && (
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                {NavigationBar.Home.title}
              </a>
            </li>
          )}
          {NavigationBar.Courses.present && (
            <li className="relative group">
              <CourseDropdownItem />
            </li>
          )}
          {NavigationBar.Testimonials.present && (
            <li>
              <a
                href="/testimonials"
                className="hover:text-yellow-400 transition"
              >
                {NavigationBar.Testimonials.title}
              </a>
            </li>
          )}
          {NavigationBar.Contact.present && (
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                {NavigationBar.Contact.title}
              </a>
            </li>
          )}
          {NavigationBar.Resources.present && (
            <li>
              <a href="/resources" className="hover:text-yellow-400 transition">
                Resources
              </a>
            </li>
          )}
          {NavigationBar.Media.present && (
            <li>
              <a href="/media" className="hover:text-yellow-400 transition">
                Media Coverage
              </a>
            </li>
          )}
          {NavigationBar.JoinUs.present && (
            <li>
              <a href="/hiring" className="hover:text-yellow-400 transition">
                Join Us
              </a>
            </li>
          )}
        </ul>

        {/* Phone Button - Desktop */}
        <div className={`${windowWidth >= size ? "block" : "hidden"}`}>
          <PhoneButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`${
            windowWidth < size ? "block" : "hidden"
          } focus:outline-none`}
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {windowWidth <= size && isOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-black pl-10 bg-opacity-95 overflow-hidden transition-all duration-400 ease-in-out transform ${
            menuVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
          }`}
        >
          <ul className="space-y-4 py-4 px-4 text-left">
            {NavigationBar.Home.present && (
              <li>
                <a
                  href="/"
                  className="block text-lg hover:text-yellow-400"
                  onClick={handleLinkClick}
                >
                  {NavigationBar.Home.title}
                </a>
              </li>
            )}
            {NavigationBar.Courses.present && (
              <li>
                {/* Mobile Courses Dropdown Trigger */}
                <a
                  href="#"
                  className="block text-lg hover:text-yellow-400 flex items-center justify-between"
                  onClick={toggleMobileCourses}
                >
                  <span>{NavigationBar.Courses.title}</span>
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform duration-300 ${
                      mobileCoursesOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>
                {/* Mobile Courses Dropdown Content */}
                <MobileCoursesDropdown />
              </li>
            )}
            {NavigationBar.Testimonials.present && (
              <li>
                <a
                  href="/testimonials"
                  className="block text-lg hover:text-yellow-400"
                  onClick={handleLinkClick}
                >
                  {NavigationBar.Testimonials.title}
                </a>
              </li>
            )}
            {NavigationBar.Contact.present && (
              <li>
                <a
                  href="/contact"
                  className="block text-lg hover:text-yellow-400"
                  onClick={handleLinkClick}
                >
                  {NavigationBar.Contact.title}
                </a>
              </li>
            )}
            {NavigationBar.Resources.present && (
              <li>
                <a
                  href="/resources"
                  className="block text-lg hover:text-yellow-400"
                  onClick={handleLinkClick}
                >
                  {NavigationBar.Resources.title}
                </a>
              </li>
            )}
            {NavigationBar.Media.present && (
              <li>
                <a
                  href="/media"
                  className="block text-lg hover:text-yellow-400"
                  onClick={handleLinkClick}
                >
                  {NavigationBar.Media.title}
                </a>
              </li>
            )}
            {NavigationBar.JoinUs.present && (
              <li>
                <a
                  href="/hiring"
                  className="block text-lg hover:text-yellow-400"
                  onClick={handleLinkClick}
                >
                  {NavigationBar.JoinUs.title}
                </a>
              </li>
            )}

            {/* Phone Button */}
            <div className="flex justify-start pt-2">
              <PhoneButton />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
