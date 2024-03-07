import styles from "./navBar.module.scss";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/home">Shop</a>
        </li>
        <li>
          <a href="/about">Cart</a>
        </li>
        <li>
          <a href="/contact">Login</a>
        </li>
      </ul>
    </nav>
  );
}
