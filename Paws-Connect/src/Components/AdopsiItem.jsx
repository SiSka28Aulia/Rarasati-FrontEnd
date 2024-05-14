import React from "react";

const AdopsiItem = (props) => {
  return (
    <>
      <img src={props.image} alt="adopsi" />
      <h2 className="pt-5 text-sky-950 text-[25px] font-bold font-family['Satoshi-Regular', Helvetica] leading-[37.50px]">
        {props.name}
      </h2>
      <p className="text-sky-950 text-xl font-normal font-['ABeeZee-Regular', Serif] leading-[30px]">
        {props.desc}
      </p>
    </>
  );
};

export default AdopsiItem;
