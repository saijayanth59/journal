import Options from "./Options";
import styles from "./EntryView.module.css";

export default function EntryView() {
  return (
    <>
      <textarea
        className={styles.entryView}
        placeholder="Start writing..."
      ></textarea>
      <Options />
    </>
  );
}
