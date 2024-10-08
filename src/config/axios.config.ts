import axios, { InternalAxiosRequestConfig, AxiosError } from 'axios';

const baseURL =
  (import.meta.env.VITE_APP_BASE_URL as string) || 'https://defaulturl.com';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: baseURL,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers = config.headers || {}; // Ensure headers are defined
    config.headers['Content-Type'] = 'application/json';

    const token = sessionStorage.getItem('token');

    if (token && !isTokenExpired()) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Token expiration check (optional, implement logic as needed)
function isTokenExpired(): boolean {
  // Example: decode token and check expiry
  // TODO :
  return false; // Placeholder implementation
}

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    }
    return Promise.reject(response.data);
  },
  (error) => {
    return handleAxiosError(error);
  }
);

// Centralized error handling function
function handleAxiosError(error: AxiosError) {
  if (error.response) {
    const { status, data } = error.response;
    if (status === 401) {
      handleUnauthorized();
    } else if (status === 404) {
      console.warn('Resource Not Found (404):', data);
    } else if (status === 500) {
      console.error('Internal Server Error:', data);
    } else {
      console.warn(`Error ${status}:`, data);
    }
  } else if (error.request) {
    // The request was made but no response was received
    console.error('No response received:', error.message);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error setting up request:', error.message);
  }
  return Promise.reject(error);
}

// Handle unauthorized access (401)
function handleUnauthorized() {
  console.log('Unauthorized! Redirecting to login...');
  // Clear session data to log out the user
  sessionStorage.removeItem('token');
  // Optionally redirect the user to the login page or display a message
  window.location.href = '/login'; // Modify to the correct login route in your app
}

export default axiosInstance;
