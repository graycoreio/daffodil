import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductStateModule } from './product-state.module';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffProductStateModule,
  ]
})
export class DaffProductModule { }
