import styles from "./searchBar.module.scss";

export default function SearchBar() {
  return (
    <div className={styles.search_bar}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src="./icons/search.svg" alt="search" />
          <input
            className={styles.text}
            type="text"
            placeholder="Search"
            name="search"
          />
        </div>
        <input
          className={styles.btn}
          type="submit"
          name="search-submit"
          aria-label="Search"
          value="Go"
        />
      </div>
    </div>
  );
}
