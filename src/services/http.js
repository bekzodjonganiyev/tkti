import axios from "axios";

export const fetchApi = async (url, data) => {
  try {
    const res = await fetch(`https://tkti-backend-g6pbz.ondigitalocean.app/${url}`, data);
    return res.ok ? res.json() : res;
  } catch ({ message }) {
    return message;
  }
};

export const http = axios.create({
  baseURL: "https://tkti-backend-g6pbz.ondigitalocean.app/",
  headers: {
    Token: localStorage.getItem("token"),
  },
});
