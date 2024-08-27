import React, { useState } from "react";
import Batu1 from "../assets/img/Batu (1).png";
import Batu2 from "../assets/img/Batu (2).png";
import Pemateri from "../assets/img/pemateri2.png";
import Maskot from "../assets/img/maskot.png";
import Poster from "../assets/img/PamfletBootcamp.png";
import { FaWhatsapp } from "react-icons/fa";

function UiuxContent() {
  const [openPoster, setOpenPoster] = useState(false);

  const handleClick = () => {
    window.location.href = " http://unesa.me/PendaftaranWebinarXproject2024";
  };

  const onClick = () => {
    setOpenPoster(true);
  };
  const handleClose = () => {
    setOpenPoster(false);
  };

  return (
    <div className="bg-image5 w-full h-[705vh] sm:h-[840vh] flex flex-col items-center justify-center overflow-hidden max-[400px]:h-[705vh] max-[440px]:h-[625vh]">
      {/* techpreneurship */}
      <div className="flex flex-col text-center -mt-[90rem] sm:-mt-[90rem] md:-mt-[115rem] lg:-mt-[105rem] xl:-mt-[80rem] max-[440px]:-mt-[86rem] max-[400px]:-mt-[90rem] ">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#0E5D84] whitespace-nowrap py-2"
          style={{ fontFamily: "Lost Island" }}
        >
          TECH ENTERPRENEURSHIP
        </h1>
        <h2
          className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-[#E7CF7F] py-2"
          style={{ fontFamily: "Lost Island" }}
        >
          WEBINAR
        </h2>
        <div className="py-2 sm:py-12 mx-auto">
          <button
            onClick={handleClick}
            className="transition ease-in-out whitespace-nowrap hover:-translate-y-1 hover:scale-110 duration-300 text-xs sm:text-xl md:text-4xl text-white rounded-xl border-green-600 bg-green-600 border-2 px-2 sm:px-8 md:px-12 py-1 sm:py-3 md:py-5 flex items-center hover:bg-green-900 hover:border-green-900"
            style={{ fontFamily: "Lost Island" }}
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
      {/* Overview */}
      <div className="translate-y-[17rem] sm:translate-y-[28rem] flex flex-col justify-center z-10">
        <h1
          className="text-xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#523D31] rounded-xl px-16 py-4"
          style={{ fontFamily: "Lost Island" }}
        >
          Overview
        </h1>
      </div>
      <div className="w-[70%] xl:w-[1096px] h-[310px] sm:h-[514px] bg-[#F5F2CB] rounded-xl translate-y-[15.5rem] sm:translate-y-[26rem] p-5 pt-7 md:p-9 sm:p-16 lg:p-20">
        <img
          src={Batu2}
          className="absolute -top-16 -left-11 sm:-top-16 sm:-left-12 md:-top-20 md:-left-14 lg:-top-28 lg:-left-20 xl:-top-32 xl:-left-24 w-[120px] sm:w-[120px] md:w-[150px] lg:w-[200px] xl:w-[240px]"
        />
        <img
          src={Batu1}
          className="absolute -bottom-16 -right-11 sm:-bottom-16 sm:-right-12 md:-bottom-20 md:-right-14 lg:-bottom-28 lg:-right-20 xl:-bottom-32 xl:-right-24 w-[120px] sm:w-[120px] md:w-[150px] lg:w-[200px] xl:w-[240px]"
        />
        <h1
          className="text-2xl sm:text-3xl lg:text-5xl text-[#0A5E8A]"
          style={{ fontFamily: "Lost Island" }}
        >
          About <span className="text-[#D25F5F]">Webinar</span>
        </h1>
        <p className="text-xs sm:text-sm lg:text-lg xl:text-2xl text-justify pt-1 lg:pt-4 ">
          Webinar Tech Enterpreneurship adalah sebuah webinar yang dilakukan
          secara online yang fokus pada eksplorasi dan pemahaman tentang
          perkembangan teknologi terkini dalam konteks bisnis. Webinar ini
          dirancang dengan tujuan memberikan wawasan terhadap peserta mengenai
          teknologi terbaru yang relevan dengan dunia bisnis serta strategi
          efektif untuk mengintegrasikan teknologi ke dalam operasional bisnis
          dengan mengidentifikasi peluang dan tantangan terkait teknologi
          inovasi bisnis.
        </p>
      </div>
      {/* detail */}
      <div className="translate-y-[25rem] sm:translate-y-[50rem] flex flex-col justify-center z-10">
        <h1
          className="text-xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#523D31] rounded-xl px-16 py-4"
          style={{ fontFamily: "Lost Island" }}
        >
          Detail
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 translate-y-[25rem] sm:translate-y-[50rem] flex-col justify-center z-10 pt-10 gap-12">
        <div>
          <h1
            className="text-xs sm:text-xl md:text-base lg:text-2xl text-center text-white bg-[#7F5238] rounded-xl px-16 py-4"
            style={{ fontFamily: "Lost Island" }}
          >
            Pelaksanaan
          </h1>
          <p className="text-xs sm:text-xl md:text-base lg:text-2xl text-center text-[#7F5238] bg-[#F5F2CB] rounded-xl px-8 sm:px-16 py-4 w-full overflow-x-auto translate-y-4">
            Online <br />
            (Via Zoom)
          </p>
        </div>
        <div>
          <h1
            className="text-xs sm:text-xl md:text-base lg:text-2xl text-center text-white bg-[#7F5238] rounded-xl px-16 py-4"
            style={{ fontFamily: "Lost Island" }}
          >
            Biaya
          </h1>
          <p className="text-xs sm:text-xl md:text-base lg:text-2xl text-center text-[#7F5238] bg-[#F5F2CB] rounded-xl px-8 sm:px-16 py-4 w-full overflow-x-auto translate-y-4">
            Rp. 5.000 <br /> <span className="text-[#F5F2CB]">baris</span>
          </p>
        </div>
        <div>
          <h1
            className="text-xs sm:text-xl md:text-base lg:text-2xl text-center text-white bg-[#7F5238] rounded-xl px-16 py-4"
            style={{ fontFamily: "Lost Island" }}
          >
            Waktu
          </h1>
          <p className="text-xs sm:text-xl md:text-base lg:text-2xl text-center text-[#7F5238] bg-[#F5F2CB] rounded-xl px-8 sm:px-16 py-4 w-full overflow-x-auto translate-y-4">
            14 September 2024 <br /> 09.00 – 12.00
          </p>
        </div>
      </div>
      {/*pemateri*/}
      <div className="translate-y-[38rem] sm:translate-y-[53rem] flex flex-col justify-center z-10">
        <h1
          className="text-xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#523D31] rounded-xl px-16 py-4"
          style={{ fontFamily: "Lost Island" }}
        >
          Pemateri
        </h1>
      </div>
      <img
        src={Pemateri}
        className="items-center w-[382px] sm:w-[1481px] h-[382px] md:h-[721px] xl:h-[1179px] translate-y-[33rem] sm:translate-y-[50rem]"
      />
      <h1
        className="text-xs sm:text-xl md:text-base lg:text-2xl text-center text-white bg-[#7F5238] rounded-xl px-10 py-2 translate-y-[28rem] sm:translate-y-[45rem] z-10"
        style={{ fontFamily: "Lost Island" }}
      >
        Pemateri
      </h1>
      <p className="text-lg sm:text-xl md:text-base lg:text-3xl font-semibold text-center text-[#7F5238] bg-[#F5F2CB] rounded-xl px-8 sm:px-16 py-4 translate-y-[27.5rem] sm:translate-y-[44rem]">
        Thabed Tholib Baladraf
      </p>
      {/*timeline*/}
      <div className="translate-y-[35rem] sm:translate-y-[50rem] flex flex-col justify-center z-10">
        <h1
          className="text-xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#523D31] rounded-xl px-16 py-4"
          style={{ fontFamily: "Lost Island" }}
        >
          Timeline
        </h1>
      </div>
      <div className="bg-[#D7996C] w-[8.5px] sm:w-[17px] h-[203px] sm:h-[283px] translate-y-[40rem] sm:translate-y-[55rem]">
        <div className="bg-[#7F5238] w-[32px] sm:w-[43.17px] h-[32px] sm:h-[43.17px] rounded-full translate-y-[11rem] sm:translate-y-[15.5rem] -translate-x-[12px]"></div>
        <div className="bg-[#7F5238] w-[32px] sm:w-[43.17px] h-[32px] sm:h-[43.17px] rounded-full -translate-y-[2rem] sm:-translate-y-[3.5rem] -translate-x-[12px]"></div>
      </div>
      <div className="translate-y-[24rem] md:translate-y-[44.5rem] sm:translate-y-[45.5rem] lg:translate-y-[47.5rem]">
        <h1
          className="text-xs sm:text-sm md:text-base lg:text-2xl text-center text-white bg-[#7F5238] rounded-xl px-8 sm:px-9 py-4 translate-y-[9.5rem] sm:translate-y-[3rem] lg:-translate-y-[0.5rem] -translate-x-[8rem] sm:-translate-x-[11rem] lg:-translate-x-[16rem]"
          style={{ fontFamily: "Lost Island" }}
        >
          Pendaftaran & Pembayaran
        </h1>
        <h1 className="text-sm sm:text-sm md:text-base lg:text-2xl font-semibold text-center text-[#7F5238] bg-[#F5F2CB] rounded-xl px-8 sm:px-12 py-4 translate-y-[10rem] sm:translate-y-[3.5rem] lg:-translate-y-[0rem] -translate-x-[8rem] sm:-translate-x-[11rem] lg:-translate-x-[16rem]">
          27 Agustus-12 September 2024
        </h1>
      </div>
      <div className="translate-y-[11.5rem] md:translate-y-[15rem] sm:translate-y-[15.5rem] lg:translate-y-[18rem]">
        <h1
          className="text-xs sm:text-sm md:text-base lg:text-2xl text-center text-white bg-[#7F5238] rounded-xl px-8 sm:px-9 py-4 translate-y-[9.5rem] sm:translate-y-[14.5rem] lg:translate-y-[10.5rem] translate-x-[8rem] sm:translate-x-[11.5rem] lg:translate-x-[17.5rem]"
          style={{ fontFamily: "Lost Island" }}
        >
          Pelaksanaan Webinar
        </h1>
        <h1 className="text-sm sm:text-sm md:text-base lg:text-2xl font-semibold text-center text-[#7F5238] bg-[#F5F2CB] rounded-xl px-8 sm:px-12 py-4 translate-y-[10rem] sm:translate-y-[15rem] lg:translate-y-[11rem] translate-x-[8rem] sm:translate-x-[11.5rem] lg:translate-x-[17.5rem]">
          7 September 2024
        </h1>
      </div>
      {/*contact person*/}
      <h1
        className="text-xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#523D31] rounded-xl px-16 py-4 translate-y-[58rem]"
        style={{ fontFamily: "Lost Island" }}
      >
        Contact Person
      </h1>
      <div className="w-fit h-fit bg-[#F5F2CB] text-center rounded-xl translate-y-[59.5rem] sm:translate-y-[61rem] p-9 sm:p-16 lg:p-20 space-y-4">
        <div className="flex items-center justify-center text-2xl sm:text-3xl lg:text-5xl text-[#523D31]">
          <FaWhatsapp className="mr-2 sm:mr-4" />
          <h1 style={{ fontFamily: "Lost Island" }}>
            0858-1132-6241 (Hilmi Alwan)
          </h1>
        </div>
        <div className="flex items-center justify-center text-2xl sm:text-3xl lg:text-5xl text-[#523D31] -translate-x-[0.8rem] sm:-translate-x-[1.0rem] md:-translate-x-[1.0rem] lg:-translate-x-[1.6rem]">
          <FaWhatsapp className="mr-2 sm:mr-4" />
          <h1 style={{ fontFamily: "Lost Island" }}>0813-3848-4126 (James)</h1>
        </div>
      </div>
      {/*daftar skrg & poster*/}
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 py-6 bg-white border-4 border-white w-[90%] max-w-[1240px] h-auto lg:h-[643px] rounded-xl bg-opacity-40 translate-y-[70rem]">
        <div className="place-content-center mx-20 lg:mb-0">
          <img
            src={Maskot}
            className="w-[150px] sm:w-[300px] h-[200px] sm:h-[400px] animate-wiggle"
          />
        </div>
        <div
          className="text-xl sm:text-2xl lg:text-7xl text-white text-center lg:text-left lg:w-1/2"
          style={{ fontFamily: "Lost Island" }}
        >
          Gimana Tertarik? <br /> Yuk daftar!
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 justify-center lg:justify-start mt-10">
            <a className="transition ease-in-out whitespace-nowrap hover:-translate-y-1 hover:scale-110 duration-300 text-xs sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-white rounded-xl border-[#A14F3D] bg-[#A14F3D] px-4 py-2 sm:px-8 sm:py-3 md:px-10 md:py-5 flex items-center justify-center hover:bg-[#73372c] hover:border-[#73372c]">
              Daftar Sekarang
            </a>
            <button
              className="transition ease-in-out whitespace-nowrap hover:-translate-y-1 hover:scale-110 duration-300 text-xs sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-white rounded-xl border-[#486D24] bg-[#486D24] px-4 py-2 sm:px-8 sm:py-3 md:px-10 md:py-5 flex items-center justify-center hover:bg-[#293f16] hover:border-[#293f16]"
              onClick={onClick}
            >
              Poster
            </button>
          </div>
        </div>
      </div>
      {openPoster && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={handleClose}
              className="absolute top-0 right-2 md:top-0 md:-right-9 text-white md:text-5xl text-7xl font-bold hover:text-gray-400"
            >
              &times;
            </button>
            <img
              src={Poster}
              alt="Popup Image"
              className=" md:max-w-[30rem] max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default UiuxContent;
