import { NgModule } from '@angular/core';

import {

  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatTableModule

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
    MatListModule,
    MatTableModule
  ]
})
export class MaterialModule { }
