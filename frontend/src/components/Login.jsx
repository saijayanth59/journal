import styles from "./Login.module.css";

export default function Login() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1>Login</h1>
          <form action="">
            <div>
              <input type="text" placeholder="username" />
            </div>{" "}
            <div>
              <input type="password" placeholder="password" />
            </div>
            <div className={styles.formBtn}>
              <button>Submit</button>
              <button>Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
