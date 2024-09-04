import React, { useState } from "react";
import Logo from "../assets/img/logoXP.png";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const handleClick = () => setNav(!nav);
  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <div className="fixed top-0 w-full h-[80px] flex justify-between sm:justify-between md:justify-around lg:justify-around xl:justify-around items-center px-4 bg-[#F2C48D] text-white z-20">
      {/* Logo / Home */}
      <Link to="/" className="font-extrabold text-2xl">
        <img src={Logo} alt="home" width={50} height={50} />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4">
        <Link to="/" className="hover:text-[#D7996C]">
          Home
        </Link>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton>
              <li className="flex items-center hover:text-[#D7996C]">
                Tech Genius <FaAngleDown className="ml-1" />
              </li>
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#F2C48D] shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  to="/Bootcamp"
                  className="block px-4 py-2 text-sm text-white hover:text-[#D7996C] data-[focus]:bg-gray-100 data-[focus]:text-[#F2C48D]"
                >
                  FULLSTACK WEB DEV
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/Techpreneur"
                  className="block px-4 py-2 text-sm text-white hover:text-[#D7996C] data-[focus]:bg-gray-100 data-[focus]:text-[#F2C48D]"
                >
                  TECH ENTREPRENEURSHIP WEBINAR
                </Link>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton>
              <li className="flex items-center hover:text-[#D7996C]">
                Championship <FaAngleDown className="ml-1" />
              </li>
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#F2C48D] shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  to="/Uiux"
                  className="block px-4 py-2 text-sm text-white hover:text-[#D7996C] data-[focus]:bg-gray-100 data-[focus]:text-[#F2C48D]"
                >
                  UI/UX Competiton
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/Techpreneur"
                  className="block px-4 py-2 text-sm text-white hover:text-[#D7996C] data-[focus]:bg-gray-100 data-[focus]:text-[#F2C48D]"
                >
                  Business Plan Competiton
                </Link>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
        <li>Tech Symphony</li>
        <Link to="/about-us" className="hover:text-[#D7996C]">
          About Us
        </Link>
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
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#F2C48D] text-white flex flex-col items-center  transform ${
          nav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <button className="absolute top-4 right-4">
          <FaTimes size={30} onClick={handleClick} />
        </button>
        <ul className="space-y-6 text-2xl mt-40">
          <li onClick={handleClick}>
            <Link to="/">Home</Link>
          </li>
          <li
            className="flex items-center"
            onClick={() => toggleDropdown("Tech Genius")}
          >
            Tech Genius <FaAngleDown className="ml-1" />
          </li>
          {dropdown === "Tech Genius" && (
            <div className="flex flex-col space-y-4 text-xl">
              <Link to="/Bootcamp" onClick={handleClick}>
                FULLSTACK WEB DEV
              </Link>
              <Link to="/Techpreneur" onClick={handleClick}>
                TECH ENTREPRENEURSHIP WEBINAR
              </Link>
            </div>
          )}
          <li
            className="flex items-center"
            onClick={() => toggleDropdown("Championship")}
          >
            Championship <FaAngleDown className="ml-1" />
          </li>
          {dropdown === "Championship" && (
            <div className="flex flex-col space-y-4 text-xl">
              <Link to="/uiux" onClick={handleClick}>
                UiUx Competiton
              </Link>
              <Link to="/business" onClick={handleClick}>
                Business Plan Competiton
              </Link>
            </div>
          )}
          <li onClick={handleClick}>
            <Link to="/TechSymphony">Tech Symphony</Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/AboutUs">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
