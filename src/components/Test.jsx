import { useState } from "react";
import StarRating from "../StarRating";

const Test = () => {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
      <p>This movie was rate {movieRating} stars</p>
    </>
  );
};

export default Test;
