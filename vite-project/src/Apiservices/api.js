// src/Apiservices/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://educonnect-back-end.onrender.com',
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('studentToken'); // ✅ Make sure this is set
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default api;
