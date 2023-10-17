import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffRadioControlValueAccessorDirective } from './cva/radio-cva.directive';
import { DaffRadioComponent } from './radio.component';
import { DaffRadioSetComponent } from '../radio-set/radio-set.component';



@NgModule({
  exports:[
    DaffRadioComponent,
    DaffRadioSetComponent,
    DaffRadioControlValueAccessorDirective,

  ],
  declarations: [
    DaffRadioControlValueAccessorDirective,
    DaffRadioComponent,
    DaffRadioSetComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class DaffRadioModule { }
