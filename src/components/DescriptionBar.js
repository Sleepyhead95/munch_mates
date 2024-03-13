import styles from "./descriptionBar.module.scss";
import Ticker from "framer-motion-ticker";

export default function DescriptionBar() {
  const items = [
    { type: "text", content: "ORGANIC" },
    { type: "image", src: "../icons/leaf .svg", alt: "organic" },
    { type: "text", content: "80% MEAT" },
    { type: "image", src: "../icons/gluten-free.svg", alt: "gluten-free" },
    { type: "text", content: "GLUTEN-FREE" },
    { type: "image", src: "../icons/chicken.svg", alt: "chicken" },
    { type: "text", content: "NO ADDITIVES" },
    { type: "image", src: "../icons/apple.svg", alt: "apple" },
    { type: "text", content: "FULL OF VITAMINS" },
  ];

  return (
    <aside className={styles.wrapper}>
      <Ticker duration={15}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex", // Ensures text and images are inline
              alignItems: "center",
              justifyContent: "center",
              margin: "5px",
            }}
          >
            {item.type === "text" ? (
              <p
                style={{
                  fontFamily: "Baloo, sans-serif",
                  fontSize: "2rem",
                  color: "#140457",
                  padding: "0 1rem",
                }}
              >
                {item.content}
              </p>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                style={{ width: "3rem", height: "auto" }}
              />
            )}
          </div>
        ))}
      </Ticker>
      {/* <p>ORGANIC</p>
        <img src="../icons/leaf .svg" alt="organic" />
        <p>80% MEAT</p>
        <img src="../icons/gluten-free.svg" alt="organic" />
        <p>GLUTEN-FREE</p>
        <img src="../icons/chicken.svg" alt="organic" />
        <p>NO ADDITIVES</p>
        <img src="../icons/apple.svg" alt="organic" />
        <p>FULL OF VITAMINS</p> */}
    </aside>
  );
}
