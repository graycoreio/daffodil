import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCartModule } from '@daffodil/cart';

import { CartViewComponent } from './pages/cart-view/cart-view.component';
import { DaffLoadingIconModule } from '@daffodil/design';
import { CartWrapperModule } from './components/cart-wrapper/cart-wrapper.module';
import { DaffContainerModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    DaffCartModule,
    DaffLoadingIconModule,
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
