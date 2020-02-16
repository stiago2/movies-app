import { Injectable } from "@angular/core";
import { Item } from "@core/Models/Item.class";
import { IAdapter } from "@core/Models/IAdapter.interface";

@Injectable({
  providedIn: "root"
})
export class AdapterService implements IAdapter<Item> {
  adapt(item: any): Item {
    return new Item({
      title: item.title,
      description: item.description,
      release: item.release,
      image: item.image
    });
  }
}
