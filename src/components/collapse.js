import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/collapse.scss"; // Si vous choisissez de créer un fichier SCSS dédié pour Collapse.

export function Collapse({ title, children }) {
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

export default Collapse;
