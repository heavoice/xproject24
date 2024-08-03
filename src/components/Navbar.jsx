import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false); // Use array destructuring
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-screen h-[80px] flex md:justify-around items-center px-4 bg-[#F2C48D] text-white z-20">
      {/*logo / home*/}
      <a className="font-extrabold text-2xl">X-PROJECT</a>

      {/*isi*/}
      <div>
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
      </div>
    </div>
  );
};

export default Navbar;
