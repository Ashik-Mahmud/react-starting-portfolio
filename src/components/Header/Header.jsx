import React from "react";

export const Header = () => {
  return (
    <>
      <header className="p-4 bg-gray-50 dark:bg-slate-700">
        <div className="header-container mx-auto container">
          <nav className="flex justify-between items-center">
            <div className="logo">
              <a
                href="/"
                className="text-blue-500 dark:text-gray-50 dark:border-gray-50 dark:shadow-none rounded-sm border font-poppins border-blue-500 py-1 shadow-md shadow-blue-500/25 px-3 block"
              >
                Logo
              </a>
            </div>
            <div className="primary-menu">
              <ul className="font-poppins flex flex-wrap items-center space-x-10 dark:text-gray-100">
                <li>
                  <a href="/" className="text-blue-500 dark:text-lime-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Users</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
