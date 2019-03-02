import { NgModule } from '@angular/core';
import { DaffCopyrightComponent } from './copyright.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffCopyrightComponent
  ],
  exports: [
    DaffCopyrightComponent
  ]
})
export class DaffCopyrightModule { }
