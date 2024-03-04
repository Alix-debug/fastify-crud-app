import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

// Sign Up
export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

const setAuthHeaders = (email, password) => {
  return {
    headers: {
      Authorization: `Basic ${btoa(`${email}:${password}`)}`, // Base64 encode email:password
    },
  };
};
// Sign in 
export const signIn = async (userData) => {
  try {
    console.log('coucou user', userData)
    console.log(setAuthHeaders(userData.Email, userData.Password));
    const response = await api.get(`/users/${userData.Id}`, setAuthHeaders(userData.Email, userData.Password));
    console.log('coucou',response)
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};