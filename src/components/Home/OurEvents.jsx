import tech1 from "../../assets/img/tech1.png";
import tech2 from "../../assets/img/tech2.png";
import tech3 from "../../assets/img/tech3.png";
const OurEvents = () => {
  return (
    <div className="pt-20 w-full max-w-screen-xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <p
        className="text-xl sm:text-xl md:text-2xl lg:text-2xl flex text-white bg-[#D7996C] rounded-xl px-10  py-3 z-10"
        style={{ fontFamily: "Lost Island" }}
      >
        Our Event
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 py-6 bg-white border-4 border-white w-full rounded-xl bg-opacity-40 -translate-y-5 sm:-translate-y-6 md:-translate-y-8 lg:-translate-y-8 xl:-translate-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-12 w-full max-w-6xl">
          <div className="flex flex-col items-center md:items-start pl-2 md:pl-12 lg:pl-16 xl:pl-20 pt-2  md:pt-16 lg:pt-24 xl:pt-28">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl text-red-800 mb-3"
              style={{ fontFamily: "Lost Island" }}
            >
              Tech Genius
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-[#9E7150] text-justify pl-2">
              Tech Genius adalah kegiatan awal di X-Project 10.0 yang dirancang
              untuk membangun dan meningkatkan pemahaman serta keterampilan
              teknologi di kalangan peserta dengan berbagai kegiatan pelatihan.
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
              kompetisi yang bertujuan untuk mengasah kemampuan dan keterampilan
              peserta di bidang teknologi, sehingga dapat menciptakan berbagai
              inovasi baru di masa yang akan datang, yang dikemas dalam berbagai
              jenis perlombaan.
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
              Tech Genius adalah kegiatan awal di X-Project 10.0 yang dirancang
              untuk membangun dan meningkatkan pemahaman serta keterampilan
              teknologi di kalangan peserta dengan berbagai kegiatan pelatihan.
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
  );
};

export default OurEvents;
