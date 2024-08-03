import React from "react";
import tech1 from "../assets/img/tech1.png";
import tech2 from "../assets/img/tech2.png";
import tech3 from "../assets/img/tech3.png";

const About = () => {
  return (
    <div className="bg-image2 w-full h-[700vh] absolute text-[#D7996C] top-[116rem]">
      {/*our event*/}
      <div className="w-fit mx-auto flex flex-col items-center">
        <p
          className="text-2xl flex text-white bg-[#D7996C] rounded-xl px-16 py-3 z-10"
          style={{ fontFamily: "Lost Island" }}
        >
          Our Event
        </p>
        <div className="flex justify-around items-center px-12 bg-[#F5F2CB] w-full sm:w-[1253px] h-[1753px] rounded-xl bg-opacity-40 -translate-y-6">
          <div className="inline-grid grid-cols-2">
            <div className="place-content-evenly">
              <h1
                className="text-red-800 text-5xl mb-3"
                style={{ fontFamily: "Lost Island" }}
              >
                Tech Genius
              </h1>
              <p className="text-[#9E7150] text-xl text-justify">
                Tech Genius adalah kegiatan awal di X-Project 9.0 yang dirancang
                untuk membangun dan meningkatkan pemahaman serta keterampilan
                teknologi di kalangan peserta dengan berbagai kegiatan
                pelatihan.
              </p>
            </div>
            <img className="place-content-end" src={tech1} alt="ourevent1" />
            <div>
              <img className="place-content-end" src={tech2} alt="ourevent1" />
            </div>
            <div className="place-content-evenly">
              <h1
                className="text-red-800 text-5xl mb-3"
                style={{ fontFamily: "Lost Island" }}
              >
                Informatics Championship
              </h1>
              <p className="text-[#9E7150] text-xl text-justify">
                Informatic Championship (IC) adalah sebuah ajang perlombaan atau
                kompetisi yang bertujuan untuk mengasah kemampuan dan
                keterampilan peserta di bidang teknologi, sehingga dapat
                menciptakan berbagai inovasi baru di masa yang akan datang, yang
                dikemas dalam berbagai jenis perlombaan
              </p>
            </div>
            <div className="place-content-evenly">
              <h1
                className="text-red-800 text-5xl mb-3"
                style={{ fontFamily: "Lost Island" }}
              >
                Tech Genius
              </h1>
              <p className="text-[#9E7150] text-xl text-justify">
                Tech Genius adalah kegiatan awal di X-Project 9.0 yang dirancang
                untuk membangun dan meningkatkan pemahaman serta keterampilan
                teknologi di kalangan peserta dengan berbagai kegiatan
                pelatihan.
              </p>
            </div>
            <div>
              <img className="place-content-end" src={tech3} alt="ourevent1" />
            </div>
          </div>
        </div>
      </div>
      {/*teaser*/}
      <div className="w-fit mx-auto flex flex-col items-center translate-y-[12rem]">
        <p
          className="text-2xl flex text-white bg-[#D7996C] rounded-xl px-16 py-3 z-10"
          style={{ fontFamily: "Lost Island" }}
        >
          Teaser
        </p>
        <iframe
          className="aspect-w-16 aspect-h-9 w-[1096px] h-[599px] rounded-xl translate-y-16"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
