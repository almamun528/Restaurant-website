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

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const status = error?.response?.status;
      console.log("error from axios secure Interceptors", status);
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
