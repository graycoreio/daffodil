import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCartContainer } from './containers/cart/cart.component';
import { DaffCartStateModule } from './cart-state.module';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    DaffCartStateModule,
  ],
  declarations: [
    DaffCartContainer
  ],
  exports: [
    DaffCartContainer
  ]
})
export class DaffCartModule { }
