import React from "react";
import TitleFilter from "./TitleFilter";
import RatingFilter from "./RatingFilter";

const MovieAppHeader = ({ onClickRating, indexChecked, onKeyUpFn }) => {
  return (
    <header className="movie-app-header">
      <TitleFilter onKeyUpFn={onKeyUpFn} />
      <RatingFilter
        onClickRating={i => onClickRating(i)}
        indexChecked={indexChecked}
      />
    </header>
  );
};

export default MovieAppHeader;
