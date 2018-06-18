import React from 'react';
import "./CharacterCard.css";

const CharacterCard = (props) => (
    <div 
        className="card"
        onClick={() => props.characterClicked(props.id)}>
        <div className="img-container">
            <img 
                alt={props.name} 
                src={props.image}
                 />
        </div>
        <div className="content">
            
                    <strong>{props.name}</strong> 
                
        </div>
    </div>
        
);

export default CharacterCard;