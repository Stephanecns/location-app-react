import React from 'react';
import "../styles/cards.scss"
import { useNavigate } from 'react-router-dom';


 const Card = (props) => {
    const navigate = useNavigate(); // hook useNavigate
    const {annonce} = props;
    function clickCard() {
        navigate('/housing/'+annonce.id) 
      }
    
    return (
        <div key={annonce.id} className="card" onClick={clickCard}>
        <img src={annonce.cover} alt={annonce.title} />
        <h1>{annonce.title}</h1>
        </div>
    );
}

export default Card;

