import React from "react";
import Slider from "react-slick";
import Project from "../ProjectCard/Project";
const ProjectCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container ">
      <div>
        <div>
          <div className="font-medium text-2xl md:font-bold text-[48px] text-center md:line-height-[2.5rem]  md:mb-[60px] ">
            <p className="">
              Our Highlight <span className="text-[#00A88E]"> Projects</span>
            </p>
          </div>
          <div className="text-2xl font-[450] md:px-[336px] md:mb-[56px] text-center">
            <p>
              Explore success stories from clients across a range of industries,
              spanning from techpreneurs and start-ups to established
              enterprises.
            </p>
          </div>
        </div>

        <div className="">
          <Slider {...settings}>
            <Project />
            <Project />
            <Project />
            <Project />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
