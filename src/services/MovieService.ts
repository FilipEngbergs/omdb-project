import axios from "axios";
import { IMovie } from "../models/IMovie";
import { IOMDbResponse } from "../models/IOMDbResponse";

export default class OmdbService {
  async getMovies(): Promise<IMovie[]> {
    const response = await axios.get<IOMDbResponse>(
      "http://www.omdbapi.com/?apikey=ee348134&s=star"
    );
    return response.data.Search;
  }

  async getMoviesBySearch(id: string): Promise<IMovie[]> {
    const response = await axios.get<IOMDbResponse>(
      "http://www.omdbapi.com/?apikey=ee348134&s=" + id
    );
    return response.data.Search;
  }
}
