import styles from "./hero.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    content: "PET",
  },
  {
    id: 2,
    content: "DOG",
  },
  {
    id: 3,
    content: "CAT",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.wrapper_left}>
        <div className={styles.top}>
          <h1>
            DOES YOUR&nbsp;{" "}
            <AnimatePresence>
              <motion.span
                key={items[index].id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ ease: "easeInOut" }}
                style={{ position: "absolute", color: "#FF2E24" }}
              >
                {items[index].content}
              </motion.span>{" "}
            </AnimatePresence>
            LOOK AT YOU LIKE <span className={styles.span2}>THIS</span> WHEN YOU
            FEED THEM?
          </h1>
        </div>
        <div className={styles.bottom}>
          <p>
            It's time to turn that frown into a smile with{" "}
            <span className={styles.span3}>MunchMates.</span>
          </p>
          <a href="/redirect">
            <button className={styles.btn}>Shop</button>
          </a>
        </div>
      </div>
      <div className={styles.wrapper_right}>
        <img src="../doggy_main-min.png" alt="dog" />
      </div>
    </main>
  );
}
