import Options from "./Options";
import Header from "./Header";
import styles from "./EntryView.module.css";

export default function EntryView() {
  return (
    <>
    <Header />
      <textarea
        className={styles.entryView}
        placeholder="Start writing..."
      ></textarea>
      <Options />
    </>
  );
}
