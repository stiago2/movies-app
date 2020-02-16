import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../Services/movies.service";

@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.scss"]
})
export class AddMovieComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.addNewMovie({
      title: "test",
      description: "this is a test",
      release: "10/09/87",
      image: ""
    });
  }
}
