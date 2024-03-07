import styles from "./header.module.scss";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/home">
          <img src="logo.svg" alt="logo" />
        </a>
      </div>
      <SearchBar />
      <NavBar />
    </header>
  );
}
