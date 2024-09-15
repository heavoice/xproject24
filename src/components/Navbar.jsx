import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/img/logoXP.png";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

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

        {/* Tech Genius Dropdown */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton>
              <li className="flex items-center hover:text-[#D7996C]">
                Tech Genius <FaAngleDown className="ml-1" />
              </li>
            </MenuButton>
          </div>

          <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#F2C48D] shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <MenuItem>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  variants={dropdownVariants}
                >
                  <Link
                    to="/Bootcamp"
                    className="block px-4 py-2 text-sm text-white hover:text-[#D7996C]"
                  >
                    Fullstack Web Dev
                  </Link>
                </motion.div>
              </MenuItem>
              <MenuItem>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  variants={dropdownVariants}
                >
                  <Link
                    to="/Techpreneur"
                    className="block px-4 py-2 text-sm text-white hover:text-[#D7996C]"
                  >
                    Tech Enterpreneurship Webinar
                  </Link>
                </motion.div>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>

        {/* Championship Dropdown */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton>
              <li className="flex items-center hover:text-[#D7996C]">
                Championship <FaAngleDown className="ml-1" />
              </li>
            </MenuButton>
          </div>

          <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#F2C48D] shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <MenuItem>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  variants={dropdownVariants}
                >
                  <Link
                    to="/uiux-competition"
                    className="block px-4 py-2 text-sm text-white hover:text-[#D7996C]"
                  >
                    UI/UX Competition
                  </Link>
                </motion.div>
              </MenuItem>
              <MenuItem>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  variants={dropdownVariants}
                >
                  <Link
                    to="/business-plan"
                    className="block px-4 py-2 text-sm text-white hover:text-[#D7996C]"
                  >
                    Business Plan Competition
                  </Link>
                </motion.div>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>

        <Link to="/tech-symphony" className="hover:text-[#D7996C]">
          Tech Symphony
        </Link>
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
        className={`md:hidden fixed top-0 left-0 w-full h-full px-10 bg-[#F2C48D] text-white flex flex-col items-center transform ${
          nav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <button className="absolute top-4 right-4">
          <FaTimes size={30} onClick={handleClick} />
        </button>
        <ul className="space-y-6 text-2xl my-auto">
          <li onClick={handleClick}>
            <Link to="/">Home</Link>
          </li>

          {/* Tech Genius Dropdown */}
          <li
            className="flex items-center"
            onClick={() => toggleDropdown("Tech Genius")}
          >
            Tech Genius <FaAngleDown className="ml-1" />
          </li>
          {dropdown === "Tech Genius" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="flex flex-col space-y-4 text-xl pl-4 mt-2"
            >
              <Link to="/bootcamp" onClick={handleClick}>
                Fullstack Web Development
              </Link>
              <Link to="/techpreneur" onClick={handleClick}>
                Tech Entrepreneurship Webinar
              </Link>
            </motion.div>
          )}

          {/* Championship Dropdown */}
          <li
            className="flex items-center"
            onClick={() => toggleDropdown("Championship")}
          >
            Championship <FaAngleDown className="ml-1" />
          </li>
          {dropdown === "Championship" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="flex flex-col space-y-4 text-xl pl-4 mt-2"
            >
              <Link to="/uiux-competition" onClick={handleClick}>
                UI/UX Competition
              </Link>
              <Link to="/business-plan" onClick={handleClick}>
                Business Plan Competition
              </Link>
            </motion.div>
          )}

          <li onClick={handleClick}>
            <Link to="/tech-symphony">Tech Symphony</Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
