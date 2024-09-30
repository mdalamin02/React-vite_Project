import React from "react";
import Client from "../ClientCard/Clients.png";
import Country from "../ClientCard/Country.png";
import Experience from "../ClientCard/Experience.png";
import Project from "../ClientCard/Project.png";
import ClientInfo from "./ClientInfo";

const ClientCard = () => {
  return (
    <>
      <div className="">
        {" "}
        <div className="bgColor2  ">
          <div className="flex justify-center gap-8 md:pb-28 md:px-10 ">
            {clientData.map((cardData) => (
              <ClientInfo key={cardData.id} cardData={cardData}></ClientInfo>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientCard;

const clientData = [
  { id: 1, image: Client, text: " Years experience", years: `7+` },
  { id: 1, image: Country, text: "Happy Clients", years: `500+` },
  { id: 1, image: Experience, text: "Countries Served", years: `20+` },
  { id: 1, image: Project, text: "Project Complete", years: `700+` },
];
