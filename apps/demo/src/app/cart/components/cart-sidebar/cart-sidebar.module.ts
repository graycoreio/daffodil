import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffButtonModule } from '@daffodil/design';

import { HelpBoxModule } from '../../../misc/help-box/help-box.module';
import { CartTotalsModule } from '../cart-totals/cart-totals.module';
import { ProceedToCheckoutModule } from '../proceed-to-checkout/proceed-to-checkout.module';
import { CartSidebarComponent } from './cart-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    CartTotalsModule,
    ProceedToCheckoutModule,
    DaffButtonModule,
    HelpBoxModule,
  ],
  declarations: [
    CartSidebarComponent,
  ],
  exports: [
    CartSidebarComponent,
  ],
})
export class CartSidebarModule { }
