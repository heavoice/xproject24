import { rumput, logo, unesa, ti, si, pti } from "../../assets";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const TiktokHimti = "https://www.tiktok.com/@himtiunesa15";
  const InstagramXproject = "https://www.instagram.com/xproject.if/";
  const YoutubeHimti = "https://www.youtube.com/@HIMTIUNESA";

  return (
    <>
      <div className="xs:-mt-[10rem] sm:-mt-[12rem] md:-mt-[17rem] lg:-mt-[20rem] 2xl:-mt-[30rem]">
        <img
          className="w-full h-[200px] md:h-[350px] 2xl:h-[600px]"
          src={rumput}
          alt=""
        />
        <div className=" w-full h-[150px] md:h-[230px] xl:h-[250px] 2xl:h-[300px] bg-gradient-to-t from-[#01170A] via-[#003C18] to-[#006427] -mt-1">
          <div className="flex w-full md:w-[740px] h-[100px] md:h-[140px] lg:w-[1000px] 2xl:w-[1400px] mx-auto px-2 py-4 2xl:pt-20">
            <img
              className="w-[70px] h-[80px] md:w-[120px] md:h-[120px] xl:w-[150px] xl:h-[150px]"
              src={logo}
              alt=""
            />
            <div className="flex justify-between w-full">
              <div className="pt-4">
                <p className="text-white md:text-xl xl:text-2xl ">
                  Presented by:
                </p>
                <div className="flex gap-4">
                  <img
                    className="w-[26px] h-[26px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px]"
                    src={unesa}
                    alt=""
                  />
                  <img
                    className="w-[23px] h-[23px] md:w-[30px] md:h-[33px] xl:w-[40px] xl:h-[44px]"
                    src={ti}
                    alt=""
                  />
                  <img
                    className="w-[23px] h-[23px] md:w-[25px] md:h-[33px] xl:w-[40px] xl:h-[50px]"
                    src={si}
                    alt=""
                  />
                  <img
                    className="w-[18px] h-[23px] md:w-[25px] md:h-[33px] xl:w-[35px] xl:h-[50px]"
                    src={pti}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-center gap-2 pt-10 md:pt-12 pr-5">
                <FaTiktok
                  onClick={() => window.open(TiktokHimti, "_blank")}
                  className="text-white hover:text-gray-400 transition duration-300 w-[23px] h-[23px] md:w-[38px] md:h-[38px] xl:w-12 xl:h-12 hover:cursor-pointer"
                />
                <FaInstagram
                  onClick={() => window.open(InstagramXproject, "_blank")}
                  className="text-white hover:text-gray-400 transition duration-300 w-[23px] h-[23px] md:w-[38px] md:h-[38px]  xl:w-12 xl:h-12 hover:cursor-pointer"
                />

                <FaYoutube
                  onClick={() => window.open(YoutubeHimti, "_blank")}
                  className="text-white hover:text-gray-400 transition duration-300 w-[23px] h-[23px] md:w-[38px] md:h-[38px]  xl:w-12 xl:h-12 hover:cursor-pointer"
                />
              </div>
            </div>
          </div>
          <p className="text-white text-center text-[10px] md:text-sm xl:text-lg pt-2 md:pt-5 xl:pt-10 2xl:pt-24">
            © 2024 X-PROJECT 9.0 HIMTI UNESA | All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
