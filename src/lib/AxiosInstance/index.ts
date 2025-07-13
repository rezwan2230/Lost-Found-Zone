import envConfigue from "@/src/config/envConfigue";
import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: envConfigue.baseApi,
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const cookeiStore = cookies();
    const accessToken = (await cookeiStore).get("access-token")?.value;
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
