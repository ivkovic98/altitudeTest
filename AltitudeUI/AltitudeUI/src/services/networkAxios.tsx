import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // koristi proxy umesto direktnog URL-a
  withCredentials: true, // ako koristiš cookie
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log('Šaljemo zahtev sa token-om:', token.substring(0, 20) + '...');
  } else {
    console.warn('Token ne postoji u localStorage');
  }
  
  // Set default Content-Type to application/json if not already set and not FormData
  if (!config.headers['Content-Type'] && !(config.data instanceof FormData)) {
    config.headers['Content-Type'] = 'application/json';
  }
  
  return config;
});

// Dodajemo response interceptor za rukovanje 401 greškama
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('401 Unauthorized - čišćenje tokena i preusmeravanje');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default api;