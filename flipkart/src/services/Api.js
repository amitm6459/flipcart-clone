import axios from 'axios';

const URL = "http://localhost:8000";

export const authonticatSignUp = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data)
  } catch (error) {
    console.log('error while signup api ');
  }
}

export const authonticatlogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data)
  } catch (error) {
    console.log('error while Login api', error);
    return error.response;
  }
}