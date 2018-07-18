import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorePaymentStateModule } from './payment-state.module';
import { PaymentContainer } from './containers/payment.component';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    CorePaymentStateModule,
  ],
  declarations: [
    PaymentContainer
  ],
  exports: [
    PaymentContainer
  ]
})
export class CorePaymentModule { }
