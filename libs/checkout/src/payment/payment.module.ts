import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffPaymentStateModule } from './payment-state.module';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffPaymentStateModule,
  ],
})
export class DaffPaymentModule { }
