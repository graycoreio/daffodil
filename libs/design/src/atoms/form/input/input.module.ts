import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffInputComponent } from './input.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    DaffInputComponent,
  ],
  declarations: [
    DaffInputComponent,
  ],
})
export class DaffInputModule { }
