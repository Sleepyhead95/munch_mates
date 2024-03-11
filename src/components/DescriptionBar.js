import styles from "./descriptionBar.module.scss";

export default function DescriptionBar() {
  return (
    <aside className={styles.wrapper}>
      <p>ORGANIC</p>
      <img src="organic.png" alt="organic" />
      <p>80% MEAT</p>
      <img src="organic.png" alt="organic" />
      <p>GLUTEN-FREE</p>
      <img src="organic.png" alt="organic" />
      <p>NO ADDITIVES</p>
      <img src="organic.png" alt="organic" />
      <p>FULL OF VITAMINS</p>
    </aside>
  );
}
