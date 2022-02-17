import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-expjs.herokuapp.com/',
})

export default instance;
