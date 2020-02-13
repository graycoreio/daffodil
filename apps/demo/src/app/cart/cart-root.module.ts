import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAddToCartNotificationModule } from './components/add-to-cart-notification/add-to-cart-notification.module';
import { DaffCartModule } from '@daffodil/cart';

@NgModule({
  imports: [
    CommonModule,
    DaffCartModule,
    DemoAddToCartNotificationModule
  ]
})
export class DemoCartRootModule { }
