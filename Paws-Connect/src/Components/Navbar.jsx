import React from "react";
import { logo1, logo2, search } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-b-2 shadow-md fixed w-full bg-white md:h-80px] ">
      <div className="md:flex space-x-6 hidden items-center flex-col justify-center md:flex-row">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Link to="/">
              <img
                src={logo1}
                alt="logo"
                className="w-[100%]  relative left-12 top-16.5 origin-top-left rotate-[-2.44deg]"
              />
            </Link>
            <Link to="/">
              <img
                src={logo2}
                alt="logo"
                className="w-[100%]  relative left-12 top-16.5 origin-top-left rotate-[15deg]"
              />
            </Link>
            <Link to="/">
              <div className="w-96 h-24 text-[#A367B1] text-2xl italic font-bold font-['Inter'] leading-[40px] relative left-5 top-7">
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
                className="text-sky-950 text-[15px] font-light
              [font-family:'Satoshi',Helvetica] leading-[40px]"
              >
                Beranda
              </div>
            </Link>
            <Link to="/adopsi">
              <div
                className="text-sky-950 text-[15px] font-light
              [font-family:'Satoshi',Helvetica] leading-[40px]"
              >
                Adopsi
              </div>
            </Link>
            <Link to="/artikel">
              <div
                className="text-sky-950 text-[15px] font-light
              [font-family:'Satoshi',Helvetica] leading-[40px]"
              >
                Artikel
              </div>
            </Link>
            <Link to="/kontak">
              <div
                className="text-sky-950 text-[15px] font-light
              [font-family:'Satoshi',Helvetica] leading-[40px]"
              >
                Kontak
              </div>
            </Link>
            <Link to="/komunitas">
              <div
                className="text-sky-950 text-[15px] font-light
              [font-family:'Satoshi',Helvetica] leading-[40px]"
              >
                Komunitas
              </div>
            </Link>
          </div>
        </div>
        <div className="flex p-4 ">
          <div className="relative ">
            <div className=" w-[250px] h-[32px] border-2  rounded-[30px] border-[#A367B1]  text-[15px] font-light [font-family:'Satoshi',Helvetica] leading-[40px] mx-10">
              <img
                src={search}
                alt="search"
                className="w-[17px] h-[17px] relative top-1 right-70 left-1"
              />
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari"
                  className="border-0 bg-transparent top-1  border rounded-md placeholder:text-[#A367B1] text-center w-[200px] h-[17px] text-sky-950 text-[15px] font-light [font-family:'Satoshi',Helvetica] leading-[40px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
