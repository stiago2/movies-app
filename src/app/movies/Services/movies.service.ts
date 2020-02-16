import { Injectable } from "@angular/core";
import { MoviesList } from "../Models/MovieList";
import { IMovie } from "../Models/IMovie.interface";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  private moviesList: MoviesList = new MoviesList();

  constructor() {}

  getMovieList(): IMovie[] {
    return this.moviesList.getMovies();
  }

  addNewMovie(movie: IMovie) {
    this.moviesList.add(movie);
  }

  removeMovie(index: number) {
    this.moviesList.remove(index);
  }
}
