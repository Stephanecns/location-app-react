import { useParams } from "react-router-dom";
import { annonces } from "../annonces_immobilieres";
import { Collapse } from "../components/collapse"; // Assurez-vous que le chemin est correct
import "../styles/detailhousing.scss";
import StarRating from "../components/StarRating"; // Ajustez le chemin si nécessaire en fonction de l'emplacement de votre composant

function HousingDetail() {
  const { id } = useParams();
  const annonce = annonces.find((a) => a.id === id);

  if (!annonce) {
    return <div>Annonce non trouvée</div>;
  }

  const {
    title,
    host: { name: hostName, picture: hostPicture },
    rating,
    tags,
  } = annonce;

  return (
    <div className="housing-detail">
      <div className="wrapper1">
        <div className="title-location-wrapper">
            <h1 className="housing-title">{title}</h1>
            <h2 className="housing-location">{annonce.location}</h2>
        </div>
        <div className="housing-host">
        <h2 className="housing-host-name">{hostName}</h2>
        <img
          className="housing-host-pictures"
          src={hostPicture}
          alt="Host pic"
        />
      </div>
      </div>

      <div className="wrapper2">
      <div className="housing-tags">
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="housing-rate">
        {" "}
        <StarRating rating={rating} />
      </div>
      </div>

      
      <div className="specific-collapse-container">
        <Collapse title="Description">{annonce.description}</Collapse>
        <Collapse title="Équipements">
          {annonce.equipments &&
            annonce.equipments.map((item) => <div key={item}>{item}</div>)}
        </Collapse>
      </div>
    </div>
  );
}

export default HousingDetail;
