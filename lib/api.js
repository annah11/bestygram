import axios from 'axios';

// Define the base URL for the Django API
const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

// Fetch all posts
export const fetchPosts = async () => {
    const response = await api.get('/posts/');
    return response.data;
};

// Fetch all messages (you can add more functions for other API endpoints)
export const fetchMessages = async () => {
    const response = await api.get('/messages/');
    return response.data;
};
