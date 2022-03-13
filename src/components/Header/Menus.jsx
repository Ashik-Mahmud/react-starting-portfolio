import React from "react";
import { Link } from "react-router-dom";
export const Menus = ({ plug }) => {
  return (
    <>
      <div className="primary-menu h-full w-1/5 fixed left-0 top-0 z-10 bg-slate-50/60 backdrop-blur-sm shadow p-20">
        <ul className="font-poppins space-y-4 text-right">
          <li className={plug.toLowerCase() === "home" ? "text-green-400" : ""}>
            <Link to={"/"} className={"text-lg"}>
              Home
            </Link>
          </li>
          <li
            className={plug.toLowerCase() === "about" ? "text-green-400" : ""}
          >
            <Link to={"/src/components/pages/About"} className={"text-lg"}>
              About
            </Link>
          </li>
          <li
            className={plug.toLowerCase() === "users" ? "text-green-400" : ""}
          >
            <Link to={"/src/components/pages/Users"} className={"text-lg"}>
              Users
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
