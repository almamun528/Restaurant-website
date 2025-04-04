import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:3001",
});
const useAxiosSecure = () => {
  // request  interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access-token");
    config.headers.authorization = `Bearer ${token}`;
    return config;
  });
  return axiosSecure;
};

export default useAxiosSecure;
