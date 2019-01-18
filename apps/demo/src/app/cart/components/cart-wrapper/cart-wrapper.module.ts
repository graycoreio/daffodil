import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartWrapperComponent } from './cart-wrapper.component';
import { CartTotalsModule } from '../cart-totals/cart-totals.module';
import { ProceedToCheckoutModule } from '../proceed-to-checkout/proceed-to-checkout.module';
import { ContinueShoppingModule } from '../continue-shopping/continue-shopping.module';
import { CartModule } from '../cart/cart.module';
import { DaffButtonModule, DaffButtonSetModule } from '@daffodil/design';
import { HelpBoxModule } from '../../../misc/help-box/help-box.module';


@NgModule({
  imports: [
    CommonModule,
    CartModule,
    CartTotalsModule,
    ProceedToCheckoutModule,
    ContinueShoppingModule,
    HelpBoxModule,
    DaffButtonModule,
    DaffButtonSetModule
  ],
  declarations: [
    CartWrapperComponent
  ],
  exports: [
    CartWrapperComponent
  ]
})
export class CartWrapperModule { }
