import { useEffect } from "react";
import { IMovie } from "../models/IMovie";
import MovieService from "../services/MovieService";

interface PropsSetMovies {
  movies: IMovie[];
  showMovies(movies: IMovie[]): void;
}

export const GetMovies = (props: PropsSetMovies) => {
  useEffect(() => {
    if (props.movies.length !== 0) return;

    let service = new MovieService();
    service.getMovies().then((movies) => {
      props.showMovies(movies);
    });
  });

  return (
    <>
      <div>
        {props.movies.map((m, index) => {
          return (
            <div key={index}>
              <h1>{m.Title}</h1>
              <img src={m.Poster} alt={m.Title} />
              <p>{m.Year}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
