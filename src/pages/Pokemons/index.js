import React, { useEffect, useState } from 'react';

import { getPokemonsRequest } from '../../api/pokemons';
import PokemonList from '../../components/PokemonList';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data: allPokemons } = await getPokemonsRequest();
      const pokemonsWithId = allPokemons.results.map((pokemon, index) => {
        const id = index + 1;
        return {
          ...pokemon,
          id,
        };
      });
      setPokemons(pokemonsWithId);
    }

    fetchData();
  }, []);

  return (
    <div style={{ padding: '32px' }}>
      {pokemons.length ? <PokemonList pokemons={pokemons} /> : 'Loading...'}
    </div>
  );
};

export default Pokemons;
