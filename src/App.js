import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./pages/Landing";
import ChampionPage from "./pages/Champion";

export default function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Route exact path="/" component={LandingPage} />
        <Route path="/champion/:id" component={ChampionPage} />
      </div>
    </Router>
  );
}
