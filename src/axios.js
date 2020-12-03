import axios from 'axios'


const instance = axios.create({
    baseURL:'http://locahost:9000'
});

export default instance