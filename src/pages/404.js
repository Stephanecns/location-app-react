import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/error.scss";

function Error() {
  const navigate = useNavigate(); // hook useNavigate

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <div className="not-found-404">404</div>
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
