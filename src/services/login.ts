import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

export const loginApi = axios.create({
    baseURL: `${VITE_API_URL}/login`,  // Configuramos la URL base para el login
});