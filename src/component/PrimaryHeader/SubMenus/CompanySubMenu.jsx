import React from "react";

const CompanySubMenu = () => {
  const Section = ({ title, links, index }) => (
    <div className={`${index === 0 ? "col-span-2" : "col-span-1"}`}>
      <h4 className="text-primary-1 font-semibold text-sm uppercase">
        {title}
      </h4>
      {index === 0 ? (
        <div className="grid grid-cols-2 gap-4 pt-4">
          {links.map((link, linkIndex) => (
            <div key={linkIndex} className="flex flex-col gap-2">
              <a className="hover:text-primary-3" href={link.url}>
                {link.name}
              </a>
            </div>
          ))}
        </div>
      ) : (
        <ul className="flex flex-col gap-2 pt-4">
          {links.map((link, linkIndex) => (
            <li key={linkIndex}>
              <a className="hover:text-primary-3" href={link.url}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  return (
    <div className="absolute top-32 left-1/2 -translate-x-1/2 px-4 py-2 bg-white z-10 border border-red-300">
      <div className="p-8 grid grid-cols-4 gap-3">
        {mockData.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            links={section.links}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanySubMenu;
const mockData = [
  {
    title: "About Us",
    links: [
      { name: "Who We Are", url: "/why-mediusware" },
      { name: "Women Empowerment", url: "/women-empowerment" },
      { name: "Our Team", url: "/team#main" },
      { name: "Career", url: "https://job.mediusware.com/" },
      { name: "Blogs", url: "/blog#main" },
      { name: "CSR", url: "/csr" },
      { name: "Leadership and vision", url: "/leadership&vision" },
    ],
  },
  {
    title: "Models",
    links: [
      { name: "Delivery Models", url: "/delivery-model" },
      { name: "Engagement Model", url: "/engagement-model" },
      { name: "Development Methodology", url: "/development-methodology" },
    ],
  },
  {
    title: "Testimonial",
    links: [
      { name: "Client Testimonial", url: "/client-testimonial" },
      { name: "Clutch Testimonial", url: "/clutch-testimonial" },
      { name: "Awards", url: "/awards" },
    ],
  },
];
