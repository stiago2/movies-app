import { Component, OnInit } from "@angular/core";
import { EventBusService } from "@core/Services/loading-event-bus.service";
import { Events } from "@core/Enums/events.enum";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"]
})
export class LoadingComponent {
  isLoading = false;
  constructor(private eventBusService: EventBusService) {
    this.eventBusService.on(Events.onLoading, (loading: boolean) => {
      return (this.isLoading = loading);
    });
  }
}
