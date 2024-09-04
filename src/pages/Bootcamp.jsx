import Footer2 from "../components/Footer2";
import Navbar from "../components/Navbar";
import Detail from "../components/uiux/Detail";
import BootcampComponen from "../components/uiux/Home";
import Overview from "../components/uiux/Overview";
const Bootcamp = () => {
  return (
    <>
      <Navbar />
      <BootcampComponen />
      <div className="bg-gradient-to-t from-[#6B7F2D] to-[#8EA946] z-[-100] relative ">
        <Overview />
        <Detail />
      </div>
      {/* <Footer2 /> */}
    </>
  );
};

export default Bootcamp;
