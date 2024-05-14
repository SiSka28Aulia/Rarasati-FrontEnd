import React, { useState } from "react";

const Button = () => {
  const [more, setMore] = useState("Selengkapnya");
  const [adopt, setAdopt] = useState("Adopsi");
  return (
    <>
      <button className="w-[175px] h-[49px] items-center justify-center  relative bg-[#a367b1] rounded-[15px] font-weight-700 font-normal  [font-family:'Satoshi',Helvetica] text-[19px]  text-white text-[30px] tracking-[-0.69px] leading-7 whitespace-nowrap">
        {more}
      </button>
    </>
  );
};

export default Button;
