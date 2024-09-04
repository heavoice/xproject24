import bg4 from "../../assets/img/ic/bg4.png";
import ContactPerson from "../reusable/ContactPerson";
import Prizepool from "../reusable/Prizepool";
import TimelineKanan from "../reusable/TimelineKanan";
import TimelineKiri from "../reusable/TimelineKiri";
import TimelineAkhir from "../reusable/TimelineTerakhir";
import TitleDaftar from "../reusable/TitleDaftar";
const Detail = () => {
  return (
    <>
      <div className=" pb-20 w-full h-full bg-cover   bg-no-repeat -mt-1">
        <div className="w-[160px] lg:w-[240px] xl:w-[270px] mx-auto flex flex-col justify-center z-10 text-center">
          <h1
            className=" md:text-xl lg:text-2xl text-white bg-[#523D31] rounded-xl  py-4 "
            style={{ fontFamily: "Lost Island" }}
          >
            Timeline
          </h1>
        </div>
        <div className="pt-10">
          <TimelineKanan
            judul="Pendaftaran & Pengumpulan Berkas"
            isi="14 September - 24 Oktober 2024"
          />
          <div className="-mt-5 md:-mt-6 lg:-mt-5">
            <TimelineKiri judul="Pengumuman Semifinal" isi="31 Oktober 2024" />
          </div>
          <div className="-mt-5">
            <TimelineKanan
              judul="pengumpulan karya"
              isi="1-13 November 2024 "
            />
          </div>
          <div className="-mt-5">
            <TimelineKiri
              judul="Pengumpulan media presentasi (PPT)"
              isi="20-23 November 2024"
            />
          </div>
          <div className="-mt-5">
            <TimelineKanan judul="Pengumuman Finalis" isi="20 November 2024 " />
          </div>
          <div className="-mt-5">
            <TimelineKiri judul="Techincal Meeting" isi="23 November 2024" />
          </div>
          <div className="-mt-5">
            <TimelineKanan judul="Final" isi="24 November 2024 " />
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
          firstlink="https://api.whatsapp.com/send/?phone=628815048046"
          firstcp="Amanda"
          firstno="0881-5048-046"
          secondlink="https://api.whatsapp.com/send/?phone=6288228199404"
          secondcp="Ahmad Daffa"
          secondno="0882-2819-9404"
        />

        <TitleDaftar />
      </div>
    </>
  );
};

export default Detail;
