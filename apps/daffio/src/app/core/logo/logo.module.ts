import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffioLogoComponent } from './logo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffioLogoComponent
  ],
  exports: [
    DaffioLogoComponent
  ]
})
export class DaffioLogoModule { }