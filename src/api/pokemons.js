import { http } from './axios';

export const getPokemonsRequest = () => {
  return http.get(`/pokemon?limit=898`);
};

export const getPokemonRequest = (id) => {
  return http.get(`/pokemon/${id}`);
};
