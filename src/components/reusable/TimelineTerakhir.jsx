import Title from "./Title";

const TimelineAkhir = ({ judul, isi }) => {
  return (
    <>
      <div className="grid w-full max-w-6xl grid-cols-9 mx-auto ">
        {/* start */}

        <div className="  col-span-4 w-[150px] md:w-[260px] lg:w-[300px] xl:w-[340px] mx-auto flex flex-col  text-center  ml-6 md:ml-20 ">
          <Title judul={judul} isi={isi} />
        </div>

        <div className=" col-span-1">
          <div className="  mx-auto bg-[#7F5238] w-[20px] h-[20px]  rounded-full "></div>
        </div>
        <div className="w-full h-full col-span-4"></div>
      </div>
    </>
  );
};

export default TimelineAkhir;
