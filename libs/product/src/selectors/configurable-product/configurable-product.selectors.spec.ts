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

describe('Configurable Product Selectors', () => {

  let store: Store<DaffProductReducersState>;
  const configurableProductFactory: DaffConfigurableProductFactory = new DaffConfigurableProductFactory();
	let stubConfigurableProduct: DaffConfigurableProduct;
	const {
		selectConfigurableProductPrice,
		selectMatchingConfigurableProductVariants,
		selectUndeterminedConfigurableProductAttributes
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

	describe('selectConfigurableProductPrice', () => {

		describe('when many variants are possible', () => {
			
			it('should return a ranged price', () => {
				stubConfigurableProduct.variants[0].price = 2;
				stubConfigurableProduct.variants[1].price = 1;
				stubConfigurableProduct.variants[2].price = 3;
				store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
				const selector = store.pipe(select(selectConfigurableProductPrice, { id: stubConfigurableProduct.id }));
				const expected = cold('a', { a: '1-3' });

				expect(selector).toBeObservable(expected);
			});
		});

		describe('when only one variant is possible', () => {
			
			it('should return a single price', () => {
				store.dispatch(new DaffProductLoadSuccess(stubConfigurableProduct));
				store.dispatch(new DaffConfigurableProductApplyAttribute(
					stubConfigurableProduct.id,
					stubConfigurableProduct.configurableAttributes[0].code,
					stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code]
				));
				const selector = store.pipe(select(selectConfigurableProductPrice, { id: stubConfigurableProduct.id }));
				const expected = cold('a', { a: stubConfigurableProduct.variants[0].price.toString() });

				expect(selector).toBeObservable(expected);
			});
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
			const expected = cold('a', { a: [stubConfigurableProduct.variants[0]] });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectUndeterminedConfigurableProductAttributes', () => {
		
		it('returns a dictionary of attribute values that are undetermined by the matched variants and applied attributes', () => {
			store.dispatch(new DaffProductLoadSuccess(stubConfigurableProduct));
			const selector = store.pipe(select(selectUndeterminedConfigurableProductAttributes, { id: stubConfigurableProduct.id }));
			const expected = cold('a', { 
				a: {
					color: ['0', '1', '2']
				} 
			});

			expect(selector).toBeObservable(expected);
		});
	});
});
