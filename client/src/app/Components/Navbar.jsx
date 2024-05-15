"use client"
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FFEFEF] p-4">
      <div className="flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <h1 className="text-2xl font-bold text-green-800">Nursery</h1>
          </Link>
        </div>
        <div className="hidden lg:flex justify-end space-x-4">
          <ul className="flex space-x-4">
            <NavItem href="#">Home</NavItem>
            <NavItem href="#">About G.G.</NavItem>
            <NavItem href="#">Plants</NavItem>
            <NavItem href="#">Our Services</NavItem>
            <NavItem href="#">Other Accessories</NavItem>
            <NavItem href="#">Contact Us</NavItem>
          </ul>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gray-800 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <NavItem href="#">Home</NavItem>
            <NavItem href="#">About G.G.</NavItem>
            <NavItem href="#">Plants</NavItem>
            <NavItem href="#">Our Services</NavItem>
            <NavItem href="#">Other Accessories</NavItem>
            <NavItem href="#">Contact Us</NavItem>
          </ul>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ href, children }) => {
  return (
    <li>
      <a
        href={href}
        className="text-black font-light transition-colors duration-100"
      >
        {children}
      </a>
    </li>
  );
};

export default Navbar;
