import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {
  DaffAuthorizeNetPaymentStateModule,
  DaffAuthorizeNetStateModule,
} from '@daffodil/authorizenet/state';
import { daffCartProvideRetrievalActions } from '@daffodil/cart/state';
import { DaffPaymentStateModule } from '@daffodil/payment/state';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoCartRootModule } from './cart/cart-root.module';
import { CategoryModule } from './category/category.module';
import { DemoCheckoutStepActionTypes } from './checkout/actions/checkout-step.actions';
import { TemplateModule } from './core/template/template/template.module';
import { DemoDriverModule } from './drivers/driver.module';
import { NotFoundModule } from './misc/not-found/not-found.module';
import { ProductModule } from './product/product.module';
import { DemoRoutingComponentModule } from './routing/routing-component.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,

    DemoDriverModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      connectInZone: true,
    }),

    AppRoutingModule,
    DemoRoutingComponentModule,
    DemoCartRootModule,
    ProductModule,
    CategoryModule,
    TemplateModule,
    NotFoundModule,
    DaffAuthorizeNetPaymentStateModule,
    DaffAuthorizeNetStateModule,
    DaffPaymentStateModule,
  ],
  providers: [
    daffCartProvideRetrievalActions(
      {
        type: DemoCheckoutStepActionTypes.CompleteAddressStepSuccessAction,
      },
      {
        type: DemoCheckoutStepActionTypes.CompleteShippingStepSuccessAction,
      },
      {
        type: DemoCheckoutStepActionTypes.CompleteBillingStepSuccessAction,
      },
    ),
    provideRouterStore(),
  ],
  bootstrap: [AppComponent],
})
export class DemoModule {}
