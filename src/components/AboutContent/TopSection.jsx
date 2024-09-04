import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Pelampung from "../../assets/img/pelampung.png";
import Kerang from "../../assets/img/kerang.png";
import Maskot from "../../assets/img/maskot.png";
import "../../assets/css/lost-island.css";
import "../../assets/css/welcometo.css";
import "../../assets/css/xpro24.css";

function AboutTopSect() {
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
    <div className="bg-image w-full h-[300vh] absolute md:justify-around -top-[15rem] sm:-top-[29rem] bg-cover bg-center bg-no-repeat">
      {/*welcome*/}
      <div className="max-w-[950px] mx-auto px-8 flex flex-col justify-center h-[60%] sm:h-[70%]">
        <h1 className="text-2xl sm:text-6xl font-bold text-[#0E5D84] welcome-to py-2">
          Welcome to
        </h1>
        <h2 className="text-3xl sm:text-8xl font-bold text-[#E7CF7F] xpro-24">
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
          <div className="my-12 sm:my-24 md:my-36 lg:my-72 z-10">
            <h1 className="text-xs sm:text-xl md:text-2xl lg:text-2xl text-white bg-[#D7996C] rounded-xl px-4 sm:px-8 md:px-12 lg:px-20 py-3">
              About Us
            </h1>
          </div>
          <div className="bg-[#F5F2CB] w-[70%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[80%] mx-auto h-auto rounded-xl grid items-center p-6 sm:p-12 md:p-16 lg:p-24 relative -translate-y-16 sm:-translate-y-28 md:-translate-y-44 lg:-translate-y-80 xl:-translate-y-80">
            <img
              src={Pelampung}
              alt="ornamen1"
              className="absolute -top-3 -left-2 xl:-top-12 xl:-left-12 w-[40px] sm:w-[75px] md:w-[100px] lg:w-[125px] xl:w-[150px]"
            />
            <img
              src={Kerang}
              alt="ornamen2"
              className="absolute -bottom-3 -right-2 xl:-bottom-12 xl:-right-12 w-[40px] sm:w-[75px] md:w-[100px] lg:w-[125px] xl:w-[150px]"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
              <div className="relative flex flex-col items-center md:items-start">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#9E7150] text-center md:text-start mb-4">
                  Apa sih <span className="text-red-800">x-project</span> itu?
                </h1>
                <p
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#9E7150] text-justify mx-auto md:mx-0"
                  style={{ fontFamily: "Poppins" }}
                >
                  X-Project merupakan acara tahunan yang diadakan oleh HIMTI
                  UNESA. X-Project 9.0 memiliki serangkaian acara yang meliputi
                  kegiatan pelatihan, pembelajaran pada bidang keahlian
                  tertentu, perlombaan, IT expo, kewirausahaan dan pertunjukan
                  yang bertujuan untuk mengenalkan HIMTI UNESA.
                </p>
              </div>
              <div className="relative flex items-center justify-center">
                <img
                  src={Maskot}
                  className="w-[150px] sm:w-[250px] md:w-[300px] h-auto animate-wiggle"
                  alt="Maskot"
                />
              </div>
            </div>
          </div>
          <div className=" mb-8  z-10">
            <h1 className="text-xs sm:text-xl md:text-2xl lg:text-2xl mb-64 text-white bg-[#D7996C] rounded-xl px-4 sm:px-8 md:px-12 lg:px-20 py-3">
              X-Project 2024 Theme
            </h1>
          </div>
          <div className="bg-[#F5F2CB] w-[70%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[80%] mx-auto h-auto rounded-xl grid items-center p-6 sm:p-12 md:p-16 lg:p-24 relative -translate-y-80 sm:-translate-y-28 md:-translate-y-44 lg:-translate-y-80 xl:-translate-y-80">
          
            <div className="p-4">
              <div className="relative flex flex-col items-center ">
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-red-400 text-center w-1/2 flex  mb-10">
                  "An Early Journey To Actualize An Active, Intelligent, And Innovative Younger generation In The Digitalization Era"
                </h1>
                <p
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#9E7150] text-justify mx-auto md:mx-0"
                  style={{ fontFamily: "Poppins" }}
                >
                  Mengusung tema "An early journey to actualize an active, intelligent, and innovative younger generation in the digitalization era" karena kami ingin membantu atau menjembatani generasi muda agar terus berkembang dan menjadi produktif di era digitalisasi. "Sebuah perjalanan awal" mengimplikasikan bahwa sebuah proses ini baru dimulai, dan bahwa masih ada banyak pekerjaan yang harus dilakukan untuk mencapai tujuan tersebut. "Mengaktualisasi generasi muda" menekankan pentingnya memberdayakan generasi muda untuk mencapai potensi agar dapat menjadi kontributor yang berharga baik untuk dirinya sendiri maupun orang lain. "Yang aktif, cerdas, dan inovatif" menekankan pentingnya keterampilan dan sikap atau sifat yang relevan di era digitalisasi, seperti kemampuan untuk bekerja dalam lingkungan yang cepat berubah, kreativitas, kemampuan untuk berpikir kritis.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* background tambahan */}
      <div className="bg-image2 w-full h-[100%] absolute md:justify-around -z-10"></div>
    </div>
  );
}

export default AboutTopSect;
