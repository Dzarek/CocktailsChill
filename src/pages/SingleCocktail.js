import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);
  const { language } = useGlobalContext();
  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strInstructionsDE: instructionsDE,
            strInstructionsIT: instructionsIT,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
          } = data.drinks[0];
          const ingredients = [
            `${strIngredient1} - ${strMeasure1}`,
            `${strIngredient2} - ${strMeasure2}`,
            `${strIngredient3} - ${strMeasure3}`,
            `${strIngredient4} - ${strMeasure4}`,
            `${strIngredient5} - ${strMeasure5}`,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            instructionsDE,
            instructionsIT,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }
  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
    instructionsDE,
    instructionsIT,
  } = cocktail;

  return (
    <>
      {language === "english" && (
        <section className="section cocktail-section">
          <Link to="/" className="btn btn-primary cocktail-section-btn">
            back home
          </Link>
          <h2
            style={{ fontSize: "70px", margin: "0 auto 5vh" }}
            className="section-title"
          >
            {name}
          </h2>
          <div className="drink">
            <img src={image} alt={name} />
            <div className="drink-info">
              <p>
                <span className="drink-data">category:</span>
                {category}
                <span className="drink-data">info:</span>
                {info}
                <span className="drink-data">glass:</span>
                {glass}
              </p>
              <p style={{ display: "flex", flexDirection: "column" }}>
                <span className="drink-data ingredients-title">
                  ingredients:
                </span>
                {ingredients.map((item, index) => {
                  return item ? (
                    <span
                      style={{ marginLeft: "40px", textAlign: "left" }}
                      key={index}
                    >
                      <li>{item}</li>
                    </span>
                  ) : null;
                })}
              </p>
              <p style={{ display: "flex", flexDirection: "column" }}>
                <span className="drink-data ingredients-title">
                  instructions:
                </span>
                {instructions}
              </p>
            </div>
          </div>
        </section>
      )}
      {language === "germany" && (
        <section className="section cocktail-section">
          <Link to="/" className="btn btn-primary cocktail-section-btn">
            Zur??ck zuhause
          </Link>
          <h2
            style={{ fontSize: "70px", margin: "0 auto 5vh" }}
            className="section-title"
          >
            {name}
          </h2>
          <div className="drink">
            <img src={image} alt={name} />
            <div className="drink-info">
              <p>
                <span className="drink-data">Kategorie:</span>
                {category}
                <span className="drink-data">info:</span>
                {info}
                <span className="drink-data">glas:</span>
                {glass}
              </p>
              <p style={{ display: "flex", flexDirection: "column" }}>
                <span className="drink-data ingredients-title">Zutaten:</span>
                {ingredients.map((item, index) => {
                  return item ? (
                    <span
                      style={{ marginLeft: "40px", textAlign: "left" }}
                      key={index}
                    >
                      <li>{item}</li>
                    </span>
                  ) : null;
                })}
              </p>
              <p style={{ display: "flex", flexDirection: "column" }}>
                <span className="drink-data ingredients-title">Anleitung:</span>
                {instructionsDE}
              </p>
            </div>
          </div>
        </section>
      )}
      {language === "italy" && (
        <section className="section cocktail-section">
          <Link to="/" className="btn btn-primary cocktail-section-btn">
            ritorno a casa
          </Link>
          <h2
            style={{ fontSize: "70px", margin: "0 auto 5vh" }}
            className="section-title"
          >
            {name}
          </h2>
          <div className="drink">
            <img src={image} alt={name} />
            <div className="drink-info">
              <p>
                <span className="drink-data">categoria:</span>
                {category}
                <span className="drink-data">info:</span>
                {info}
                <span className="drink-data">bicchiere:</span>
                {glass}
              </p>
              <p style={{ display: "flex", flexDirection: "column" }}>
                <span className="drink-data ingredients-title">
                  ingredienti:
                </span>
                {ingredients.map((item, index) => {
                  return item ? (
                    <span
                      style={{ marginLeft: "40px", textAlign: "left" }}
                      key={index}
                    >
                      <li>{item}</li>
                    </span>
                  ) : null;
                })}
              </p>
              <p style={{ display: "flex", flexDirection: "column" }}>
                <span className="drink-data ingredients-title">
                  Istruzioni:
                </span>
                {instructionsIT}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleCocktail;
