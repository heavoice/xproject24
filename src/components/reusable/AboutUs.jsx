import Pelampung from "../../assets/img/pelampung.png";
import Kerang from "../../assets/img/kerang.png";
import Maskot from "../../assets/img/maskot.png";

import "../../assets/css/lost-island.css";
import "../../assets/css/welcometo.css";
import "../../assets/css/xpro24.css";
const AboutUs = () => {
  return (
    <div className="-mt-40" style={{ fontFamily: " Lost Island" }}>
      <h1 className="w-[40%] xl:w-[20%] 2xl:w-[10%] mx-auto text-center text-xl md:text-2xl lg:text-2xl text-white bg-[#D7996C] rounded-xl  py-3 relative z-[2]">
        About Us
      </h1>
      <div>
        <div className="bg-[#F5F2CB] w-[85%] lg:w-[80%] xl:w-[80%] 2xl:w-[63%] mx-auto h-auto rounded-xl grid items-center p-6  md:p-16 lg:p-24 relative -mt-4 z-[1]">
          <img
            src={Pelampung}
            alt="ornamen1"
            className="absolute -top-3 -left-2 xl:-top-12 xl:-left-12 w-[50px] sm:w-[75px] md:w-[100px] lg:w-[125px] xl:w-[150px]"
          />
          <img
            src={Kerang}
            alt="ornamen2"
            className="absolute -bottom-3 -right-2 xl:-bottom-12 xl:-right-12 w-[40px] sm:w-[75px] md:w-[100px] lg:w-[125px] xl:w-[150px]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
            <div className="relative flex flex-col items-center md:items-start">
              <h1 className="text-3xl  md:text-4xl lg:text-5xl text-[#9E7150] text-center md:text-start mb-4">
                Apa sih <span className="text-red-800">x-project</span> itu?
              </h1>
              <p
                className="text-base md:text-xl lg:text-2xl text-[#9E7150] text-justify  mx-auto md:mx-0"
                style={{ fontFamily: "Poppins" }}
              >
                X-Project merupakan acara tahunan yang diadakan oleh HIMTI
                UNESA. X-Project 10.0 memilikiserangkaian acara yang meliputi
                kegiatan pelatihan, pembelajaran pada bidang keahlian tertentu,
                perlombaan, IT expo, kewirausahaan dan pertunjukan yang
                bertujuan untuk mengenalkan HIMTI UNESA.
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
      </div>
    </div>
  );
};

export default AboutUs;
