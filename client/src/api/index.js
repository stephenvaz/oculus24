import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {

    const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    req.headers.authorization = user.stsTokenManager.accessToken;
    console.log("req.headers.authorization:", req.headers.authorization);
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
        alert("Session expired. Please login again.");

    }
    return Promise.reject(error);
  }
);


class APIRequests {
  static async pay(data) {
    // return await API.post("/pay", data).then((t) => t.json());
    return await API.post("/pay", data).then((t) => t.data);
  }
}

export default APIRequests;