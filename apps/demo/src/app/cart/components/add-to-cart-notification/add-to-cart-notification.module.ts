import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAddToCartNotificationStateModule } from './add-to-cart-notification-state.module';
import { AddToCartNotificationComponentModule } from './components/add-to-cart-notification/add-to-cart-notification.module';
import { DaffModalModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    DaffModalModule,
    DemoAddToCartNotificationStateModule,
    AddToCartNotificationComponentModule,
  ],
  exports: [
    AddToCartNotificationComponentModule
  ]
})
export class DemoAddToCartNotificationModule { }
