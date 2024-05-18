import React from "react";
import styles from "../style";
import NavHeader from "../Components/NavHeader";
import { channie } from "../assets";

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
      <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div class="grid grid-rows-1 grid-flow-col gap-4 p-5 ">
          <div class="row-span-4 bg-gray-400 w-52">
            <img src={channie} alt="channie" />
          </div>
          <div class="col-span-2 bg-gray-400 w-40">
            Info Kucing: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Inventore eum molestias, minus mollitia necessitatibus unde
            laborum suscipit obcaecati accusamus possimus cupiditate sed numquam
            voluptatum quae cumque fuga vitae asperiores aut.
          </div>

          <div class="col-span-2 bg-gray-400 w-40">Share this post</div>
          <div class="col-span-2 bg-gray-400 w-40">Icon socmed</div>
          <div class="col-span-2 bg-gray-400 w-40">Map Lokasi</div>
        </div>
        <br />
        <div class="grid grid-cols-4 gap-4 ">
          <div className="bg-gray-400 w-[52]">Foto kucing 1</div>
          <div className="bg-gray-400 w-[52]">Foto kucing 2</div>
          <div className="bg-gray-400 w-[52]">Foto kucing 3</div>
          <div className="bg-gray-400 w-[52]">Foto kucing 3</div>
        </div>
      </section>
    </>
  );
};

export default AdopsiDetail;
