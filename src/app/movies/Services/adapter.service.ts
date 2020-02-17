import { Injectable } from "@angular/core";
import { IAdapter } from "@core/Models/IAdapter.interface";
import { Movie } from "../Models/Movie.class";
import { IMovie } from "../Models/IMovie.interface";

@Injectable({
  providedIn: "root"
})
export class AdapterService implements IAdapter<Movie> {
  adapt(movie: any): Movie {
    return new Movie({
      title: movie.title,
      release: movie.release,
      image: movie.image,
      description: movie.description
    });
  }
}
