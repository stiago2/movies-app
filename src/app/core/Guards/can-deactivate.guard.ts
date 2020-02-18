import { Injectable } from "@angular/core";

import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { ICanDeactivate } from "../Models/ICanDeactivate.interface";

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ICanDeactivate> {
  canDeactivate(
    component: ICanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
