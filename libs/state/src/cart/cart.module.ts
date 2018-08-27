import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartContainer } from './containers/cart/cart.component';
import { StateCartStateModule } from './cart-state.module';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    StateCartStateModule,
  ],
  declarations: [
    CartContainer
  ],
  exports: [
    CartContainer
  ]
})
export class StateCartModule { }
