import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffProductFactory } from '@daffodil/product/testing';

import {
  DaffBestSellersLoadSuccess,
  DaffBestSellersReset,
} from '../../actions/best-sellers.actions';
import {
  DaffProductGridLoadSuccess,
  DaffProductGridReset,
} from '../../actions/product-grid.actions';
import { DaffProductLoad } from '../../actions/product.actions';
import { DaffProduct } from '../../models/product';
import { daffProductReducers } from '../../reducers/product-reducers';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { getDaffProductGridSelectors } from './product-grid.selectors';

describe('selectProductState', () => {

  let store: Store<DaffProductReducersState>;
  const productFactory: DaffProductFactory = new DaffProductFactory();
  let mockProduct: DaffProduct;
  const {
    selectProductGridState,
    selectProductGridLoadingState,
  } = getDaffProductGridSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          product: combineReducers(daffProductReducers),
        }),
      ],
    });

    mockProduct = productFactory.create();
    store = TestBed.inject(Store);

    store.dispatch(new DaffBestSellersReset());
    store.dispatch(new DaffProductGridReset());
    store.dispatch(new DaffBestSellersLoadSuccess(new Array(mockProduct)));
    store.dispatch(new DaffProductGridLoadSuccess(new Array(mockProduct)));
    store.dispatch(new DaffProductLoad(mockProduct.id));
  });

  describe('ProductGridState', () => {

    describe('selectProductGridState', () => {

      it('selects product grid state', () => {
        const expectedGridState = {
          products: [],
          loading: false,
          errors: [],
        };
        const selector = store.pipe(select(selectProductGridState));
        const expected = cold('a', { a: expectedGridState });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('selectProductGridLoadingState', () => {

      it('selects product grid loading state', () => {
        const selector = store.pipe(select(selectProductGridLoadingState));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });
  });
});
