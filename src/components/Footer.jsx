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
      <div className="pt-[32rem] max-[440px]:pt-0 ">
        <div className="bg-image3 max-[360px]:-mt-60  max-[400px]:-mt-28  max-[440px]:mt-4 w-full h-screen translate-y-[390rem] md:translate-y-[320rem] max-[440px]:h-[500px] xl:translate-y-[360rem] md:h-[40rem] xl:h-[60rem]"></div>
        <div className="bg-image4 max-[440px]:h-[20rem] max-[440px]:mt-[25rem]  w-full h-screen translate-y-[345rem] md:translate-y-[290rem] md:h-[30rem] xl:h-[40rem] xl:translate-y-[325rem] 2xl:translate-y-[34  rem] 0rem] 2xl:h-[60rem]">
          <div className="flex flex-col sm:flex-row items-center lg:justify-center lg:space-x-32 xl:space-x-8 md:space-x-0 sm:space-x-6 ">
            <div className="flex flex-row sm:flex-row justify-center items-center max-[440px]:translate-y-0  translate-y-[42.5rem] sm:translate-y-[47rem] md:translate-y-0 xl:translate-y-[8rem] translate-x-0 xl:-translate-x-[0rem] 2xl:translate-y-[25rem] ">
              {/* <div className="flex justify-center sm:justify-start -translate-y-[4rem] sm:-translate-y-0 translate-x-[11rem] sm:translate-x-0 xl:justify-center md:pr-8 sm:pr-4">
                <img
                  src={logo}
                  className="w-20 h-20 sm:w-[90px] sm:h-[90px] -translate-y-2 sm:-translate-y-4 max-[440px]:w-16 max-[440px]:h-16"
                  alt="Logo"
                />
              </div> */}

              {/* Unesa Logo with Link */}
              <div className=" mx-auto px-8 grid grid-cols-2 gap-2 justify-between  items-center  md:w-[820px] ">
                <div className="flex justify-center   translate-y-[14.6rem] mt-1  md:mt-32">
                  <a
                    href="https://www.unesa.ac.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={unesa}
                      className="w-8 h-8 md:w-12 md:h-12  xl:w-16 xl:h-16  mt-2"
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

            {/* Social Media Icons Section */}
            {/* <div className="flex flex-row sm:flex-row justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8 xl:justify-center max-[440px]:translate-y-0   translate-y-[44rem] sm:translate-y-[47rem] md:translate-y-[47rem] xl:translate-y-[47rem] translate-x-[2rem] xl:translate-x-[20rem]">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
