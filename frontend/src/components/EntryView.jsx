import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Options from "./Options";
import Header from "./Header";
import styles from "./EntryView.module.css";
import { deleteEntry, getEntry, saveEntry } from "../utils/rest";
import { useNavigate, useParams } from "react-router-dom";

export default function EntryView() {
  const [readOnly, setReadOnly] = useState(true);
  const [entry, setEntry] = useState({});
  const { slug } = useParams();
  const navgiate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getEntry(localStorage.getItem("token"), slug);
        setEntry(res.data);
      } catch (e) {
        toast.error(e.message);
      }
    };
    fetchData();
  }, []);

  function handleReadOnly() {
    setReadOnly(false);
  }

  function handleChange(e) {
    setEntry((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleSave() {
    try {
      await saveEntry(localStorage.getItem("token"), entry);
      toast.success("Entry saved");
      navgiate('/')
    } catch (e) {
      console.log(e.message);
      toast.error("Erro while saving entry");
    }
  }

  async function handleDelete(){
    try{
      const res = await deleteEntry(localStorage.getItem("token"), slug);
      console.log(res);
      toast.success('Entry deleted');
      navgiate('/');
    }catch(e){
      console.log(e.message);
      toast.error("Error in deletion of entry");
    }
  }
  

  return (
    <>
      <Header />
      <textarea
        className={styles.entryView}
        placeholder="Start writing..."
        readOnly={readOnly}
        value={entry.body}
        name="body"
        onChange={handleChange}
      ></textarea>
      <Options
        from="view"
        handleReadOnly={handleReadOnly}
        handleSave={handleSave}
        handleDelete={handleDelete}
      />
    </>
  );
}
