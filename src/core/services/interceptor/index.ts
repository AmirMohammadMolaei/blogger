import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = process.env.API_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onFulfilled = <T>(response: AxiosResponse<T>): T => {
  return response.data;
};

const onRejected = (error: AxiosError): Promise<never> => {
  console.log(error);
  return Promise.reject(error);
};

instance.interceptors.response.use(onFulfilled, onRejected);

export default instance;
