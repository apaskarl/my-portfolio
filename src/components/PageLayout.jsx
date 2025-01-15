import React, { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import karlLogo from "../assets/images/k-logo-primary.png";
import HeaderLink from "./HeaderLink";

import noise from "../assets/images/noise.png";

const PageLayout = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className="min-h-screen bg-[var(--dark)]"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, var(--dark) 5%, var(--dark))`,
      }}
    >
      <header className="fixed flex w-full items-center justify-between bg-[var(--secondary)] px-8 py-5 shadow-md md:px-20">
        <div className="font-spaceMono flex cursor-pointer items-center gap-x-2 text-2xl font-semibold tracking-tight text-[var(--white)]">
          <img src={karlLogo} alt="karl-logo" className="h-8 w-8" />
          karl.dev
        </div>

        <div className="hidden items-center gap-x-10 md:flex">
          <HeaderLink route="/" label="Home" />
          <HeaderLink route="/" label="About" />
          <HeaderLink route="/" label="Work" />
          <HeaderLink route="/" label="Contact" />
        </div>

        <MenuButton onClick={toggleMenu} />
        <div
          className={`${showMenu ? "translate-x-0" : "translate-x-full"} fixed right-0 top-0 flex h-16 min-h-screen w-full flex-col items-center justify-center gap-y-10 bg-[var(--secondary)] duration-200`}
        >
          <HeaderLink route="/" label="Home" />
          <HeaderLink route="/" label="About" />
          <HeaderLink route="/" label="Work" />
          <HeaderLink route="/" label="Contact" />
        </div>
      </header>

      <main>{children}</main>

      <footer className=""></footer>
    </div>
  );
};

export default PageLayout;
