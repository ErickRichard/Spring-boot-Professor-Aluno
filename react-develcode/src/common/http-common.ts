import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/pessoa",
  headers: {
    "Content-type": "application/json",
  },
});
