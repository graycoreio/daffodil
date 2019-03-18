import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartNotificationComponentModule } from './components/add-to-cart-notification/add-to-cart-notification.module';

@NgModule({
  imports: [
    CommonModule,
    AddToCartNotificationComponentModule,
  ],
  exports: [
    AddToCartNotificationComponentModule
  ]
})
export class AddToCartNotificationModule { }
