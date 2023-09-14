"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import logo from "../../Assets/logo.svg";
import logoSmall from "../../Assets/logo-small.svg";
import Image from "next/image";

const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const prevScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`Header ${isScrolledDown ? "hidden" : ""}`}>
      <Image
        loading="lazy"
        src={logo}
        alt="Wow Company logo"
        className="logo"
      />
      <Image
        loading="lazy"
        src={logoSmall}
        alt="Wow Company logo"
        className="logo-small"
      />
      <div className="userpic">VB</div>
    </header>
  );
};

export { Header };
