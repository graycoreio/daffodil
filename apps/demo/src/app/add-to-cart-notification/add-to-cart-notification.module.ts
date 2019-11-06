import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoAddToCartNotificationStateModule } from './add-to-cart-notification-state.module';
import { DemoAddToCartNotificationService } from './services/add-to-cart-notification.service';
import { ProductAddedComponent } from './components/product-added/product-added.component';
import { AddToCartNotificationComponent } from './containers/add-to-cart-notification/add-to-cart-notification.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffModalModule, DaffLoadingIconModule, DaffButtonModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    DaffModalModule,
    DaffButtonModule,
    DaffLoadingIconModule,
    DemoAddToCartNotificationStateModule
  ],
  declarations: [
    ProductAddedComponent,
    AddToCartNotificationComponent
  ],
  entryComponents: [
    AddToCartNotificationComponent
  ]
})
export class DemoAddToCartNotificationModule {
  constructor(private service: DemoAddToCartNotificationService){}

  static forRoot(): ModuleWithProviders<DemoAddToCartNotificationModule>{
    return {
      ngModule: DemoAddToCartNotificationModule,
      providers: [DemoAddToCartNotificationService]
    }
  }
}
