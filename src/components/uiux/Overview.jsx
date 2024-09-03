import bg2 from "../../assets/img/ic/bg3.png";
import Batu1 from "../../assets/img/batu1.png";
import Batu2 from "../../assets/img/batu2.png";
const Overview = () => {
  return (
    <>
      <div
        className="-mt-1  w-full h-full pb-20 bg-cover bg-top  bg-no-repeat"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="pt-1">
          <div className="w-[160px] lg:w-[240px] xl:w-[270px] mx-auto flex flex-col justify-center z-10 text-center">
            <h1
              className=" md:text-xl lg:text-2xl text-white bg-[#523D31] rounded-xl  py-4 "
              style={{ fontFamily: "Lost Island" }}
            >
              Overview
            </h1>
          </div>
          <div
            className="mx-auto -mt-4 w-[90%] lg:w-[85%] bg-[#F5F2CB] rounded-xl p-5 pt-7 md:p-9 lg:py-16 lg:px-12"
            style={{
              boxShadow: "0px 15px 0px 0px #523D31",
            }}
          >
            <img
              src={Batu2}
              className="absolute w-[100px] md:w-[150px] xl:w-[200px] left-0 -mt-12 md:-mt-16 lg:-mt-20 lg:ml-8 xl:-mt-24"
            />
            <div className="px-3 lg:px-0 xl:px-3 ">
              <h1
                className="text-2xl md:text-4xl  xl:text-5xl text-[#0A5E8A]"
                style={{ fontFamily: "Lost Island" }}
              >
                About <span className="text-[#D25F5F]">Competiton</span>
              </h1>
              <p className="text-xs md:text-lg  xl:text-2xl text-justify pt-1 lg:pt-4 ">
                UI/UX Design Competition adalah bagian dari Informatics
                Championship (IC) 2024 yang bertujuan mendorong kreativitas dan
                inovasi dalam desain antarmuka pengguna (UI) dan pengalaman
                pengguna (UX). Peserta ditantang untuk merancang desain aplikasi
                yang memudahkan interaksi, meningkatkan kepuasan, serta memenuhi
                tujuan fungsional produk, dengan mempertimbangkan estetika,
                aksesibilitas, responsivitas, dan intuitivitas.
              </p>
            </div>
            <img
              src={Batu1}
              className="absolute w-[120px] md:w-[180px] xl:w-[220px] right-0 -mt-3 lg:mt-6 lg:mr-6 xl:mt-1"
            />
          </div>
        </div>
        {/* Detaill */}
        <div className="pt-16">
          <div className="w-[160px] lg:w-[240px] xl:w-[270px] mx-auto flex flex-col justify-center z-10 text-center">
            <h1
              className=" md:text-xl lg:text-2xl text-white bg-[#523D31] rounded-xl  py-4 "
              style={{ fontFamily: "Lost Island" }}
            >
              Detail
            </h1>
          </div>
          <div className="pt-10 grid md:grid-cols-3 gap-3 ">
            <div className="w-[220px] lg:w-[300px] xl:w-[340px] mx-auto flex flex-col justify-center text-center">
              <h1
                className=" md:text-xl lg:text-2xl text-white bg-[#7F5238] rounded-xl  py-2 "
                style={{ fontFamily: "Lost Island" }}
              >
                Pelaksanaan
              </h1>
              <div className=" mt-1 w-full bg-[#F5F2CB] rounded-xl p-3">
                <p className="text-base  md:text-lg  xl:text-2xl text-center py-1 ">
                  Online
                  <br />
                  (Via Zoom)
                </p>
              </div>
            </div>

            <div className="w-[220px] lg:w-[300px] xl:w-[340px] mt-10 md:mt-0 mx-auto flex flex-col justify-center text-center">
              <h1
                className=" md:text-xl lg:text-2xl text-white bg-[#7F5238] rounded-xl  py-2 "
                style={{ fontFamily: "Lost Island" }}
              >
                Biaya
              </h1>
              <div className=" mt-1 w-full bg-[#F5F2CB] rounded-xl p-5">
                <p className="text-base  md:text-lg  xl:text-2xl text-center py-1 ">
                  Free
                </p>
              </div>
            </div>

            <div className="w-[220px] lg:w-[300px] xl:w-[340px] mt-10 md:mt-0 mx-auto flex flex-col justify-center text-center">
              <h1
                className=" md:text-xl lg:text-2xl text-white bg-[#7F5238] rounded-xl  py-2 "
                style={{ fontFamily: "Lost Island" }}
              >
                Kategori
              </h1>
              <div className=" mt-1 w-full bg-[#F5F2CB] rounded-xl p-5">
                <p className="text-base  md:text-lg  xl:text-2xl text-center py-1 ">
                  Mahasiswa (Tim)
                </p>
              </div>
            </div>

            <div className="md:col-span-3 w-[220px] lg:w-[300px] xl:w-[340px] mt-10 mx-auto flex flex-col justify-center text-center">
              <h1
                className=" md:text-xl lg:text-2xl text-white bg-[#7F5238] rounded-xl  py-2 "
                style={{ fontFamily: "Lost Island" }}
              >
                Tingkat
              </h1>
              <div className=" mt-1 w-full bg-[#F5F2CB] rounded-xl p-5">
                <p className="text-base  md:text-lg  xl:text-2xl text-center py-1 ">
                  Nasional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
