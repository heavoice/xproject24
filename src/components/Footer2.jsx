import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWordpress,
} from "react-icons/fa";
import logo from "../assets/img/logoXP.png";
import unesa from "../assets/img/unesa.png";
import ti from "../assets/img/ti.png";
import si from "../assets/img/si.png";
import pti from "../assets/img/pti.png";

const Footer2 = () => {
  return (
    <div className="bg-image4 w-full h-screen -mt-[45rem]">
      {/* Unesa Logo with Link */}
      <div className=" mx-auto px-8 grid grid-cols-2 gap-2 justify-between items-center md:w-[820px] translate-y-[23.5rem] md:translate-y-[14rem]">
        <div className="flex justify-center translate-y-[14.6rem] mt-1  md:mt-32">
          <a
            href="https://www.unesa.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={unesa}
              className="w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16 mt-2"
              alt="Unesa Logo"
            />
          </a>
          {/* TI Logo with Link */}
          <a
            href="https://www.instagram.com/hmpti.unesa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ti}
              className="w-10 h-10 ml-1 md:w-14 md:h-14 xl:w-20 xl:h-20  mt-1"
              alt="TI Logo"
            />
          </a>
          {/* SI Logo with Link */}
          <a
            href="https://www.instagram.com/hmpsi.unesa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={si}
              className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 "
              alt="SI Logo"
            />
          </a>
          {/* PTI Logo with Link */}
          <a
            href="https://www.instagram.com/hmppti.unesa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={pti}
              className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 "
              alt="PTI Logo"
            />
          </a>
          <img
            src={logo}
            className="w-8 h-8 md:w-11 md:h-11 xl:w-14 xl:h-14 mt-2 md:mt-3  "
            alt="Logo"
          />
        </div>
        <div className="flex justify-center gap-2 translate-y-[14.6rem]  mt-1 md:mt-32">
          <FaFacebook className="text-white hover:text-gray-400 transition duration-300 w-8 h-8  xl:w-14 xl:h-14 " />
          <FaInstagram className="text-white hover:text-gray-400 transition duration-300 w-8 h-8  xl:w-14 xl:h-14 " />

          <FaYoutube className="text-white hover:text-gray-400 transition duration-300 w-8 h-8  xl:w-14 xl:h-14" />
        </div>
      </div>
    </div>
  );
};

export default Footer2;
