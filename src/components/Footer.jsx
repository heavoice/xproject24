import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWordpress,
} from "react-icons/fa";
import logo from "../assets/img/logo.png";
import unesa from "../assets/img/unesa.png";
import ti from "../assets/img/ti.png";
import si from "../assets/img/si.png";
import pti from "../assets/img/pti.png";

const Footer = () => {
  return (
    <>
      <div className="pt-[32rem]">
        <div className="bg-image3 w-full h-screen translate-y-[390rem] xl:translate-y-[380rem]"></div>
        <div className="bg-image4 w-full h-screen translate-y-[345rem]">
          <div className="flex flex-col sm:flex-row items-center lg:justify-center lg:space-x-32 xl:space-x-8 md:space-x-0 sm:space-x-6">
            <div className="flex flex-row sm:flex-row justify-center items-center translate-y-[42.5rem] sm:translate-y-[47rem] md:translate-y-[47rem] xl:translate-y-[47rem] translate-x-0 xl:-translate-x-[20rem]">
              <div className="flex justify-center sm:justify-start -translate-y-[4rem] sm:-translate-y-0 translate-x-[11rem] sm:translate-x-0 xl:justify-center md:pr-8 sm:pr-4">
                <img
                  src={logo}
                  className="w-20 h-20 sm:w-[90px] sm:h-[90px] -translate-y-2 sm:-translate-y-4"
                  alt="Logo"
                />
              </div>

              {/* Unesa Logo with Link */}
              <div className="flex justify-center sm:justify-start xl:justify-center">
                <a
                  href="https://www.unesa.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={unesa}
                    className="w-12 h-14 sm:w-[58.12px] sm:h-[63.47px] -translate-y-1 sm:-translate-y-3"
                    alt="Unesa Logo"
                  />
                </a>
              </div>

              {/* TI Logo with Link */}
              <div className="flex justify-center sm:justify-start xl:justify-center">
                <a
                  href="https://www.instagram.com/hmpti.unesa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ti}
                    className="w-20 h-20 sm:w-[92.6px] sm:h-[92.6px] -translate-y-0 sm:-translate-y-2"
                    alt="TI Logo"
                  />
                </a>
              </div>

              {/* SI Logo with Link */}
              <div className="flex justify-center sm:justify-start xl:justify-center">
                <a
                  href="https://www.instagram.com/hmpsi.unesa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={si}
                    className="w-20 h-20 sm:w-[92.6px] sm:h-[92.6px] -translate-y-0 sm:-translate-y-2"
                    alt="SI Logo"
                  />
                </a>
              </div>

              {/* PTI Logo with Link */}
              <div className="flex justify-center sm:justify-start xl:justify-center">
                <a
                  href="https://www.instagram.com/hmppti.unesa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={pti}
                    className="w-20 h-20 sm:w-[92.6px] sm:h-[92.6px] -translate-y-0 sm:-translate-y-2"
                    alt="PTI Logo"
                  />
                </a>
              </div>
            </div>

            {/* Social Media Icons Section */}
            <div className="flex flex-row sm:flex-row justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8 xl:justify-center translate-y-[44rem] sm:translate-y-[47rem] md:translate-y-[47rem] xl:translate-y-[47rem] translate-x-[2rem] xl:translate-x-[20rem]">
              <FaFacebook
                size={30}
                className="text-white hover:text-gray-400 transition duration-300"
              />
              <FaInstagram
                size={30}
                className="text-white hover:text-gray-400 transition duration-300"
              />
              <FaTwitter
                size={30}
                className="text-white hover:text-gray-400 transition duration-300"
              />
              <FaYoutube
                size={30}
                className="text-white hover:text-gray-400 transition duration-300"
              />
              <FaWordpress
                size={30}
                className="text-white hover:text-gray-400 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
