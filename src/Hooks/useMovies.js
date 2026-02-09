import { useState, useEffect } from "react";

const KEY = "f84fc31d";

export function useMovies(query, callback) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    callback?.();
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const resp = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal });

        if (!resp.ok) throw new Error("Something went wrong with fetching movies");

        const data = await resp.json();

        if (data.Response === "False") throw new Error("Movie not found 😭");

        setMovies(data.Search);
      } catch (error) {
        console.log(error.message);
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    //handleCloseMovie();
    fetchMovies();
    return () => controller.abort();
  }, [query]);

  return { movies, isLoading, error }
}
