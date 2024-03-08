import styles from "./header.module.scss";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className={styles.header}>
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
