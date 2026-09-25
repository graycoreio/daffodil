import { TestBed } from '@angular/core/testing';
import {
  combineReducers,
  Store,
  StoreModule,
} from '@ngrx/store';

import { runMarbles } from '@daffodil/jasmine';
import {
  daffPaymentReducerFactory,
  DaffPaymentReducersState,
  DaffPaymentStateRootSlice,
  DAFF_PAYMENT_STORE_FEATURE_KEY,
} from '@daffodil/payment/state';

import { DaffPaymentPageFacade } from './facade';

describe('@daffodil/payment/state | DaffPaymentPageFacade', () => {
  let store: Store<DaffPaymentStateRootSlice>;
  let facade: DaffPaymentPageFacade;

  let errors: string[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_PAYMENT_STORE_FEATURE_KEY]: combineReducers<DaffPaymentReducersState>({
            payment: daffPaymentReducerFactory([]),
          }),
        }),
      ],
      providers: [
        DaffPaymentPageFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffPaymentPageFacade);

    errors = [];
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(<any>store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('loading$', () => {
    it('should be false if the payment is not loading', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });
  });

  describe('errors$', () => {
    it('should initially be an empty array', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: errors });
      });
    });
  });
});
