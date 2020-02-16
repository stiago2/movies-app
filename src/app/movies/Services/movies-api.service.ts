import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { IMovie } from "../Models/IMovie.interface";
import { map } from "rxjs/operators";
import { AdapterService } from "@core/Services/adapter.service";

@Injectable({
  providedIn: "root"
})
export class MoviesApiService {
  private url = "http://www.mocky.io/v2/5dc3c053300000540034757b";
  constructor(private http: HttpClient, private adapter: AdapterService) {}

  getTopFiveMovies(): Observable<IMovie[]> {
    return this.http
      .get(this.url)
      .pipe(
        map((data: any[]) => data.movies.map(item => this.adapter.adapt(item)))
      );
  }
}
