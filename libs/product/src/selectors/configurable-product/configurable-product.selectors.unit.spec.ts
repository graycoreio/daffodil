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
		selectConfigurableProductDiscountedPrices,
		selectConfigurableProductHasDiscount,
		selectConfigurableProductMinimumPrice,
		selectConfigurableProductMaximumPrice,
		selectConfigurableProductMinimumDiscountedPrice,
		selectConfigurableProductMaximumDiscountedPrice,
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

	describe('selectConfigurableProductDiscountedPrices', () => {

		it('should return an array of prices', () => {
			stubConfigurableProduct.variants[0].price = 4;
			stubConfigurableProduct.variants[1].price = 4;
			stubConfigurableProduct.variants[2].price = 4;
			stubConfigurableProduct.variants[3].price = 4;
			stubConfigurableProduct.variants[0].discount.amount = 3.2;
			stubConfigurableProduct.variants[1].discount.amount = 2.002;
			stubConfigurableProduct.variants[2].discount.amount = 1.9999999;
			stubConfigurableProduct.variants[3].discount.amount = 3;
			store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
			store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code]
			));
			const selector = store.pipe(select(selectConfigurableProductDiscountedPrices, { id: stubConfigurableProduct.id }));
			const expected = cold('a', { a: [.8, 1.998, 2.0000001, 1] });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectConfigurableProductHasDiscount', () => {

		it('should return true when a variant has a discount', () => {
			stubConfigurableProduct.variants[0].discount.amount = 3;
			stubConfigurableProduct.variants[1].discount.amount = 5;
			stubConfigurableProduct.variants[2].discount.amount = 6;
			stubConfigurableProduct.variants[3].discount.amount = 3;
			store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
			store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code]
			));
			const selector = store.pipe(select(selectConfigurableProductHasDiscount, { id: stubConfigurableProduct.id }));
			const expected = cold('a', { a: true });

			expect(selector).toBeObservable(expected);
		});

		it('should return false when no variants have a discount', () => {
			stubConfigurableProduct.variants[0].discount.amount = 0;
			stubConfigurableProduct.variants[1].discount.amount = 0;
			stubConfigurableProduct.variants[2].discount.amount = 0;
			stubConfigurableProduct.variants[3].discount.amount = 0;
			store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
			store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code]
			));
			const selector = store.pipe(select(selectConfigurableProductHasDiscount, { id: stubConfigurableProduct.id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
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

	describe('selectConfigurableProductMinimumDiscountedPrice', () => {

		it('should return the minimum discounted price of the range of variant discounted prices', () => {
			stubConfigurableProduct.variants[0].price = 10;
			stubConfigurableProduct.variants[1].price = 10;
			stubConfigurableProduct.variants[2].price = 10;
			stubConfigurableProduct.variants[3].price = 10;
			stubConfigurableProduct.variants[0].discount.amount = 2;
			stubConfigurableProduct.variants[1].discount.amount = 1;
			stubConfigurableProduct.variants[2].discount.amount = 3;
			stubConfigurableProduct.variants[3].discount.amount = 4;
			store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
			store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code]
			));
			const selector = store.pipe(select(selectConfigurableProductMinimumDiscountedPrice, { id: stubConfigurableProduct.id }));
			const expected = cold('a', { a: 6 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectConfigurableProductMaximumDiscountedPrice', () => {

		it('should return the maximum discounted price of the range of variant discounted prices', () => {
			stubConfigurableProduct.variants[0].price = 10;
			stubConfigurableProduct.variants[1].price = 10;
			stubConfigurableProduct.variants[2].price = 10;
			stubConfigurableProduct.variants[3].price = 10;
			stubConfigurableProduct.variants[0].discount.amount = 2;
			stubConfigurableProduct.variants[1].discount.amount = 1;
			stubConfigurableProduct.variants[2].discount.amount = 3;
			stubConfigurableProduct.variants[3].discount.amount = 4;
			store.dispatch(new DaffProductGridLoadSuccess([stubConfigurableProduct]));
			store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code]
			));
			const selector = store.pipe(select(selectConfigurableProductMaximumDiscountedPrice, { id: stubConfigurableProduct.id }));
			const expected = cold('a', { a: 9 });

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
