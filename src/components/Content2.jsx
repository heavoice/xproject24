import React from "react";
import tech1 from "../assets/img/tech1.png";
import tech2 from "../assets/img/tech2.png";
import tech3 from "../assets/img/tech3.png";
import teaser from "../assets/video/teaser.mp4";
import ukwu from "../assets/img/ukwu.png";
import en from "../assets/img/en.png";
import mp1 from "../assets/img/image 2.png";
import mp2 from "../assets/img/image 3.png";
import mp3 from "../assets/img/image 4.png";
import mp4 from "../assets/img/image 5.png";
import mp5 from "../assets/img/image 6.png";
import mp6 from "../assets/img/image 7.png";
import mp7 from "../assets/img/image 8.png";
import mp8 from "../assets/img/image 9.png";
import mp9 from "../assets/img/image 10.png";
import mp10 from "../assets/img/image 11.png";
import mp11 from "../assets/img/image 12.png";
import mp12 from "../assets/img/image 13.png";

const Content2 = () => {
  return (
    <div className="bg-image2 w-full h-[685vh] max-[440px]:h-[310rem] max-[400px]:h-[290rem] max-[360px]:h-[290rem] md:h-[270rem] xl:h-[300rem] absolute text-[#D7996C] top-[108rem] sm:top-[110rem] md:top-[115rem] lg:top-[120rem] xl:top-[130rem] max-[440px]:mt-28 max-[400px]:mt-0 ">
      {/* Our Event */}
      <div className="  w-full max-w-screen-xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <p
          className="text-xs sm:text-xl md:text-2xl lg:text-2xl flex text-white bg-[#D7996C] rounded-xl px-6 sm:px-12 py-3 z-10"
          style={{ fontFamily: "Lost Island" }}
        >
          Our Event
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center px-4 py-6 bg-white border-4 border-white w-full rounded-xl bg-opacity-40 -translate-y-5 sm:-translate-y-6 md:-translate-y-8 lg:-translate-y-8 xl:-translate-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-12 w-full max-w-6xl">
            <div className="flex flex-col items-center md:items-start pl-2 md:pl-12 lg:pl-16 xl:pl-20 pt-2 sm:pt-10 md:pt-16 lg:pt-24 xl:pt-28">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl text-red-800 mb-3"
                style={{ fontFamily: "Lost Island" }}
              >
                Tech Genius
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-[#9E7150] text-justify pl-2">
                Tech Genius adalah kegiatan awal di X-Project 9.0 yang dirancang
                untuk membangun dan meningkatkan pemahaman serta keterampilan
                teknologi di kalangan peserta dengan berbagai kegiatan
                pelatihan.
              </p>
            </div>
            <img
              className="w-full h-auto object-cover items-center md:items-start"
              src={tech1}
              alt="Tech Genius"
            />

            <img
              className="w-full h-auto object-cover"
              src={tech2}
              alt="Informatics Championship"
            />
            <div className="flex flex-col items-center md:items-start pr-2 md:pr-12 lg:pr-16 xl:pr-20 pt-2 md:pt-16 lg:pt-24 xl:pt-28">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl text-red-800 mb-3"
                style={{ fontFamily: "Lost Island" }}
              >
                Informatics Championship
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-[#9E7150] text-justify">
                Informatic Championship (IC) adalah sebuah ajang perlombaan atau
                kompetisi yang bertujuan untuk mengasah kemampuan dan
                keterampilan peserta di bidang teknologi, sehingga dapat
                menciptakan berbagai inovasi baru di masa yang akan datang, yang
                dikemas dalam berbagai jenis perlombaan.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start pl-2 md:pl-12 lg:pl-16 xl:pl-20 pt-2 md:pt-16 lg:pt-24 xl:pt-28">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl text-red-800 mb-3"
                style={{ fontFamily: "Lost Island" }}
              >
                Tech Genius
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-[#9E7150] text-justify pl-2">
                Tech Genius adalah kegiatan awal di X-Project 9.0 yang dirancang
                untuk membangun dan meningkatkan pemahaman serta keterampilan
                teknologi di kalangan peserta dengan berbagai kegiatan
                pelatihan.
              </p>
            </div>
            <img
              className="w-full h-auto object-cover"
              src={tech3}
              alt="Tech Genius"
            />
          </div>
        </div>
      </div>
      {/*teaser*/}
      <div className="w-full lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col items-center translate-y-48 px-4 sm:px-6 lg:px-8">
        <p
          className="text-xl md:text-2xl lg:text-2xl flex text-white bg-[#D7996C] rounded-xl px-8 sm:px-12 lg:px-16 py-3 z-10"
          style={{ fontFamily: "Lost Island" }}
        >
          Teaser
        </p>
        <div className="relative w-full pt-[56.25%] translate-y-16">
          <video
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            controls
            autoPlay
            loop
            muted
          >
            <source src={teaser} type="video/mp4" />
          </video>
        </div>
      </div>
      {/*sponsorship*/}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center translate-y-[30rem] px-4 sm:px-6 lg:px-8">
        <p
          className="text-2xl flex text-white bg-[#D7996C] rounded-xl px-16 py-3 z-10"
          style={{ fontFamily: "Lost Island" }}
        >
          Sponsorship
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-2 justify-items-center items-center sm:px-16 md:px-32 lg:px-64 xl:px-80 bg-white border-4 border-white w-full rounded-xl bg-opacity-40 -translate-y-6 py-8 ">
          <img
            src={ukwu}
            width={200}
            height={200}
            className="translate-x-2 max-[440px]:w-36"
          />
          <img src={en} width={180} height={180} className="max-[440px]:w-32" />
        </div>
      </div>

      {/*media partner*/}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center translate-y-[35rem] px-4 sm:px-6 lg:px-8">
        <p
          className="text-2xl flex text-white bg-[#D7996C] rounded-xl px-16 py-3 z-10"
          style={{ fontFamily: "Lost Island" }}
        >
          Media Partner
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center items-center gap-6 bg-white border-4 border-white w-full rounded-xl bg-opacity-40 -translate-y-6 py-8">
          <img src={mp1} width={200} height={200} />
          <img src={mp2} width={200} height={200} />
          <img src={mp3} width={200} height={200} />
          <img src={mp4} width={200} height={200} />
          <img src={mp5} width={200} height={200} />
          <img src={mp6} width={200} height={200} />
          <img src={mp7} width={200} height={200} />
          <img src={mp8} width={200} height={200} />
          <img src={mp9} width={200} height={200} />
          <img src={mp10} width={200} height={200} />
          <img src={mp11} width={200} height={200} />
          <img src={mp12} width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Content2;
