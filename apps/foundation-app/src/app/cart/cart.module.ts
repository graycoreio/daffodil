import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreCartModule } from '@daffodil/core';

import { CartViewComponent } from './pages/cart-view/cart-view.component';
import { CartComponent } from './components/cart/cart.component';
import { CartTotalComponent } from './components/cart-total/cart-total.component';
import { ProceedToCheckoutComponent } from './components/proceed-to-checkout/proceed-to-checkout.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule,

    CoreCartModule,
  ],
  declarations: [
    CartViewComponent,
    CartComponent,
    CartTotalComponent,
    ProceedToCheckoutComponent,
    CartItemComponent
  ],
  exports: [
    CartViewComponent,
    CartComponent,
    CartTotalComponent
  ]
})
export class CartModule { }
