import { NgModule } from '@angular/core';

import { DaffEmptyCartResolver } from './empty-cart-resolver.service';
import { DaffCartResolver } from './cart-resolver.service';
import { DaffCartResolverRedirectUrl } from './tokens/cart-resolver-redirect.token';
import { DaffEmptyCartResolverRedirectUrl } from './tokens/empty-cart-resolver-redirect.token';

@NgModule({
	providers: [
		DaffEmptyCartResolver,
		DaffCartResolver,
		{ provide: DaffCartResolverRedirectUrl, useExisting: DaffEmptyCartResolverRedirectUrl }
	]
})
export class DaffEmptyCartResolverModule { }
