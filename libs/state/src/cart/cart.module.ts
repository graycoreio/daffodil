import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './services/cart.service';
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
  ],
  providers: [
    CartService
  ]
})
export class StateCartModule { }
