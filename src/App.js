import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";

import videoBg from "./images/video.mp4";

function App() {
  return (
    <div>
      <div className="background">
        <video
          src={videoBg}
          autoPlay
          muted
          loop
          playsinline
          nocontrols
          type="video/mp4"
        ></video>
      </div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cocktail/:id">
            <SingleCocktail />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
