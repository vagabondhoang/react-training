import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const api = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export default api;
