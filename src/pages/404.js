
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate au lieu de useHistory
import '../styles/error.scss';

function Error() {
    const navigate = useNavigate(); // Utilisez le hook useNavigate

    const navigateToHome = () => {
        navigate('/'); // Utilisez navigate pour aller à la page d'accueil
    };

    return (
        <div className="not-found-container">
            <div className="not-found-404">
                404
            </div>
            <p className="not-found-text">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <p className="not-found-link" onClick={navigateToHome}>
                Retourner sur la page d’accueil
            </p>
        </div>
    );
}

export default Error;

