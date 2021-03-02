import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
});

const authorization = localStorage.getItem('authorization');

httpClient.interceptors.request.use(cfg => {
    if (authorization) {
        cfg.headers.Authorization = authorization
    }
    return cfg;
}, err => {
    return Promise.reject(err)
});

class ApiService{

    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }

    post(url, object){
        return httpClient.post(url, object);
    }

    put(url, object){
        return httpClient.put(url, object);
    }

    delete(url){
        return httpClient.delete(url)
    }

    get(url){
        return httpClient.get(url)
    }
}

export default ApiService;