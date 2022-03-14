import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Users = () => {
  let params = useParams();
  let navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl">User Name - {params.name}</h1>
        <button
          onClick={() => navigate("/about")}
          className="bg-blue-500 p-4 border-0 font-poppins my-4 text-white"
        >
          Know About Me
        </button>
      </div>
    </>
  );
};
