import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffLogoComponent } from './logo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffLogoComponent
  ],
  exports: [
    DaffLogoComponent
  ]
})
export class DaffLogoModule { }