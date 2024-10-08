import Batu1 from "../../assets/img/batu1.png";
import Batu2 from "../../assets/img/batu2.png";
import {
  gelombang,
  daunKiri,
  daunKanan,
  rantingKanan,
  rantingKiri,
  daunKiriFlip,
} from "../../assets";
const Overview = () => {
  return (
    <>
      <div className="-mt-1  w-full h-full pb-20  ">
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
                Business Plan Competition adalah sebuah kompetisi perencanaan
                bisnis yang merupakan salah satu bagian dari Informatics
                Championship (IC) 2024 yang bertujuan mendorong peserta
                merancang rencana bisnis komprehensif, mencakup analisis pasar,
                strategi pemasaran, keuangan, dan operasional. Tujuannya adalah
                membekali peserta dengan keterampilan kewirausahaan untuk sukses
                di dunia bisnis yang dinamis.
              </p>
            </div>
            <img
              src={Batu1}
              className="absolute w-[120px] md:w-[180px] xl:w-[220px] right-0 -mt-3 lg:mt-6 lg:mr-6 xl:mt-1"
            />
          </div>
          <div className="overflow-x-hidden">
            <img
              className="absolute w-full 2xl:-mt-40 2xl:h-[600px]  z-[-1]"
              src={gelombang}
              alt=""
            />
            <img
              className="absolute w-[200px] md:w-[350px] xl:w-[450px] -ml-20 z-[-1]"
              src={daunKiri}
              alt=""
            />
            <img
              className="absolute w-[150px] md:w-[200px] xl:w-[250px] mt-20 z-[-1] right-0 mt-[15rem] xl:mt-[20rem]"
              src={rantingKanan}
              alt=""
            />
            <img
              className="absolute w-[120px] md:w-[200px] xl:w-[280px]  z-[-2] right-0 mt-[21rem] xl:mt-[26rem]"
              src={daunKanan}
              alt=""
            />
            <img
              className="absolute w-full 2xl:-mt-40 2xl:h-[600px] mt-[22rem] md:mt-[30rem] xl:mt-[40rem] z-[-4]"
              src={gelombang}
              alt=""
            />
            <img
              className="absolute w-full 2xl:-mt-40 2xl:h-[600px] xl:mt-[32rem]  mt-[26rem] z-[-3]"
              src={gelombang}
              alt=""
            />
            <img
              className="absolute w-[120px] md:w-[230px] xl:w-[240px]  z-[-2] left-0 mt-[40rem] xl:mt-[48rem]"
              src={daunKiriFlip}
              alt=""
            />
            <img
              className="absolute w-[120px] md:w-[180px] xl:w-[240px] z-[-2] left-0 mt-[35rem] xl:mt-[38rem]"
              src={rantingKiri}
              alt=""
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
          <div className="pt-10 grid md:grid-cols-3 gap-3 2xl:w-[1200px] 2xl:mx-auto ">
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
