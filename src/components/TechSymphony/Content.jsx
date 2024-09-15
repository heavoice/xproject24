import React, { useState } from "react";
import Batu1 from "../../assets/img/Batu (1).png";
import Batu2 from "../../assets/img/Batu (2).png";
import goldTrophy from "../../assets/img/tropy-emas.png";
import silverTrophy from "../../assets/img/tropy-perak.png";
import bronzeTrophy from "../../assets/img/tropy-coklat.png";
import Maskot from "../../assets/img/maskot.png";
import Poster from "../../assets/img/PamfletWebinarNew.jpg";
import { whatsapp } from "../../assets";

function Content({
  firstlink,
  firstcp,
  firstno,
  secondlink,
  secondcp,
  secondno,
}) {
  const [openPoster, setOpenPoster] = useState(false);

  const onClick = () => {
    setOpenPoster(true);
  };
  const handleClose = () => {
    setOpenPoster(false);
  };
  return (
    <div className="bg-image5 w-full xs:h-[355rem] sm:h-[450rem] lg:h-[205rem] flex flex-col items-center justify-center z-10">
      <div className="relative xs:-translate-y-[144rem] sm:-translate-y-[44rem] md:-translate-y-[63rem] xs:space-y-4">
        {/* tech symphony */}
        <h1
          className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#E7CF7F] flex flex-col text-center sm:pb-5"
          style={{
            color: "#0E5D84",
            fontFamily: "Lost Island",
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
          "Unlock The Experience"
        </h1>
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
    8px -4px 8px #0A5E8A, 
    8px 4px 8px #0A5E8A, 
    -4px -2px 0 #0A5E8A, 
    -4px 2px 0 #0A5E8A, 
    4px -2px 0 #0A5E8A, 
    4px 2px 0 #0A5E8A, 
    -2px -4px 0 #0A5E8A, 
    2px -4px 0 #0A5E8A, 
    -2px 4px 8px #0A5E8A, 
    2px 4px 8px #0A5E8A, 
    8px 0 8px #0A5E8A
  `,
          }}
        >
          Tech Symphony <br />{" "}
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
            2024
          </span>
        </h1>
        <button
          className="mx-auto transition ease-in-out whitespace-nowrap hover:-translate-y-1 hover:scale-110 duration-300 text-xs sm:text-xl md:text-2xl text-white rounded-xl border-green-600 bg-green-600 border-2 px-2 sm:px-8 md:px-9 py-1 sm:py-3 md:py-4 flex items-center hover:bg-green-900 hover:border-green-900"
          style={{ fontFamily: "Lost Island" }}
        >
          Beli Tiket
        </button>
      </div>
      {/* overview */}
      <div className="relative xs:-translate-y-[117rem] sm:-translate-y-[13rem] md:-translate-y-[23rem] z-10">
        <h1
          className="text-xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#523D31] rounded-xl xs:px-4 px-16 xs:py-2 py-4"
          style={{ fontFamily: "Lost Island" }}
        >
          Overview
        </h1>
      </div>
      <h2
        className="xs:text-xl xs:py-5 xs:px-4 sm:py-10 sm:px-5 lg:py-14 lg:px-7  text-justify w-[85%] h-[462px] lg:h-[466px] relative bg-[#F5F2CB] border-[#7F5238] border-b-8 border-r-8 rounded-xl xs:-translate-y-[118rem] sm:-translate-y-[15rem] md:-translate-y-[25rem]"
        style={{ fontFamily: "Lost Island" }}
      >
        <span className="text-[#0A5E8A] sm:text-2xl md:text-3xl lg:text-5xl">
          About
        </span>{" "}
        <span className="text-[#D25F5F] sm:text-2xl md:text-3xl lg:text-5xl">
          Techno Symphony
        </span>
        <p
          className="xs:pt-2 xs:text-xs lg:text-2xl lg:pt-2"
          style={{ fontFamily: "Poppins" }}
        >
          Techno Symphony merupakan acara pamungkas dari rangkaian acara
          X-Project. Techno Symphony sendiri adalah frasa yang menggabungkan dua
          kata yaitu “techno” dan “symphony”. Techno Symphony memadukan unsur
          genre music techno dan simfoni untuk menciptakan pengalaman music yang
          imersif dan menarik. Techno sendiri adalah genre musik elektronik yang
          terkenal dengan ritme yang berirama cepat, penggunaan synthesizer, dan
          pengulangan pola musik yang khas. Sementara itu, simfoni atau orkestra
          adalah jenis ansambel musik yang terdiri dari berbagai instrumen
          musik, seperti biola, cello, terompet, dan lain-lain, yang biasanya
          dipimpin oleh seorang konduktor.
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
    </div>
  );
}

export default Content;
