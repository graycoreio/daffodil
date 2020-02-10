import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	DaffButtonSetModule,
	DaffLoadingIconModule,
	DaffButtonModule
} from '@daffodil/design';

import { AddToCartNotificationComponent } from './add-to-cart-notification.component';
import { ProductAddedModule } from '../product-added/product-added.module';
import { ViewCartModule } from '../../../view-cart/view-cart.module';
import { ProceedToCheckoutModule } from '../../../proceed-to-checkout/proceed-to-checkout.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	imports: [
		CommonModule,
		ViewCartModule,
		ProceedToCheckoutModule,
		ProductAddedModule,
		DaffLoadingIconModule,
		DaffButtonSetModule,
		DaffButtonModule,
		FontAwesomeModule,
	],
	declarations: [AddToCartNotificationComponent],
	exports: [AddToCartNotificationComponent],
	entryComponents: [AddToCartNotificationComponent],
})
export class AddToCartNotificationComponentModule {}
