import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateCartModule } from '@daffodil/state';

import { CartViewComponent } from './pages/cart-view/cart-view.component';
import { LoadingIconModule } from '../core/loading-icon/loading-icon.module';
import { CartWrapperModule } from './components/cart-wrapper/cart-wrapper.module';
import { DaffContainerModule } from '@daffodil/design';
import { AddToCartModule } from './components/add-to-cart/add-to-cart.module';

@NgModule({
  imports: [
    CommonModule,
    StateCartModule,
    LoadingIconModule,
    CartWrapperModule,
    DaffContainerModule
  ],
  declarations: [
    CartViewComponent
  ],
  exports: [
    CartViewComponent
  ]
})
export class CartModule { }
