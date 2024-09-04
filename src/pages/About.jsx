import AboutBottomSect from "../components/AboutContent/BottomSection";
import AboutTopSect from "../components/AboutContent/TopSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutTopSect />
      <AboutBottomSect />
      <Footer />
    </>
  );
}
