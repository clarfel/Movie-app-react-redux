import React from "react";
import "./MovieApp.css";
import MovieAppHeader from "./MovieAppHeader.js";
import MovieList from "./MovieList.js";
import { Route } from "react-router-dom";
import Details from "./Details.js";

class MovieApp extends React.Component {
  /* onClickRating = i => {
    this.setState({
      indexChecked: i
    });
  };

  searchMovieName = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  addMovie = () => {
    let newMovie = {
      title: prompt("Movie title"),
      year: prompt("Release year"),
      rate: prompt("Rating number"),
      image: prompt(
        "Image link",
        "https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png"
      ),
      id: prompt("id")
    };

    this.setState({
      movieList: this.state.movieList.concat(newMovie)
    });
  };*/

  render() {
    return (
      <div className="movie-app">
        {/* <MovieAppHeader
          indexChecked={this.state.indexChecked}
          onClickRating={i => this.onClickRating(i)}
          onKeyUpFn={this.searchMovieName}
        />
        <MovieList
          movieList={this.state.movieList}
          rateSearched={this.state.indexChecked}
          textSearched={this.state.searchText}
          addMovie={this.addMovie}
        />*/}

        <MovieAppHeader />

        <div>
          <Route exact path="/" component={MovieList} />
          <Route path="/detail/:id" component={Details} />
        </div>
      </div>
    );
  }
}

export default MovieApp;
