import { Injectable } from "@angular/core";
import { INotification } from "@core/Models/INotification.interface";
import { NotificationPopupComponent } from "@shared/notification-popup/notification-popup.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class NotificationCenterService {
  constructor(private snackBar: MatSnackBar) {}

  showNotification(notification: INotification) {
    this.snackBar.openFromComponent(NotificationPopupComponent, {
      data: notification,
      duration: 3000
    });
  }
}
