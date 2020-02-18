import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "@core/core.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MoviesModule } from "./movies/movies.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CanDeactivateGuard } from "@core/Guards/can-deactivate.guard";
import { HttpErrorInterceptor } from "@core/Interceptors/http-error.interceptor";
import { NotificationPopupComponent } from "@shared/notification-popup/notification-popup.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MoviesModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CanDeactivateGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  entryComponents: [NotificationPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
