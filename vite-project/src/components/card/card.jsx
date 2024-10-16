import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import './card.css'

const Card = ({ dish, onDelete, onShowDetails }) => {
  return (
    <div 
        className="card clickable-card "
        style={{ cursor: 'pointer' }}>
    
      <div className='card-content'>
        <h2 className='card-title title is-6'>{dish.name}</h2>
        <p className='card-icon'>{dish.img}</p>
        <p className='card-type'><i>{dish.type}</i></p>
        <button className='details-button' onClick={() => onShowDetails(dish.id)}>see details</button>
        <button className='delete-button' onClick={() => onDelete(dish.id)}>
                <FontAwesomeIcon  icon={faTrash}/>
        </button>
      </div>
      
    </div>
  );
};

export default Card;
