import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductLoad } from '../actions/product.actions';
import { DaffProductGridLoadSuccess } from '../actions/product-grid.actions';
import { DaffProduct } from '../models/product';
import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';
import { daffProductReducers } from '../reducers/product-reducers';
import { getDaffProductSelectors } from './product.selectors';

describe('selectProductState', () => {

  let store: Store<DaffProductReducersState<DaffProduct>>;
  const productFactory: DaffProductFactory = new DaffProductFactory();
	let mockProduct: DaffProduct;
	const {
		selectSelectedProductLoadingState,
		selectSelectedProduct,
		selectSelectedProductState,
		selectSelectedProductId,
		selectSelectedProductQty
	} = getDaffProductSelectors<DaffProduct>();
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          product: combineReducers(daffProductReducers),
        })
      ]
    });

    mockProduct = productFactory.create();
    store = TestBed.get(Store);

    store.dispatch(new DaffProductGridLoadSuccess(new Array(mockProduct)));
    store.dispatch(new DaffProductLoad(mockProduct.id));
  });
  
  describe('SelectedProductState', () => {

    describe('selectSelectedProductState', () => {

      let expectedProductState;

      beforeEach(() => {
        expectedProductState = {
          selectedProductId: mockProduct.id,
          qty: 1,
          loading: true,
          errors: []
        }
      });
      
      it('returns the selected product state', () => {
				const selector = store.pipe(select(selectSelectedProductState));
				const expected = cold('a', { a: expectedProductState });

				expect(selector).toBeObservable(expected);
      });
    });

    describe('selectSelectedProductId', () => {
      
      it('returns the selected product id', () => {
				const selector = store.pipe(select(selectSelectedProductId));
				const expected = cold('a', { a: mockProduct.id });

				expect(selector).toBeObservable(expected);
      });
    });

    describe('selectSelectedProductQty', () => {
      
      it('returns the selected product qty', () => {
				const selector = store.pipe(select(selectSelectedProductQty));
				const expected = cold('a', { a: 1 });

				expect(selector).toBeObservable(expected);
      });
    });

    describe('selectSelectedProductLoadingState', () => {
      
      it('selects the loading state of the selected product', () => {
				const selector = store.pipe(select(selectSelectedProductLoadingState));
				const expected = cold('a', { a: true });

				expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectSelectedProduct', () => {
    
    it('selects the selected product', () => {
			const selector = store.pipe(select(selectSelectedProduct));
			const expected = cold('a', { a: mockProduct });

			expect(selector).toBeObservable(expected);
    });
  });
});
