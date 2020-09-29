import { TestBed } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { 
	DaffConfigurableProduct, 
	DaffConfigurableProductApplyAttribute,
	DaffProductLoadSuccess,
	daffProductReducers,
	DaffProductReducersState
} from '@daffodil/product';
import { DaffConfigurableProductFactory } from '@daffodil/product/testing';

import { DaffConfigurableProductFacade } from './configurable-product.facade';

describe('DaffConfigurableProductFacade', () => {
  let store: MockStore<Partial<DaffProductReducersState>>;
	let facade: DaffConfigurableProductFacade;
	let stubConfigurableProduct: DaffConfigurableProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          product: combineReducers(daffProductReducers),
        })
      ],
      providers: [
        DaffConfigurableProductFacade,
      ]
    })

    store = TestBed.get(Store);
		facade = TestBed.get(DaffConfigurableProductFacade);
		stubConfigurableProduct = new DaffConfigurableProductFactory().create();
		store.dispatch(new DaffProductLoadSuccess(stubConfigurableProduct));
	});

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = {type: 'SOME_TYPE'};

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('getAllAttributes', () => {

    it('should return an Observable dictionary of all attributes', () => {
			const expected = cold('a', { 
				a: {
					[stubConfigurableProduct.configurableAttributes[0].code]: [
						stubConfigurableProduct.configurableAttributes[0].values[0].value,
						stubConfigurableProduct.configurableAttributes[0].values[1].value,
						stubConfigurableProduct.configurableAttributes[0].values[2].value
					],
					[stubConfigurableProduct.configurableAttributes[1].code]: [
						stubConfigurableProduct.configurableAttributes[1].values[0].value,
						stubConfigurableProduct.configurableAttributes[1].values[1].value,
						stubConfigurableProduct.configurableAttributes[1].values[2].value
					],
					[stubConfigurableProduct.configurableAttributes[2].code]: [
						stubConfigurableProduct.configurableAttributes[2].values[0].value,
						stubConfigurableProduct.configurableAttributes[2].values[1].value,
						stubConfigurableProduct.configurableAttributes[2].values[2].value,
					]
				} 
			});
      store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.configurableAttributes[0].values[0].value
			));
			expect(facade.getAllAttributes(stubConfigurableProduct.id)).toBeObservable(expected);
		});
  });

  describe('getAppliedAttributes', () => {

    it('should return an Observable dictionary of applied attributes', () => {
			const expected = cold('a', { 
				a: {
					[stubConfigurableProduct.configurableAttributes[0].code]: stubConfigurableProduct.configurableAttributes[0].values[0].value
				} 
			});
      store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.configurableAttributes[0].values[0].value
			));
			expect(facade.getAppliedAttributes(stubConfigurableProduct.id)).toBeObservable(expected);
		});
  });

  describe('getMinimumPrice', () => {

    it('should return the minimum possible price for a configurable product', () => {
			stubConfigurableProduct.variants[0].price = 2;
			stubConfigurableProduct.variants[1].price = 1;
			stubConfigurableProduct.variants[2].price = 4;
			stubConfigurableProduct.variants[3].price = 3;
			const expected = cold('a', { a: 1 });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.configurableAttributes[0].values[0].value
			));
			expect(facade.getMinimumPrice(stubConfigurableProduct.id)).toBeObservable(expected);
		});
  });

  describe('getMaximumPrice', () => {

    it('should return the minimum possible price for a configurable product', () => {
			stubConfigurableProduct.variants[0].price = 2;
			stubConfigurableProduct.variants[1].price = 1;
			stubConfigurableProduct.variants[2].price = 4;
			stubConfigurableProduct.variants[3].price = 3;
			const expected = cold('a', { a: 4 });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.configurableAttributes[0].values[0].value
			));
			expect(facade.getMaximumPrice(stubConfigurableProduct.id)).toBeObservable(expected);
		});
  });

  describe('getMinimumDiscountedPrice', () => {

    it('should return the minimum possible discounted price for a configurable product', () => {
			stubConfigurableProduct.variants[0].price = 4;
			stubConfigurableProduct.variants[1].price = 4;
			stubConfigurableProduct.variants[2].price = 4;
			stubConfigurableProduct.variants[3].price = 4;
			stubConfigurableProduct.variants[0].discount.amount = 3;
			stubConfigurableProduct.variants[1].discount.amount = 2;
			stubConfigurableProduct.variants[2].discount.amount = 1;
			stubConfigurableProduct.variants[3].discount.amount = 3;
			const expected = cold('a', { a: 1 });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.configurableAttributes[0].values[0].value
			));
			expect(facade.getMinimumDiscountedPrice(stubConfigurableProduct.id)).toBeObservable(expected);
		});
  });

  describe('getMaximumDiscountedPrice', () => {

    it('should return the maximum possible discounted price for a configurable product', () => {
			stubConfigurableProduct.variants[0].price = 4;
			stubConfigurableProduct.variants[1].price = 4;
			stubConfigurableProduct.variants[2].price = 4;
			stubConfigurableProduct.variants[3].price = 4;
			stubConfigurableProduct.variants[0].discount.amount = 3;
			stubConfigurableProduct.variants[1].discount.amount = 2;
			stubConfigurableProduct.variants[2].discount.amount = 1;
			stubConfigurableProduct.variants[3].discount.amount = 3;
			const expected = cold('a', { a: 3 });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.configurableAttributes[0].values[0].value
			));
			expect(facade.getMaximumDiscountedPrice(stubConfigurableProduct.id)).toBeObservable(expected);
		});
  });

  describe('getMinimumPercentDiscount', () => {

    it('should return the minimum possible percent discount for a configurable product', () => {
			stubConfigurableProduct.variants[0].discount.percent = 3;
			stubConfigurableProduct.variants[1].discount.percent = 2;
			stubConfigurableProduct.variants[2].discount.percent = 1;
			stubConfigurableProduct.variants[3].discount.percent = 3;
			const expected = cold('a', { a: 1 });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.configurableAttributes[0].values[0].value
			));
			expect(facade.getMinimumPercentDiscount(stubConfigurableProduct.id)).toBeObservable(expected);
		});
  });

  describe('getMaximumPercentDiscount', () => {

    it('should return the maximum possible percent discount for a configurable product', () => {
			stubConfigurableProduct.variants[0].discount.percent = 3;
			stubConfigurableProduct.variants[1].discount.percent = 2;
			stubConfigurableProduct.variants[2].discount.percent = 1;
			stubConfigurableProduct.variants[3].discount.percent = 3;
			const expected = cold('a', { a: 3 });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.configurableAttributes[0].values[0].value
			));
			expect(facade.getMaximumPercentDiscount(stubConfigurableProduct.id)).toBeObservable(expected);
		});
	});

  describe('isPriceRanged', () => {

    it('should return whether the possible price is a range of prices', () => {
			stubConfigurableProduct.variants[0].price = 2;
			stubConfigurableProduct.variants[1].price = 1;
			stubConfigurableProduct.variants[2].price = 4;
			stubConfigurableProduct.variants[3].price = 3;
			const expected = cold('a', { a: true });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.configurableAttributes[0].values[0].value
			));
			expect(facade.isPriceRanged(stubConfigurableProduct.id)).toBeObservable(expected);
		});
  });

  describe('hasDiscount', () => {

    it('should return whether a variant of the configurable product has a discount', () => {
			stubConfigurableProduct.variants[0].discount.amount = 3;
			stubConfigurableProduct.variants[1].discount.amount = 2;
			stubConfigurableProduct.variants[2].discount.amount = 1;
			stubConfigurableProduct.variants[3].discount.amount = 3;
			const expected = cold('a', { a: true });

      store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.configurableAttributes[0].values[0].value
			));
			expect(facade.isPriceRanged(stubConfigurableProduct.id)).toBeObservable(expected);
		});
  });

  describe('getSelectableAttributes', () => {

    it('should return the selectable attributes for a configurable product', () => {
			const expected = cold('a', { 
				a: {
					[stubConfigurableProduct.configurableAttributes[0].code]: [
						stubConfigurableProduct.configurableAttributes[0].values[0].value,
						stubConfigurableProduct.configurableAttributes[0].values[1].value,
						stubConfigurableProduct.configurableAttributes[0].values[2].value
					],
					[stubConfigurableProduct.configurableAttributes[1].code]: [
						stubConfigurableProduct.configurableAttributes[1].values[0].value,
						stubConfigurableProduct.configurableAttributes[1].values[1].value,
						stubConfigurableProduct.configurableAttributes[1].values[2].value
					],
					[stubConfigurableProduct.configurableAttributes[2].code]: [
						stubConfigurableProduct.configurableAttributes[2].values[0].value,
						stubConfigurableProduct.configurableAttributes[2].values[1].value,
						stubConfigurableProduct.configurableAttributes[2].values[2].value
					]
				}
			});

			expect(facade.getSelectableAttributes(stubConfigurableProduct.id)).toBeObservable(expected);
		});
  });

  describe('getMatchingVariants', () => {

    it('should return variants that match the applied attributes for a configurable product', () => {
			store.dispatch(new DaffProductLoadSuccess(stubConfigurableProduct));
			store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.variants[0].appliedAttributes[stubConfigurableProduct.configurableAttributes[0].code]
			));
			const expected = cold('a', { a: 
				stubConfigurableProduct.variants.slice(0, 4)
			});

			expect(facade.getMatchingVariants(stubConfigurableProduct.id)).toBeObservable(expected);
		});
  });
});
