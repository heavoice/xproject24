import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Content1 from "../components/Content1";
import Content2 from "../components/Content2";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function Home() {
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
      <Content1 />
      <Content2 />
      <Footer />
    </>
  );
}
