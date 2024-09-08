import { createContext, useEffect, useState } from "react";
import { getUserData } from "../utils/rest";

const AuthContext = createContext({
  user: null,
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("I am working");
    if (user == null) {
      const token = localStorage.getItem("token");
      if (token) {
        const fetchData = async () => {
          try {
            const res = await getUserData(token);
            setUser(res.data);
          } catch (e) {
            console.log(e.message);
          }
        };
        fetchData();
      }
    }
  }, []);

  const authContext = {
    user,
  };
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
