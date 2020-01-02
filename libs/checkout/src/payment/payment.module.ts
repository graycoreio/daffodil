import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffPaymentStateModule } from './payment-state.module';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffPaymentStateModule,
  ]
})
export class DaffPaymentModule { }
