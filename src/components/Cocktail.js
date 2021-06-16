import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Cocktail = ({ image, name, id, info, glass }) => {
  const { language } = useGlobalContext();
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
          {language === "english" && "details"}
          {language === "germany" && "einzelheiten"}
          {language === "italy" && "dettagli"}
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
//8:25:30
