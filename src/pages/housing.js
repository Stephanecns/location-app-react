import React, { useEffect } from "react"; // Ajoute de useEffect
import { useNavigate, useParams } from "react-router-dom";
import Slideshow from "../components/slideshow";
import { annonces } from "../annonces_immobilieres";

function Housing() {
  const { id } = useParams();
  const annonce = annonces.find((a) => a.id === id);

  const navigate = useNavigate(); // Initialiser navigate

  useEffect(() => {
    if (!annonce) {
      navigate("*");
    }
  }, [annonce, navigate]);

  if (!annonce) {
    return null; //empêche le rendu de Slideshow si annonce est undefined.
  }

  return (
    <div>
      <Slideshow pictures={annonce.pictures} />
    </div>
  );
}
export default Housing;
