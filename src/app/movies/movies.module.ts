import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesDashboardComponent } from "./movies-dashboard/movies-dashboard.component";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { TopFiveComponent } from "./top-five/top-five.component";

@NgModule({
  declarations: [MoviesDashboardComponent, AddMovieComponent, TopFiveComponent],
  imports: [CommonModule, MoviesRoutingModule],
  exports: [MoviesDashboardComponent]
})
export class MoviesModule {}
