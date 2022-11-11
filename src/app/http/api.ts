import axios, { Axios, AxiosRequestConfig } from "axios";

export class Api extends Axios {
    constructor(config?: AxiosRequestConfig) {
        super(config);
        const instance = axios.create({baseURL: 'http://localhost:3000/sync/'});
        return instance;
    }
}