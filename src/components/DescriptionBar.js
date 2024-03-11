import styles from "./descriptionBar.module.scss";

export default function DescriptionBar() {
  return (
    <aside className={styles.wrapper}>
      <p>ORGANIC</p>
      <img src="../icons/leaf .svg" alt="organic" />
      <p>80% MEAT</p>
      <img src="../icons/gluten-free.svg" alt="organic" />
      <p>GLUTEN-FREE</p>
      <img src="../icons/chicken.svg" alt="organic" />
      <p>NO ADDITIVES</p>
      <img src="../icons/apple.svg" alt="organic" />
      <p>FULL OF VITAMINS</p>
    </aside>
  );
}
