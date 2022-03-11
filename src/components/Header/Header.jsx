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
      <header className="p-3">
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
              className="humberger z-20 text-green-50 text-lg w-10 h-10 bg-green-400"
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

        <div className="scroll-down animate-bounce absolute bottom-5 left-1/2 w-10 h-10 bg-green-400 text-white grid place-items-center cursor-pointer rounded-full">
          <span className="text-2xl">&#8595;</span>
        </div>
      </header>
    </>
  );
};
