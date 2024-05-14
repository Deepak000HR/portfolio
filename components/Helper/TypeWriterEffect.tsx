import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriterEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "a Data Entry Operator",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "a Accountant",
        1000,
        "a Inventory Manager",
        1000,
        "a Cook",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold"
      repeat={Infinity}
    />
  );
};

export default TypeWriterEffect;
