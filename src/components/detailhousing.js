const HousingDetail = (props) => {
  const { annonces } = props;

  return (
    <div className="housing-detail">
      <h1>{title}</h1>
      <h2>Host: {hostName}</h2>
      <Rating value={rating} /> {/* Exemple de composant pour la notation */}
      <Tags tags={tags} />     {/* Exemple de composant pour les tags */}
      <Slideshow pictures={pictures} />
      <p>{details}</p>
    </div>
  );
}

export default HousingDetail;