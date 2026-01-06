import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import NumResult from "./components/NumResult";

import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

const KEY = "f84fc31d";

function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  //const query = "interstellar";
  const query = "fukjvdshñfliuhi";

  // fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`)
  //   .then((res) => res.json())
  //   .then((data) => setMovies(data.Search));

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const resp = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);

        // if the response is not ok, throw an error
        if (!resp.ok) throw new Error("Something went wrong with fetching movies");

        // if the response is ok, parse the json
        const data = await resp.json();

        if (data.Response === "False") throw new Error("Movie not found 😭");

        setMovies(data.Search);
        setIsLoading(false);
        console.log("data", data);
        console.log("movies", movies); // stale movies before setMovies()
        console.log("data.Search", data.Search); // updated movies
      } catch (error) {
        console.error("🔥 Error fetching movies:", error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar>
        <Search />
        <NumResult movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}

export default App;
