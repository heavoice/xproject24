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
      <Overview />
      <Detail />
      {/* <Footer2 /> */}
    </>
  );
};

export default Bootcamp;
