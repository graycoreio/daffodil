import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCartStateModule } from './cart-state.module';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffCartStateModule,
  ]
})
export class DaffCartModule { }
