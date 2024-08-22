import styles from "./Login.module.css";

export default function Register() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1>Register</h1>
          <form action="">
            <div>
              <input type="text" placeholder="username" />
            </div>{" "}
            <div>
              <input type="email" placeholder="email" />
            </div>
            <div>
              <input type="password" placeholder="password" />
            </div>{" "}
            <div className={styles.formBtn}>
              <button>Submit</button>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
