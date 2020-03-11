import axios, { AxiosError, AxiosResponse } from 'axios';

interface ServerResponse {
    data: any;
}
interface ServerError {
    data: any;
}

const apiClient = axios.create({
    baseURL: 'https://api.darksky.net/forecast/ab3cf0e839b6de75fab9bf2b051aae56',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getWeather = (): Promise<AxiosResponse | AxiosError> => {
    try {
        const response = apiClient.get('/42.3601,-71.0589').then(res => res);
        return response;
    } catch (err) {
        if (err && err.response) {
            const axiosError = err as AxiosError;
            return axiosError.response.data;
        }
        throw err;
    }
};

export const getCurrentWeather = (): Promise<ServerResponse | AxiosError> => {
    try {
        const response = apiClient.get('/42.3601,-71.0589').then(res => res.data.currently);
        return response;
    } catch (err) {
        if (err && err.response) {
            const axiosError = err as AxiosError;
            return axiosError.response.data;
        }
        throw err;
    }
};
