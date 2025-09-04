import axios from "axios";
import { BASE_URL } from "../../config";

const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,  // Important for cookies if using them
    //   timeout: 10000,
});

// Request interceptor
API.interceptors.request.use(
    (config) => {
        // Skip adding auth header for refresh token endpoint
        if (config.url === '/auth/refresh-token') {
            return config;
        }
        
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
API.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Skip if it's a login request or refresh token request
        if (originalRequest.url.includes('/auth/login') || 
            originalRequest.url.includes('/auth/refresh-token')) {
            return Promise.reject(error);
        }

        // Network errors
        if (!error.response) {
            console.error("Network error - Server may be down");
            return Promise.reject(error);
        }

        // Handle 401 Unauthorized
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem("refreshToken");
                if (!refreshToken) {
                    throw new Error("No refresh token available");
                }

                const response = await axios.post(`${BASE_URL}/auth/refresh-token`, 
                    { refreshToken },
                    { withCredentials: true }
                );

                localStorage.setItem("accessToken", response.data.accessToken);
                localStorage.setItem("refreshToken", response.data.refreshToken);

                originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
                return API(originalRequest);
            } catch (refreshError) {
                console.error("Refresh token failed:", refreshError);
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                window.location.href = "/login?session=expired";
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

// API methods with enhanced error handling
const apiMethods = {
    get: async (url, config = {}) => {
        try {
            return await API.get(url, config);
        } catch (error) {
            throw new Error(error.response?.data?.message || "Failed to fetch data");
        }
    },
    post: async (url, data, config = {}) => {
        try {
            return await API.post(url, data, config);
        } catch (error) {
            throw new Error(error.response?.data?.message || "Failed to post data");
        }
    },
    put: async (url, data, config = {}) => {
        try {
            return await API.put(url, data, config);
        } catch (error) {
            throw new Error(error.response?.data?.message || "Failed to update data");
        }
    },
    delete: async (url, config = {}) => {
        try {
            return await API.delete(url, config);
        } catch (error) {
            throw new Error(error.response?.data?.message || "Failed to delete data");
        }
    },
};

export default apiMethods;