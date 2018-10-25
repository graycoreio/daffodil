import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffBackdropModule } from '../backdrop/backdrop.module';
import { DaffModalComponent } from './modal/modal.component';


@NgModule({
  imports: [
    CommonModule,
    DaffBackdropModule
  ],
  declarations: [
    DaffModalComponent
  ],
  exports: [
    DaffModalComponent
  ]
})
export class DaffModalModule { }
