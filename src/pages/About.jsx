import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import Loader from "../components/Loader";
import Beranda from "../components/Home/Beranda";
import AboutUs from "../components/reusable/AboutUs";

import Bg from "../assets/img/home/bg-2.png";
import Pantai from "../assets/img/attribut/pantai.png";

import Teaser from "../components/reusable/Teaser";

import Footer from "../components/reusable/Footer";
import ThemeXpro from "../components/AboutContent/ThemeXpro";
import Gallery from "../components/AboutContent/Gallery";

export default function About() {
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
      <Beranda />
      <div
        className=" w-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <AboutUs />
        <ThemeXpro />
        <Gallery />
        <div className="-mt-20 md:-mt-40">
          <Teaser />
        </div>

        <img className="pt-20 2xl:w-full " src={Pantai} alt="" />
      </div>
      <div className="-mt-40 md:-mt-60 2xl:-mt-[30rem]">
        <Footer />
      </div>
    </>
  );
}
