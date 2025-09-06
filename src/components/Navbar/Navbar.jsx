import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <nav className="w-full shadow-md bg-white fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Logo image */}
          <img
            src="/Logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />

          {/* Text part */}
          <div>
            <h1 className="text-xl font-bold">
              Prot<span className="text-pink-600">folio</span>
            </h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-pink-500 cursor-pointer transition"
            >
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Appointment Button (desktop) */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-pink-600 text-white px-5 py-2 rounded shadow hover:bg-pink-600transition flex items-center">
              <IoCallOutline className="mr-2 text-[25px]" />
              Contact Us
            </button>
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <FaBars className="text-2xl text-gray-700" />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Drawer Menu (Left Side) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header with Icon */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center pl-4 space-x-2">
            {/* Logo Image */}
            <img
              src="/Logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover"
            />

            {/* Text */}
            <h1 className="text-xl font-bold">
              Prot<span className="text-pink-600">folio</span>
            </h1>
          </div>

          <button onClick={() => setMenuOpen(false)}>
            <FaTimes className="text-xl text-gray-700 hover:text-pink-500 transition" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-6 space-y-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="block text-gray-700 font-medium hover:text-pink-600 cursor-pointer"
              onClick={() => setMenuOpen(false)} 
            >
              {item.name}
            </a>
          ))}
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-pink-600 text-white px-5 py-2 rounded shadow hover:bg-pink-700 transition flex items-center justify-center gap-2">
              <IoCallOutline className="text-white text-[25px]" />
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
