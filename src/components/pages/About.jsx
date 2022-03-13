import React from "react";
import { Header } from "../Header/Header";

export const About = () => {
  return (
    <>
      <Header page={"about"} />
      <div className="container mx-auto">
        <h1 className="text-4xl">About section</h1>
      </div>
    </>
  );
};
