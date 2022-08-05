import axios from "axios";

const axiosClient = axios.create({
  timeout: 180000,
  withCredentials: false,
  headers: {
    //localStorge에서 받은 refresh token
    Authorization: `Bearer testToken`
  }
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // const accessToken = retrieveUserToken("access"); // access 토큰을 가져오는 함수
    const accessToken = "testAccessToken";
    if (accessToken) {
      config.headers["Content-Type"] = "application/json; charset=utf-8";

      config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default axiosClient;
