// src/services/api.js - Com fallback
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://astrolume-backend.onrender.com';

console.log('🔍 API_URL:', API_URL); // Para debug

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;