import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffButtonSetModule, DaffModalModule, DaffButtonModule } from '@daffodil/design';
import { AddToCartNotificationComponent } from './add-to-cart-notification.component';
import { ViewCartModule } from '../../../../cart/components/view-cart/view-cart.module';
import { ProceedToCheckoutModule } from '../../../../cart/components/proceed-to-checkout/proceed-to-checkout.module';
import { TemplateModule } from '../../../../core/template/template.module';
import { ProductAddedModule } from '../product-added/product-added.module';
import { FoundationAddToCartNotificationStateModule } from '../../add-to-cart-notification-state.module';
import { StateCartModule } from '@daffodil/state';
import { LoadingIconModule } from '../../../../core/loading-icon/loading-icon.module';

@NgModule({
  imports: [
    CommonModule,
    DaffModalModule,
    ViewCartModule,
    ProceedToCheckoutModule,
    DaffButtonSetModule,
    TemplateModule,
    DaffButtonModule,
    ProductAddedModule,
    FoundationAddToCartNotificationStateModule,
    StateCartModule,
    LoadingIconModule
  ],
  declarations: [
    AddToCartNotificationComponent
  ],
  exports: [
    AddToCartNotificationComponent
  ]
})
export class AddToCartNotificationComponentModule { }
