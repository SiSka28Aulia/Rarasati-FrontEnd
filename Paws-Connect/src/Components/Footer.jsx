import React from "react";

import { logo1, logo2 } from "../assets";
import { footerLinks } from "../constants";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//
// } from "react-icons/fa";
//
// const items = [
//   { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
//   { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
//   { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
// ];

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-gradient-to-b from-pink from-5% via-[#C2ABD1] to-purple text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 py-8">
        <div className="col-span-2 pt-8 md:pt-2 ">
          <div className=" flex">
            <img src={logo1} alt="logo" className="w-16 h-16" />
            <img src={logo2} alt="logo" className="w-14 h-14" />
          </div>
          <div className="text-primary text-2xl font-bold italic font-Inter leading-[40px]">
            Paw Connect
          </div>
        </div>
        {footerLinks.slice(0, 3).map((link) => (
          <div
            key={link.title}
            className="flex flex-col ss:my-0 my-2 min-w-[150px] mx-2"
          >
            <h4 className="font-Satoshi-Regular font-bold text-xl text-secondary pt-2">
              {link.title}
            </h4>
            <ul className="list-none">
              {link.links.map((item, index) => (
                <li
                  key={item.name}
                  className={`py-1 font-Satoshi-Light font-light text-base text-secondary hover:text-primary cursor-pointer ${index !== link.links.length - 1 ? "mb-2" : "mb-0"}`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    {/*  <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">*/}
    {/*    <p className="py-4">2024 Paw Connect, LLC. All rights reserved</p>*/}
    {/*    <div className="flex justify-between sm:w-[200px] pt-4 text-2xl">*/}
    {/*      {items.map((x, index) => {*/}
    {/*        return <x.icon key={index} className="hover:text-white" />;*/}
    {/*      })}*/}
    {/*    </div>*/}
    {/*  </div>*/}
    </div>
  );
};

export default Footer;
