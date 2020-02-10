import React from "react";
import { connect } from "react-redux";

const Details = props => {
  console.log(props.match.params);
  return (
    <div>
      {props.movieList
        .filter(el => el.id == props.match.params.id)
        .map(el => (
          <div>
            <p>{el.description}</p>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movieList: state.movies
  };
};
export default connect(mapStateToProps)(Details);
