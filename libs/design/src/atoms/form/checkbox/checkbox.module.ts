import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DaffCheckboxComponent } from './checkbox.component';
import { DaffFormLabelModule } from '../form-label/form-label.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    DaffFormLabelModule,
    FontAwesomeModule
  ],
  exports: [
    DaffCheckboxComponent
  ],
  declarations: [
    DaffCheckboxComponent
  ]
})
export class DaffCheckboxModule {}
