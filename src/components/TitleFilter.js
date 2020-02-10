import React from "react";
import { connect } from "react-redux";

const TitleFilter = ({ value, onChangeText }) => {
  return (
    <div className="name-filter">
      <input
        className="name-filter-text"
        type="text"
        onChange={event => onChangeText(event.target.value)}
      />
    </div>
  );
};

const mapStateToProp = state => {
  return {
    value: state.titleFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeText: newText => {
      dispatch({
        type: "SET_TITLE_FILTER",
        title: newText
      });
    }
  };
};

const TitleFilterContainer = connect(mapStateToProp, mapDispatchToProps)(
  TitleFilter
);

export default TitleFilterContainer;
