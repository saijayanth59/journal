import styles from "./Background.module.css";

export default function Background() {
  return (
    <>
      <div className={styles.gradientBg}>
        <div className={styles.gradientsContainer}>
          <div className={styles.g1}></div>
          <div className={styles.g2}></div>
          <div className={styles.g3}></div>
          <div className={styles.g4}></div>
          <div className={styles.g5}></div>
          <div className={styles.interactive}></div>
        </div>
      </div>
    </>
  );
}
