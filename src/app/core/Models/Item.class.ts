import { IItemSettings } from "./IItemSettings.interface";

export class Item implements IItemSettings {
  title: string;
  description: string;
  release: string;
  image: string;
  constructor(item: IItemSettings) {
    this.title = item.title;
    this.description = item.description;
    this.release = item.release;
    this.image = item.image;
  }
}
