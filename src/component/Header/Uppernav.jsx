import React from "react";
import { Link } from "react-router-dom";
import USFlag from "../../Svg/Icon/UsaFlag";
import SkpyeIcon from "../../Svg/Icon/SkypeIcon";
import BdFlag from "../../Svg/Icon/BdFlag";
import WhatsAppIcon from "../../Svg/Icon/WhatsApp";
import GmailICon from "../../Svg/Icon/GmailIcon";
import CalendarIcon from "../../Svg/Icon/CalendarIcon";

const Uppernav = () => {
  return (
    <header className="bg-white sticky top-0 z-[9999999] shadow-2xl ">
      <nav className="hidden md:block">
        <div className="bg-[#002B4F]">
          <div className="flex justify-between items-center text-white py-2 max-w-[1696px] my-0 mx-auto px-5">
            <a
              href="tel:+1 (843) 212-6898"
              className="flex items-center gap-2 text-[13px] "
            >
              <USFlag />
              +1 (843) 212-6898
            </a>
            <a
              href="tel:+1 (843) 212-6898"
              className="flex items-center gap-2 text-[13px] "
            >
              <BdFlag />
              +8801750020408
            </a>
            <div className="flex items-center gap-4">
              <a href="skype:live:.cid.c0f674b3163c4505">
                <SkpyeIcon />
              </a>
              <a href="skype:live:.cid.c0f674b3163c4505">
                <WhatsAppIcon />
              </a>
            </div>
            <div>
              {" "}
              <a
                href="mailto:sales@mediusware.com"
                className="flex items-center gap-2 text-[13px] "
              >
                <GmailICon />
                sales@mediusware.com
              </a>
            </div>
            <div>
              {" "}
              <a
                href="/schedule-a-call"
                className="flex items-center gap-2 text-[13px] "
              >
                <CalendarIcon />
                Schedule A Call
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Uppernav;
