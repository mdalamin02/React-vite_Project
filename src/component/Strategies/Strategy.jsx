import React from "react";
import Check from "../../Svg/Icon/Check";
import Star from "../../Svg/Icon/Star";
import Playbutton from "../../Svg/Icon/Playbutton";
import frame from "./frame.png";
import Gphoto from "./Gphoto.png";
import AwardCard from "../../assets/Images/AwardCard.png";

const Strategy = () => {
  return (
    <>
      <section className="grid grid-cols-12 bg-white  md:py-20 md:px-20 gap-12">
        <aside className="col-span-5">
          <div>
            <p className="text-base text-text_blue ">Why Choose Mediusware</p>
            <div>
              <p className="text-[48px] leading-[60px] font-bold text-[#002B4F] mt-3 mb-6 ">
                Build A Strategy That Puts An Your{" "}
                <span className="text-[#00A88E]">Money To Work.</span>
              </p>
              <div>
                <p className="text-base font-normal text-[#344054]">
                  This is the main factor that sets us apart from our and allows
                  us deliver a Special ist business consul Our team applies its
                  ranging experience strategies us deliver a specialist business
                  consul Our team.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <div>
                <button className="flex items-center  bg-[#C2D9EC] text-lg font-bold py-2 px-4 text-[#0060AF] gap-4 rounded-lg">
                  <Star />
                  10 Years of Experience
                </button>
              </div>
              <div className="flex  flex-col gap-3  mt-8">
                <div className="flex items-start gap-4">
                  <div>
                    {" "}
                    <Check />
                  </div>
                  <p className="text-lg font-medium text-[#344054] ">
                    This is the main factor that sets us apart from our and
                    allows us deliver a Special.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    {" "}
                    <Check />
                  </div>
                  <p className="text-lg font-medium text-[#344054] ">
                    This is the main factor that sets us apart from our and
                    allows us deliver a Special.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    {" "}
                    <Check />
                  </div>
                  <p className="text-lg font-medium text-[#344054] ">
                    This is the main factor that sets us apart from our and
                    allows us deliver a Special.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 md:mt-[48px]">
            <div className="rounded-lg bg-[#E6EFF7] text-blue-800 md:pl-[32px]">
              <div className="font-bold md:text-[66px] md:leading-[72px] md:pt-[43px] md:pb-[16px] md:pr-[72px]">
                <p className="">70+</p>
              </div>
              <div className="md:text-[18px] md:leading-[26px] font-medium ">
                <p className=" md:pb-[54px] md:pr-[43px]">Team Members</p>
              </div>
            </div>

            <div className="rounded-lg bg-[#E6F6F4] text-blue-800 md:pl-[32px]">
              <div className="font-bold md:text-[66px] md:leading-[72px] md:pt-[43px] md:pb-[16px] md:pr-[72px]">
                <p className="text-counterText2">20+</p>
              </div>
              <div className="md:text-[18px] md:leading-[26px] font-medium ">
                <p className=" md:pb-[54px] md:pr-[5px] text-counterText2 ">
                  Countries Worlwide
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-[#F5E9F4] text-blue-800 md:pl-[32px]">
              <div className="font-bold md:text-[66px] md:leading-[72px] md:pt-[43px] md:pb-[16px] md:pr-[23px]">
                <p className="text-counterText3">100%</p>
              </div>
              <div className="md:text-[18px] md:leading-[26px] font-medium ">
                <p className=" md:pb-[54px] md:pr-[43px] text-counterText3">
                  Success Rate
                </p>
              </div>
            </div>
          </div>
        </aside>
        <div className="col-span-7">
          <div className="grid grid-cols-12">
            <div className="col-span-7">
              <img src={Gphoto} alt="" />
            </div>
            <div className="col-span-5">
              <div className=" bg-strategy ml-10 w-[212px] h-[380px]">
                <div className="pt-44 pl-20">
                  {" "}
                  <Playbutton />
                </div>
              </div>
              <div className="absulate md:mt-[-60px] md:ml-[-99px] ">
                <img src={AwardCard} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Strategy;
