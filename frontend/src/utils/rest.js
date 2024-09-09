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

export async function getUserData(token) {
  const res = await axios.get(`${URL}/user/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.status != 200) {
    return new Error("user not found");
  }
  return res;
}

export async function getEntries(token) {
  const res = await axios.get(`${URL}/entry/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.status != 200) {
    return new Error("entries not found");
  }
  return res;
}

export async function getEntry(token, id) {
  const res = await axios.get(`${URL}/entry/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.status != 200) {
    return new Error("Entry not found");
  }
  return res;
}

export async function saveEntry(token, payload) {
  const res = await axios.put(`${URL}/entry/${payload.id}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.status != 200){
    return new Error("Error while saving entry");
  }
  return res
}


export async function deleteEntry(token, id) {
  const res = await axios.delete(`${URL}/entry/${id}`, {
    headers:{
      Authorization: `Bearer ${token}`
    }
  });
  if (res.status != 200){
    return new Error("Error in deletion of entry")
  }
  return res;
}