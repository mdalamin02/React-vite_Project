import React from "react";
import Hero from "../../assets/Images/Hero.png";
import Banner1 from "../../assets/Images/Banner1.png";
import Banner2 from "../../assets/Images/Banner2.png";
import Banner3 from "../../assets/Images/Banner3.png";
import Banner4 from "../../assets/Images/Banner4.png";
import Arrows from "../../assets/Arrows.svg";

import { useTypewriter, Cursor } from "react-simple-typewriter";

function Header() {
  const [text] = useTypewriter({
    words: ["ERP SOLUTION", "SOFTWARE SOLUTION"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 30,
  });
  return (
    <div
      className="bg-cover bg-center h-[60vh] lg:h-[90vh]"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="container mx-auto">
        <div>
          <h1 className="md:text-[80px] md:leading-[90px]  md:pt-[96px] font-bold text-white text-center ">
            WE SHAPE THE ART OF TECHNOLOGY{" "}
            <span className="bg-gradient-to-r from-[#369F99]  to-[#FFFFFF] inline-block text-transparent bg-clip-text">
              {text}
            </span>
            <Cursor />
          </h1>
        </div>
        <div>
          <p className="text-[24px] text-center text-white mt-8 ">
            Generative-Driven Development with the affordability and scale of
            Nearshore outsourcing all in your time zone.
          </p>
        </div>
        <div className="flex  justify-center items-center gap-8 md:mt-12">
          <button className="flex  items-center md:text-[22px] md:py-[18px] md:font-bold md:px-5 rounded-xl uppercase text-white bg-[#0060AF] gap-3  hover:bg-white hover:text-black">
            Request a quote{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1725 7.68006L4.85255 22L2.5 19.6475L16.8183 5.32751H4.19869V2H22.5V20.3013H19.1725V7.68006Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="flex  items-center md:text-[22px] md:py-[18px] md:font-bold md:px-5 rounded-xl uppercase text-white border  gap-3  hover:bg-white hover:text-black ">
            Hire Developers{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1725 7.68006L4.85255 22L2.5 19.6475L16.8183 5.32751H4.19869V2H22.5V20.3013H19.1725V7.68006Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="flex  items-center justify-between mt-20">
          <div className="flex items-center gap-11 ">
            <img src={Banner1} alt="" />
            <img src={Banner2} alt="" />
          </div>
          <div className="flex items-center gap-11  ">
            <img src={Banner3} alt="" srcset="" />
            <img src={Banner4} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
