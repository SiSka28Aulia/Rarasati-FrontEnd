import React, { useState } from "react";
import { lucas, chico, lullaby } from "../assets";

const PuppiesItem = () => {
  const [puppiesitems] = useState([
    {
      id: 1,
      title: "Lucas",
      image: lucas,
      desc: "Gen : Perempuan * Usia : 8 Bulan",
    },
    {
      id: 2,
      title: "Chico",
      image: chico,
      desc: "Gen : Laki-laki * Usia : 10 Bulan",
    },
    {
      id: 3,
      title: "Lullaby",
      image: lullaby,
      desc: "Gen : Perempuan * Usia : 6 Bulan",
    },
  ]);

  return (
    <>
      <div className="flex flex-row mt-10 items-center space-x-10">
        {puppiesitems.map((item) => (
          <div className="w-fit border-b-2 border-[#D9D9D9] bg-[#F8F8F8] shadow-inner rounded-[15px]  ">
            <img src={item.image} alt={item.title} />
            <div className="w-[84px] text-sky-950 text-3xl font-bold font-family:'Satoshi',Helvetica] leading-[45px]">
              {item.title}
            </div>
            <div className="w-[315px] text-[#0C2D48] text-xl font-light font-['Satoshi'] [font-family:'Satoshi',Helvetica] leading-[30px] ">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PuppiesItem;
