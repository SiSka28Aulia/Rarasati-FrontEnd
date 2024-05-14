import React from "react";

import styles from "../style";

const NavHeader = (props) => {
  return (
    <>
      <div className=" py-8  h-[121px] bg-gray-200/50">
        <h1 className="px-32 text-[#0C2D48] text-3xl font-semibold font-family['Satoshi-Reguler, Helvetica'] leading-[45px] ">
          {props.nav}
        </h1>
      </div>
    </>
  );
};

export default NavHeader;
