import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  importProvidersFrom,
  NgModule,
} from '@angular/core';
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
    // network providers
    provideHttpClient(withInterceptorsFromDi()),
    // this must be after http client! ^
    // this is mostly relevant for the in memory backend
    // it seems that the way Angular loads providers
    // means that the full provider tree will be loaded before
    // importing modules. therefore, the in memory web API
    // will not be able override the HTTP client backend
    // when imported as a module
    importProvidersFrom(DemoDriverModule),
    //
  ],
  bootstrap: [AppComponent],
})
export class DemoModule {}
