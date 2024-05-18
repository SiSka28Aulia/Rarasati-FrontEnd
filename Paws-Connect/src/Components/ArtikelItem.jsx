import React, { useState } from "react";
import {
  artikel1,
  artikel2,
  artikel3,
  logoar1,
  logoar2,
  logoar3,
} from "../assets";
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
      source: "Kementrian Keuangan",
      sourcelogo: logoar1,
    },
    {
      id: 2,
      title: "Tips Merawat Kucing Yang Baik",
      read: "07 Menit untuk baca",
      image: artikel2,
      content:
        "Diantara cara mengatasi kejenuhan bekerja sendiri baik WFH maupun WFA diantaranya adalah dengan memelihara hewan. Menurut dr. Fadhli Rizal Makarim",
      source: "Kumparan",
      sourcelogo: logoar2,
    },
    {
      id: 3,
      title: "Kucing Tidak Suka Dry Food?",
      read: "04 Menit untuk baca",
      image: artikel3,
      content:
        "Kucing umumnya menyukai dua jenis makanan tersebut, namun kadang ada kucing yang tidak suka dry food dan lebih menyukai wet food.",
      source: "Klik Dokter",
      sourcelogo: logoar3,
    },
  ]);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-10 ${styles.padding} ${styles.flexCenter}`}
    >
      {artikelitems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center p-5  border-gray-200 rounded-lg shadow-md bg-white"
        >
          <img
            className="w-full h-64 object-cover mb-4"
            src={item.image}
            alt={item.title}
          />
          <h3 className="text-sm text-gray-500 font-light">{item.read}</h3>
          <h3 className="text-lg text-gray-800 font-bold mt-2">{item.title}</h3>
          <p className="text-sm text-gray-700 font-light mt-2">
            {item.content}
          </p>
          <div className="flex items-center mt-4">
            <img
              className="w-6 h-6 mr-2"
              src={item.sourcelogo}
              alt={item.source}
            />
            <span className="text-sm text-gray-600 font-bold">
              {item.source}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtikelItem;
