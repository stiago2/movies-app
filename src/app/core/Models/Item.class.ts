import { IItemSettings } from "./IItemSettings.interface";

export abstract class Item implements IItemSettings {
  title: string;
  description: string;
  constructor(item: IItemSettings) {
    this.title = item.title;
    this.description = item.description;
  }
}
