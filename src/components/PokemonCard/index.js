import React from 'react';
import { Card, Button } from 'antd';

import { capitalizeFirstLetter } from '../../utils/format';
const { Meta } = Card;

const PokemonCard = ({ pokemon, isCaptured, onCatchReleaseButtonClick }) => {
  return (
    <Card
      hoverable
      title={capitalizeFirstLetter(pokemon.name)}
      bordered={false}
      actions={[
        <Button
          style={{ float: 'left', marginLeft: '1rem' }}
          onClick={(event) => onCatchReleaseButtonClick(event, pokemon)}
        >
          {!isCaptured ? 'Catch' : 'Release'}
        </Button>,
      ]}
    >
      <Meta
        description={`ID: ${pokemon.id}`}
        style={{ marginBottom: '1rem' }}
      ></Meta>
    </Card>
  );
};

export default PokemonCard;
