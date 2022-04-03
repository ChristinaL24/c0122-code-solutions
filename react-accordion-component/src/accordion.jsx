import React from 'react';

const items = [
  {
    name: 'Ash Ketchup',
    bio: 'Ash is the main protagonist of the anime series and a highly experienced Trainer from Pallet Town, aspiring to become a Pokémon Master.'
  },
  {
    name: 'Misty',
    bio: 'Misty is an aspiring Water Pokémon Master and a former traveling partner of Ash. She is also the Gym Leader of the Cerulean Gym.'
  },
  {
    name: 'Brock',
    bio: 'Brock is an aspiring Pokémon Doctor from Pewter City and a former traveling partner of Ash. He used to be the Gym Leader of the Pewter Gym, handing out the Boulder Badge to Trainers who defeated him.'
  }
];

const RenderList = () => {
  return (
    <ul className='list-style'>
      {
        items.map((item, index) => {
          return <AccordionItems key={index} item={item} />;
        })
      }
    </ul>
  );
};

const AccordionItems = ({ item }) => {
  const { name, bio } = item;
  return (
    <li className='list-text'>
      <button className="button">{name}</button>
      <div>
        <div className="item-bg">{bio}</div>
      </div>
    </li>
  );
};

const RenderAccordion = () => {
  return (
    <div className='container'>
      <RenderList />
    </div>
  );
};

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <RenderAccordion />
    );
  }
}

export default Accordion;
