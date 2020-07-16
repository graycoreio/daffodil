import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffProductGridLoadSuccess } from '../../actions/product-grid.actions';
import { DaffProduct } from '../../models/product';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { daffProductReducers } from '../../reducers/product-reducers';
import { getDaffProductEntitiesSelectors } from './product-entities.selectors';

describe('selectProductEntitiesState', () => {

  let store: Store<DaffProductReducersState>;
  const productFactory: DaffProductFactory = new DaffProductFactory();
	let mockProduct: DaffProduct;
	const {
		selectProductIds,
		selectProductEntities,
		selectAllProducts,
		selectProductTotal,
		selectProduct,
		selectProductDiscountAmount
	} = getDaffProductEntitiesSelectors();
  
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
  });

  describe('ProductEntitiesState', () => {
    
    describe('selectIds', () => {
    
      it('selects product ids', () => {
				const selector = store.pipe(select(selectProductIds));
				const expected = cold('a', { a: [mockProduct.id] });

				expect(selector).toBeObservable(expected);
      });
    });
  
    describe('selectProductEntities', () => {
      
      it('selects product entities as a dictionary object', () => {
				const expectedDictionary = new Object();
				expectedDictionary[mockProduct.id] = mockProduct;

				const selector = store.pipe(select(selectProductEntities));
				const expected = cold('a', { a: expectedDictionary });

				expect(selector).toBeObservable(expected);
      });
    });
  
    describe('selectAllProducts', () => {
      
      it('selects all products as an array', () => {
        const selector = store.pipe(select(selectAllProducts));
				const expected = cold('a', { a: [mockProduct] });

				expect(selector).toBeObservable(expected);
      });
    });
  
    describe('selectProductTotal', () => {
      
      it('selects the total number of products', () => {
        const selector = store.pipe(select(selectProductTotal));
				const expected = cold('a', { a: 1 });

				expect(selector).toBeObservable(expected);
      });
    });  
  });

  describe('selectProduct', () => {
    
    it('should select the product of the given id', () => {
			const selector = store.pipe(select(selectProduct, { id: mockProduct.id }));
			const expected = cold('a', { a: mockProduct });

			expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductDiscountAmount', () => {
    
    it('should select the product discount amount of the given id', () => {
			const selector = store.pipe(select(selectProductDiscountAmount, { id: mockProduct.id }));
			const expected = cold('a', { a: mockProduct.discount.amount });

			expect(selector).toBeObservable(expected);
    });
  });
});
