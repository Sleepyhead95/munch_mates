import styles from "./header.module.scss";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import React, { useState, useEffect, useCallback } from "react";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      // if scroll down, hide the navbar
      setShow(false);
    } else {
      // if scroll up, show the navbar
      setShow(true);
    }
    if (window.scrollY > 131) {
      // Assuming 100px is your threshold
      setBackgroundColor("#140457"); // Set to desired solid color with slight transparency
    } else {
      setBackgroundColor("transparent"); // Make background transparent again when scrolled to top
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  }, [lastScrollY]); // Dependencies for useCallback

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  return (
    <header
      className={`${styles.header} ${!show ? styles.hidden : ""}`}
      style={{ backgroundColor }}
    >
      <div className={styles.logo}>
        <a href="/home">
          <img src="MM_logo.png" alt="MunchMates logo" />
        </a>
      </div>
      <SearchBar />
      <NavBar />
    </header>
  );
}
