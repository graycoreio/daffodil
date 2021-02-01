import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffProductStateModule } from './product-state.module';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffProductStateModule,
  ],
})
export class DaffProductModule { }
