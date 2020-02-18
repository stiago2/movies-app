import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemComponent } from "./item/item.component";
import { MaterialModule } from "app/material/material.module";
import { FileInputComponent } from "./file-input/file-input.component";
import { NotificationPopupComponent } from './notification-popup/notification-popup.component';

@NgModule({
  declarations: [ItemComponent, FileInputComponent, NotificationPopupComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ItemComponent, FileInputComponent]
})
export class SharedModule {}
