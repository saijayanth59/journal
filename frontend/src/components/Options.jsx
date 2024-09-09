import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faTrash,
  faPenToSquare,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Options.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Options({ from, handleReadOnly, handleSave, handleDelete }) {

  const [curr, setCurr] = useState(from);
  const navigate = useNavigate();
  function handleEditClick() {
    setCurr("edit");
    handleReadOnly();
  }


  return (
    <>
      {curr != "view" && (
        <div id={styles.saveBtn} onClick={handleSave}>
          <FontAwesomeIcon
            icon={faFloppyDisk}
            style={{ color: "#f8f7fd", fontSize: "2.4em" }}
          />
        </div>
      )}
      {curr !== "edit" && curr !== "new" && (
        <div id={styles.delBtn} onClick={handleDelete}>
          <FontAwesomeIcon
            icon={faTrash}
            style={{ color: "#f8f7fd", fontSize: "2.3em" }}
          />
        </div>
      )}
      {curr === "view" && (
        <div id={styles.editBtn} onClick={handleEditClick}>
          <FontAwesomeIcon
            icon={faPenToSquare}
            style={{ color: "#f8f7fd", fontSize: "2.3em" }}
          />
        </div>
      )}
      <div id={styles.backBtn} onClick={() => navigate(-1)}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ color: "#f8f7fd", fontSize: "2.4em" }}
        />
      </div>
    </>
  );
}
