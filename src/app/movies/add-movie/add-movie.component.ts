import { Component } from "@angular/core";
import { MoviesService } from "../Services/movies.service";
import { Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import {
  EventBusService,
  EmitEvent
} from "@core/Services/loading-event-bus.service";
import { Events } from "@core/Enums/events.enum";
import { ICanDeactivate } from "@core/Models/ICanDeactivate.interface";

@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.scss"]
})
export class AddMovieComponent implements ICanDeactivate {
  newMovieForm = this.formBuilder.group({
    title: ["", Validators.compose([Validators.required])],
    release: ["", Validators.compose([Validators.required])],
    image: ["", Validators.compose([Validators.required])],
    description: [""]
  });
  canDeactivate() {
    return this.newMovieForm.dirty && this.newMovieForm.touched
      ? confirm("Discard changes for movie?")
      : true;
  }
  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private eventBusService: EventBusService
  ) {}

  loadFile(image: any) {
    this.newMovieForm.patchValue({
      image
    });
  }

  saveMovie() {
    this.eventBusService.emit(new EmitEvent(Events.onLoading, true));
    this.moviesService.addNewMovie({
      title: this.newMovieForm.get("title").value,
      release: this.newMovieForm.get("release").value,
      image: this.newMovieForm.get("image").value,
      description: this.newMovieForm.get("description").value
    });
    setTimeout(() => {
      this.newMovieForm.markAsUntouched();
      this.eventBusService.emit(new EmitEvent(Events.onLoading, false));
      this.router.navigate(["/movies"]);
    });
  }
}
