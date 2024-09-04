import { maskot } from "../../assets/";
const TitleDaftar = ({ judul, isi }) => {
  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row  items-center justify-center lg:gap-20 px-4 py-6 bg-white border-4 border-white w-[90%] max-w-[1240px] h-auto lg:py-10 lg:w-[80%] rounded-xl bg-opacity-40 mx-auto">
          <div className="place-content-center  lg:mb-0">
            <img
              src={maskot}
              className="w-[150px] md:w-[200px] h-[200px] md:h-[300px]  animate-wiggle"
            />
          </div>
          <div
            className="text-xl md:text-2xl lg:text-6xl text-black text-center lg:text-left lg:w-1/2"
            style={{ fontFamily: "Lost Island" }}
          >
            Gimana Tertarik? <br /> Yuk daftar!
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 justify-center lg:justify-start mt-10">
              <a className="transition ease-in-out whitespace-nowrap hover:-translate-y-1 hover:scale-110 duration-300 text-xs md:text-xl lg:text-2xl xl:text-3xl text-white rounded-xl border-[#A14F3D] bg-[#A14F3D] px-4 py-2 md:px-10 md:py-5 text-center hover:bg-[#73372c] hover:border-[#73372c]">
                Daftar Sekarang
              </a>
              <button className="transition ease-in-out whitespace-nowrap hover:-translate-y-1 hover:scale-110 duration-300 text-xs md:text-xl lg:text-2xl xl:text-3xl text-white rounded-xl border-[#486D24] bg-[#486D24] px-4 py-2 md:px-10 md:py-5 text-center hover:bg-[#293f16] hover:border-[#293f16]">
                Poster
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleDaftar;
