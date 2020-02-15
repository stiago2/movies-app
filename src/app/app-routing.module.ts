import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MoviesDashboardComponent } from "./movies/movies-dashboard/movies-dashboard.component";

const routes: Routes = [
  { path: "", redirectTo: "/movies", pathMatch: "full" },
  {
    path: "movies",
    component: MoviesDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
