import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import { Menus } from "./Menus";
export const Header = ({ page }) => {
  const [isHide, setIsHide] = useState(false);
  const transition = useTransition(isHide, {
    from: {
      x: -1000,
      position: "fixed",
      left: "0%",
      top: "0%",
      width: "100%",
      height: "100%",
    },
    enter: { x: 0 },
    leave: { x: -1000 },
  });

  return (
    <>
      <header className="p-3 sticky top-0 z-10 bg-white">
        <div className="header-container mx-auto container">
          <nav className="flex justify-between items-center">
            <div className="logo">
              <a
                href="/"
                className="text-xl font-semibold uppercase text-green-400 font-poppins"
              >
                Ashik
              </a>
            </div>
            <button onClick={() => setIsHide((prev) => !prev)} className="z-20">
              <span className="inline-flex ml-2 w-10 h-10 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex justify-center items-center text-white rounded-full h-10 w-10 bg-green-500 text-lg">
                  {isHide ? <>&times;</> : <>&#9776;</>}
                </span>
              </span>
            </button>
          </nav>
          {transition((style, item) =>
            item ? (
              <animated.div style={style}>
                <Menus plug={page} />
              </animated.div>
            ) : null
          )}
        </div>
      </header>
    </>
  );
};
