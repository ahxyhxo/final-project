import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image, List, Typography, Divider } from 'antd';

import { getPokemonRequest } from '../../api/pokemons';
import { capitalizeFirstLetter } from '../../utils/format';
import useCapturedPokemons from '../../hooks/useCapturedPokemons';

const { Title } = Typography;

const Pokemon = () => {
  const { slug } = useParams();

  const [pokemon, setPokemon] = useState(null);

  const { capturedPokemons } = useCapturedPokemons();

  useEffect(() => {
    async function fetchData() {
      const response = await getPokemonRequest(Number(slug));

      setPokemon(response.data);
    }

    fetchData();
  }, [slug]);

  const isPokemonCaptured = (pokemon) => {
    return capturedPokemons.some(
      (capturedPokemon) => capturedPokemon.id === pokemon.id
    );
  };

  const getPokemonCaptureDate = (pokemon) => {
    return new Date(
      capturedPokemons.find(
        (capturedPokemon) => capturedPokemon.id === pokemon.id
      ).catchDate
    ).toString();
  };

  return (
    <div>
      {pokemon ? (
        <>
          <Image
            width={250}
            src={pokemon.sprites.other['official-artwork'].front_default}
          />
          <Title level={3}>{capitalizeFirstLetter(pokemon.name)}</Title>
          <ul>
            <li>ID: {pokemon.id}</li>
            <li>Weight: {pokemon.weight}</li>
            {isPokemonCaptured(pokemon) && (
              <li>{`Captured On: ${getPokemonCaptureDate(pokemon)}`}</li>
            )}
          </ul>
          <Divider orientation="left">Abilities</Divider>
          <List
            size="small"
            bordered
            itemLayout="horizontal"
            dataSource={pokemon.abilities}
            renderItem={(item) => (
              <List.Item>{capitalizeFirstLetter(item.ability.name)}</List.Item>
            )}
          />
          <Divider orientation="left">Types</Divider>
          <List
            size="small"
            bordered
            dataSource={pokemon.types}
            renderItem={(item) => (
              <List.Item>{capitalizeFirstLetter(item.type.name)}</List.Item>
            )}
          />
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default Pokemon;
