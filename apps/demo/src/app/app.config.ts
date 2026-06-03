import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  APP_ID,
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {
  DaffAuthorizeNetPaymentStateModule,
  DaffAuthorizeNetStateModule,
} from '@daffodil/authorizenet/state';
import { daffCartProvideRetrievalActions } from '@daffodil/cart/state';
import { provideExternalRouter } from '@daffodil/external-router';
import { DaffPaymentStateModule } from '@daffodil/payment/state';

import { appRoutes } from './app.routes';
import { environment } from '../environments/environment';
import { DemoCheckoutStepActionTypes } from './checkout/actions/checkout-step.actions';
import { provideDemoDrivers } from './drivers/driver.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(),
    provideAnimations(),
    importProvidersFrom(
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
        connectInZone: true,
      }),
      DaffAuthorizeNetPaymentStateModule,
      DaffAuthorizeNetStateModule,
      DaffPaymentStateModule,
    ),
    provideRouter(
      appRoutes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
    ),
    provideExternalRouter(),
    provideRouterStore(),
    provideHttpClient(withInterceptorsFromDi()),
    provideDemoDrivers(),
    daffCartProvideRetrievalActions(
      { type: DemoCheckoutStepActionTypes.CompleteAddressStepSuccessAction },
      { type: DemoCheckoutStepActionTypes.CompleteShippingStepSuccessAction },
      { type: DemoCheckoutStepActionTypes.CompleteBillingStepSuccessAction },
    ),
    {
      provide: APP_ID,
      useValue: 'serverApp',
    },
  ],
};
