import axios from "axios";

const URL = "http://localhost:8000/";

export async function login(payload) {
  const res = await axios.post(`${URL}/token/`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status != 200) {
    return new Error("username or password wrong");
  }
  return res.data;
}

export async function getUserData(token){
  const res = await axios.get(`${URL}/user/`, {
    headers :{
      Authorization: `Bearer ${token}`,
    }
  })
  if(res.status != 200){
    return new Error("user not found");
  }
  return res
}
