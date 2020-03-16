import axios, { AxiosError } from 'axios';

interface ServerResponse {
    data: object;
}

interface LocationProps {
    latitude: number;
    longitude: number;
}

const proxyurl = 'https://agile-depths-26957.herokuapp.com/';
const url = 'https://api.darksky.net/forecast/ab3cf0e839b6de75fab9bf2b051aae56';

const apiClient = axios.create({
    baseURL: proxyurl + url,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getWeather = (coordinates: LocationProps): Promise<ServerResponse | AxiosError> => {
    try {
        const latitude = coordinates.latitude;
        const longitude = coordinates.longitude;
        const response = apiClient.get(`/${latitude},${longitude}`).then(res => res.data);
        return response;
    } catch (err) {
        if (err && err.response) {
            const axiosError = err as AxiosError;
            return axiosError.response.data;
        }
        throw err;
    }
};
