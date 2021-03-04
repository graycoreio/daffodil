import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffBillingStateModule } from './billing-state.module';
import { BillingContainer } from './containers/billing.component';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffBillingStateModule,
  ],
  declarations: [
    BillingContainer,
  ],
  exports: [
    BillingContainer,
  ],
})
export class DaffBillingModule { }
