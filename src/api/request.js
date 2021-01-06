import axios from "axios";
import router from "@/router";
import { Message } from "element-ui";

const SERVICEDEFAULT = axios.create({
  timeout: 60000
});
// SERVICEDEFAULT.interceptors.request.use(
//   config => {
//     let authToken = sessionStorage.getItem("access_token");
//     if (authToken != null) {
//       config.headers.Authorization = `Bearer ` + authToken;
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   }
// );
SERVICEDEFAULT.interceptors.response.use(
  response => {
    if (response.data.code === "401" && !response.data.success) {
      Message.error(response.response.data.error);
      router.push({ path: "/login" });
      sessionStorage.clear();
    }
    return response.data;
  },
  error => {
    if (error && error.response) {
      if (error.response.data.code === "401") {
        Message.error(error.response.data.error);
        router.push({ path: "/login" });
      }
    }
    return Promise.reject(error);
  }
);

SERVICEDEFAULT.all = axios.all; // all方法没有挂载到 axios 实例对象中

const UploadFile = axios.create({
  timeout: 20000
});

export { SERVICEDEFAULT, UploadFile };
