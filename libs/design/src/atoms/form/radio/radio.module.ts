import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffRadioComponent } from './radio.component';
import { DaffFormLabelModule } from '../form-label/form-label.module';

@NgModule({
  imports: [
    CommonModule,
    DaffFormLabelModule
  ],
  exports: [
    DaffRadioComponent
  ],
  declarations: [
    DaffRadioComponent
  ]
})
export class DaffRadioModule {}
