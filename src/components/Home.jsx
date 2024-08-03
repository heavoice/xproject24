import React from "react";
import { FaAngleDown } from "react-icons/fa";
import Pelampung from "../assets/img/pelampung.png";
import Kerang from "../assets/img/kerang.png";
import "../assets/css/lost-island.css";
import "../assets/css/welcometo.css";
import "../assets/css/xpro24.css";

const Home = () => {
  return (
    <div className="bg-image w-full h-[300%] absolute md:justify-around -top-96 bg-cover bg-center bg-no-repeat">
      {/*welcome*/}
      <div className="max-w-[950px] mx-auto px-8 flex flex-col justify-center h-[60%] sm:h-[70%]">
        <h1 className="text-2xl sm:text-5xl font-bold text-[#0E5D84] welcome-to py-2">
          Welcome to
        </h1>
        <h2 className="text-3xl sm:text-7xl font-bold text-[#E7CF7F] xpro-24">
          X-project 2024
        </h2>
        <div className="py-12">
          <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-2xl text-white rounded-md border-green-600 bg-green-600 border-2 px-6 py-3 flex items-center hover:bg-green-900 hover:border-green-900">
            Explore more !
          </button>
        </div>
      </div>
      {/*scroll down & about us*/}
      <div className="h-screen flex justify-center mt-[-180px] sm:mt-[-360px]">
        <div className="w-fit mx-auto flex flex-col items-center">
          <a
            className="text-2xl sm:text-4xl text-[#D7996C] animate-bounce"
            href="/"
          >
            Scroll down <FaAngleDown className="mx-auto" />
          </a>
          <div className="my-60 z-10">
            <h1 className="flex translate-y-12 text-2xl text-white bg-[#D7996C] rounded-xl px-16 py-3">
              About Us
            </h1>
          </div>
          <div className="bg-[#F5F2CB] w-full sm:w-[1096px] h-[514px] rounded-xl grid items-center p-60 -translate-y-[13.75rem] gap-2">
            <div className="-translate-y-8">
              <h1 className="text-4xl text-[#9E7150] -translate-y-28 text-center sm:text-start">
                Apa sih <span className="text-red-800">x-project</span> itu?
              </h1>
              <p
                className="text-xl text-[#9E7150] text-justify w-[400px] -translate-y-24"
                style={{ fontFamily: "Poppins" }}
              >
                X-Project merupakan acara tahunan yang diadakan oleh himti
                UNESA. X-Project 9.0 memiliki serangkaian acara yang meliputi
                kegiatan pelatihan, pembelajaran pada bidang keahlian tertentu,
                perlombaan, IT expo, kewirausahaan dan pertunjukan yang
                bertujuan untuk mengenalkan HIMTI UNESA.
              </p>
              <img
                src={Pelampung}
                alt="ornamen1"
                className="absolute -translate-y-[35rem] -translate-x-[17rem] w-[50px] sm:w-[150px]"
              />
              <img
                src={Kerang}
                alt="ornamen2"
                className="absolute -translate-y-[6rem] translate-x-[46rem] w-[50px] sm:w-[150px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
