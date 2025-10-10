import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffCheckboxComponent } from './checkbox/checkbox.component';
import { DaffCheckboxSetComponent } from './checkbox-set/checkbox-set.component';
import { DaffCheckboxControlValueAccessorDirective } from './cva/checkbox-cva.directive';

@NgModule({
  exports: [
    DaffCheckboxComponent,
    DaffCheckboxSetComponent,
    DaffCheckboxControlValueAccessorDirective,
  ],
  imports: [
    CommonModule,
    DaffCheckboxComponent,
    DaffCheckboxSetComponent,
    DaffCheckboxControlValueAccessorDirective,
  ],
  providers: [
    DaffCheckboxSetComponent,
  ],
})
export class DaffCheckboxModule { }
