import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F2C48D]">
      <ClipLoader color="#fff" size={100} />
    </div>
  );
};

export default Loader;
