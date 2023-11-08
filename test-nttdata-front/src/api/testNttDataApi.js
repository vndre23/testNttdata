import axios from 'axios';

const testNttDataApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

testNttDataApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
    }

    return config;
})

export default testNttDataApi;