import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID XxOWNS6QF74VQnLAE-tUhcfpXvgdVoHlJw9-qHzhxgM'
    }
});