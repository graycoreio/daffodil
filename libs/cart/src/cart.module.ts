import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
	DaffCartStateModule,
	DaffCartBillingAddressGuardRedirectUrl,
	DaffCartShippingAddressGuardRedirectUrl,
	DaffCartShippingMethodGuardRedirectUrl,
  DaffCartPaymentMethodGuardRedirectUrl,
	DaffCartOrderResultGuardRedirectUrl,
	DaffEmptyCartResolverRedirectUrl, 
	DaffCartResolverRedirectUrl
} from '@daffodil/cart/state';

import { DaffCartPaymentMethodIdMap, DaffCartItemStateDebounceTime } from './injection-tokens/public_api';

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
		{ provide: DaffCartItemStateDebounceTime, useValue: 4000 }
	]
})
export class DaffCartModule { }
