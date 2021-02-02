import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffCartStateModule } from '@daffodil/cart/state';

import { DemoAddToCartNotificationModule } from './components/add-to-cart-notification/add-to-cart-notification.module';

@NgModule({
  imports: [
    CommonModule,
    DaffCartStateModule,
    DemoAddToCartNotificationModule,
  ],
})
export class DemoCartRootModule { }
