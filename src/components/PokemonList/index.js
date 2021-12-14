import React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';

import PokemonCard from '../PokemonCard';
import useCapturedPokemons from '../../hooks/useCapturedPokemons';

const PokemonList = ({ pokemons }) => {
  const { capturedPokemons, handlePokemonCapture } = useCapturedPokemons();

  const onCatchReleaseButtonClick = (event, pokemon) => {
    event.preventDefault();
    handlePokemonCapture(pokemon);
  };

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      pagination={{
        size: 'small',
        defaultPageSize: 20,
        showSizeChanger: true,
      }}
      dataSource={pokemons}
      renderItem={(pokemon) => {
        const isCaptured = capturedPokemons.some(
          (capturedPokemon) => capturedPokemon.id === pokemon.id
        );

        return (
          <List.Item key={pokemon.name}>
            <Link to={`/pokemons/${pokemon.id}`}>
              <PokemonCard
                pokemon={pokemon}
                isCaptured={isCaptured}
                onCatchReleaseButtonClick={onCatchReleaseButtonClick}
              />
            </Link>
          </List.Item>
        );
      }}
    ></List>
  );
};

export default PokemonList;
