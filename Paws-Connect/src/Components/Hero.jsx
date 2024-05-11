import React from "react";
import { catHome1 } from "../assets";
import Adopsi from "./Adopsi";

const Hero = () => {
  return (
    <div>
      <section id="home">
        <div>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="text-sky-950 text-[70px] font-bold font-['Satoshi'] [font-family:'Satoshi',Helvetica] leading-[105px]">
              Dapatkan Anggota
            </div>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <Adopsi />
            </div>
          </div>
          <div className="text-sky-950 text-[70px] font-bold font-['Satoshi'] [font-family:'Satoshi',Helvetica] leading-[105px]">
            Keluarga Bulu Baru <br />
            Anda Hari Ini
          </div>
          <p className="w-[623px] text-sky-950 text-xl font-light [font-family:'Satoshi',Helvetica] leading-[30px]">
            Para Kucing yang Menunggu untuk Menjadi Bagian dari Rumah Anda!
            Temukan Sahabat Sejati Anda Hari Ini di Website Adopsi Kucing Kami
          </p>
        </div>
        <div>
          <img
            src={catHome1}
            alt="cathome1"
            className="relative z-[5] w-[50%] h-[50%] bottom-50 right-90"
          />
        </div>
        <div>
          <Adopsi />
        </div>
      </section>
    </div>
  );
};

export default Hero;
