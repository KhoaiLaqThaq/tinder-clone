import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-expjs.herokuapp.com/', // in dev environment, we are using the baseURL like localhost:8001
})

export default instance;
