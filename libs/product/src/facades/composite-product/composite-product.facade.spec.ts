import { TestBed } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { Dictionary } from '@ngrx/entity';

import {
	DaffCompositeProduct,
	DaffProductLoadSuccess,
	daffProductReducers,
	DaffProductReducersState
} from '@daffodil/product';
import { DaffCompositeProductFactory } from '@daffodil/product/testing';

import { DaffCompositeProductFacade } from './composite-product.facade';
import { DaffCompositeConfigurationItem } from '../../models/composite-configuration-item';
import { DaffCompositeProductApplyOption } from '../../actions/composite-product.actions';

describe('DaffCompositeProductFacade', () => {
  let store: MockStore<Partial<DaffProductReducersState>>;
	let facade: DaffCompositeProductFacade;
	let stubCompositeProduct: DaffCompositeProduct;
	let compositeProductFactory: DaffCompositeProductFactory;
	const stubPrice00 = 10;
	const stubDiscountAmount00 = 2;
	const stubPrice01 = 20;
	const stubDiscountAmount01 = 1;
	const stubPrice10 = 30;
	const stubDiscountAmount10 = 3;
	const stubPrice11 = 40;
	const stubDiscountAmount11 = 4;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          product: combineReducers(daffProductReducers),
        })
      ],
      providers: [
        DaffCompositeProductFacade,
      ]
		})

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffCompositeProductFacade);
    compositeProductFactory = TestBed.inject(DaffCompositeProductFactory);

		stubCompositeProduct = compositeProductFactory.create();
		stubCompositeProduct.items[0].required = true;
		stubCompositeProduct.items[1].required = false;
		stubCompositeProduct.items[0].options[0].is_default = true;
		stubCompositeProduct.items[0].options[1].is_default = false;
		stubCompositeProduct.items[1].options[0].is_default = false;
		stubCompositeProduct.items[1].options[1].is_default = false;
		stubCompositeProduct.items[0].options[0].price = stubPrice00;
		stubCompositeProduct.items[0].options[1].price = stubPrice01;
		stubCompositeProduct.items[1].options[0].price = stubPrice10;
		stubCompositeProduct.items[1].options[1].price = stubPrice11;
		stubCompositeProduct.items[0].options[0].discount.amount = stubDiscountAmount00;
		stubCompositeProduct.items[0].options[1].discount.amount = stubDiscountAmount01;
		stubCompositeProduct.items[1].options[0].discount.amount = stubDiscountAmount10;
		stubCompositeProduct.items[1].options[1].discount.amount = stubDiscountAmount11;
		stubCompositeProduct.items[0].options[0].quantity = 1;
		stubCompositeProduct.items[0].options[1].quantity = 1;
		stubCompositeProduct.items[1].options[0].quantity = 1;
		stubCompositeProduct.items[1].options[1].quantity = 1;
		store.dispatch(new DaffProductLoadSuccess(stubCompositeProduct));
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

  describe('getRequiredItemPricesForConfiguration', () => {

    it('should return the expected price range for the configuration provided', () => {
			const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
				[stubCompositeProduct.items[0].id]: {
					value: stubCompositeProduct.items[0].options[1].id,
					qty: 1
				}
			}
			const expected = cold('a', { a: {
				minPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + stubPrice01
				},
				maxPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + stubPrice01
				}
			}
			});

			expect(facade.getRequiredItemPricesForConfiguration(stubCompositeProduct.id, stubConfiguration)).toBeObservable(expected);
		});
  });

  describe('getOptionalItemPricesForConfiguration', () => {

    it('should return the broadest price range for a composite product including optional items', () => {
			const expected = cold('a', { a: {
				minPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice00 - stubDiscountAmount00,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + stubPrice00
				},
				maxPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01 +
						stubPrice11 - stubDiscountAmount11,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + stubPrice01 + stubPrice11
				}
			}
			});

			expect(facade.getOptionalItemPricesForConfiguration(stubCompositeProduct.id)).toBeObservable(expected);
		});
  });

  describe('getPricesAsCurrentlyConfigured', () => {

    it('should return the expected price range for the current configuration of the product in state', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id,
				1
			));
			const expected = cold('a', { a: {
				minPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + stubPrice01
				},
				maxPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + stubPrice01
				}
			}
			});

			expect(facade.getPricesAsCurrentlyConfigured(stubCompositeProduct.id)).toBeObservable(expected);
		});
  });

	describe('getAppliedOptions', () => {

		it('should return the applied option for a composite product', () => {
			const expected = cold('a', { a: {
				[stubCompositeProduct.items[0].id]: stubCompositeProduct.items[0].options[0],
				[stubCompositeProduct.items[1].id]: null
			}});

			expect(facade.getAppliedOptions(stubCompositeProduct.id)).toBeObservable(expected);
		});
	});

	describe('isItemRequired', () => {

		it('should return whether the composite product item is required', () => {
			const expected = cold('a', { a: stubCompositeProduct.items[0].required });

			expect(facade.isItemRequired(stubCompositeProduct.id, stubCompositeProduct.items[0].id)).toBeObservable(expected);
		});
	});
});
