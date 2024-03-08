import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper_left}>
        <div className={styles.top}>
          <h1>
            DOES YOUR <span className={styles.pet}>PET</span> LOOK AT YOU LIKE{" "}
            <span className={styles.this}>THIS</span> WHEN YOU FEED THEM?
          </h1>
        </div>
        <div className={styles.bottom}>
          <p>It's time to turn that frown into a smile with MunchMates.</p>
          <a href="/redirect">
            <button className={styles.btn}>Shop</button>
          </a>
        </div>
      </div>
      <div className={styles.wrapper_right}>
        <img src="../doggy-min.png" alt="dog" />
      </div>
    </main>
  );
}
