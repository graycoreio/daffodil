import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffConfigurableProductFactory } from '@daffodil/product/testing';
import { 
	DaffConfigurableProduct, 
	DaffProductLoadSuccess,
	daffProductReducers,
	DaffProductReducersState,
	DaffProductGridLoadSuccess,
	DaffConfigurableProductApplyAttribute
} from '@daffodil/product';

import { getDaffConfigurableProductSelectors } from './configurable-product.selectors';

describe('Configurable Product Selectors | unit tests', () => {

  let store: Store<DaffProductReducersState>;
  const configurableProductFactory: DaffConfigurableProductFactory = new DaffConfigurableProductFactory();
	let stubConfigurableProduct: DaffConfigurableProduct;
	const {
		selectConfigurableProductPrices,
		selectConfigurableProductMinimumPrice,
		selectConfigurableProductMaximumPrice,
		isConfigurablePriceRanged,
		selectMatchingConfigurableProductVariants,
		selectSelectableConfigurableProductAttributes
	} = getDaffConfigurableProductSelectors();
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          product: combineReducers(daffProductReducers),
        })
      ]
    });

    stubConfigurableProduct = configurableProductFactory.create();
    store = TestBed.get(Store);
  });

	describe('selectConfigurableProductPrices', () => {

		describe('when many variants are possible', () => {
			
			it('should return an array of prices', () => {
				stubConfigurableProduct.variants[0].price = 2;
				stubConfigurableProduct.variants[1].price = 1;
				stubConfigurableProduct.variants[2].price = 3;
				stubConfigurableProduct.variants[3].price = 4;
				store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
				store.dispatch(new DaffConfigurableProductApplyAttribute(
					stubConfigurableProduct.id,
					stubConfigurableProduct.configurableAttributes[0].code,
					stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code]
				));
				const selector = store.pipe(select(selectConfigurableProductPrices, { id: stubConfigurableProduct.id }));
				const expected = cold('a', { a: [2, 1, 3, 4] });

				expect(selector).toBeObservable(expected);
			});
		});
	});

	describe('selectConfigurableProductMinimumPrice', () => {
		
		it('should return the minimum price of the range of variant prices', () => {
			stubConfigurableProduct.variants[0].price = 2;
			stubConfigurableProduct.variants[1].price = 1;
			stubConfigurableProduct.variants[2].price = 3;
			stubConfigurableProduct.variants[3].price = 4;
			store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
			store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code]
			));
			const selector = store.pipe(select(selectConfigurableProductMinimumPrice, { id: stubConfigurableProduct.id }));
			const expected = cold('a', { a: 1 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectConfigurableProductMaximumPrice', () => {
		
		it('should return the maximum price of the range of variant prices', () => {
			stubConfigurableProduct.variants[0].price = 2;
			stubConfigurableProduct.variants[1].price = 1;
			stubConfigurableProduct.variants[2].price = 3;
			stubConfigurableProduct.variants[3].price = 4;
			store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
			store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code]
			));
			const selector = store.pipe(select(selectConfigurableProductMaximumPrice, { id: stubConfigurableProduct.id }));
			const expected = cold('a', { a: 4 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('isConfigurablePriceRanged', () => {
		
		it('should return true when more than one price is possible', () => {
			store.dispatch(new DaffProductLoadSuccess(stubConfigurableProduct));
			store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code]
			));
			const selector = store.pipe(select(isConfigurablePriceRanged, { id: stubConfigurableProduct.id }));
			const expected = cold('a', { a: true });

			expect(selector).toBeObservable(expected);
		});
		
		it('should return false when only one price is possible', () => {
			store.dispatch(new DaffProductLoadSuccess(stubConfigurableProduct));
			store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code]
			));
			store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[1].code,
				stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[1].code]
			));
			store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[2].code,
				stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[2].code]
			));
			const selector = store.pipe(select(isConfigurablePriceRanged, { id: stubConfigurableProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectMatchingConfigurableProductVariants', () => {
		
		it('returns the variants that match current attribute filters', () => {
			store.dispatch(new DaffProductLoadSuccess(stubConfigurableProduct));
			store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code]
			));
			const selector = store.pipe(select(selectMatchingConfigurableProductVariants, { id: stubConfigurableProduct.id }));
			const expected = cold('a', { a: 
				stubConfigurableProduct.variants.slice(0, 4)
			});

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectSelectableConfigurableProductAttributes', () => {
		
		it('returns a dictionary of attribute values that are still selectable', () => {
			store.dispatch(new DaffProductLoadSuccess(stubConfigurableProduct));
			const selector = store.pipe(select(selectSelectableConfigurableProductAttributes, { id: stubConfigurableProduct.id }));
			const expected = cold('a', { 
				a: {
					color: ['0', '1', '2'],
					size: ['0', '1', '2'],
					material: ['0', '1', '2']
				} 
			});

			expect(selector).toBeObservable(expected);
		});
	});
});
