import React from "react";
import "../../Style/index.css";
import Inudstry1 from "../../assets/Images/Indutry1.png";
import Inudstry2 from "../../assets/Images/Indutry2.png";
import Inudstry3 from "../../assets/Images/Indutry3.png";
import Inudstry4 from "../../assets/Images/Indutry4.png";
import Inudstry5 from "../../assets/Images/Indutry5.png";
import Slider from "react-slick";
import "../../Style/index.css";
function Industries() {
  const companyLogos = [Inudstry1, Inudstry2, Inudstry3, Inudstry4, Inudstry5];

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div className=" bgColor md:py-24 ">
      <div className="md:pb-16 ">
        <p className="md:text-5xl text-center md:font-bold   ">
          We are Trusted by <span className="text-[#00A88E]">Industry</span>{" "}
          Leaders
        </p>
      </div>
      <Slider {...settings}>
        {companyLogos.map((items, index) => {
          return (
            <div
              key={index}
              className="w-[320px] h-[148px] !flex  gap-5 border border-background-left items-center justify-center"
            >
              <img src={items} alt={`logo ${index + 1}`} />
            </div>
          );
        })}
      </Slider>
      <Slider {...settings}>
        {companyLogos.map((items, index) => {
          return (
            <div
              key={index}
              className="w-[320px] h-[148px] !flex   border border-background items-center justify-center mt-8 !rounded-lg  "
            >
              <img
                className="Left-to-right"
                src={items}
                alt={`logo ${index + 1}`}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Industries;
