import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import { DAFF_CART_STORE_FEATURE_KEY } from '@daffodil/cart/state';
import { DaffOrderTestingDriverModule } from '@daffodil/order/driver/testing';
import { DAFF_ORDER_STORE_FEATURE_KEY } from '@daffodil/order/state';

import { provideDaffCheckoutState } from './provider';

describe('@daffodil/checkout/state | provideDaffCheckoutState', () => {
  let store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideRouter([]),
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffTestingCartDriverModule.forRoot()),
        importProvidersFrom(DaffOrderTestingDriverModule.forRoot()),
        provideDaffCheckoutState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the cart and order feature states', () => {
    let state;
    store.subscribe((s) => state = s);

    expect(state[DAFF_CART_STORE_FEATURE_KEY]).toBeDefined();
    expect(state[DAFF_ORDER_STORE_FEATURE_KEY]).toBeDefined();
  });
});
