import { IMovie } from "./IMovie.interface";

export class MoviesList {
  moviesList: IMovie[] = [];

  add(movie: IMovie) {
    this.moviesList.push(movie);
  }

  remove(index: number) {
    this.moviesList.splice(index, 1);
  }

  getMovies(): IMovie[] {
    return this.moviesList;
  }
}
