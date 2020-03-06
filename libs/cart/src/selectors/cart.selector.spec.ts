import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffCartLoadSuccess } from '../actions';
import { reducers, State } from '../reducers';
import { selectCartValue, selectCartLoading, selectCartErrors } from './cart.selector';


describe('Cart | Selector | Cart', () => {
  let store: Store<State>;

  let cartFactory: DaffCartFactory;

  let cart: DaffCart;
  let loading: boolean;
  let errors: string[];

  beforeEach(done => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(reducers),
        })
      ]
    });

    store = TestBed.get(Store);

    cartFactory = TestBed.get(DaffCartFactory);

    cart = cartFactory.create();
    loading = false;
    errors = [];

    store.dispatch(new DaffCartLoadSuccess(cart));
    store.subscribe(res => {
      console.log(res)
      done()
    })
  });

  describe('selectCartValue', () => {
    it('returns cart state', () => {
      const selector = store.pipe(select(selectCartValue));
      const expected = cold('a', {a: cart});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartLoading', () => {
    it('returns loading state', () => {
      const selector = store.pipe(select(selectCartLoading));
      const expected = cold('a', {a: loading});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartErrors', () => {
    it('returns errors state', () => {
      const selector = store.pipe(select(selectCartErrors));
      const expected = cold('a', {a: errors});

      expect(selector).toBeObservable(expected);
    });
  });
});
