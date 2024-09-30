import React from "react";
import Java from "../ProjectCard/Java.svg";
import Php from "../ProjectCard/Php.svg";
import Laravel from "../ProjectCard/Laravel.svg";
import Ruby from "../ProjectCard/Ruby.svg";
import Django from "../ProjectCard/Django.svg";
import Gif from "../ProjectCard/Project.gif";
import Arrows from "../ProjectCard/Arrow-icon.svg";

const Project = () => {
  return (
    <div className="grid grid-cols-12 items-center container rounded-2xl p-12 border-dashed border border-[#0072BC] gap-16 ">
      <div className="col-span-7">
        <span className="text-white text-base font-bold bg-gradient-to-r from-[#0072BC] to-[#009FA9] py-2 px-5 rounded-full ">
          Industry | Construction
        </span>
        <div>
          <h4 className="mt-4 text-3xl text-[#002B4F] font-bold">
            VidaDynamics
          </h4>
        </div>
        <div>
          <p className="text-xl text-[#344054] mt-4">
            At Vida Projects, our goal goes beyond just offering tools, it's
            about creating a world where construction project management is
            intuitive.
          </p>
        </div>
        <div className="flex mt-12 gap-6 ">
          <div className="border-r-2 border-[#D5D5D5] pr-6">
            <p className="bg-gradient-to-r from-[#0072BC]  to-[#009FA9] text-transparent bg-clip-text text-center text-[48px] font-bold">
              40%
            </p>
            <h4 className="text-center text-[#004C40] text-[24px]">
              We increased sales by
            </h4>
          </div>
          <div className="border-r-2 border-[#D5D5D5] pr-6">
            <p className="bg-gradient-to-r from-[#0072BC] to-[#009FA9]  text-transparent bg-clip-text text-center text-[48px] font-bold">
              9.10 x
            </p>
            <h4 className="text-center text-[#004C40] text-[24px]">
              Return on investment
            </h4>
          </div>
          <div>
            <p className="bg-gradient-to-r from-[#0072BC] to-[#009FA9]   text-transparent bg-clip-text text-center text-[48px] font-bold">
              45%
            </p>
            <h4 className="text-center text-[#004C40] text-[24px]">
              Increase in placed order rate
            </h4>
          </div>
        </div>
        <div className="md:mt-[48px] ">
          <p className="font-medium text-2xl mb-2">Tools</p>
          <div className="flex gap-6 md:gap-20">
            <div className="flex gap-3 text-center">
              <img src={Php} alt="" />
              <p className="mod-text py-4 text-2xl">Php</p>
            </div>
            <div className="flex gap-3 text-center">
              <img src={Java} alt="" />
              <p className="mod-text py-4 text-2xl">Java</p>
            </div>
            <div className="flex gap-3 text-center">
              <img src={Laravel} alt="" />
              <p className="mod-text py-4 text-2xl">Laravel</p>
            </div>
            <div className="flex gap-3 text-center">
              <img src={Ruby} alt="" />
              <p className="mod-text py-4 text-2xl">Ruby</p>
            </div>
            <div className="flex gap-3 text-center">
              <img src={Django} alt="" />
              <p className="mod-text py-4 text-2xl ">Django</p>
            </div>
          </div>
        </div>
        <div className=" flex gap-2 items-center mt-8 hover:text-white hover:bg-[#0060AF] rounded-lg">
          <img
            src={Arrows}
            alt=""
            className="bg-[#0060AF] py-3 px-8 rounded-lg "
          />
          <a href="" className="text-[#0060AF] text-2xl hover:text-white">
            See Work
          </a>
        </div>
      </div>
      <div className="col-span-5">
        <img src={Gif}  alt="Gif" />
      </div>
    </div>
  );
};

export default Project;
