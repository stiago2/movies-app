import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesDashboardComponent } from "./movies-dashboard/movies-dashboard.component";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { TopFiveComponent } from "./top-five/top-five.component";
import { MaterialModule } from "app/material/material.module";
import { SharedModule } from "@shared/shared.module";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [
    MoviesDashboardComponent,
    AddMovieComponent,
    TopFiveComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  exports: [MoviesDashboardComponent]
})
export class MoviesModule {}
