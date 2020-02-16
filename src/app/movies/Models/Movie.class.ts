import { Item } from "@core/Models/Item.class";
import { IMovie } from "./IMovie.interface";

export class Movie extends Item {
  constructor(movie: IMovie) {
    super(movie);
  }
}
