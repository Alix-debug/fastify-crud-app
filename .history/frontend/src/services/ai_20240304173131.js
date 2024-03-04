import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Similar service for getUserById
