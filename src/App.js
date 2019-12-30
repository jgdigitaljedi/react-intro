import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from './ThemeContext';
import Navbar from "./Navbar";

const App = () => {
  const themeHook = useState('darkblue');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Navbar />
          {/* <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header> */}
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
// eslint-disable-next-line
render(<App />, document.getElementById("root"));
