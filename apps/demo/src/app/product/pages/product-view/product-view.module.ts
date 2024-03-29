import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffCartStateModule } from '@daffodil/cart/state';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';
import { DaffProductStateModule } from '@daffodil/product/state';

import { ProductViewComponent } from './product-view.component';
import { AddToCartModule } from '../../components/add-to-cart/add-to-cart.module';
import { ProductComponentModule } from '../../components/product/product.module';

@NgModule({
  imports: [
    CommonModule,
    DaffLoadingIconModule,
    ProductComponentModule,
    AddToCartModule,
    DaffProductStateModule,
    DaffCartStateModule,
  ],
  declarations: [
    ProductViewComponent,
  ],
  exports: [
    ProductViewComponent,
  ],
})
export class ProductViewModule { }
