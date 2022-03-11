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
            <button
              onClick={() => setIsHide((prev) => !prev)}
              className="z-20 rounded-md text-green-50 text-lg w-10 h-10 bg-green-400"
            >
              {isHide ? <>&times;</> : <>&#9776;</>}
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
