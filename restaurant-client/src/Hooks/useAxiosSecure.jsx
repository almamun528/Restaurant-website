import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:3001",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logOut}= useAuth() //logOut function from context 
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
   async function (error) {
      const status = error?.response?.status;
      console.log("error from axios secure Interceptors", status);
      if (status === 401 || status === 403) {
        await logOut()
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
