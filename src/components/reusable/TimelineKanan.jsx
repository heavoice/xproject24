import Title from "./Title";

const TimelineKanan = ({ judul, isi }) => {
  return (
    <>
      <div className="grid w-full max-w-6xl grid-cols-9 mx-auto ">
        {/* start */}
        <div className="w-full col-span-4"></div>
        <div className="col-span-1">
          <div className=" mx-auto bg-[#7F5238] w-[20px] h-[20px]  rounded-full "></div>
          <div className="mx-auto bg-[#D7996C] w-[8px]  h-[177px]   "></div>
          <div className="mx-auto bg-[#7F5238] w-[20px] h-[20px]  rounded-full "></div>
        </div>

        <div className="  col-span-4 w-[150px] md:w-[260px] lg:w-[300px] xl:w-[340px] mx-auto flex flex-col  text-center  mr-6 md:mr-20">
          <Title judul={judul} isi={isi} />
        </div>
      </div>
    </>
  );
};

export default TimelineKanan;
