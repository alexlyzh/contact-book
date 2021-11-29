import axios, {AxiosInstance} from 'axios';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  return api;
};
