import React from "react";
import { logo1, logo2, search } from "../assets";
import styles from "../style";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="md:flex space-x-6 hidden items-center flex-col justify-center md:flex-row">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Link to="/">
              <img
                src={logo2}
                alt="logo"
                className="w-[100%]  relative left-16 top-16.5 origin-top-left "
              />
            </Link>
            <Link to="/">
              <img
                src={logo1}
                alt="logo"
                className="w-[100%]  relative left-12 -top-2 origin-top-left "
              />
            </Link>
            <Link to="/">
              <div
                className="w-96 h-24 text-primary text-2xl  font-bold font-weight-700 italic font-Inter leading-[40px] md:flex space-x-6  items-start flex-col
          justify-center"
              >
                Paw Connect
              </div>
            </Link>
          </div>
          <div
            className="md:flex space-x-6  items-center flex-col
          justify-center md:flex-row"
          >
            <Link to="/">
              <div
                className="text-sky-950 text-base font-light
              font-Satoshi-Light leading-[40px]"
              >
                Beranda
              </div>
            </Link>
            <Link to="/adopsi">
              <div
                className="text-sky-950 text-base font-light
              font-Satoshi-Light leading-[40px]"
              >
                Adopsi
              </div>
            </Link>
            <Link to="/artikel">
              <div
                className="text-sky-950 text-base font-light
              font-Satoshi-Light leading-[40px]"
              >
                Artikel
              </div>
            </Link>
            <Link to="/kontak">
              <div
                className="text-sky-950 text-base font-light
              font-Satoshi-Light leading-[40px]"
              >
                Kontak
              </div>
            </Link>
            <Link to="/komunitas">
              <div
                className="text-sky-950 text-base font-light
              font-Satoshi-Light leading-[40px]"
              >
                Komunitas
              </div>
            </Link>
          </div>
        </div>
        <div className="flex p-4 ">
          <div className="relative ">
            <div
              className={` ${styles.flexCenter}  w-[270px] h-[32px] border-2  rounded-[30px] border-primary text-base font-light font-Satoshi-Light leading-[40px] mx-10`}
            >
              <img
                src={search}
                alt="search"
                className="w-[17px] h-[17px] relative "
              />

              <input
                type="text"
                placeholder="Cari"
                className="border-0 bg-transparent outline-0 rounded-md placeholder:text-primary text-center w-[200px] h-[17px] text-sky-950 text-base font-light font-Satoshi-Light leading-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
