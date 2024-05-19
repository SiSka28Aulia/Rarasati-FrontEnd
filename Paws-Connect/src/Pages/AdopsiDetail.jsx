import React from "react";
import styles from "../style";
import NavHeader from "../Components/NavHeader";
import { channie, channie2, channie3, channie4, channie5 } from "../assets";

const AdopsiDetail = () => {
  return (
    <>
      <NavHeader
        nav="Detail Kucing"
        page="Beranda"
        pagenav1=">"
        page2="Adopsi"
        pagenav2=">"
        page3="Detail Kucing"
      />

      <div className="container mx-auto px-4 grid grid-cols-4 space-x-2 space-y-2 mt-5 mb-40">
        <div className="col-span-3 bg-green-50">
          <img src={channie2} alt="" className="w-50% object-obtain h-50%" />
        </div>
        <div>detail kucing</div>
        <div className="col-span-3 max-w-20 flex space-x-4">
          <img src={channie} alt="" />
          <img src={channie2} alt="" />
          <img src={channie3} alt="" />
          <img src={channie4} alt="" />
          <img src={channie5} alt="" />
        </div>
        <div>NAME:ss</div>
        <div className="col-span-3">deskripsi</div>
        <div>map</div>
      </div>
    </>
  );
};

export default AdopsiDetail;
