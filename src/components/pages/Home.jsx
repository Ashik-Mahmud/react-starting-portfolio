import React from "react";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { Services } from "../Services/Services";

export const Home = () => {
  return (
    <>
      <Header page={"home"} />
      <Hero />
      <Services />
    </>
  );
};
