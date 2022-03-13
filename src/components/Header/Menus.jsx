import React from "react";
import { Link } from "react-router-dom";
export const Menus = () => {
  return (
    <>
      <div className="primary-menu h-full w-1/5 fixed left-0 top-0 z-10 bg-slate-50/60 backdrop-blur-sm shadow p-20">
        <ul className="font-poppins space-y-4 text-right">
          <li>
            <Link to={"/"} className="text-lg text-green-400">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/src/components/pages/About"} className="text-lg">
              About
            </Link>
          </li>
          <li>
            <Link to={"/src/components/pages/Users"} className="text-lg">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
