import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// CREATE NEW INSTANCE OF AXIOS: Allows us to customize its configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL|| "http://localhost:5000", // Make sure VITE_API_URL is correctly set
});

// AXIOS RESPONSE (INTERCEPTOR): Allows errors to be intercepted globally
api.interceptors.response.use(
  (response) => {
    return response; // If the response is successful, return it as is
  },
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      console.error("Unexpected Error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } else if (error.response.status === 401) {
      // Handle unauthorized access (e.g., token expired)
      toast.error("Unauthorized access. Please login again.");
      // Optional: Redirect user to login page
      const navigate = useNavigate();
      navigate("/login");
    } else {
      console.error(error.response.data);
      toast.error(error.response.data.message || "An error occurred.");
    }

    return Promise.reject(error); // Ensure the promise is rejected
  }
);

// AXIOS DEFAULT CONFIGS: Set default header with each axios REQUEST for auth token
export function setHeaderToken() {
  const token = localStorage.getItem("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
}
setHeaderToken();

export default api;
