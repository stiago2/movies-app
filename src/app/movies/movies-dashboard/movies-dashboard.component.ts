import { Component, OnInit, Input } from "@angular/core";
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
export class MoviesDashboardComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  movies: IMovie[] = [];
  selectedMovie: IMovie;
  selectedMovieIndex: number;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private moviesService: MoviesService
  ) {
    this.movies = this.moviesService.getMovieList();
  }

  selectMovie(movie: IMovie) {
    this.selectedMovie = movie;
    this.selectedMovieIndex = this.movies.indexOf(movie);
  }

  addMovie() {
    this.router.navigate(["/add-movie"]);
  }

  removeMovie(index: number) {
    this.moviesService.removeMovie(index);
    if (index === this.selectedMovieIndex) {
      this.selectedMovie = null;
    }
  }
}
