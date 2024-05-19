import React from "react";
import ArtikelItem from "../Components/ArtikelItem";
import Button from "../Components/Button";
import NavHeader from "../Components/NavHeader";
import { artikelItems } from "../constants";

const Artikel = () => {
  return (
    <>
      <NavHeader nav="Artikel" page="Beranda" pagenav1=">" page2="Artikel" />
      <section className="">
        <div className="container mx-20">
          {artikelItems.slice(0, 1).map((item) => (
            <div
              key={item.id}
              className="flex  items-center p-5  space-x-20 mt-8 ml-6 "
            >
              <img
                className="w-96 h-72  scale-125 object-cover mb-4"
                src={item.image}
                alt={item.title}
              />
              <div className="flex-1 w-64 h-72">
                <h3 className="text-sm t font-light">{item.read}</h3>
                <h3 className="text-lg  font-bold mt-2">{item.title}</h3>
                <p className="text-sm font-light mt-2 mr-10">{item.content}</p>
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
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mx-20 mt-10 mb-10">
          <h1 className="text-cyan text-3xl font-bold font-Satoshi-Regular ">
            Artikel Paling Populer
          </h1>
          <div className="flex space-x-5">
            <Button button="Cari Artikel" />
            <Button button="Search" />
          </div>
        </div>
        <ArtikelItem />
      </section>
    </>
  );
};

export default Artikel;
