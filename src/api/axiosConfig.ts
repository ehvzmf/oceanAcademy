import axios from 'axios';

const apiClient = axios.create({
  baseURL: "https://www.nemooceanacademy.com:5000",
  headers: { 'Content-Type': 'application/json' },
});

export default apiClient;

/**
import apiClient from './axiosConfig';

const createLecture = (data, token) =>
  apiClient.post('/api/lectures', data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export { createLecture };

 */