import teaser from "../../assets/video/teaser.mp4";
const Teaser = () => {
  return (
    <div className="w-full lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col items-center  px-4  lg:px-8 pt-10">
      <p
        className="text-xl md:text-2xl lg:text-2xl flex text-white bg-[#D7996C] rounded-xl px-8  lg:px-16 py-3 z-10"
        style={{ fontFamily: "Lost Island" }}
      >
        Teaser
      </p>
      <div className="relative w-full pt-6  ">
        <video
          className="w-full h-full rounded-xl"
          controls
          autoPlay
          loop
          muted
        >
          <source src={teaser} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Teaser;
