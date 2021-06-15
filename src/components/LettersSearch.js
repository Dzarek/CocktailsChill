import React from "react";
import { useGlobalContext } from "../context";

const LettersSearch = () => {
  const letters = ["a", "b", "c", "d"];
  const { setSearchTerm } = useGlobalContext();

  return (
    <section className="section-btnLetter">
      {letters.map((letter, index) => {
        return (
          <button className="btnLetter" key={index}>
            {letter}
          </button>
        );
      })}
    </section>
  );
};

export default LettersSearch;
