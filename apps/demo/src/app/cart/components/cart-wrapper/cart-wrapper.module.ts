import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartWrapperComponent } from './cart-wrapper.component';
import { CartTotalsModule } from '../cart-totals/cart-totals.module';
import { ProceedToCheckoutModule } from '../proceed-to-checkout/proceed-to-checkout.module';
import { CartModule } from '../cart/cart.module';
import { HelpBoxModule } from '../../../misc/help-box/help-box.module';

import {
  DaffButtonModule,
  DaffButtonSetModule,
  DaffLinkModule
} from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    CartModule,
    CartTotalsModule,
    ProceedToCheckoutModule,
    HelpBoxModule,
    DaffButtonModule,
    DaffButtonSetModule,
    DaffLinkModule
  ],
  declarations: [
    CartWrapperComponent
  ],
  exports: [
    CartWrapperComponent
  ]
})
export class CartWrapperModule { }
