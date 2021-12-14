import React from 'react';

import PokemonList from '../../components/PokemonList';
import useCapturedPokemons from '../../hooks/useCapturedPokemons';

const Captured = () => {
  const { capturedPokemons } = useCapturedPokemons();

  return (
    <div style={{ padding: '32px' }}>
      {capturedPokemons.length > 0 ? (
        <PokemonList pokemons={capturedPokemons} />
      ) : (
        'No captured pokemons'
      )}
    </div>
  );
};

export default Captured;
