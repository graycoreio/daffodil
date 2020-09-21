import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCartStateModule } from './cart-state.module';
import {
	DaffCartBillingAddressGuardRedirectUrl,
	DaffCartShippingAddressGuardRedirectUrl,
	DaffCartShippingMethodGuardRedirectUrl,
  DaffCartPaymentMethodGuardRedirectUrl,
  DaffCartOrderResultGuardRedirectUrl
} from './guards/public_api';
import { DaffEmptyCartResolverRedirectUrl, DaffCartResolverRedirectUrl } from './resolvers/public_api';
import { DaffCartPaymentMethodIdMap } from './injection-tokens/public_api';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffCartStateModule,
  ],
	providers: [
		{ provide: DaffCartBillingAddressGuardRedirectUrl, useValue: '/' },
		{ provide: DaffCartShippingAddressGuardRedirectUrl, useValue: '/' },
		{ provide: DaffCartShippingMethodGuardRedirectUrl, useValue: '/' },
		{ provide: DaffCartPaymentMethodGuardRedirectUrl, useValue: '/' },
		{ provide: DaffCartOrderResultGuardRedirectUrl, useValue: '/' },
		{ provide: DaffEmptyCartResolverRedirectUrl, useValue: '/' },
		{ provide: DaffCartResolverRedirectUrl, useValue: '/' },
		{ provide: DaffCartPaymentMethodIdMap, useValue: {} },
	]
})
export class DaffCartModule { }
