import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/uiux/Footer";
import Content from "../components/uiux/Content";
import Loader from "../components/Loader";

const Bootcamp = () => {
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
      <Content />
      <Footer />
    </>
  );
};

export default Bootcamp;
