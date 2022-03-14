import React from "react";
import { NavLink } from "react-router-dom";
export const Menus = () => {
  return (
    <>
      <div className="primary-menu h-full w-1/5 fixed left-0 top-0 z-10 bg-slate-50/60 backdrop-blur-sm shadow p-20">
        <ul className="font-poppins space-y-4 text-right">
          <li className="text-lg">
            <NavLink
              className={({ isActive }) => (isActive ? "text-green-400" : null)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="text-lg">
            <NavLink
              className={({ isActive }) => (isActive ? "text-green-400" : null)}
              to="/About"
            >
              About
            </NavLink>
          </li>
          <li className="text-lg">
            <NavLink
              className={({ isActive }) => (isActive ? "text-green-400" : null)}
              to="/Users/Ashik Mahmud"
            >
              Users
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
