import { Component, OnInit, Input } from "@angular/core";
import { IMovie } from "../Models/IMovie.interface";

@Component({
  selector: "movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"]
})
export class MovieDetailsComponent {
  @Input() movie: IMovie;
  constructor() {}
}
