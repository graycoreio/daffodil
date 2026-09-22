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
import {
  DAFF_ORDER_STORE_FEATURE_KEY,
  daffOrderProvideExtraReducers,
  DaffOrderReducersState,
} from '@daffodil/order/state';

import { provideDaffOrderState } from './provider';

describe('@daffodil/order/state | provideDaffOrderState', () => {
  let store: Store<{ [DAFF_ORDER_STORE_FEATURE_KEY]: DaffOrderReducersState }>;
  let extraReducer: jasmine.Spy;

  beforeEach(() => {
    extraReducer = jasmine.createSpy('extraReducer').and.callFake((state) => state);

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideRouter([]),
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffTestingCartDriverModule.forRoot()),
        importProvidersFrom(DaffOrderTestingDriverModule.forRoot()),
        provideDaffOrderState(),
        ...daffOrderProvideExtraReducers(extraReducer),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the order feature state', () => {
    let state: DaffOrderReducersState;
    store.select(DAFF_ORDER_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.order).toBeDefined();
  });

  it('should register the cart feature state', () => {
    let state;
    store.select(<any>DAFF_CART_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
  });

  it('should compose the extra reducers', () => {
    expect(extraReducer).toHaveBeenCalledWith(jasmine.anything(), jasmine.anything());
  });
});
