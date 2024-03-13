import styles from "./descriptionBar.module.scss";
import { motion } from "framer-motion";

export default function DescriptionBar() {
  const motionBanner = {
    animate: {
      x: [1000, -1000],
      transition: {
        x: {
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  return (
    <aside className={styles.wrapper}>
      <motion.div
        variants={motionBanner}
        animate="animate"
        style={{ display: "flex", alignItems: "center" }} // Maintain your flex layout within the motion div
      >
        <p>ORGANIC</p>
        <img src="../icons/leaf .svg" alt="organic" />
        <p>80% MEAT</p>
        <img src="../icons/gluten-free.svg" alt="organic" />
        <p>GLUTEN-FREE</p>
        <img src="../icons/chicken.svg" alt="organic" />
        <p>NO ADDITIVES</p>
        <img src="../icons/apple.svg" alt="organic" />
        <p>FULL OF VITAMINS</p>
      </motion.div>
    </aside>
  );
}
