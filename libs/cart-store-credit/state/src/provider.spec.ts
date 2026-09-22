import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DAFF_CART_EXTRA_REDUCERS } from '@daffodil/cart/state';
import { DaffCartStoreCreditTestingDriverModule } from '@daffodil/cart-store-credit/driver/testing';
import {
  DAFF_CART_STORE_CREDIT_STORE_FEATURE_KEY,
  daffCartStoreCreditProvideExtraReducers,
  DaffCartStoreCreditReducersState,
} from '@daffodil/cart-store-credit/state';

import { provideDaffCartStoreCreditState } from './provider';

describe('@daffodil/cart-store-credit/state | provideDaffCartStoreCreditState', () => {
  let store: Store<{ [DAFF_CART_STORE_CREDIT_STORE_FEATURE_KEY]: DaffCartStoreCreditReducersState }>;
  let extraReducer: jasmine.Spy;

  beforeEach(() => {
    extraReducer = jasmine.createSpy('extraReducer').and.callFake((state) => state);

    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffCartStoreCreditTestingDriverModule.forRoot()),
        provideDaffCartStoreCreditState(),
        ...daffCartStoreCreditProvideExtraReducers(extraReducer),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the cart store credit feature state', () => {
    let state: DaffCartStoreCreditReducersState;
    store.select(DAFF_CART_STORE_CREDIT_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.storeCredit).toBeDefined();
  });

  it('should compose the extra reducers', () => {
    expect(extraReducer).toHaveBeenCalledWith(jasmine.anything(), jasmine.anything());
  });

  it('should provide the cart extra reducers', () => {
    expect(TestBed.inject(DAFF_CART_EXTRA_REDUCERS).length).toEqual(1);
  });
});
