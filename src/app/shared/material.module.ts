import { NgModule } from '@angular/core';

import {

  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatListModule

} from '@angular/material';


@NgModule({
  exports: [
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ]
})
export class MaterialModule { }
