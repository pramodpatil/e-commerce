import { NgModule } from '@angular/core';

import {

  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatIconModule

} from '@angular/material';


@NgModule({
  exports: [
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatIconModule
  ]
})
export class MaterialModule { }
