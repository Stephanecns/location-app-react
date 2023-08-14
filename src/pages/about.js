import "../styles/about.scss";
import React, { useState } from "react";
import imageInRectangle from "../assets/Image source 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__title" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className={`collapse__icon ${isOpen ? "open" : ""}`}>
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </div>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <div className="rectangle-container">
        <img
          src={imageInRectangle}
          alt="Image"
          className="image-in-rectangle"
        />
      </div>

      <div className="collapse-section">
        <Collapse title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Collapse>
        <Collapse title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Collapse>
        <Collapse title="Service">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Collapse>
        <Collapse title="Sécurité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </Collapse>
      </div>
    </div>
  );
}

export default About;
