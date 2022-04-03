import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topics = [
  {
    name: 'Ash Ketchup',
    bio: 'Ash is the main protagonist of the anime series and a highly experienced Trainer from Pallet Town, aspiring to become a Pokémon Master.'
  },
  {
    name: 'Misty Mustard',
    bio: 'Misty is an aspiring Water Pokémon Master and a former traveling partner of Ash. She is also the Gym Leader of the Cerulean Gym.'
  },
  {
    name: 'Brock BBQ Sauce',
    bio: 'Brock is an aspiring Pokémon Doctor from Pewter City and a former traveling partner of Ash. He used to be the Gym Leader of the Pewter Gym, handing out the Boulder Badge to Trainers who defeated him.'
  }
];

ReactDOM.render(
  <Accordion topics={topics}/>,
  document.querySelector('#root')
);
