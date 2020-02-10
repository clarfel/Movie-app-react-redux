import React from "react";

import "./Rating.css";

const Star = ({ onClickStar, isChecked }) => {
  return (
    <div
      className={"fa fa-star the-star " + (isChecked ? "checked" : "")}
      onClick={onClickStar}
    />
  );
};

class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      indexChecked: this.props.indexChecked
    };
  }

  render() {
    let array = [];
    for (let i = 0; i < 5; i++) {
      array.push(
        <Star
          isChecked={i < this.props.indexChecked + 1}
          onClickStar={() => this.props.onClickRating(i)}
          key={i}
        />
      );
    }
    return <div className="rating">{array}</div>;
  }
}

export default Rating;
