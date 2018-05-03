import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreCartModule } from '@daffodil/core';

import { CartViewComponent } from './pages/cart-view/cart-view.component';

@NgModule({
  imports: [
    CommonModule,

    CoreCartModule,
  ],
  declarations: [
    CartViewComponent
  ],
  exports: [
    CartViewComponent
  ]
})
export class CartModule { }
