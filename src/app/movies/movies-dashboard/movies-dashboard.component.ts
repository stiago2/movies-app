import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { map, shareReplay } from "rxjs/operators";
import { IMovie } from "../Models/IMovie.interface";
import { Router } from "@angular/router";
import { MoviesService } from "../Services/movies.service";

@Component({
  selector: "app-movies-dashboard",
  templateUrl: "./movies-dashboard.component.html",
  styleUrls: ["./movies-dashboard.component.scss"]
})
export class MoviesDashboardComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  movies: IMovie[] = [];
  selectedMovie: IMovie;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private moviesService: MoviesService
  ) {
    this.movies = this.moviesService.getMovieList();
  }

  ngOnInit() {}

  selectMovie(movie: IMovie) {
    this.selectedMovie = movie;
  }

  addMovie() {
    this.router.navigate(["/add-movie"]);
  }

  removeMovie(index: number) {
    this.moviesService.removeMovie(index);
  }
}
