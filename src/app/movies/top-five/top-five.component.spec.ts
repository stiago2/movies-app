import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TopFiveComponent } from "./top-five.component";
import { MoviesApiService } from "../Services/movies-api.service";
import { EventBusService } from "@core/Services/loading-event-bus.service";
import { of } from "rxjs";

describe("TopFiveComponent", () => {
  let component: TopFiveComponent;
  let moviesServiceSpy: jasmine.SpyObj<MoviesApiService>;
  let eventBusServiceSpy: jasmine.SpyObj<EventBusService>;
  const MOVIES = [
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
  beforeEach(async(() => {
    moviesServiceSpy = jasmine.createSpyObj<MoviesApiService>([
      "getTopFiveMovies"
    ]);
    eventBusServiceSpy = jasmine.createSpyObj<EventBusService>(["emit"]);
    moviesServiceSpy.getTopFiveMovies.and.returnValue(of(MOVIES));
    component = new TopFiveComponent(moviesServiceSpy, eventBusServiceSpy);
    component.ngOnInit();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should get top five movies", () => {
    expect(component.movies.length).toBe(5);
  });
});
