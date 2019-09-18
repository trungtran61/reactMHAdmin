import axios, { AxiosResponse } from 'axios';
import { ITippingException, ITippingExceptionDates } from '../models/tippingexception';
import { resolve } from 'dns';
import { IUser } from '../models/user';

axios.defaults.baseURL = 'http://localhost:60127/api';
axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('MHAdminToolJWT');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config
}, error => {
    return Promise.reject(error);
});

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response:AxiosResponse)=>
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const requests = {
    get: (url: string) => axios.get(url).then(sleep(100)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    postWithCreds: (url: string, body: {}) => axios.post(url, body, { withCredentials: true }).then(responseBody)
}

const User = {
    login: () : Promise<IUser> => requests.postWithCreds(`/user/login`,{})
}

const TippingExceptions = {
    list: (tippingExceptionDates: ITippingExceptionDates): Promise<ITippingException[]> => 
        requests.get(`/reports/gettippingexceptions?fromDate=${tippingExceptionDates.fromDate}&toDate=${tippingExceptionDates.toDate}`)
}

export default{
    TippingExceptions,
    User
}