import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        // <li key={movie.imdbID}>
        //   <img src={movie.Poster} alt={`${movie.Title} poster`} />
        //   <h3>{movie.Title}</h3>
        //   <div>
        //     <p>
        //       <span>🗓</span>
        //       <span>{movie.Year}</span>
        //     </p>
        //   </div>
        // </li>
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieList;
