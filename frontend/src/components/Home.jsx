import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "./Header";
import { useEffect, useState } from "react";
import { getEntries } from "../utils/rest";

export default function Home() {
  const [entries, setEntries] = useState([]);
  const [idx, setIdx] = useState(0);

  function handleNext(){
    setIdx((prev) => Math.min(prev + 3, entries.length - 1));
  }

  function handlePrev(){
    setIdx((prev) => Math.max(prev - 3, 0));
  }

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await getEntries(localStorage.getItem("token"));
        setEntries(res.data);
      }catch(e){
        console.log(e.message)
      }
    }
    fetchData();
  });

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
      {entries.slice(idx, idx + 3).map((entry) => {
          return (
            <Link to={`entry/${entry.id}`} key={entry.id}>
              <div>
                <h2>{entry.created}</h2>
                <p>{entry.body.slice(0, 250)}</p>
              </div>
            </Link>
          );
        })}
        <section>
          <button onClick={handlePrev}>prev</button>
          <button onClick={handleNext}>next</button>
        </section>
      </div>


    </>
  );
}
