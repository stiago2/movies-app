import { Component, OnInit, Inject, InjectionToken } from "@angular/core";
import { INotification } from "@core/Models/INotification.interface";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";
import { NotificationTypes } from "@core/Enums/notifications.enum";

@Component({
  selector: "app-notification-popup",
  templateUrl: "./notification-popup.component.html",
  styleUrls: ["./notification-popup.component.scss"]
})
export class NotificationPopupComponent implements OnInit {
  notificationMessageType: string;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: INotification) {}

  ngOnInit() {
    this.notificationMessageType = "success";
    if (this.data.type === NotificationTypes.error) {
      this.notificationMessageType = "error";
    }
  }
}
