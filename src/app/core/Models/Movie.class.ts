import { IMovie } from "./IMovie.interface";

export class Movie implements IMovie {
  constructor(
    public title: string,
    public release: string,
    public description: string,
    public image: string
  ) {}
}
