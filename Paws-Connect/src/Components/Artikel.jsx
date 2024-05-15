import React from "react";
import styles from "../style";
import ArtikelItem from "./ArtikelItem";
import Button from "./Button";

const Artikel = () => {
  return (
    <>
      <div className="flex items-center justify-between mx-32 mt-10 mb-10">
        <h1 className="text-[#274472] text-[40px] font-bold leading-[105px]">
          Artikel Terbaru Kami
        </h1>
        <Button button="Selengkapnya" />
      </div>
      <section className={`${styles.flexCenter} ${styles.paddingY}`}>
        <ArtikelItem />
      </section>
    </>
  );
};

export default Artikel;
