import React from "react";
import MovieCard from "./MovieCard.js";
import { connect } from "react-redux";

const MovieList = ({ movieList, rateSearched, textSearched, addMovie }) => {
  return (
    <main className="movie-app-main">
      <div className="movie-list">
        {movieList
          .filter(
            el =>
              el.rate >= rateSearched + 1 &&
              el.title
                .toLocaleLowerCase()
                .includes(textSearched.toLocaleLowerCase())
          )
          .map((el, i) => {
            return <MovieCard key={el.id} movie={el} />;
          })}

        <div className="new-movie-card" onClick={addMovie}>
          +
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    movieList: state.movies,
    rateSearched: state.minRatingFilter,
    textSearched: state.titleFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMovie: () => {
      dispatch({
        type: "ADD_MOVIE",
        movie: {
          id: Math.random(),
          title: prompt("Movie title"),
          year: prompt("Release year"),
          rate: prompt("Rating number"),
          image: prompt(
            "Image link",
            "https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png"
          ),
          description: prompt("Movie description")
        }
      });
    }
  };
};

const MovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default MovieListContainer;
