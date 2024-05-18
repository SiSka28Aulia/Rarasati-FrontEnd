import React from "react";
import styles from "../style";
// import { lucas, chico, lullaby } from "../assets";
import PuppiesItem from "./PuppiesItem";

const Puppies = () => {
  return (
    <div className="border-b-2 border-[#D9D9D9] shadow-inner bg-[#F8F8F8]">
      <div className="flex flex-row  mx-auto mb-8 mt-20">
        <section id="home-2" className={`${styles.section} text-center `}>
          <h2 className="text-primary text-xl font-bold font-Satoshi-Regular leading-snug mt-10">
            Bertemu dengan kucingmu
          </h2>
          <h1 className="text-cyan text-6xl font-bold font-Satoshi-Regular leading-[105px]">
            Puppies Menunggu untuk Adopsi
          </h1>
          <p className="text-secondary text-xl font-light font-Satoshi-Light leading-[30px] mx-32 mt-10 mb-10">
            Tes DNA kucing adalah yang terbaik karena memberikan informasi
            tentang asal-usul ras dan kesehatan sebagian besar kucing. Jadi,
            jika Anda ingin mengetahui lebih banyak tentang asal-usul ras dan
            informasi kesehatan kucing Anda, tes ini sangat direkomendasikan.
          </p>
          <div className={`${styles.flexCenter} `}>
            <PuppiesItem />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Puppies;
