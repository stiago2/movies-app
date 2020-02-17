import { IItemSettings } from "@core/Models/IItemSettings.interface";

export interface IMovie extends IItemSettings {
  release: string;
  image: string;
}
