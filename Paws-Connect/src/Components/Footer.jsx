import React from "react";
import styles from "../style";
import { logo1, logo2 } from "../assets";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <section
      className={`py-4 flex-col bg-gradient-to-b from-pink from-5% via-[#C2ABD1] to-purple from-90 mx-auto px-8`}
    >
      <div className={` flex  md:flex-row mb-4 w-full`}>
        <div className="flex">
          <div className=" flex items-start lg:w-12 lg:h-12 ">
            <img
              src={logo2}
              alt="logo"
              className="w-[100%]  relative left-16 top-16.5 origin-top-left "
            />

            <img
              src={logo1}
              alt="logo"
              className="w-[100%]  relative left-12 -top-2 origin-top-left "
            />
          </div>

          <div
            className="w-96 h-24 text-primary text-2xl  font-bold font-weight-700 italic font-Inter leading-[40px] md:flex space-x-6  items-start flex-col
          justify-center"
          >
            Paw Connect
          </div>
        </div>
        <div className="flex-[1] flex justify-start item-left flex-wrap md:mt-0 mt-4 min-w-80">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col ss:my-0 my-2 min-w-[250px] mx-2 "
            >
              <h4 className="font-Satoshi-Regular font-bold text-xl  text-secondary mb-2">
                {link.title}
              </h4>
              <ul className="list-none">
                {link.links.map((item, index) => (
                  <li
                    key={item.name}
                    className={`font-Satoshi-Light font-light text-base  text-secondary hover:text-primary cursor-pointer ${
                      index !== link.links.length - 1 ? "mb-2" : "mb-0"
                    }`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
