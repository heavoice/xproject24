import React, { useState } from "react";
import Batu1 from "../../assets/img/Batu (1).png";
import Batu2 from "../../assets/img/Batu (2).png";
import Pemateri from "../../assets/img/pemateri1.png";
import Maskot from "../../assets/img/maskot.png";
import Poster from "../../assets/img/PamfletBootcampNew.png";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { whatsapp } from "../../assets";

function FullstackWebdev({
  firstlink,
  firstcp,
  firstno,
  secondlink,
  secondcp,
  secondno,
}) {
  const LinkPendaftaran = () => {
    window.location.href = "/null";
  };

  const [openPoster, setopenPoster] = useState(false);

  const PosterModal = ({ openPoster, setopenPoster }) => {};

  return (
    <div className="bg-image5 w-full xs:h-[325rem] sm:h-[400rem] md:h-[430rem] lg:h-[430rem] xl:h-[440rem] flex flex-col items-center justify-center z-10">
      <div className="relative xs:-translate-y-[42rem] sm:-translate-y-[44rem] md:-translate-y-[63rem] xs:space-y-4">
        {/* business plan */}
        <h1
          className="xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#E7CF7F] flex flex-col text-center sm:pb-5"
          style={{
            fontFamily: "Lost Island",
            textShadow: `
    -4px -4px 0 #0A5E8A, 
    4px -4px 0 #0A5E8A, 
    -4px 4px 0 #0A5E8A, 
    4px 4px 0 #0A5E8A, 
    -4px 0 0 #0A5E8A, 
    4px 0 0 #0A5E8A, 
    0 -4px 0 #0A5E8A, 
    0 4px 0 #0A5E8A, 
    -4px -2px 0 #0A5E8A, 
    -4px 2px 0 #0A5E8A, 
    4px -2px 0 #0A5E8A, 
    4px 2px 0 #0A5E8A, 
    -2px -4px 0 #0A5E8A, 
    2px -4px 0 #0A5E8A, 
    -2px 4px 0 #0A5E8A, 
    2px 4px 0 #0A5E8A, 
    0 0 0 #0A5E8A
  `,
          }}
        >
          Fullstack Web Dev <br />{" "}
          <span
            style={{
              color: "#0E5D84",
              textShadow: `-4px -4px 0 #F4C66B, 
    4px -4px 0 #F4C66B, 
    -4px 4px 0 #F4C66B, 
    4px 4px 0 #F4C66B, 
    -4px 0 0 #F4C66B, 
    4px 0 0 #F4C66B, 
    0 -4px 0 #F4C66B, 
    0 4px 0 #F4C66B, 
    -4px -2px 0 #F4C66B, 
    -4px 2px 0 #F4C66B, 
    4px -2px 0 #F4C66B, 
    4px 2px 0 #F4C66B, 
    -2px -4px 0 #F4C66B, 
    2px -4px 0 #F4C66B, 
    -2px 4px 0 #F4C66B, 
    2px 4px 0 #F4C66B, 
    0 0 0 #F4C66B`,
            }}
          >
            Bootcamp
          </span>
        </h1>
        <button
          onClick={LinkPendaftaran}
          className="mx-auto transition ease-in-out whitespace-nowrap hover:-translate-y-1 hover:scale-110 duration-300 text-xs sm:text-xl md:text-2xl text-white rounded-xl border-green-600 bg-green-600 border-2 px-2 sm:px-8 md:px-9 py-1 sm:py-3 md:py-4 flex items-center hover:bg-green-900 hover:border-green-900"
          style={{ fontFamily: "Lost Island" }}
        >
          Daftar Sekarang
        </button>
      </div>
      {/* overview */}
      <div className="relative xs:-translate-y-[20rem] sm:-translate-y-[13rem] md:-translate-y-[23rem] z-10">
        <h1
          className="text-xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#523D31] rounded-xl xs:px-4 px-16 xs:py-2 py-4"
          style={{ fontFamily: "Lost Island" }}
        >
          Overview
        </h1>
      </div>
      <h2
        className="xs:text-xl xs:py-5 xs:px-4 sm:py-10 sm:px-5 lg:py-14 lg:px-7  text-justify w-[85%] h-[332px] lg:h-[466px] relative bg-[#F5F2CB] border-[#7F5238] border-b-8 border-r-8 rounded-xl xs:-translate-y-[21rem] sm:-translate-y-[15rem] md:-translate-y-[25rem]"
        style={{ fontFamily: "Lost Island" }}
      >
        <span className="text-[#0A5E8A] sm:text-2xl md:text-3xl lg:text-5xl">
          About
        </span>{" "}
        <span className="text-[#D25F5F] sm:text-2xl md:text-3xl lg:text-5xl">
          Bootcamp
        </span>
        <p
          className="xs:pt-2 xs:text-xs lg:text-2xl lg:pt-2"
          style={{ fontFamily: "Poppins" }}
        >
          Bootcamp Fullstack Development adalah program intensif yang dirancang
          untuk mengajarkan keterampilan pengembangan web yang penting dalam era
          digital saat ini. Dengan fokus pada teknologi terkini seperti React
          JS, Express JS, dan Tailwind CSS, bootcamp ini bertujuan untuk
          membantu peserta dari berbagai latar belakang mempelajari dan
          menguasai pengembangan website yang menarik dan fungsional.
        </p>
        <img
          src={Batu2}
          className="absolute -top-16 xs:-left-5 sm:-top-20 sm:-left-8 md:-top-24 md:-left-14 lg:-top-32 lg:-left-20 xl:-top-40 xl:-left-24 xs:w-[100px] sm:w-[140px] md:w-[150px] lg:w-[200px] xl:w-[240px]"
        />
        <img
          src={Batu1}
          className="absolute -bottom-16 xs:-right-5 sm:-bottom-20 sm:-right-12 md:-bottom-24 md:-right-14 lg:-bottom-32 lg:-right-20 xl:-bottom-40 xl:-right-24 xs:w-[100px] sm:w-[140px] md:w-[150px] lg:w-[200px] xl:w-[240px]"
        />
      </h2>
      {/* detail */}
      <div className="xs:-translate-y-[7rem] sm:-translate-y-[8rem]">
        <h1
          className="lg:mx-[20rem] relative xs:flex xs:flex-col sm:flex-row z-10 xs:mb-12 sm:mb-12 text-xs sm:text-xl md:text-base lg:text-2xl text-white text-center bg-[#523D31] rounded-xl xs:py-2 py-4"
          style={{ fontFamily: "Lost Island" }}
        >
          Detail
        </h1>
        <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 text-center">
          <div className="space-y-4">
            <h1
              className="text-xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-8 sm:px-11 xs:py-2 py-4"
              style={{ fontFamily: "Lost Island" }}
            >
              Pelaksanaan
            </h1>
            <p className="text-xs text-center sm:text-xl md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl xs:py-2 py-4">
              Online <br /> (Via Zoom)
            </p>
          </div>
          <div className="space-y-4">
            <h1
              className="text-xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-8 sm:px-11 xs:py-2 py-4"
              style={{ fontFamily: "Lost Island" }}
            >
              Biaya
            </h1>
            <p className="text-xs text-center sm:text-xl md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl xs:py-2 py-4">
              Rp.60.000
            </p>
          </div>
          <div className="space-y-4">
            <h1
              className="text-xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-8 sm:px-11 xs:py-2 py-4"
              style={{ fontFamily: "Lost Island" }}
            >
              Pelaksanaan
            </h1>
            <p className="text-xs text-center sm:text-xl md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl lg:px-8 xs:py-2 py-4">
              6, 7, 8 <br /> September 2024
            </p>
          </div>
        </div>
      </div>
      {/*pemateri*/}
      <div className="xs:-translate-y-[27rem] sm:-translate-y-[47rem]">
        <div className="translate-y-[35rem] sm:translate-y-[50rem] flex flex-col justify-center z-10 mx-auto">
          <h1
            className="text-xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#523D31] rounded-xl w-fit px-16 py-4 mx-auto"
            style={{ fontFamily: "Lost Island" }}
          >
            Pemateri
          </h1>
        </div>
        <img
          src={Pemateri}
          className="items-center w-[382px] md:w-[765px] h-[344px] md:h-[687px] translate-y-[33rem] sm:translate-y-[50rem]"
        />
        <h1
          className="text-xs sm:text-xl md:text-base lg:text-2xl text-center text-white bg-[#7F5238] rounded-xl w-fit px-10 py-2 translate-y-[28rem] sm:translate-y-[45rem] z-20 relative mx-auto"
          style={{ fontFamily: "Lost Island" }}
        >
          Pemateri
        </h1>
        <h1 className="text-lg sm:text-xl md:text-base lg:text-3xl font-semibold text-center text-[#7F5238] bg-[#F5F2CB] rounded-xl w-fit px-8 sm:px-16 py-4 translate-y-[27.5rem] sm:translate-y-[44rem] mx-auto">
          Danny Dwi Cahyono
        </h1>
      </div>
      {/* timeline */}
      <div className="xs:translate-y-[13rem] sm:translate-y-[7rem] ">
        <h1
          className="relative xs:flex xs:flex-col z-10 xs:mb-12 sm:mb-12 text-xs sm:text-xl md:text-base lg:text-2xl text-white text-center bg-[#523D31] rounded-xl xs:px-8 sm:px-20 xs:py-2 py-4"
          style={{ fontFamily: "Lost Island" }}
        >
          Timeline
        </h1>
        <div className="mx-auto relative bg-[#D7996C] w-[8.5px] sm:w-[17px] xs:h-[303px] sm:h-[650px] xs:space-y-20 sm:space-y-44">
          {/* timeline 1 */}
          <div className="relative bottom-1 -mx-1 sm:-mx-2 bg-[#7F5238] w-[16px] h-[16px] sm:w-[32px] sm:h-[32px] rounded-full">
            <div className="absolute xs:left-8 xs:top-0 sm:left-16 sm:top-0 text-center">
              <h1
                className="text-4xs sm:text-lg md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-[1.1rem] xs:py-2 sm:px-7 sm:py-2 md:px-8 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                Pendaftaran & Pembayaran
              </h1>
            </div>
            <div className="absolute xs:left-8 xs:top-10 sm:left-16 sm:top-20 md:top-[4.5rem] lg:left-16 lg:top-24 text-center">
              <h1
                className="text-4xs sm:text-lg md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl xs:px-7 xs:py-2 sm:px-14 sm:py-2 lg:px-16 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                20 Agustus – <br />3 September 2024
              </h1>
            </div>
          </div>
          {/* timeline 2 */}
          <div className="relative -mx-1 sm:-mx-2 bg-[#7F5238] w-[16px] h-[16px] sm:w-[32px] sm:h-[32px] rounded-full">
            <div className="absolute xs:right-8 xs:top-0 sm:right-16 sm:top-0 text-center">
              <h1
                className="text-4xs sm:text-lg md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-4 xs:py-2 sm:px-6 sm:py-2 md:px-[1.85rem] text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                Pelaksanaan Day 1
              </h1>
            </div>
            <div className="absolute xs:right-8 xs:top-9 sm:right-16 sm:top-14 md:top-[3rem] lg:right-16 lg:top-16 text-center">
              <h1
                className="text-4xs sm:text-lg md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl xs:px-7 xs:py-2 sm:px-[3.35rem] sm:py-2 lg:px-[4rem] text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                6 September 2024
              </h1>
            </div>
          </div>
          {/* timeline 3 */}
          <div className="relative bottom-1 -mx-1 sm:-mx-2 bg-[#7F5238] w-[16px] h-[16px] sm:w-[32px] sm:h-[32px] rounded-full">
            <div className="absolute xs:left-8 xs:top-0 sm:left-16 sm:top-0 text-center">
              <h1
                className="text-4xs sm:text-lg md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-[1.1rem] xs:py-2 sm:px-7 sm:py-2 md:px-8 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                Pelaksanaan Day 2
              </h1>
            </div>
            <div className="absolute xs:left-8 xs:top-10 sm:left-16 sm:top-20 md:top-[4.5rem] lg:left-16 lg:top-24 text-center">
              <h1
                className="text-4xs sm:text-lg md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl xs:px-7 xs:py-2 sm:px-14 sm:py-2 lg:px-16 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                7 September 2024
              </h1>
            </div>
          </div>
          {/* timeline 4 */}
          <div className="relative -mx-1 sm:-mx-2 bg-[#7F5238] w-[16px] h-[16px] sm:w-[32px] sm:h-[32px] rounded-full">
            <div className="absolute xs:right-8 xs:top-0 sm:right-16 sm:top-0 text-center">
              <h1
                className="text-4xs sm:text-lg md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-4 xs:py-2 sm:px-6 sm:py-2 md:px-[1.85rem] text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                Pelaksanaan Day 3
              </h1>
            </div>
            <div className="absolute xs:right-8 xs:top-9 sm:right-16 sm:top-14 md:top-[3rem] lg:right-16 lg:top-16 text-center">
              <h1
                className="text-4xs sm:text-lg md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl xs:px-7 xs:py-2 sm:px-[3.35rem] sm:py-2 lg:px-[4rem] text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                8 September 2024
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* silabus materi */}
      <div className="xs:translate-y-[29rem] sm:translate-y-[29rem]">
        <div className="mx-auto pt-20">
          <div className="w-[160px] lg:w-[240px] xl:w-[270px]  text-center mx-auto">
            <h1
              className=" md:text-xl lg:text-2xl text-white bg-[#523D31] rounded-xl  py-4 "
              style={{ fontFamily: "Lost Island" }}
            >
              Silabus Materi
            </h1>
          </div>
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-1 text-center 2xl:w-[1200px] 2xl:mx-auto gap-x-8">
            <div className="w-[250px] sm:w-[320px] md:w-[230px] lg:w-[280px] xl:w-[320px] mx-auto md:order-2">
              <h1
                className="text-base md:text-xl lg:text-2xl text-white bg-[#7F5238] rounded-xl py-2 px-1"
                style={{ fontFamily: "Lost Island" }}
              >
                Day 1
              </h1>
              <div className="mt-2 w-full bg-[#F5F2CB] rounded-xl p-3">
                <p className="xs:text-xs md:text-base xl:text-2xl text-justify pt-1">
                  ❖ Pengenalan Basic JavaScript dan Tailwind CSS
                </p>
                <p className="xs:text-xs md:text-base xl:text-2xl text-justify pt-1">
                  ❖ Kegiatan Dasar-dasar JavaScript, penggunaan Tailwind CSS,
                  pengenalan database (Supabase / MySQL/ Firebase), instalasi
                  dan setup tools.
                </p>
              </div>
            </div>
            <div className="w-[250px] sm:w-[320px] md:w-[230px] lg:w-[280px] xl:w-[320px] pt-4 mx-auto md:order-1">
              <h1
                className="text-base md:text-xl lg:text-2xl text-white bg-[#7F5238] rounded-xl py-2 px-1"
                style={{ fontFamily: "Lost Island" }}
              >
                Day 2
              </h1>
              <div className="mt-2 w-full bg-[#F5F2CB] rounded-xl p-3">
                <p className="xs:text-xs md:text-base xl:text-2xl text-justify pt-1">
                  ❖Backend Development dengan Express JS
                </p>
                <p className="xs:text-xs md:text-base xl:text-2xl text-justify pt-1">
                  ❖ Kegiatan: Pengenalan Express JS, implementasi autentikasi,
                  setup dan integrasi database.
                </p>
              </div>
            </div>
            <div className="w-[250px] sm:w-[320px] md:w-[230px] lg:w-[280px] xl:w-[320px] pt-4 mx-auto md:order-2">
              <h1
                className="text-base md:text-xl lg:text-2xl text-white bg-[#7F5238] rounded-xl py-2 px-1"
                style={{ fontFamily: "Lost Island" }}
              >
                Day 3
              </h1>
              <div className="mt-2 w-full bg-[#F5F2CB] rounded-xl p-3">
                <p className="xs:text-xs md:text-base xl:text-2xl text-justify pt-1">
                  ❖Frontend Development dengan React JS dan Tailwind CSS
                </p>
                <p className="xs:text-xs md:text-base xl:text-2xl text-justify pt-1">
                  ❖Kegiatan: Pengenalan React JS, pembuatan tampilan web,
                  integrasi frontend dengan backend dan database.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*contact person*/}
      <div className="xs:translate-y-[29rem] sm:translate-y-[35rem]">
        <div className="w-full md:w-fit h-full px-6 md:px-[8.2rem] pt-20 pb-20 md:pb-36 relative  mx-auto">
          <div className="w-[160px] lg:w-[240px] xl:w-[270px] text-center mx-auto">
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
                  {firstno ? firstno : "0858-5672-0449"} (
                  {firstcp ? firstcp : "Amalia"})
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
                  {secondno ? secondno : "0858-1132-6241"} (
                  {secondcp ? secondcp : "Sarah Nabila"})
                </h1>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* daftar, poster & guidebook */}
      <div className="xs:translate-y-[30rem] sm:translate-y-[45rem]">
        <div className="mx-auto flex flex-col lg:flex-row justify-center items-center px-4 py-6 bg-white border-4 border-white w-[90%] max-w-[1240px] h-auto lg:h-[643px] rounded-xl bg-opacity-40">
          <div className="place-content-center mx-20 lg:mb-0">
            <img
              src={Maskot}
              className="xs:w-[150px] sm:w-[300px] xs:h-[150px] sm:h-[300px] animate-wiggle"
            />
          </div>
          <div
            className="text-xl sm:text-2xl lg:text-7xl text-white text-center lg:text-left lg:w-fit"
            style={{ fontFamily: "Lost Island" }}
          >
            Gimana Tertarik? <br /> Yuk daftar!
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 justify-center lg:justify-start mt-10 ">
              <button
                onClick={LinkPendaftaran}
                className="transition ease-in-out whitespace-nowrap hover:-translate-y-1 hover:scale-110 duration-300 text-xs sm:text-sm md:text-base lg:text-xl xl:text-3xl text-white rounded-xl border-[#A14F3D] bg-[#A14F3D] px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-5 flex items-center justify-center hover:bg-[#73372c] hover:border-[#73372c]"
              >
                Daftar Sekarang
              </button>
              <button
                onClick={() => setopenPoster(true)}
                className="transition ease-in-out whitespace-nowrap hover:-translate-y-1 hover:scale-110 duration-300 text-xs sm:text-sm md:text-base lg:text-xl xl:text-3xl text-white rounded-xl border-[#486D24] bg-[#486D24] px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-5 flex items-center justify-center hover:bg-[#293f16] hover:border-[#293f16]"
              >
                Poster
              </button>
              <PosterModal
                openPoster={openPoster}
                setopenPoster={setopenPoster}
              />
              <AnimatePresence>
                {openPoster && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setopenPoster(false)}
                    className="bg-black/20 backdrop-blur fixed inset-0 z-50 grid rounded-lg place-items-center cursor-pointer xs:-top-4 xs:right-4 xs:left-4 sm:right-6 sm:-left-2 lg:right-11 lg:left-4"
                  >
                    <button
                      onClick={() => setopenPoster(false)}
                      className="absolute xs:top-5 xs:right-4 sm:top-5 sm:right-4 text-white text-2xl hover:text-gray-300 focus:outline-none"
                    >
                      <FaTimes />
                    </button>
                    <motion.div
                      initial={{ scale: 0, rotate: "12.5deg" }}
                      animate={{ scale: 1, rotate: "0deg" }}
                      exit={{ scale: 0, rotate: "0deg" }}
                      onClick={(e) => e.stopPropagation()}
                      className="bg-[#F2C48D] text-white p-2 rounded-lg shadow-xl cursor-default relative overflow-hidden"
                    >
                      <img
                        src={Poster}
                        className="xs:w-[200px] sm:w-[340px] lg:w-[400px]"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullstackWebdev;
