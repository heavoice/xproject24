import ukwu from "../../assets/img/ukwu.png";
import en from "../../assets/img/en.png";
import mp1 from "../../assets/img/Medpart/bem-fmipa.jpg";
import mp2 from "../../assets/img/Medpart/bemvokasiunesa_.PNG";
import mp3 from "../../assets/img/Medpart/hai.career.jpg";
import mp4 from "../../assets/img/Medpart/kabarevents.jpg";
import mp5 from "../../assets/img/Medpart/LOGO-HIMASIKA.jpeg";
import mp6 from "../../assets/img/Medpart/mediaEvent.png";
import mp7 from "../../assets/img/Medpart/ptmUnesa.PNG";
import mp8 from "../../assets/img/Medpart/webinar.id.PNG";
import mp9 from "../../assets/img/image 10.png";
import mp10 from "../../assets/img/image 11.png";
import mp11 from "../../assets/img/image 12.png";
import mp12 from "../../assets/img/image 13.png";
const SponAndMedpart = () => {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center  px-4 py-20  lg:px-8">
        <p
          className="text-xl flex text-white bg-[#D7996C] rounded-xl px-16 py-3 z-10"
          style={{ fontFamily: "Lost Island" }}
        >
          Sponsorship
        </p>
        <div className="-mt-4 grid grid-cols-2 lg:grid-cols-2 justify-items-center items-center sm:px-16 md:px-32 lg:px-64 xl:px-80 bg-white border-4 border-white w-full rounded-xl bg-opacity-40  py-8 ">
          <img src={ukwu} className="w-32 h-32" />
          <img src={en} className="w-32 h-32" />
        </div>
      </div>

      {/*media partner*/}
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center  px-4 sm:px-6 lg:px-8">
        <p
          className="text-xl flex text-white bg-[#D7996C] rounded-xl px-16 py-3 z-10"
          style={{ fontFamily: "Lost Island" }}
        >
          Media Partner
        </p>
        <div className="-mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center items-center gap-6 bg-white border-4 border-white w-full rounded-xl bg-opacity-40  py-8">
          <img src={mp1} className="w-32 h-32" />
          <img src={mp2} className="w-32 h-32" />
          <img src={mp3} className="w-32 h-32" />
          <img src={mp4} className="w-32 h-32" />
          <img src={mp5} className="w-32 h-32" />
          <img src={mp6} className="w-32 h-32" />
          <img src={mp7} className="w-32 h-32" />
          <img src={mp8} className="w-32 h-32" />
          <img src={mp9} className="w-32 h-32" />
          <img src={mp10} className="w-32 h-32" />
          <img src={mp11} className="w-32 h-32" />
          <img src={mp12} className="w-32 h-32" />
        </div>
      </div>
    </>
  );
};

export default SponAndMedpart;
