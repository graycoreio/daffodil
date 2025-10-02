import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffRadioControlValueAccessorDirective } from './cva/radio-cva.directive';
import { DaffRadioComponent } from './radio/radio.component';
import { DaffRadioSetComponent } from './radio-set/radio-set.component';

@NgModule({
  imports: [
    CommonModule,
    DaffRadioComponent,
    DaffRadioSetComponent,
    DaffRadioControlValueAccessorDirective,
  ],
  exports: [
    DaffRadioComponent,
    DaffRadioSetComponent,
    DaffRadioControlValueAccessorDirective,
  ],
})
export class DaffRadioModule { }
