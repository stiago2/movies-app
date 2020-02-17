import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemComponent } from "./item/item.component";
import { MaterialModule } from "app/material/material.module";
import { FileInputComponent } from "./file-input/file-input.component";

@NgModule({
  declarations: [ItemComponent, FileInputComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ItemComponent, FileInputComponent]
})
export class SharedModule {}
