import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffContainerComponent } from './container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffContainerComponent
  ],
  exports: [
    DaffContainerComponent
  ]
})
export class DaffContainerModule { }
