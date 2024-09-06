import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Link to={"/entry"}>
        <div id={styles.saveBtn}>
          <FontAwesomeIcon
            icon={faPlus}
            style={{ color: "#f8f7fd", fontSize: "2.4em" }}
          />
        </div>
      </Link>
      <Header />
      <div className={styles.entries}>
        <Link to={"/entry/1"}>
          <div>
            <h2>Aug. 17, 2024, 4:09 p.m.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              reiciendis magnam nihil veniam. Quisquam possimus iusto asperiores
              ex repellat ea debitis maiores enim ipsum illo, qui maxime et,
              nihil eaque.
            </p>
          </div>
        </Link>
        <div>
          <h2>Aug. 17, 2024, 4:09 p.m.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            reiciendis magnam nihil veniam. Quisquam possimus iusto asperiores
            ex repellat ea debitis maiores enim ipsum illo, qui maxime et, nihil
            eaque.
          </p>
        </div>{" "}
        {/* <div>
          <h2>Aug. 17, 2024, 4:09 p.m.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            reiciendis magnam nihil veniam. Quisquam possimus iusto asperiores
            ex repellat ea debitis maiores enim ipsum illo, qui maxime et, nihil
            eaque.
          </p>
        </div> */}
        <section>
          <button>prev</button>
          <button>next</button>
        </section>
      </div>
    </>
  );
}
