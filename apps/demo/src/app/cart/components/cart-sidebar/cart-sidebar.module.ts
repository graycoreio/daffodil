import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DaffButtonModule
} from '@daffodil/design';

import { CartSidebarComponent } from './cart-sidebar.component'
import { CartTotalsModule } from '../cart-totals/cart-totals.module';
import { ProceedToCheckoutModule } from '../proceed-to-checkout/proceed-to-checkout.module';
import { HelpBoxModule } from '../../../misc/help-box/help-box.module';

@NgModule({
  imports: [
    CommonModule,
    CartTotalsModule,
    ProceedToCheckoutModule,
    DaffButtonModule,
    HelpBoxModule
  ],
  declarations: [
    CartSidebarComponent
  ],
  exports: [
    CartSidebarComponent
  ]
})
export class CartSidebarModule { }
