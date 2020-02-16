import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "@core/Models/Item.class";

@Component({
  selector: "item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent {
  @Input() item: Item;
  @Input() index: number;
  @Output() onSelect = new EventEmitter<Item>();
  @Output() onRemove = new EventEmitter<number>();
  constructor() {}

  onClick() {
    this.onSelect.emit(this.item);
  }

  remove() {
    this.onRemove.emit(this.index);
  }
}
