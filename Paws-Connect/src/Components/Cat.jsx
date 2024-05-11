import React from "react";
import { catHome1 } from "../assets/catHome1.png";

const Cat = () => {
  return (
    <>
      <div>
        <img
          src={catHome1}
          alt="cathome1"
          className="relative z-[5] w-[50%] h-[50%] bottom-50 right-90"
        />
      </div>
    </>
  );
};

export default Cat;
