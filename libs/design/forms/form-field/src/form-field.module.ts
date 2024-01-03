import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffFormFieldComponent } from './form-field.component';

@NgModule({
  imports: [
    CommonModule,

    FontAwesomeModule,
  ],
  exports: [
    DaffFormFieldComponent,
  ],
  declarations: [
    DaffFormFieldComponent,
  ],
})
export class DaffFormFieldModule { }
