import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCartStateModule } from './cart-state.module';
import { 
	DaffCartBillingAddressGuardRedirectUrl, 
	DaffCartShippingAddressGuardRedirectUrl, 
	DaffCartShippingMethodGuardRedirectUrl, 
	DaffCartPaymentMethodGuardRedirectUrl 
} from './guards/public_api';
import { DaffEmptyCartResolverRedirectUrl, DaffCartResolverRedirectUrl } from './resolvers/public_api';

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
		{ provide: DaffEmptyCartResolverRedirectUrl, useValue: '/' },
		{ provide: DaffCartResolverRedirectUrl, useValue: '/' },
	]
})
export class DaffCartModule { }
