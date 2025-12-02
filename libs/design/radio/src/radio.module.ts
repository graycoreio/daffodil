import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffRadioComponent } from './radio/radio.component';
import { DaffRadioSetComponent } from './radio-set/radio-set.component';

@NgModule({
  imports: [
    CommonModule,
    DaffRadioComponent,
    DaffRadioSetComponent,
  ],
  exports: [
    DaffRadioComponent,
    DaffRadioSetComponent,
  ],
})
export class DaffRadioModule { }
