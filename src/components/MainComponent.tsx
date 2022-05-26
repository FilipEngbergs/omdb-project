import { useState } from "react";
import { IMovie } from "../models/IMovie";
import { Movies } from "./Movies";

export const MainComponent = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  function showMovies(movies: IMovie[]) {
    setMovies(movies);
  }

  function ShowMoviesBySearch() {}

  return (
    <>
      <Movies movies={movies} showMovies={showMovies} />
    </>
  );
};
