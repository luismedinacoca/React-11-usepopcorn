import { useEffect, useState } from "react";
import StarRating from "../StarRating";
import Loader from "./Loader";
const MovieDetails = ({ selectedId, onCloseMovie }) => {
  const KEY = "f84fc31d";
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: Genre,
  } = movie;

  console.log(title, year);
  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      const resp = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
      const data = await resp.json();
      console.log("🎥 data", data);
      setMovie(data);
      setIsLoading(false);
    };

    getMovieDetails();
  }, [selectedId]);
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{Genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating maxRating={10} size={24} />
            </div>
            <p>{plot}</p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};
export default MovieDetails;
