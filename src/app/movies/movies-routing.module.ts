import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MoviesDashboardComponent } from "./movies-dashboard/movies-dashboard.component";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { TopFiveComponent } from "./top-five/top-five.component";
import { CanDeactivateGuard } from "@core/can-deactivate.guard";

const routes: Routes = [
  { path: "", component: MoviesDashboardComponent },
  {
    path: "add-movie",
    component: AddMovieComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  { path: "top-five", component: TopFiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
