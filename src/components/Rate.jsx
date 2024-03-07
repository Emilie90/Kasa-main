import React from "react";
import EmptyStar from "../images/empty_star.png";
import Star from "../images/star.png";

const Rate = ({ scoreValue }) => {
  const ratingStar = [1, 2, 3, 4, 5];

  return (
    <div>
      {ratingStar.map((level) => (
        <img
          key={level.toString()}
          className="star"
          src={scoreValue >= level ? Star : EmptyStar}
          alt="rating star"
        />
      ))}
    </div>
  );
};

export default Rate;
