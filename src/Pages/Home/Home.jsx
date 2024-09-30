import React from "react";
import Hero from "../../component/Hero/Hero";
import Industries from "../../component/Industries/Industries";
import ClientCard from "../../component/ClientCard/ClientCard";
import Strategy from "../../component/Strategies/Strategy";
import Service from "../../component/ServiceCard/Service";
import ProjectCard from "../../component/ProjectCard/ProjectCard";

const HeroSerction = () => {
  return (
    <>
      <Hero />
      <Industries />
      <ClientCard />
      <Strategy />
      <Service />
      <ProjectCard />
    </>
  );
};

export default HeroSerction;
