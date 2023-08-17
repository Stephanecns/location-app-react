import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/StarRating.scss";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={i <= rating ? "fa-star active" : "fa-star"}
      />
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
