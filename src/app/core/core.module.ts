import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnsureModuleLoadedOnceGuard } from "./ensure-module-loaded-once.guard";
import { LoadingComponent } from "./loading/loading.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "app/material/material.module";

@NgModule({
  declarations: [LoadingComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [LoadingComponent, NavbarComponent]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
