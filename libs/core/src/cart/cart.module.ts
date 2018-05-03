import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './services/cart.service';
import { CartContainer } from './containers/cart/cart.component';
import { CartTestingModule } from './testing/cart-testing.module';
import { CoreCartStateModule } from './cart-state.module';

@NgModule({
  imports: [
    CommonModule,

    /**
     * Ngrx/store
     */
    CoreCartStateModule,
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
export class CoreCartModule { }
