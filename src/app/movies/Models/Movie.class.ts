import { Item } from "@core/Models/Item.class";
import { IMovie } from "./IMovie.interface";

export class Movie extends Item implements IMovie {
  image: string;
  release: string;
  constructor(movie: IMovie) {
    super(movie);
    this.image = movie.image;
    this.release = movie.release;
  }
}
