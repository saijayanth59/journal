import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import styles from "./Options.module.css";

export default function Options() {
  return (
    <>
      <div id={styles.saveBtn}>
        <FontAwesomeIcon
          icon={faFloppyDisk}
          style={{ color: "#f8f7fd", fontSize: "2.4em" }}
        />
      </div>
    </>
  );
}
