import React from "react";
import styles from "../style";
import { catHome1, catHome2 } from "../assets";
import Adopsi from "./Adopsi";

const Hero = () => {
  return (
    <div>
      <section
        id="home"
        className={`flex md:flex-row flex-col${styles.paddingY} ${styles.flexCenter}`}
      >
        <div
          className={`flex-1 flex ${styles.flexStart} flex-col md:mr-10 mr-10 md:mt-0 mt-10 relative`}
        >
          <div className="flex flex-row items-center py-[18px] px-[6px] mb-8 mt-20">
            {/* Bagian Kiri */}
            <div className="flex flex-1 flex-col items-start justify-center">
              <div className="text-sky-950 text-[70px] font-bold font-['Satoshi'] [font-family:'Satoshi',Helvetica] leading-[105px]">
                Dapatkan Anggota
              </div>
              <p className="text-sky-950 text-[70px] font-bold font-['Satoshi'] [font-family:'Satoshi',Helvetica] leading-[105px]">
                Keluarga Bulu Baru <br />
                Anda Hari Ini
              </p>
              <p className="text-sky-950 text-xl font-light [font-family:'Satoshi',Helvetica] leading-[30px] mt-5">
                Para Kucing yang Menunggu untuk Menjadi Bagian dari Rumah Anda!
                Temukan Sahabat Sejati Anda Hari Ini di Website Adopsi Kucing
                Kami
              </p>
              <div className="mt-10">
                <Adopsi />
              </div>
            </div>

            {/* Bagian Kanan */}
            <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
              <img
                src={catHome1}
                alt="cathome1"
                className="w-[100%] h-[100%] relative z-[5] mb-[-5.50px]"
              />
              <br />
              <img
                src={catHome2}
                alt="cathome2"
                className="w-[100%] h-[100%] relative z-[5] mt-[-5.50px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
