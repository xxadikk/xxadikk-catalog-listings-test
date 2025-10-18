import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});


