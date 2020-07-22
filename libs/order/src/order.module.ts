import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffOrderStateModule } from './order-state.module';
import { DaffPlacedOrderGuardRedirectUrl } from './guards/public_api';

@NgModule({
  imports: [
    CommonModule,
    /**
     * Ngrx/store
     */
    DaffOrderStateModule,
  ],
  providers: [
		{ provide: DaffPlacedOrderGuardRedirectUrl, useValue: '/' },
  ]
})
export class DaffOrderModule { }
