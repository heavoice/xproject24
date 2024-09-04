import React from "react";
import { whatsapp } from "../../assets";

const ContactPerson = ({
  firstlink,
  firstcp,
  firstno,
  secondlink,
  secondcp,
  secondno,
}) => {
  return (
    <div className="w-full md:w-fit h-full px-6 md:px-[8.2rem] pt-20 pb-20 md:pb-36 relative  mx-auto">
      <div className="w-[160px] lg:w-[240px] xl:w-[270px]  text-center mx-auto">
        <h1
          className=" md:text-xl lg:text-2xl text-white bg-[#523D31] rounded-xl  py-4 "
          style={{ fontFamily: "Lost Island" }}
        >
          Contact
        </h1>
      </div>
      <div className="mt-10 border-2 border-white py-12 md:py-16 px-7 md:px-20 rounded-lg bg-[#F5F2CB]">
        <a
          className="flex gap-5 w-full mb-8"
          target="_blank"
          href={firstlink}
          rel="noopener noreferrer"
          style={{ fontFamily: "Lost Island" }}
        >
          <img src={whatsapp} alt="" />
          <div className="text-[#523D31]">
            <h1
              className="text-lg md:text-[2rem] font-semibold "
              style={{ fontFamily: "Lost Island" }}
            >
              {firstno} ({firstcp})
            </h1>
          </div>
        </a>
        <a
          className="flex gap-5 w-full"
          target="_blank"
          href={secondlink}
          rel="noopener noreferrer"
          style={{ fontFamily: "Lost Island" }}
        >
          <img src={whatsapp} alt="" />
          <div className="text-[#523D31]">
            <h1
              className="text-lg md:text-[2rem] font-semibold "
              style={{ fontFamily: "Lost Island" }}
            >
              {secondno} ({secondcp})
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactPerson;
