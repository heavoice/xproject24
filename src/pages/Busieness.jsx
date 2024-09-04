import Navbar from "../components/Navbar";
import Footer from "../components/reusable/Footer";
import Detail from "../components/business/Detail";
import BootcampComponen from "../components/business/Home";
import Overview from "../components/business/Overview";
const Business = () => {
  return (
    <>
      <Navbar />
      <BootcampComponen />
      <div className="bg-gradient-to-t from-[#6B7F2D] to-[#8EA946] z-[-100] relative ">
        <Overview />
        <Detail />
        <Footer />
      </div>
    </>
  );
};

export default Business;
