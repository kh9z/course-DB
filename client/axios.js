import axios from "axios";
const api = "http://localhost:4000/api";
const http = axios.create({ baseURL: api, withCredentials: true });

http.interceptors.request.use((config) => {
    const token = localStorage.getItem(`token`);

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export {http};