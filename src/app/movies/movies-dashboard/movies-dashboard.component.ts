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
export class MoviesDashboardComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  movies: IMovie[] = [
    {
      title: "Home Alone 2",
      release: "11/20/1992",
      description:
        "One year after Kevin McCallister was left home alone and had to defeat a pair of bumbling burglars, he accidentally finds himself stranded in New York City - and the same criminals are not far behind.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDI1MzM0Y2YtYmIyMS00ODE3LTlhZjEtZTUyNmEzMTNhZWU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      title: "Life is Beatiful",
      release: "02/12/1997",
      description:
        "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
      image:
        "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      title: "Terminator: Dark Fate",
      release: "11/01/2019",
      description:
        "Sarah Connor and a hybrid cyborg human must protect a young girl from a newly modified liquid Terminator from the future.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzhlYjE5MjMtZDJmYy00MGZmLTgwN2MtZGM0NTk2ZTczNmU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      title: "Avengers: Endgame",
      release: "04/26/2019",
      description:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      title: "Forrest Gump",
      release: "07/06/1994",
      description:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg"
    }
  ];
  selectedMovie: IMovie;
  selectedMovieIndex: number;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private moviesService: MoviesService
  ) {
    //this.movies = this.moviesService.getMovieList();
  }

  ngOnInit() {
    console.log(this.movies);
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
  }
}
