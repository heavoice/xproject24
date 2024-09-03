import React, { useState } from "react";

import bg1 from "../../assets/img/ic/bg1.png";
import "../../assets/css/welcometo.css";

function Bootcamp() {
  const [openPoster, setOpenPoster] = useState(false);

  const handleClick = () => {
    window.location.href = "unesa.me/PendaftaranBootcampXproject2024";
  };

  const onClick = () => {
    setOpenPoster(true);
  };
  const handleClose = () => {
    setOpenPoster(false);
  };

  return (
    <div
      className="w-[100%]  h-screen  lg:h-[900px] xl:h-[60rem] 2xl:h-[100rem] bg-cover bg-center bg-no-repeat flex justify-center"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="text-center ">
        <h1
          className="text-5xl md:text-8xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-bold text-[#0E5D84]  text-[#E7CF7F]  py-2 pt-40 md:pt-60  lg:pt-40 2xl:pt-72  ui-ux"
          style={{
            fontFamily: "Lost Island",
          }}
        >
          UI/UX DESIGN
        </h1>
        <h2
          className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-8xl  font-bold text-[#0E5D84]  welcome-to py-2"
          style={{ fontFamily: "Lost Island" }}
        >
          Competiton
        </h2>

        <button
          onClick={handleClick}
          className="transition ease-in-out  mt-2 whitespace-nowrap hover:-translate-y-1 hover:scale-110 duration-300 text-base  md:text-4xl lg:text-xl xl:text-3xl text-white rounded-xl border-green-600 bg-green-600 border-2 px-2 sm:px-8 md:px-12 py-1 sm:py-3 md:py-5 flex items-center hover:bg-green-900 hover:border-green-900 mx-auto"
          style={{ fontFamily: "Lost Island" }}
        >
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
}

export default Bootcamp;
