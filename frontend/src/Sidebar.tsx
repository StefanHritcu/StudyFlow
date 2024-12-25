import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="absolute top-4 left-4 z-50 text-white lg:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:w-60`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Logo</h1>
          <ul className="space-y-4">
            <li>
              <a href="/" className="block text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block text-gray-300 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block text-gray-300 hover:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block text-gray-300 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
