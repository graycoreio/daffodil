import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffOrderStateModule } from './order-state.module';
import { DaffOrderPlacedOrderGuardRedirectUrl } from './guards/public_api';

@NgModule({
  imports: [
    CommonModule,
    /**
     * Ngrx/store
     */
    DaffOrderStateModule,
  ],
  providers: [
		{ provide: DaffOrderPlacedOrderGuardRedirectUrl, useValue: '/' },
  ]
})
export class DaffOrderModule { }
