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

  const LinkPendaftaran = () => {
    window.location.href = "https://unesa.me/PendaftaranDanPengumpulanBMC";
  };

  const onClick = () => {
    setOpenPoster(true);
  };
  const handleClose = () => {
    setOpenPoster(false);
  };
  return (
    <div className="bg-image5 w-full xs:h-[355rem] sm:h-[450rem] lg:h-[445rem] flex flex-col items-center justify-center z-10">
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
          Business Plan <br />{" "}
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
            Competition
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
          Competition
        </span>
        <p
          className="xs:pt-2 xs:text-xs lg:text-2xl lg:pt-2"
          style={{ fontFamily: "Poppins" }}
        >
          Webinar Tech Enterpreneurship adalah sebuah webinar yang dilakukan
          secara online yang fokus pada eksplorasi dan pemahaman tentang
          perkembangan teknologi terkini dalam konteks bisnis. Webinar ini
          dirancang dengan tujuan memberikan wawasan terhadap peserta mengenai
          teknologi terbaru yang relevan dengan dunia bisnis serta strategi
          efektif untuk mengintegrasikan teknologi ke dalam operasional bisnis
          dengan mengidentifikasi peluang dan tantangan terkait teknologi
          inovasi bisnis.
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
              Free
            </p>
          </div>
          <div className="space-y-4">
            <h1
              className="text-xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-8 sm:px-11 xs:py-2 py-4"
              style={{ fontFamily: "Lost Island" }}
            >
              Kategori
            </h1>
            <p className="text-xs text-center sm:text-xl md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl lg:px-8 xs:py-2 py-4">
              Mahasiswa (Tim)
            </p>
          </div>
          <div className="space-y-4 lg:col-span-3 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="hidden lg:block"></div>
            <div className="space-y-4 lg:col-start-2">
              <h1
                className="text-xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-8 sm:px-11 xs:py-2 py-4"
                style={{ fontFamily: "Lost Island" }}
              >
                Tingkat
              </h1>
              <p className="text-xs text-center sm:text-xl md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl xs:py-2 py-4">
                Nasional
              </p>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
      {/* timeline */}
      <div className="xs:translate-y-[13rem] sm:translate-y-[7rem] ">
        <h1
          className="relative xs:flex xs:flex-col z-10 xs:mb-12 sm:mb-12 text-xs sm:text-xl md:text-base lg:text-2xl text-white text-center bg-[#523D31] rounded-xl xs:px-8 sm:px-20 xs:py-2 py-4"
          style={{ fontFamily: "Lost Island" }}
        >
          Timeline
        </h1>
        <div className="mx-auto relative bg-[#D7996C] w-[8.5px] sm:w-[17px] xs:h-[687px] sm:h-[1484px] xs:space-y-20 sm:space-y-44">
          {/* timeline 1 */}
          <div className="relative bottom-1 -mx-1 sm:-mx-2 bg-[#7F5238] w-[16px] h-[16px] sm:w-[32px] sm:h-[32px] rounded-full">
            <div className="absolute xs:left-8 xs:top-0 sm:left-16 sm:top-0 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-6 xs:py-2 sm:px-6 sm:py-2 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                Pendaftaran & <br /> Pengumpulan BMC
              </h1>
            </div>
            <div className="absolute xs:left-8 xs:top-12 sm:left-16 sm:top-20 lg:left-16 lg:top-24 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl xs:px-7 xs:py-2 sm:px-7 sm:py-2 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                14 September – <br />
                24 Oktober 2024
              </h1>
            </div>
          </div>
          {/* timeline 2 */}
          <div className="relative -mx-1 sm:-mx-2 bg-[#7F5238] w-[16px] h-[16px] sm:w-[32px] sm:h-[32px] rounded-full">
            <div className="absolute xs:right-8 xs:top-0 sm:right-16 sm:top-0 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-6 xs:py-2 sm:px-6 sm:py-2 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                Pengumuman Lolos <br /> Semifinal
              </h1>
            </div>
            <div className="absolute xs:right-8 xs:top-12 sm:right-16 sm:top-20 lg:right-16 lg:top-24 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl xs:px-7 xs:py-2 sm:px-7 sm:py-2 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                31 Oktober 2024
              </h1>
            </div>
          </div>
          {/* timeline 3 */}
          <div className="relative -mx-1 sm:-mx-2 bg-[#7F5238] w-[16px] h-[16px] sm:w-[32px] sm:h-[32px] rounded-full">
            <div className="absolute xs:left-8 xs:top-0 sm:left-16 sm:top-0 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-4 xs:py-2 sm:px-6 sm:py-2 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                Pengumpulan Proposal <br /> Gelombang 1
              </h1>
            </div>
            <div className="absolute xs:left-8 xs:top-12 sm:left-16 sm:top-20 lg:left-16 lg:top-24 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl xs:px-5 xs:py-2 sm:px-7 sm:py-2 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                1 – 9 November 2024
              </h1>
            </div>
          </div>
          {/* timeline 4 */}
          <div className="relative -mx-1 sm:-mx-2 bg-[#7F5238] w-[16px] h-[16px] sm:w-[32px] sm:h-[32px] rounded-full">
            <div className="absolute xs:right-8 xs:top-0 sm:right-16 sm:top-0 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-4 xs:py-2 sm:px-6 sm:py-2 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                Pengumpulan Proposal <br /> Gelombang 2
              </h1>
            </div>
            <div className="absolute xs:right-8 xs:top-12 sm:right-16 sm:top-20 lg:right-16 lg:top-24 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl xs:px-4 xs:py-2 sm:px-7 sm:py-2 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                10 – 14 November 2024
              </h1>
            </div>
          </div>
          {/* timeline 5 */}
          <div className="relative -mx-1 sm:-mx-2 bg-[#7F5238] w-[16px] h-[16px] sm:w-[32px] sm:h-[32px] rounded-full">
            <div className="absolute xs:left-8 xs:top-0 sm:left-16 sm:top-0 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-4 xs:py-2 sm:px-6 sm:py-2 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                Pengumuman 10 Besar <br /> Finalis
              </h1>
            </div>
            <div className="absolute xs:left-8 xs:top-12 sm:left-16 sm:top-20 lg:left-16 lg:top-24 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl xs:px-5 xs:py-2 sm:px-7 sm:py-2 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                20 November 2024
              </h1>
            </div>
          </div>
          {/* timeline 6 */}
          <div className="relative -mx-1 sm:-mx-2 bg-[#7F5238] w-[16px] h-[16px] sm:w-[32px] sm:h-[32px] rounded-full">
            <div className="absolute xs:right-8 xs:top-0 sm:right-16 sm:top-0 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-7 xs:py-2 sm:px-10 sm:py-2 lg:px-11 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                Pengumpulan Media <br /> Presentasi (PPT)
              </h1>
            </div>
            <div className="absolute xs:right-8 xs:top-12 sm:right-16 sm:top-20 lg:right-16 lg:top-24 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl xs:px-4 xs:py-2 sm:px-7 sm:py-2 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                22 – 25 November 2024
              </h1>
            </div>
          </div>
          {/* timeline 7 */}
          <div className="relative -mx-1 sm:-mx-2 bg-[#7F5238] w-[16px] h-[16px] sm:w-[32px] sm:h-[32px] rounded-full">
            <div className="absolute xs:left-8 xs:top-0 sm:left-16 sm:top-0 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-10 xs:py-2 sm:px-20 sm:py-2 md:px-[4.4rem] lg:px-[5.6rem] text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                Final
              </h1>
            </div>
            <div className="absolute xs:left-8 xs:top-9 sm:left-16 sm:top-12 lg:left-16 lg:top-14 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl xs:px-5 xs:py-2 sm:px-7 sm:py-2 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                26 November 2024
              </h1>
            </div>
          </div>
          {/* timeline 8 */}
          <div className="relative -mx-1 sm:-mx-2 bg-[#7F5238] w-[16px] h-[16px] sm:w-[32px] sm:h-[32px] rounded-full">
            <div className="absolute xs:right-8 xs:top-0 sm:right-16 sm:top-0 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-white bg-[#7F5238] rounded-xl xs:px-5 xs:py-2 sm:px-6 sm:py-2 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                Pengumuman <br /> Pemenang Lomba
              </h1>
            </div>
            <div className="absolute xs:right-8 xs:top-12 sm:right-16 sm:top-20 lg:right-16 lg:top-24 text-center">
              <h1
                className="text-4xs sm:text-xl md:text-base lg:text-2xl text-[#7F5238] bg-[#F5F2CB] rounded-xl xs:px-5 xs:py-2 sm:px-7 sm:py-2 text-nowrap"
                style={{ fontFamily: "Lost Island" }}
              >
                1 Desember 2024
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* prizepool */}
      <div className="xs:translate-y-[29rem] sm:translate-y-[29rem]">
        <div className="mx-auto pt-20">
          <div className="w-[160px] lg:w-[240px] xl:w-[270px]  text-center mx-auto">
            <h1
              className=" md:text-xl lg:text-2xl text-white bg-[#523D31] rounded-xl  py-4 "
              style={{ fontFamily: "Lost Island" }}
            >
              Prizepool
            </h1>
          </div>
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-1 text-center 2xl:w-[1200px] 2xl:mx-auto gap-x-8">
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
      </div>
      {/* contact person */}
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
                  {firstno ? firstno : "0877-0145-1504"} (
                  {firstcp ? firstcp : "Tiffani"})
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
                  {secondno ? secondno : "0812-5403-3669"} (
                  {secondcp ? secondcp : "Anggita"})
                </h1>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* daftar & poster */}
      <div className="xs:translate-y-[30rem] sm:translate-y-[45rem]">
        <div className="mx-auto flex flex-col lg:flex-row justify-center items-center px-4 py-6 bg-white border-4 border-white w-[90%] max-w-[1240px] h-auto lg:h-[643px] rounded-xl bg-opacity-40">
          <div className="place-content-center mx-20 lg:mb-0">
            <img
              src={Maskot}
              className="w-[150px] sm:w-[300px] h-[200px] sm:h-[400px] animate-wiggle"
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
                className="transition ease-in-out whitespace-nowrap hover:-translate-y-1 hover:scale-110 duration-300 text-xs sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-white rounded-xl border-[#A14F3D] bg-[#A14F3D] px-4 py-2 sm:px-8 sm:py-3 md:px-10 md:py-5 flex items-center justify-center hover:bg-[#73372c] hover:border-[#73372c]"
              >
                Daftar Sekarang
              </button>
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
                className=" md:max-w-[30rem] max-h-full= object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;