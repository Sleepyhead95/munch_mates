import styles from "./header.module.scss";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import React, { useState, useEffect, useCallback } from "react";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      // if scroll down, hide the navbar
      setShow(false);
    } else {
      // if scroll up, show the navbar
      setShow(true);
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
    <header className={`${styles.header} ${!show ? styles.hidden : ""}`}>
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
