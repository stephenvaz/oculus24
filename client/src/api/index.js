import axios from "axios";
import { auth } from "../firebase/config";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:5000/api",
});

API.interceptors.request.use(async (req) => {

    // const user = JSON.parse(localStorage.getItem("user"));

    const user = auth.currentUser;

  if (user !== null) {
    req.headers.authorization = user.accessToken;
    console.log("req.headers.authorization:", req.headers.authorization);
    console.log("token exp", new Date(user.stsTokenManager.expirationTime));
  }

  return req;
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
    //   window.location.href = "/auth";
        localStorage.clear();
        // alert("Session expired. Please login again.");
        window.location.reload();

    }
    return Promise.reject(error);
  }
);


class APIRequests {
  static async pay(data) {
    // return await API.post("/pay", data).then((t) => t.json());
    return await API.post("/pay", data).then((t) => t.data);
  }
  static async getTransactions() {
    return await API.get("/user/transactions").then((t) => {
      if (t.status === 200) {
        return t.data;
      }
      return "error";
    });
  }
}

export default APIRequests;