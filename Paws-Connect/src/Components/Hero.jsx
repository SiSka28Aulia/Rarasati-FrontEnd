import React from "react";
import styles from "../style";
import { catHome1, catHome2 } from "../assets";
import Adopsi from "./Adopsi";

const Hero = () => {
  return (
    <>
      <section className={`${styles.flexCenter}  `}>
        <div className="flex items-center justify-between mx-32 mt-10 mb-10">
          {/* <div className="flex flex-row items-center mb-8 mt-20 "> */}
          {/* Bagian Kiri */}
          <div className="flex flex-1 flex-col items-start justify-center">
            <div className="text-sky-950 text-[70px] font-bold font-['Satoshi'] [font-family:'Satoshi',Helvetica] leading-[105px]">
              Dapatkan Anggota
            </div>
            <p className="pr-4 text-sky-950 text-[70px] font-bold font-['Satoshi'] [font-family:'Satoshi',Helvetica] leading-[105px]">
              Keluarga Bulu Baru <br /> Anda Hari Ini
            </p>
            <p className="text-sky-950 text-xl font-light [font-family:'Satoshi',Helvetica] leading-[30px] mt-5">
              Para Kucing yang Menunggu untuk Menjadi Bagian dari Rumah Anda!
              Temukan Sahabat Sejati Anda Hari Ini di Website Adopsi Kucing Kami
            </p>
            <div className="mt-10">
              <Adopsi />
            </div>
          </div>

          {/* Bagian Kanan */}
          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <img
              src={catHome1}
              alt="cathome1"
              className="w-[100%] h-[100%]  z-[5]"
            />
            {/* <img
                src={catHome2}
                alt="cathome2"
                className="w-[100%] h-[100%]  z-[5] "
              /> */}
          </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
