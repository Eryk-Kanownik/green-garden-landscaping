import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

interface IRatingCmp {
  rate: 1 | 2 | 3 | 4 | 5;
}

const RatingCmp: React.FC<IRatingCmp> = ({ rate }) => {
  let getRating = () => {
    let finalRating = [];
    for (var i = 1; i <= rate; i++) {
      finalRating.push(<FaStar className="text-green-500" />);
    }
    for (var i = 1; i <= 5 - rate; i++) {
      finalRating.push(<FaRegStar />);
    }
    return finalRating;
  };

  return <div className="flex mb-2">{getRating()}</div>;
};

export default RatingCmp;
