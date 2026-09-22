import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { DAFF_AUTH_UNAUTHENTICATED_HOOKS } from '@daffodil/auth/state';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import { DAFF_CART_EXTRA_REDUCERS } from '@daffodil/cart/state';

import { DaffCartCustomerAuthEffects } from './effects/auth.effects';
import { DaffCartCustomerUnauthorizedEffects } from './effects/unauthorized.effects';
import { provideDaffCartCustomerState } from './provider';

describe('@daffodil/cart-customer/state | provideDaffCartCustomerState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffTestingCartDriverModule.forRoot()),
        provideDaffCartCustomerState(),
      ],
    });
  });

  it('should provide the effects', () => {
    expect(TestBed.inject(DaffCartCustomerAuthEffects)).toBeTruthy();
    expect(TestBed.inject(DaffCartCustomerUnauthorizedEffects)).toBeTruthy();
  });

  it('should provide the unauthenticated hook', () => {
    expect(TestBed.inject(DAFF_AUTH_UNAUTHENTICATED_HOOKS).length).toBeGreaterThan(0);
  });

  it('should provide the cart extra reducers', () => {
    expect(TestBed.inject(DAFF_CART_EXTRA_REDUCERS).length).toEqual(2);
  });
});
