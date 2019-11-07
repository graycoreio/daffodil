import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoAddToCartNotificationStateModule } from './add-to-cart-notification-state.module';
import { ProductAddedComponent } from './components/product-added/product-added.component';
import { AddToCartNotificationComponent } from './containers/add-to-cart-notification/add-to-cart-notification.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffModalModule, DaffLoadingIconModule, DaffButtonModule } from '@daffodil/design';
import { ProceedToCheckoutModule } from '../cart/components/proceed-to-checkout/proceed-to-checkout.module';
import { ViewCartModule } from '../cart/components/view-cart/view-cart.module';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    DaffModalModule,
    DaffButtonModule,
    DaffLoadingIconModule,
    ProceedToCheckoutModule,
    ViewCartModule,
    DemoAddToCartNotificationStateModule
  ],
  declarations: [
    ProductAddedComponent,
    AddToCartNotificationComponent
  ],
  entryComponents: [
    AddToCartNotificationComponent
  ]
})
export class DemoAddToCartNotificationModule {}
