import axios, { AxiosResponse } from 'axios';
import { ITippingException, ITippingExceptionDates } from '../models/tippingexception';
import { resolve } from 'dns';

axios.defaults.baseURL = 'http://localhost:60127/api';

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response:AxiosResponse)=>
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const requests = {
    get: (url: string) => axios.get(url).then(sleep(100)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody)
}

const TippingExceptions = {
    list: (tippingExceptionDates: ITippingExceptionDates): Promise<ITippingException[]> => 
        requests.get(`/reports/gettippingexceptions?fromDate=${tippingExceptionDates.fromDate}&toDate=${tippingExceptionDates.toDate}`)
}

export default{
    TippingExceptions
}