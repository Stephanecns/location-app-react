import React from 'react';
import { annonces } from '../annonces_immobilieres';
import "../styles/cards.scss"
import Card from './card';

function Cards() {
    return (
        <div className="banner">
            {annonces.slice(0, 6).map((annonce) => (
            <Card annonce = {annonce} key = {annonce.id}/> 
            ))}
        </div>
    );
}

export default Cards;




