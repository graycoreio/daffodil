import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatePaymentStateModule } from './payment-state.module';
import { PaymentContainer } from './containers/payment.component';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    StatePaymentStateModule,
  ],
  declarations: [
    PaymentContainer
  ],
  exports: [
    PaymentContainer
  ]
})
export class StatePaymentModule { }
