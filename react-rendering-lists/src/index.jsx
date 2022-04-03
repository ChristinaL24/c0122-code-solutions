import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

// do not specify key in this function
function RenderPokemon(props) {
  return <li>{props.value}</li>;
}

function PokemonList(props) {
  const pokedex = props.pokedex;
  const pokemon = pokedex.map(function (pokemon) { return pokemon.name; });
  const list = pokemon.map(name =>
    // specify the key inside the array
    <RenderPokemon key={name.toString()} value={name} />
  );

  return (
    <ul>
      {list}
    </ul>
  );
}

ReactDOM.render(
  <PokemonList pokedex={pokedex} />,
  document.querySelector('#root')
);
