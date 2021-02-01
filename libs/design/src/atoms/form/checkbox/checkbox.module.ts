import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffCheckboxSetComponent } from '../checkbox-set/checkbox-set.component';
import { DaffCheckboxComponent } from './checkbox.component';
import { DaffCheckboxControlValueAccessorDirective } from './cva/checkbox-cva.directive';

@NgModule({
  exports: [
    DaffCheckboxComponent,
    DaffCheckboxSetComponent,
    DaffCheckboxControlValueAccessorDirective,
  ],
  declarations: [
    DaffCheckboxComponent,
    DaffCheckboxSetComponent,
    DaffCheckboxControlValueAccessorDirective,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    DaffCheckboxSetComponent,
  ],
})
export class DaffCheckboxModule { }
