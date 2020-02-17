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
  @Input() set selectedIndex(index: number) {
    this.selected = this.index === index;
  }
  @Output() onSelect = new EventEmitter<Item>();
  @Output() onRemove = new EventEmitter<number>();
  selected = false;

  constructor() {}

  onClick() {
    this.onSelect.emit(this.item);
  }

  remove() {
    this.onRemove.emit(this.index);
  }
}
