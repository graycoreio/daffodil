import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffButtonComponent } from './button.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffButtonComponent
  ],
  exports: [
    DaffButtonComponent
  ]
})
export class DaffButtonModule { }
