import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const fetchCars = async (filters?: any) => {
    const response = await axios.get(`${API_URL}/get-cars`, { params: filters });
    return response.data;
};

export const fetchOneCar = async (id: string) => {
    const response = await axios.get(`${API_URL}/cars/${id}`);
    return response.data;
};