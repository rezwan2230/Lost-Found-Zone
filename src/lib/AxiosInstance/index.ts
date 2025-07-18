import envConfigue from "@/src/config/envConfigue";
import { getNewAccessToken } from "@/src/services/AuthService";
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
  async function (error) {
    const config = error.config;
    if (error?.response?.status == 401 && !config?.sent) {
      config.sent = true;
      const res = await getNewAccessToken();
      const accessToken = res.data.accessToken;

      config.headers["Authorization"] = accessToken;
      (await cookies()).set("access-token", accessToken);
      return axiosInstance(config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
