import styles from "./Entry.module.css";

export default function Entry() {
  return (
    <>
      <div className={styles.entries}>
        <div>
          <h2>Aug. 17, 2024, 4:09 p.m.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            reiciendis magnam nihil veniam. Quisquam possimus iusto asperiores
            ex repellat ea debitis maiores enim ipsum illo, qui maxime et, nihil
            eaque.
          </p>
        </div>{" "}
        <div>
          <h2>Aug. 17, 2024, 4:09 p.m.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            reiciendis magnam nihil veniam. Quisquam possimus iusto asperiores
            ex repellat ea debitis maiores enim ipsum illo, qui maxime et, nihil
            eaque.
          </p>
        </div>{" "}
        <div>
          <h2>Aug. 17, 2024, 4:09 p.m.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            reiciendis magnam nihil veniam. Quisquam possimus iusto asperiores
            ex repellat ea debitis maiores enim ipsum illo, qui maxime et, nihil
            eaque.
          </p>
        </div>
        <section>
          <button>prev</button>
          <button>next</button>
        </section>
      </div>
    </>
  );
}
