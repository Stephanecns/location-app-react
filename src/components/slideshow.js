import { useState } from "react";
import "../styles/slideshow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import HousingDetail from '../components/detailhousing';

const Slideshow = (props) =>  {
  const { pictures } = props  

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  

  return (
    <div className="carrousel-container">
      <div className="carrousel">
        <img
          src={pictures[currentIndex]}
          alt={`Image du logement`}
          className="carrousel-pictures"
        />
        <span className="numbers-pictures">
          {currentIndex + 1}/{pictures.length}
        </span>
        <FontAwesomeIcon onClick={handlePreviousClick} icon={faAngleLeft} />
        <FontAwesomeIcon onClick={handleNextClick} icon={faAngleRight} />
      </div>
      <HousingDetail />
    </div>

    
  );
}

export default Slideshow;
