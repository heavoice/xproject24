import { FaAngleDown } from "react-icons/fa";

import Bg from "../../assets/img/home/bg.png";
import "../../assets/css/lost-island.css";
import "../../assets/css/welcometo.css";
import "../../assets/css/xpro24.css";

const Beranda = () => {
  return (
    <div
      className=" bg-image  w-full h-[70rem] md:h-[80rem] 2xl:h-[100rem] bg-center bg-no-repeat 2xl:bg-cover"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="max-w-[950px] mx-auto px-8 flex flex-col justify-center h-[60%] sm:h-[70%]">
        <h1 className="text-2xl sm:text-6xl font-bold text-[#0E5D84] welcome-to py-2">
          Welcome to
        </h1>
        <h2 className="text-3xl sm:text-8xl font-bold text-[#E7CF7F] xpro-24">
          X-project 2024
        </h2>
        <div className="py-12">
          <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-2xl text-white rounded-md border-green-600 bg-green-600 border-2 px-6 py-3 flex items-center hover:bg-green-900 hover:border-green-900">
            Explore more !
          </button>
        </div>
      </div>
      {/* scroll down */}
      <div className="animate-bounce text-center pt-40 md:pt-16">
        <a className="text-2xl md:text-4xl text-[#D7996C] " href="/">
          Scroll down <FaAngleDown className="mx-auto" />
        </a>
      </div>
    </div>
  );
};

export default Beranda;
