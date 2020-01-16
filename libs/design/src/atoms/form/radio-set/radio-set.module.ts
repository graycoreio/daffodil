import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffRadioSetComponent } from './radio-set.component';
import { DaffRadioModule } from '../radio/radio.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DaffRadioSetComponent,
    DaffRadioModule
  ],
  declarations: [
    DaffRadioSetComponent
  ]
})
export class DaffRadioSetModule {}
