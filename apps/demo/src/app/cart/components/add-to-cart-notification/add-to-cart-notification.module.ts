import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffModalModule } from '@daffodil/design/modal';

import { DemoAddToCartNotificationStateModule } from './add-to-cart-notification-state.module';
import { AddToCartNotificationComponentModule } from './components/add-to-cart-notification/add-to-cart-notification.module';

@NgModule({
  imports: [
    CommonModule,
    DaffModalModule,
    DemoAddToCartNotificationStateModule,
    AddToCartNotificationComponentModule,
  ],
  exports: [
    AddToCartNotificationComponentModule,
  ],
})
export class DemoAddToCartNotificationModule { }
