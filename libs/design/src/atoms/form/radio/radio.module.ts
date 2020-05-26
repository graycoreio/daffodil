import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffRadioComponent } from './radio.component';
import { DaffRadioSetComponent } from '../radio-set/radio-set.component';
import { DaffRadioControlValueAccessorDirective } from './cva/radio-cva.directive';
import { DaffRadioRegistry } from './registry/radio-registry';



@NgModule({
  exports:[
    DaffRadioComponent,
    DaffRadioSetComponent,
    DaffRadioControlValueAccessorDirective,

  ],
  declarations: [
    DaffRadioControlValueAccessorDirective,
    DaffRadioComponent,
    DaffRadioSetComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    DaffRadioRegistry
  ]
})
export class DaffRadioModule { }
