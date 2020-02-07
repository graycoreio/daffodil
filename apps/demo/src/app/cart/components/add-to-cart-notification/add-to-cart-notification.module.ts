import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAddToCartNotificationStateModule } from './add-to-cart-notification-state.module';
import { AddToCartNotificationComponentModule } from './components/add-to-cart-notification/add-to-cart-notification.module';

@NgModule({
  imports: [
    CommonModule,
    DemoAddToCartNotificationStateModule,
    AddToCartNotificationComponentModule,
  ],
  exports: [
    AddToCartNotificationComponentModule
  ]
})
export class DemoAddToCartNotificationModule { }
