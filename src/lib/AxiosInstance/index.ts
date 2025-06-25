import envConfigue from "@/src/config/envConfigue";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: envConfigue.baseApi,
});

export default axiosInstance;