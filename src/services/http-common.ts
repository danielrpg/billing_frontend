import axios from 'axios';

const configAxios = {
    baseURL: 'http://localhost:3000/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

export default axios.create(configAxios);