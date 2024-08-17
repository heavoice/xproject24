import React, { useState } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false); // State for mobile menu
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between sm:justify-between md:justify-around lg:justify-around xl:justify-around items-center px-4 bg-[#F2C48D] text-white z-20">
      {/* Logo / Home */}
      <a className="font-extrabold text-2xl">X-PROJECT</a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4">
        <li>Home</li>
        <li className="flex items-center">
          Tech Genius <FaAngleDown className="ml-1" />
        </li>
        <li className="flex items-center">
          Championship <FaAngleDown className="ml-1" />
        </li>
        <li>Tech Symphony</li>
        <li>About Us</li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        {nav ? (
          <FaTimes size={30} onClick={handleClick} />
        ) : (
          <FaBars size={30} onClick={handleClick} />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#F2C48D] text-white flex flex-col items-center justify-center transform ${
          nav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <ul className="space-y-6 text-2xl">
          <li onClick={handleClick}>Home</li>
          <li className="flex items-center" onClick={handleClick}>
            Tech Genius <FaAngleDown className="ml-1" />
          </li>
          <li className="flex items-center" onClick={handleClick}>
            Championship <FaAngleDown className="ml-1" />
          </li>
          <li onClick={handleClick}>Tech Symphony</li>
          <li onClick={handleClick}>About Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
