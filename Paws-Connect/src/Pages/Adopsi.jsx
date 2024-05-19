import React from "react";
import styles from "../style";
import { Link } from "react-router-dom";
import NavHeader from "../Components/NavHeader";
import { puppiesItems } from "../constants";

const Adopsi = () => {
  return (
    <>
      <NavHeader
        nav="Adopsi"
        page="Beranda"
        pagenav1=">"
        page2="Adopsi"
        pagenav2=">"
        page3="Adopsi"
      />
      <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className="grid grid-cols-3 gap-8 p-4">
          {puppiesItems.map((item) => (
            <div key={item.title} className="relative w-fit overflow-hidden ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-86 object-cover hover:cursor-pointer hover:scale-105 duration-300"
              />
              <div className="p-4 w-full">
                <h2 className="text-secondary text-3xl font-bold font-Satoshi-Regular pt-2 leading-[37.50px]">
                  {item.title}
                </h2>
                <p className="text-secondary text-xl font-light font-Satoshi-Light leading-[30px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Adopsi;
