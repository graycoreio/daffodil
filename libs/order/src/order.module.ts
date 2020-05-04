import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffOrderStateModule } from './order-state.module';

@NgModule({
  imports: [
    CommonModule,
    /**
     * Ngrx/store
     */
    DaffOrderStateModule,
  ]
})
export class DaffOrderModule { }
