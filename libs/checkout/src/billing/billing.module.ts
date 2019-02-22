import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateBillingStateModule } from './billing-state.module';
import { BillingContainer } from './containers/billing.component';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    StateBillingStateModule,
  ],
  declarations: [
    BillingContainer
  ],
  exports: [
    BillingContainer
  ]
})
export class StateBillingModule { }