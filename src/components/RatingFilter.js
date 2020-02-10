import React from "react";
import Rating from "./Rating";
import { connect } from "react-redux";

const RatingFilter = ({ onClickRating, indexChecked }) => {
  return (
    <div className="rating-filter">
      <span className="rating-filter-text">Minimum rating</span>
      <Rating
        onClickRating={i => onClickRating(i)}
        indexChecked={indexChecked}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onClickRating: newRating => {
      dispatch({
        type: "SET_RATING_FILTER",
        rating: newRating
      });
    }
  };
};

const mapStateToProp = state => {
  return {
    indexChecked: state.minRatingFilter
  };
};

const RatingFilterContainer = connect(mapStateToProp, mapDispatchToProps)(
  RatingFilter
);

export default RatingFilterContainer;
