import styles from "./searchBar.module.scss";

export default function SearchBar() {
  return (
    <div className={styles.search_bar}>
      <input
        className={styles.text}
        type="text"
        placeholder="Search"
        name="search"
      />
      <input className={styles.btn} type="submit" name="search-submit" />
    </div>
  );
}
