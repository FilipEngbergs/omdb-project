import { useState } from "react";
import { IMovie } from "../models/IMovie";
import { CouldNotFindMovie } from "./CouldNotFindMovie";
import { GetMovies } from "./GetMovies";
import { SearchMovies } from "./SearchMovies";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [userInput, setUserInput] = useState("");
  const [findMovies, setfindMovies] = useState(true);

  function getUserInput(input: string) {
    setUserInput(input);
  }
  function showMovies(movies: IMovie[]) {
    setMovies(movies);
  }
  function movieCounter(movieCheck: boolean) {
    setfindMovies(movieCheck);
  }

  return (
    <>
      <SearchMovies
        movieCounter={movieCounter}
        setUserInput={getUserInput}
        showMovies={showMovies}
      />
      {findMovies ? (
        <GetMovies movies={movies} showMovies={showMovies} />
      ) : (
        <CouldNotFindMovie userSearch={userInput} />
      )}
    </>
  );
};
