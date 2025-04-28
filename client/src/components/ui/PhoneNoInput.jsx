import React, { useState, useRef, useEffect } from "react";
import Flag from "react-world-flags";
import countries from "../../constants/countries"; // Ensure this file exports your countries array

// Helper function: formats a string of digits as "###-###-####"
const formatPhoneNumber = (value) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

const PhoneNumberInput = ({ setNumber }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  // Update the full phone number value whenever the selected country or phone changes
  useEffect(() => {
    setNumber(`${selectedCountry.code} ${phone}`.trim());
  }, [selectedCountry, phone]);

  // Close the dropdown when clicking outside.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter countries based on search term (by country label or dial code)
  const filteredCountries = countries.filter(
    (country) =>
      country.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.includes(searchTerm)
  );

  // Handle phone input changes, enforcing numeric input and a maximum of 10 digits.
  const handlePhoneChange = (e) => {
    const inputVal = e.target.value;
    // Remove all non-digit characters.
    const digits = inputVal.replace(/\D/g, "");
    // Limit to 10 digits.
    const limitedDigits = digits.slice(0, 10);
    const formatted = formatPhoneNumber(limitedDigits);
    setPhone(formatted);

    // Set error message if digits are less than 10.
    if (limitedDigits.length < 10) {
      setPhoneError("Phone number must be exactly 10 digits long.");
    } else {
      setPhoneError("");
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="flex items-center">
        {/* Country Code Dropdown */}
        <div className="relative">
          <button
            type="button"
            className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Flag code={selectedCountry.iso} className="h-4 w-4 mr-2" />
            {selectedCountry.code}
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute z-10 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-52 dark:bg-gray-700"
            >
              {/* Search Input */}
              <div className="p-2">
                <input
                  type="text"
                  placeholder="Search country..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Country List */}
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200 overflow-y-auto max-h-60"
                aria-labelledby="dropdown-phone-button"
              >
                {filteredCountries.map((country) => (
                  <li key={country.iso + country.code}>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => {
                        setSelectedCountry(country);
                        setShowDropdown(false);
                        setSearchTerm("");
                      }}
                    >
                      <span className="inline-flex items-center">
                        <Flag code={country.iso} className="h-4 w-4 mr-2" />
                        {country.label} ({country.code})
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Phone Number Input Field */}
        <div className="relative w-full">
          <input
            type="text"
            id="phone-input"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="123-456-7890"
            required
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberInput;
