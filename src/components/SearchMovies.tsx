import { ChangeEvent, useState } from "react";
import { IMovie } from "../models/IMovie";
import MovieService from "../services/MovieService";

interface ISearchMoviesProps {
  movieCounter(movieCheck: boolean): void;
  setUserInput(input: string): void;
  showMovies(movies: IMovie[]): void;
}
export const SearchMovies = (props: ISearchMoviesProps) => {
  const [userInput, setUserInput] = useState("");

  const handleUserSearch = () => {
    if (userInput.length >= 1) {
      let service = new MovieService();
      service.getMoviesBySearch(userInput).then((movies) => {
        if (movies !== undefined) {
          props.showMovies(movies);
          props.movieCounter(true);
          setUserInput("");
        } else {
          props.setUserInput(userInput);
          props.movieCounter(false);
          setUserInput("");
        }
      });
    }
  };

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        value={userInput}
        placeholder="Search here.."
        onChange={handleUserInput}
      />
      <button onClick={handleUserSearch}>Search</button>
    </>
  );
};
