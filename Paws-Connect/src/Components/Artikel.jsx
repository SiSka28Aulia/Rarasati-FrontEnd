import React from "react";
import styles from "../style";
import ArtikelItem from "./ArtikelItem";
import Button from "./Button";

const Artikel = () => {
  return (
    <>
      <section className="">
        <div className="flex items-center justify-between mx-20 mt-10 mb-10">
          <h1 className="text-cyan text-3xl font-bold font-Satoshi-Regular ">
            Artikel Terbaru Kami
          </h1>
          <Button button="Selengkapnya" />
        </div>
        <ArtikelItem />
      </section>
    </>
  );
};

export default Artikel;
