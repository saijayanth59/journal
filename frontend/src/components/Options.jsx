import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faTrash, faPenToSquare, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Options.module.css";

export default function Options() {
  return (
    <>
      <div id={styles.saveBtn}>
        <FontAwesomeIcon
          icon={faFloppyDisk}
          style={{ color: "#f8f7fd", fontSize: "2.4em" }}
        />
      </div>{" "}
      <div id={styles.delBtn}>
        <FontAwesomeIcon
          icon={faTrash}
          style={{ color: "#f8f7fd", fontSize: "2.3em" }}
        />
      </div>{" "}
      <div id={styles.editBtn}>
        <FontAwesomeIcon
          icon={faPenToSquare}
          style={{ color: "#f8f7fd", fontSize: "2.3em" }}
        />
      </div>{" "}
      <div id={styles.backBtn}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ color: "#f8f7fd", fontSize: "2.4em" }}
        />
      </div>
    </>
  );
}
