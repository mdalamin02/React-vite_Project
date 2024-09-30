import React, { useState } from "react";

const clientInfo = ({ cardData }) => {
  const { image, text, years } = cardData;

  return (
    <div
      className={`card w-75 bg-white rounded-xl md:w-[400px] md:h-[400px] flex flex-col  justify-between translate-transform duration-300 ease-linear`}
    >
      <figure className="px-8 py-6">
        <img className="w-[124px]" src={image} alt="banner" />
      </figure>
      <div>
        <div className="border-b-2 border-[#D0D5DD] pb-4 ">
          <h2 className="md:text-[32px] font-bold text-start text-[#344054] ml-5  pl-6">
            {text}
          </h2>
        </div>
        <p className="md:text-[80px] font-bold text-[#002B4F] px-8 pl-6">
          {years}
        </p>
      </div>
    </div>
  );
};

export default clientInfo;
