import React, { useState, useEffect } from "react";
import Footer from "../components/FWD/Footer";
import Navbar from "../components/Navbar";
import TechpreneurContent from "../components/TechpreneurContent";
import Loader from "../components/Loader";

export default function Techpreneur() {
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
      <TechpreneurContent />
      <Footer />
    </>
  );
}
