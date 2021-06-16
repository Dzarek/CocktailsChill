import React, { useState } from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";

const CocktailList = () => {
  const { cocktails, loading, language } = useGlobalContext();
  const [alco, setAlco] = useState("all");
  const [filters, setFilters] = useState(false);

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length === 0) {
    return (
      <h2 className="section-title">
        {language === "english" && "no cocktails matched your search criteria"}
        {language === "germany" &&
          "Keine Cocktails entsprachen Ihren Suchkriterien"}
        {language === "italy" &&
          "nessun cocktail corrisponde ai tuoi criteri di ricerca"}
      </h2>
    );
  }

  return (
    <section className="section">
      {language === "english" && (
        <>
          <h2 className="section-title">cocktails</h2>
          {!filters && (
            <button className="hidden-filters" onClick={() => setFilters(true)}>
              FILTERS
            </button>
          )}
          {filters && (
            <div className="categories-choose">
              <FaTimes className="closeBtn" onClick={() => setFilters(false)} />

              <section className="alco-choose">
                <h3>Filter by %</h3>
                <div className="alco-choose-btns">
                  <button onClick={() => setAlco("all")}>All</button>
                  <button onClick={() => setAlco("alco")}>Alcoholic</button>
                  <button onClick={() => setAlco("noAlco")}>
                    Non Alcoholic
                  </button>
                </div>
              </section>
              <section className="category-choose">
                <h3>Filter by category</h3>
                <div className="category-choose-btns">
                  <button onClick={() => setAlco("all")}>All</button>
                  <button onClick={() => setAlco("Cocktail")}>Cocktail</button>
                  <button onClick={() => setAlco("Ordinary Drink")}>
                    Ordinary Drink
                  </button>
                  <button onClick={() => setAlco("Milk / Float / Shake")}>
                    Milk / Float / Shake
                  </button>
                  <button onClick={() => setAlco("Shot")}>Shot</button>
                  <button onClick={() => setAlco("Homemade Liqueur")}>
                    Homemade Liqueur
                  </button>
                  <button onClick={() => setAlco("Punch / Party Drink")}>
                    Punch / Party Drink
                  </button>
                  <button onClick={() => setAlco("Beer")}>Beer</button>
                </div>
              </section>
            </div>
          )}
        </>
      )}
      {language === "germany" && (
        <>
          <h2 className="section-title">cocktails</h2>
          {!filters && (
            <button className="hidden-filters" onClick={() => setFilters(true)}>
              FILTER
            </button>
          )}
          {filters && (
            <div className="categories-choose">
              <FaTimes className="closeBtn" onClick={() => setFilters(false)} />

              <section className="alco-choose">
                <h3>Filtern nach %</h3>
                <div className="alco-choose-btns">
                  <button onClick={() => setAlco("all")}>Alle</button>
                  <button onClick={() => setAlco("alco")}>Alkoholiker</button>
                  <button onClick={() => setAlco("noAlco")}>Alkoholfrei</button>
                </div>
              </section>
              <section className="category-choose">
                <h3>Nach Kategorie filtern</h3>
                <div className="category-choose-btns">
                  <button onClick={() => setAlco("all")}>Alle</button>
                  <button onClick={() => setAlco("Cocktail")}>Cocktail</button>
                  <button onClick={() => setAlco("Ordinary Drink")}>
                    Gewöhnliches Getränk
                  </button>
                  <button onClick={() => setAlco("Milk / Float / Shake")}>
                    Milch / Float / Shake
                  </button>
                  <button onClick={() => setAlco("Shot")}>Schuss</button>
                  <button onClick={() => setAlco("Homemade Liqueur")}>
                    Hausgemachter Likör
                  </button>
                  <button onClick={() => setAlco("Punch / Party Drink")}>
                    Punsch / Partygetränk
                  </button>
                  <button onClick={() => setAlco("Beer")}>Bier</button>
                </div>
              </section>
            </div>
          )}
        </>
      )}
      {language === "italy" && (
        <>
          <h2 className="section-title">cocktails</h2>
          {!filters && (
            <button className="hidden-filters" onClick={() => setFilters(true)}>
              FILTRI
            </button>
          )}
          {filters && (
            <div className="categories-choose">
              <FaTimes className="closeBtn" onClick={() => setFilters(false)} />

              <section className="alco-choose">
                <h3>Filtra per %</h3>
                <div className="alco-choose-btns">
                  <button onClick={() => setAlco("all")}>Tutti</button>
                  <button onClick={() => setAlco("alco")}>Alcolico</button>
                  <button onClick={() => setAlco("noAlco")}>Analcolico</button>
                </div>
              </section>
              <section className="category-choose">
                <h3>Filtra per categoria</h3>
                <div className="category-choose-btns">
                  <button onClick={() => setAlco("all")}>Tutti</button>
                  <button onClick={() => setAlco("Cocktail")}>Cocktail</button>
                  <button onClick={() => setAlco("Ordinary Drink")}>
                    Bevanda ordinaria
                  </button>
                  <button onClick={() => setAlco("Milk / Float / Shake")}>
                    Latte / Galleggiante / Agitare
                  </button>
                  <button onClick={() => setAlco("Shot")}>Tiro</button>
                  <button onClick={() => setAlco("Homemade Liqueur")}>
                    liquore fatto in casa
                  </button>
                  <button onClick={() => setAlco("Punch / Party Drink")}>
                    Punch / Bevanda da festa
                  </button>
                  <button onClick={() => setAlco("Beer")}>Birra</button>
                </div>
              </section>
            </div>
          )}
        </>
      )}
      <div className="cocktails-center">
        {alco === "noAlco" &&
          cocktails.map((item) => {
            if (item.info === "Non alcoholic") {
              return <Cocktail key={item.id} {...item} />;
            }
          })}
        {alco === "alco" &&
          cocktails.map((item) => {
            if (item.info === "Alcoholic") {
              return <Cocktail key={item.id} {...item} />;
            }
          })}
        {alco === "all" &&
          cocktails.map((item) => {
            return <Cocktail key={item.id} {...item} />;
          })}
        {alco === "Cocktail" &&
          cocktails.map((item) => {
            if (item.category === "Cocktail") {
              return <Cocktail key={item.id} {...item} />;
            }
          })}
        {alco === "Ordinary Drink" &&
          cocktails.map((item) => {
            if (item.category === "Ordinary Drink") {
              return <Cocktail key={item.id} {...item} />;
            }
          })}
        {alco === "Milk / Float / Shake" &&
          cocktails.map((item) => {
            if (item.category === "Milk / Float / Shake") {
              return <Cocktail key={item.id} {...item} />;
            }
          })}
        {alco === "Shot" &&
          cocktails.map((item) => {
            if (item.category === "Shot") {
              return <Cocktail key={item.id} {...item} />;
            }
          })}
        {alco === "Homemade Liqueur" &&
          cocktails.map((item) => {
            if (item.category === "Homemade Liqueur") {
              return <Cocktail key={item.id} {...item} />;
            }
          })}
        {alco === "Punch / Party Drink" &&
          cocktails.map((item) => {
            if (item.category === "Punch / Party Drink") {
              return <Cocktail key={item.id} {...item} />;
            }
          })}
        {alco === "Beer" &&
          cocktails.map((item) => {
            if (item.category === "Beer") {
              return <Cocktail key={item.id} {...item} />;
            }
          })}
      </div>
    </section>
  );
};

export default CocktailList;
