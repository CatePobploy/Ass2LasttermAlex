import api from "./api";
import { toast } from "react-toastify";

// Register POST Request
async function register(data) {
  try {
    const response = await api.post("/api/auth/register", data);
    console.log(response?.data);
    return response;
  } catch (error) {
    console.error(error); // Log the error for debugging
    toast.error("Registration failed. Please try again."); // Notify the user
    return Promise.reject(error);
  }
}

// Login POST Request
async function login(data) {
  try {
    const response = await api.post("/api/auth/login", data);
    console.log(response?.data);
    return response;
  } catch (error) {
    console.error(error); // Log the error for debugging
    toast.error("Login failed. Please check your credentials."); // Notify the user
    return Promise.reject(error);
  }
}

const authService = {
  register,
  login,
};

export default authService;
