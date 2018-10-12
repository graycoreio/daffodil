import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateCartModule } from '@daffodil/state';

import { CartViewComponent } from './pages/cart-view/cart-view.component';
import { LoadingIconModule } from '../core/loading-icon/loading-icon.module';
import { CartAsyncWrapperModule } from './components/cart-async-wrapper/cart-async-wrapper.module';

@NgModule({
  imports: [
    CommonModule,
    StateCartModule,
    LoadingIconModule,
    CartAsyncWrapperModule
  ],
  declarations: [
    CartViewComponent
  ],
  exports: [
    CartViewComponent
  ]
})
export class CartModule { }
