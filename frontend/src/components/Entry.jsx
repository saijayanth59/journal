import Options from "./Options";
import Header from "./Header";
import styles from "./Entry.module.css";

export default function Entry() {
  return (
    <>
      <Header />
      <textarea
        className={styles.entryView}
        placeholder="Start writing..."
      ></textarea>
      <Options from="new"/>
    </>
  );
}
