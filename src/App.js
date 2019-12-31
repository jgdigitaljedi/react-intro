import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
// import Details from "./Details";
import ThemeContext from './ThemeContext';
// more example of React hooks at https://codesandbox.io/s/zr90v4jorp

const Details = lazy(() => import('./Details'));

const App = () => {
  const themeHook = useState('darkblue');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Suspense fallback={<h1>loading route ...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
// eslint-disable-next-line
render(<App />, document.getElementById("root"));
