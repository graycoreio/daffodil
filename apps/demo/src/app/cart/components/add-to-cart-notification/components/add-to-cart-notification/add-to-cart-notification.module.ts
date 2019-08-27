import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffButtonSetModule, DaffModalModule, DaffButtonModule } from '@daffodil/design';
import { AddToCartNotificationComponent } from './add-to-cart-notification.component';
import { ProductAddedModule } from '../product-added/product-added.module';
import { DemoAddToCartNotificationStateModule } from '../../add-to-cart-notification-state.module';
import { DaffLoadingIconModule } from '@daffodil/design';
import { ViewCartModule } from '../../../view-cart/view-cart.module';
import { ProceedToCheckoutModule } from '../../../proceed-to-checkout/proceed-to-checkout.module';
import { TemplateModule } from '../../../../../core/template/template/template.module';
import { ModalPortalModule } from '../../../../../core/template/portals/modal-portal.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

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
    DemoAddToCartNotificationStateModule,
    DaffLoadingIconModule,
    ModalPortalModule,
    FontAwesomeModule
  ],
  declarations: [
    AddToCartNotificationComponent
  ],
  exports: [
    AddToCartNotificationComponent
  ]
})
export class AddToCartNotificationComponentModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faCheck, faTimes);
  }
}
