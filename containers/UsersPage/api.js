import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const api = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export default api;
