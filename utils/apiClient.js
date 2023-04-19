import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://polar-lowlands-54507.herokuapp.com/api',
});

apiClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`;
  return config;
});

export default apiClient;
