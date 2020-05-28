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

  describe('getPrice', () => {

    it('should return an Observable string of the price/price-range for a configurable product', () => {
			const expected = cold('a', { a: stubConfigurableProduct.variants[0].price.toString() });
      store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[0].code,
				stubConfigurableProduct.configurableAttributes[0].values[0].value
			));
			store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[1].code,
				stubConfigurableProduct.configurableAttributes[1].values[0].value
			));
			store.dispatch(new DaffConfigurableProductApplyAttribute(
				stubConfigurableProduct.id,
				stubConfigurableProduct.configurableAttributes[2].code,
				stubConfigurableProduct.configurableAttributes[2].values[0].value
			));
			expect(facade.getPrice(stubConfigurableProduct.id)).toBeObservable(expected);
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
});
