import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Content from "../components/BPC/Content";
import Footer from "../components/BPC/Footer";
import Loader from "../components/Loader";

export default function BPC() {
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
}
