import { useState } from "react";
import Options from "./Options";
import Header from "./Header";
import styles from "./Entry.module.css";

export default function EntryView() {
  const [readOnly, setReadOnly] = useState(true);
  function handleReadOnly(){
    setReadOnly(false);
  }
  return (
    <>
    <Header />
      <textarea
        className={styles.entryView}
        placeholder="Start writing..."
        readOnly={readOnly}
      ></textarea>
      <Options from="view" handleReadOnly={handleReadOnly}/>
    </>
  );
}
