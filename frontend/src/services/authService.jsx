import axios from 'axios';

const BASE_URL = 'http://localhost:3500';

const authService = {
  login: async (user, pwd) => {
    const response = await axios.post(`${BASE_URL}/login`, { user, pwd });
    return response.data;
  },
  register: async (user, pwd) => {
    const response = await axios.post(`${BASE_URL}/register`, { user, pwd });
    return response.data;
  },
};

export default authService;
