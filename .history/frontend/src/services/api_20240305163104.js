import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

// configure Basic Auth headers
const setAuthHeaders = (email, password) => {
  return {
    headers: {
      Authorization: `Basic ${btoa(`${email}:${password}`)}`, // Base64 encode email:password
    },
  };
};

// Sign Up
export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error occured while creating user:', error);
    throw error;
  }
};

// Sign in 
export const signIn = async (userData) => {
  try {
    const response = await api.get(`/users/${userData.email}/${userData.password}`, setAuthHeaders(userData.email, userData.password));
    return response.data;
  } catch (error) {
    console.error('Error occured while creating user:', error);
    throw error;
  }
};

// Update User
export const updateUser = async (userData) => {
  try {
    const updatedUser = {
      "firstName": userData.firstName,
      "LastName": userData.LastName,
      "Email": userData.Email
    }
    const response = await api.put(`/users/${userData.Email}/${userData.Password}`, updatedUser, setAuthHeaders(userData.Email, userData.Password));
    return response.data;
  } catch (error) {
    console.error('Error occurred while updating user:', error);
    throw error;
  }
};


// delete User
export const deleteUser= async (userData) => {
  try {
    console.log('deleteUser, api.js', userData);
    const response = await api.delete(`/users/${userData.Email}/${userData.Password}`, setAuthHeaders(userData.email, userData.password));
    return response.data;
  } catch (error) {
    console.error('Error occured while deleting user:', error);
    throw error;
  }
};

