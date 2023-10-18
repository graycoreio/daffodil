import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffButtonSetModule,
  DaffLoadingIconModule,
  DaffButtonModule,
} from '@daffodil/design';

import { AddToCartNotificationComponent } from './add-to-cart-notification.component';
import { ProceedToCheckoutModule } from '../../../proceed-to-checkout/proceed-to-checkout.module';
import { ViewCartModule } from '../../../view-cart/view-cart.module';
import { ProductAddedModule } from '../product-added/product-added.module';


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
})
export class AddToCartNotificationComponentModule {}
