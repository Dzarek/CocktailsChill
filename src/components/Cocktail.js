import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
      <div className="cocktail-footer">
        <p>{info}</p>
        <h4>{glass}</h4>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
//8:25:30
