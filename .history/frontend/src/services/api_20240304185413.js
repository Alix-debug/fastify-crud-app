import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

const createUser = async (userData) => {
  try {
    console.log('coucou userData',userData)
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

module.exports = {
  createUser
}