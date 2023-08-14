import { useState } from "react";
import { useParams } from "react-router-dom"; // Importation de `useParams`
import { annonces } from "../annonces_immobilieres";
import "../styles/slideshow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Slideshow() {
  const { id } = useParams(); // Récupérez l'ID depuis les paramètres de l'URL
  const annonce = annonces.find((a) => a.id === id); // Filtrer l'annonce basée sur l'ID

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    if (currentIndex === annonce.pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(annonce.pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Vérifier si l'annonce existe (peut-être que l'ID n'est pas valide)
  if (!annonce) return <div>Annonce non trouvée</div>;

  return (
    <div className="carrousel-container">
      <div className="carrousel">
        <img
          src={annonce.pictures[currentIndex]}
          alt={`Image ${currentIndex + 1} du logement`}
          className="carrousel-pictures"
        />
        <span className="numbers-pictures">
          {currentIndex + 1}/{annonce.pictures.length}
        </span>
        <FontAwesomeIcon onClick={handlePreviousClick} icon={faAngleLeft} />
        <FontAwesomeIcon onClick={handleNextClick} icon={faAngleRight} />
      </div>
    </div>
  );
}

export default Slideshow;
