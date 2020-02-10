import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MovieApp from "./components/MovieApp";
import movieAppStore from "./store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={movieAppStore}>
    <BrowserRouter>
      <MovieApp />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
