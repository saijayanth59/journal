import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useState } from "react";
import {login} from "../utils/rest";
import toast from "react-hot-toast";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  async function handleSubmit(e){
    e.preventDefault();
    try {
       const res = await login(formData);
       toast.success("Logged...");
       localStorage.setItem("token", res.access);
       navigate('/');
    }catch(e){
      toast.error(e.message);
    }

  }

  return (
    <>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="username"
                onChange={handleChange}
                name="username"
                value={formData.username}
              />
            </div>{" "}
            <div>
              <input
                type="password"
                placeholder="password"
                onChange={handleChange}
                name="password"
                value={formData.password}
              />
            </div>
            <div className={styles.formBtn}>
              <button type="submit">Submit</button>
              <Link to={"/register"}>
                <button>Register</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
