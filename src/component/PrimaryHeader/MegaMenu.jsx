import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Brand from "../BrandLogo/Brand";
import { menuItems } from "../../utils/mock/mockData";
import CompanySubMenu from "./SubMenus/CompanySubMenu";
import ServicesSubMenu from "./SubMenus/ServicesSubMenu";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div>
      <nav className="flex m-auto items-center justify-between max-w-[1696px] bg-white text-black p-4  ">
        <Brand />
        <ul className="md:flex space-x-6 items-center hidden">
          {menuItems?.map((item, index) => (
            <>
              <li
                key={index}
                className="relative group uppercase "
                onMouseEnter={() => setOpenDropdown(item?.title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center px-4 py-2 rounded-md uppercase hover:text-[#00A88E] text-sm font-medium relative after:content-[''] after:bg-[#00A88E] after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute hover:after:w-[100%] after:duration-300`}
                >
                  {item.title}
                  {item.subItems && <FaChevronDown className="ml-2 text-sm" />}
                </button>
              </li>
              {openDropdown === "Company" && <CompanySubMenu />}
              {openDropdown === "Services" && <ServicesSubMenu />}
            </>
          ))}
        </ul>
        <div className="visible md:hidden">HamBudger</div>
      </nav>
    </div>
  );
};

export default Navbar;
