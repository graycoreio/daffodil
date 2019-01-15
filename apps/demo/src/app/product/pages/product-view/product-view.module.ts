import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateProductModule } from '@daffodil/state';

import { LoadingIconModule } from '../../../core/loading-icon/loading-icon.module';
import { ProductComponentModule } from '../../components/product/product.module';
import { AddToCartModule } from '../../components/add-to-cart/add-to-cart.module';
import { AddToCartNotificationModule } from '../../../modals/add-to-cart-notification/add-to-cart-notification.module';
import { ProductViewComponent } from './product-view.component';

@NgModule({
  imports: [
    CommonModule,
    LoadingIconModule,
    ProductComponentModule,
    AddToCartModule,
    AddToCartNotificationModule,
    StateProductModule
  ],
  declarations: [
    ProductViewComponent
  ],
  exports: [
    ProductViewComponent
  ]
})
export class ProductViewModule { }
