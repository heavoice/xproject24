import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import Loader from "../components/Loader";
import Beranda from "../components/Home/Beranda";
import AboutUs from "../components/reusable/AboutUs";

import Bg from "../assets/img/home/bg-2.png";
import Pantai from "../assets/img/attribut/pantai.png";
import OurEvents from "../components/Home/OurEvents";
import Teaser from "../components/reusable/Teaser";
import SponAndMedpart from "../components/Home/SponAndMedpart";
import Footer from "../components/reusable/Footer";

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
      <Beranda />
      <div
        className=" w-full bg-center bg-cover bg-no-repeat 2xl:bg-top"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <AboutUs />
        <OurEvents />
        <Teaser />
        <SponAndMedpart />
        <img className="pt-20 2xl:w-full " src={Pantai} alt="" />
      </div>
      <div className="-mt-40 md:-mt-60 2xl:-mt-[30rem]">
        <Footer />
      </div>
    </>
  );
}
