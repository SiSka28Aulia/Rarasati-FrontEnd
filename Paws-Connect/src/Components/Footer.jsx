import React from "react";
import styles from "../style";
import { logo1 } from "../assets";

const Footer = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-[#0C2D48]`}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo1}
            alt="logo1"
            className="w-[50px] h-[50px] object-contain"
          />
          <div className="w-96 h-24 text-[#A367B1] text-2xl italic font-bold font-['Inter'] leading-[40px] relative">
            Paw Connect
          </div>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-Satoshi font-medium text-[18px] leading-[27px] text-white">
                {link.title}
              </h4>
              <ul className="list-none mt-4">
                {link.links.map((item, index) => (
                  <li
                    key={item.name}
                    className={`font-Satoshi font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== link.links.length - 1 ? "mb-4" : "mb-0"}`}
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
