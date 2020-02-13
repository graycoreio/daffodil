import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductModule } from '@daffodil/product';
import { DaffCartModule } from '@daffodil/cart';
import { DaffLoadingIconModule } from '@daffodil/design';

import { ProductComponentModule } from '../../components/product/product.module';
import { AddToCartModule } from '../../components/add-to-cart/add-to-cart.module';
import { ProductViewComponent } from './product-view.component';

@NgModule({
  imports: [
    CommonModule,
    DaffLoadingIconModule,
    ProductComponentModule,
    AddToCartModule,
    DaffProductModule,
    DaffCartModule
  ],
  declarations: [
    ProductViewComponent
  ],
  exports: [
    ProductViewComponent
  ]
})
export class ProductViewModule { }
