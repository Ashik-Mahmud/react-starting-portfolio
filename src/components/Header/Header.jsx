import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Menus } from "./Menus";
export const Header = () => {
  const [isHide, setIsHide] = useState(false);
  const animation = useSpring({
    config: {
      duration: 450,
    },
    opacity: isHide ? 1 : 0,
    transform: isHide ? "translateX(0%)" : "translateX(-100%)",
    position: isHide ? "fixed" : "none",
    width: "100%",
    height: "100%",
    left: "0%",
    top: "0%",
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
              <span class="inline-flex ml-2 w-10 h-10 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex justify-center items-center text-white rounded-full h-10 w-10 bg-green-500 text-lg">
                  {isHide ? <>&times;</> : <>&#9776;</>}
                </span>
              </span>
            </button>
          </nav>
          {isHide ? (
            <animated.div style={animation}>
              <Menus />
            </animated.div>
          ) : null}
        </div>
      </header>
    </>
  );
};
