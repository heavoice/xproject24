import ContactPerson from "../reusable/ContactPerson";
import Prizepool from "../reusable/Prizepool";
import TimelineKanan from "../reusable/TimelineKanan";
import TimelineKiri from "../reusable/TimelineKiri";
import TimelineAkhir from "../reusable/TimelineTerakhir";
import TitleDaftar from "../reusable/TitleDaftar";
import { batuTingkat, batuFlip, batuKiri, batu, batu2xl } from "../../assets";
const Detail = () => {
  return (
    <>
      <div className="pb-20 w-full h-full bg-cover bg-no-repeat -mt-1">
        <div className="w-[160px] lg:w-[240px] xl:w-[270px] mx-auto flex flex-col justify-center z-10 text-center">
          <h1
            className=" md:text-xl lg:text-2xl text-white bg-[#523D31] rounded-xl  py-4 "
            style={{ fontFamily: "Lost Island" }}
          >
            Timeline
          </h1>
        </div>
        <div>
          <img
            className="absolute z-[-1] mt-[18rem] lg:mt-[20rem] xl:mt-[15rem] 2xl:w-full  "
            src={batuTingkat}
            alt=""
          />
          <img
            className="absolute w-[200px] md:w-[350px] xl:w-[500px] 2xl:w-[700px] z-[-1] mt-[26rem] md:mt-[40rem] lg:mt-[50rem] 2xl:mt-[60rem] "
            src={batuKiri}
            alt=""
          />
          <img
            className="absolute w-[200px] md:w-[350px] lg:w-[400px] xl:w-[600px] 2xl:w-[700px]  z-[-1] mt-[43rem] md:mt-[78rem] lg:mt-[94rem] xl:mt-[105rem] 2xl:mt-[145rem] right-0"
            src={batu}
            alt=""
          />
        </div>
        <div className="pt-10 md:w-[90%] xl:w-[87%] mx-auto">
          <TimelineKanan
            judul="Pendaftaran & Pengumpulan BMC"
            isi="14 September - 24 Oktober 2024"
          />
          <div className="-mt-5 ">
            <TimelineKiri
              judul="Pengumuman Lolos Semifinal"
              isi="31 Oktober 2024"
            />
          </div>
          <div className="-mt-5">
            <TimelineKanan
              judul="pengumpulan proposal gelombang 1"
              isi="1-9 November 2024 "
            />
          </div>
          <div className="-mt-5">
            <TimelineKiri
              judul="pengumpulan proposal gelombang 2"
              isi="10-14 November 2024"
            />
          </div>
          <div className="-mt-5">
            <TimelineKanan
              judul="Pengumuman 10 besar Finalis"
              isi="20 November 2024 "
            />
          </div>
          <div className="-mt-5">
            <TimelineKiri
              judul="Pengumpulan Media Presentasi (PPT)"
              isi="22-25 November 2024"
            />
          </div>
          <div className="-mt-5">
            <TimelineKanan judul="Final" isi="26 November 2024 " />
          </div>
          <div className="-mt-5">
            <TimelineAkhir
              judul="Pengumuman Pemenang Lomba"
              isi="1 Desember 2024 "
            />
          </div>
        </div>
        {/* PrizeList */}
        <Prizepool />

        <ContactPerson
          firstlink="https://api.whatsapp.com/send/?phone=6287701451504"
          firstcp="Tiffani"
          firstno="0877-0145-1504"
          secondlink="https://api.whatsapp.com/send/?phone=6281254033669"
          secondcp="Anggita"
          secondno="0812-5403-3669"
        />

        <TitleDaftar />
      </div>
    </>
  );
};

export default Detail;
