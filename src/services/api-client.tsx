import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface FetchResponse<T> {
    count: number;
    //next: string | null
    results: T[];
  }

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4ea11a1b4e1e40cc8375ccb1b2b687c5'
    },
});


class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
       return axiosInstance
         .get<FetchResponse<T>>(this.endpoint, config)
         .then(res => res.data)
    }
}

export default APIClient;
