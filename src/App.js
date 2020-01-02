import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import { Provider } from 'react-redux';
import SearchParams from "./SearchParams";
import Details from "./Details";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <div>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </React.StrictMode>
    </Provider>
  );
};
// eslint-disable-next-line
render(<App />, document.getElementById("root"));
