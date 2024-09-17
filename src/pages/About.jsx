import React, { useState, useEffect } from "react";
import AboutBottomSect from "../components/AboutContent/BottomSection";
import AboutTopSect from "../components/AboutContent/TopSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

export default function AboutUs() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <AboutTopSect />
      <AboutBottomSect />
      <Footer />
    </>
  );
}
