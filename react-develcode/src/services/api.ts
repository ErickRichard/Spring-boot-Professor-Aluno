import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8080/api/cadastro",
  headers: {
    "Content-type": "application/json"
  }
});

export default api;