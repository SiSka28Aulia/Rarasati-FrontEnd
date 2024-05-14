import React, { useState } from "react";
import { logo1, artikel1 } from "../assets";
import styles from "../style";

const ArtikelItem = () => {
  const [artikelitems] = useState([
    {
      id: 1,
      title: "Manfaat Memelihara Kucing",
      read: "03 Menit untuk baca",
      image: artikel1,
      content:
        "Diantara cara mengatasi kejenuhan bekerja sendiri baik WFH maupun WFA diantaranya adalah dengan memelihara hewan. Menurut dr. Fadhli Rizal Makarim",
      source: "Kompas.com",
      sourcelogo: logo1,
    },
    {
      id: 2,
      title: "Cara Memelihara Kucing",
      read: "03 Menit untuk baca",
      image: artikel1,
      content:
        "Diantara cara mengatasi kejenuhan bekerja sendiri baik WFH maupun WFA diantaranya adalah dengan memelihara hewan. Menurut dr. Fadhli Rizal Makarim",
      source: "Kompas.com",
      sourcelogo: logo1,
    },
    {
      id: 3,
      title: "Cara Memelihara Kucing",
      read: "03 Menit untuk baca",
      image: artikel1,
      content:
        "Diantara cara mengatasi kejenuhan bekerja sendiri WFH maupun WFA diantaranya adalah dengan memelihara hewan. Menurut dr. Fadhli Rizal Makarim",
      source: "Kompas.com",
      sourcelogo: logo1,
    },
  ]);
  return (
    <>
      <div
        className={` flex-row  ${styles.padding} ${styles.flexCenter} mt-0 space-x-10`}
      >
        {artikelitems.map((item) => (
          <div className={`  w-[366px] h-[277px]`}>
            <img src={item.image} alt={item.title} />
            <div
              className={`${styles.paragraph}text-sky-950  font-bold font-family:'Satoshi',Helvetica] leading-[45px]`}
            >
              {item.read}
            </div>
            <h3
              className={`${styles.boxWidth} w-[84px] text-sky-950  font-light font-family:'Satoshi',Helvetica] leading-[45px]`}
            >
              {item.title}
            </h3>
            <p className={`${styles.paragraph}`}>{item.content}</p>
            <div
              className={`${styles.boxWidth} flex  items-start text-sky-950  font-light font-family:'Satoshi',Helvetica] leading-[45px]`}
            >
              <img src={item.sourcelogo} alt={item.title} />
              {item.source}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArtikelItem;
