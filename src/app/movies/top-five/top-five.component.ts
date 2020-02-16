import { Component, OnInit } from "@angular/core";
import { IMovie } from "../Models/IMovie.interface";
import { MoviesApiService } from "../Services/movies-api.service";
import {
  EventBusService,
  EmitEvent
} from "@core/Services/loading-event-bus.service";
import { Events } from "@core/Enums/events.enum";

@Component({
  selector: "app-top-five",
  templateUrl: "./top-five.component.html",
  styleUrls: ["./top-five.component.scss"]
})
export class TopFiveComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(
    private moviesApiService: MoviesApiService,
    private eventBusService: EventBusService
  ) {
    this.eventBusService.emit(new EmitEvent(Events.onLoading, true));
    this.moviesApiService.getTopFiveMovies().subscribe(data => {
      this.movies = data;
      this.eventBusService.emit(new EmitEvent(Events.onLoading, false));
    });
  }

  ngOnInit() {}
}
