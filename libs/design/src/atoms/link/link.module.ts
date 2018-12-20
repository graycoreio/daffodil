import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffLinkComponent } from './link.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffLinkComponent
  ],
  exports: [
    DaffLinkComponent
  ]
})
export class DaffLinkModule { }
