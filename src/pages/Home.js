import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
// import LettersSearch from "../components/LettersSearch";

const Home = () => {
  return (
    <main>
      <SearchForm />
      {/* <LettersSearch /> */}
      <CocktailList />
    </main>
  );
};

export default Home;
