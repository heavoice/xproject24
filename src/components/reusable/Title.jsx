const Title = ({ judul, isi }) => {
  return (
    <>
      <h1
        className="text-base md:text-xl lg:text-2xl text-white bg-[#7F5238] rounded-xl py-2 px-1"
        style={{ fontFamily: "Lost Island" }}
      >
        {judul}
      </h1>
      <div className="mt-2 w-full bg-[#F5F2CB] rounded-xl p-3">
        <p className="text-base md:text-lg xl:text-2xl text-center py-1">
          {isi}
        </p>
      </div>
    </>
  );
};

export default Title;
