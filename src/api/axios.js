import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

const requestSettings = {
  baseURL: BASE_URL,
};

export const http = axios.create(requestSettings);
