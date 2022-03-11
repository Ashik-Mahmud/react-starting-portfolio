import React from "react";
export const Menus = () => {
  return (
    <>
      <div className="primary-menu h-full w-1/5 fixed left-0 top-0 z-10 bg-slate-50/60 backdrop-blur-sm shadow p-20">
        <ul className="font-poppins space-y-4 text-right">
          <li>
            <a href="/" className="text-lg text-green-400">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="text-lg">
              About
            </a>
          </li>
          <li>
            <a href="/" className="text-lg">
              Users
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
