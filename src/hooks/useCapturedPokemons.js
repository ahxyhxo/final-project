import { useEffect, useState } from 'react';

const getCapturedPokemons = () => {
  const prevCaptured = localStorage.getItem('captured');
  let captured = [];

  if (prevCaptured) {
    captured = JSON.parse(prevCaptured);
  }

  return captured;
};

const useCapturedPokemons = () => {
  const [capturedPokemons, setCapturedPokemons] = useState([]);

  useEffect(() => {
    const savedCapturedPokemons = getCapturedPokemons();
    setCapturedPokemons(savedCapturedPokemons);
  }, []);

  const handlePokemonCapture = (pokemon) => {
    if (
      capturedPokemons.some(
        (capturedPokemon) => capturedPokemon.id === pokemon.id
      )
    ) {
      return setCapturedPokemons((prevPokemons) => {
        const result = prevPokemons.filter(
          (prevPokemons) => prevPokemons.id !== pokemon.id
        );
        localStorage.setItem('captured', JSON.stringify(result));
        return result;
      });
    }

    const catchDate = Date.now();

    const pokemonToSave = {
      ...pokemon,
      catchDate,
    };

    const capturedPokemonsToSave = [...capturedPokemons, pokemonToSave];
    setCapturedPokemons((prevCapturedPokemons) => [
      ...prevCapturedPokemons,
      pokemonToSave,
    ]);
    localStorage.setItem('captured', JSON.stringify(capturedPokemonsToSave));
  };

  return {
    capturedPokemons,
    handlePokemonCapture,
  };
};

export default useCapturedPokemons;
