import axios from "axios";

const API_URL = "http://localhost:3000/";

const AuthService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(API_URL + "signin", { username, password });
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  logout: () => {
    localStorage.removeItem("user");
  },

  register: async (username, email, password) => {
    try {
      const response = await axios.post(API_URL + "signup", { username, email, password });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default AuthService;
