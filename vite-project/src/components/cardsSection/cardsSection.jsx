import React from 'react';
import Card from '../card/card.jsx';
import './cardsSection.css';

const CardsSection = ({ dishes, onDelete, onShowDetails }) => {

  return (
    <div className="cards-section">
      {dishes && dishes.map((dish) => (
        <Card key={dish.id} dish={dish} onDelete={onDelete} onShowDetails={onShowDetails} />
      ))}
    </div>
  );
};

export default CardsSection;