import React from "react";
import { bronzeTrophy, goldTrophy, silverTrophy } from "../../assets";

const Prizepool = ({ first, second, third }) => {
  return (
    <>
      <div className=" mx-auto pt-20">
        <div className="w-[160px] lg:w-[240px] xl:w-[270px]  text-center mx-auto">
          <h1
            className=" md:text-xl lg:text-2xl text-white bg-[#523D31] rounded-xl  py-4 "
            style={{ fontFamily: "Lost Island" }}
          >
            Prizepool
          </h1>
        </div>
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-1 text-center 2xl:w-[1200px] 2xl:mx-auto ">
          <div className="w-[250px] md:w-[230px] lg:w-[280px] xl:w-[320px] mx-auto md:order-2">
            <h1
              className="text-base md:text-xl lg:text-2xl text-white bg-[#7F5238] rounded-xl py-2 px-1"
              style={{ fontFamily: "Lost Island" }}
            >
              1st Winner
            </h1>
            <div className="mt-2 w-full bg-[#F5F2CB] rounded-xl p-3">
              <img
                className="drop-shadow-xl h-52 xl:h-60  pt-1 mx-auto"
                src={goldTrophy}
                alt=""
              />
              <p className="text-base md:text-lg xl:text-2xl text-center pt-1">
                Uang Pembinaan
              </p>
              <p className="text-base md:text-lg xl:text-2xl text-center pb-1">
                E-Ceritificate
              </p>
            </div>
          </div>
          <div className="w-[250px] md:w-[230px] lg:w-[280px] xl:w-[320px] pt-4 mx-auto md:order-1">
            <h1
              className="text-base md:text-xl lg:text-2xl text-white bg-[#7F5238] rounded-xl py-2 px-1"
              style={{ fontFamily: "Lost Island" }}
            >
              2nd Winner
            </h1>
            <div className="mt-2 w-full bg-[#F5F2CB] rounded-xl p-3">
              <img
                className="drop-shadow-xl h-52 md:h-48 xl:h-56 pt-1 mx-auto"
                src={silverTrophy}
                alt=""
              />
              <p className="text-base md:text-lg xl:text-2xl text-center pt-1">
                Uang Pembinaan
              </p>
              <p className="text-base md:text-lg xl:text-2xl text-center pb-1">
                E-Ceritificate
              </p>
            </div>
          </div>
          <div className="w-[250px] md:w-[230px] lg:w-[280px] xl:w-[320px] pt-4 mx-auto md:order-2">
            <h1
              className="text-base md:text-xl lg:text-2xl text-white bg-[#7F5238] rounded-xl py-2 px-1"
              style={{ fontFamily: "Lost Island" }}
            >
              3rd Winner
            </h1>
            <div className="mt-2 w-full bg-[#F5F2CB] rounded-xl p-3">
              <img
                className="drop-shadow-xl h-52 md:h-48 xl:h-56  pt-1 mx-auto"
                src={bronzeTrophy}
                alt=""
              />
              <p className="text-base md:text-lg xl:text-2xl text-center pt-1">
                Uang Pembinaan
              </p>
              <p className="text-base md:text-lg xl:text-2xl text-center pb-1">
                E-Ceritificate
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prizepool;
