
import axios from 'axios';


const axiosInstance = axios.create({
     // @ts-ignore
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true, // ⚠️ Enables sending HTTP-only cookies
});

// Automatically add access token to each request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Interceptor to refresh token on 401
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // @ts-ignore
        console.log(`${import.meta.env.VITE_BASE_URL}`);
        const refreshRes = await axios.post(
          '${import.meta.env.VITE_BASE_URL}/refresh',
          {},
          { withCredentials: true }
        );

        const newAccessToken = refreshRes.data.token;
        localStorage.setItem('accessToken', newAccessToken);

        // Update the Authorization header and retry the original request
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Refresh failed:', refreshError);
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
