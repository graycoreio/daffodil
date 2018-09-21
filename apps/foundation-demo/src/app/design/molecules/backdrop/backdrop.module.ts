import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffBackdropComponent } from './backdrop/backdrop.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffBackdropComponent
  ],
  exports: [
    DaffBackdropComponent
  ]
})
export class DaffBackdropModule { }
