import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { Dictionary } from '@ngrx/entity';

import { DaffCompositeProductFactory, DaffProductFactory } from '@daffodil/product/testing';
import {
	DaffCompositeProduct,
	DaffProductLoadSuccess,
	daffProductReducers,
	DaffProductReducersState,
	DaffCompositeProductApplyOption,
	DaffProduct,
} from '@daffodil/product';

import { getDaffCompositeProductSelectors } from './composite-product.selectors';
import { DaffCompositeConfigurationItem } from '../../models/composite-configuration-item';

describe('Composite Product Selectors | integration tests', () => {

  let store: Store<DaffProductReducersState>;
  const compositeProductFactory: DaffCompositeProductFactory = new DaffCompositeProductFactory();
  const productFactory: DaffProductFactory = new DaffProductFactory();
	let stubCompositeProduct: DaffCompositeProduct;
	let stubProduct: DaffProduct;
	const {
		selectCompositeProductRequiredItemPricesForConfiguration,
		selectCompositeProductOptionalItemPricesForConfiguration,
		selectCompositeProductPricesAsCurrentlyConfigured
	} = getDaffCompositeProductSelectors();
	const stubPrice00 = 10;
	const stubDiscountAmount00 = 2;
	const stubPrice01 = 20;
	const stubDiscountAmount01 = 1;
	const stubPrice10 = 30;
	const stubDiscountAmount10 = 3;
	const stubPrice11 = 40;
	const stubDiscountAmount11 = 4;
	const stubQty0 = 3;
	const stubQty1 = 2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          product: combineReducers(daffProductReducers),
        })
      ]
    });

		stubCompositeProduct = compositeProductFactory.create();
		stubProduct = productFactory.create();

		// setup: set items to required, set a default option on each item, and set prices/discounts.
		stubCompositeProduct.items[0].required = true;
		stubCompositeProduct.items[0].options[0].is_default = true;
		stubCompositeProduct.items[0].options[0].price = stubPrice00;
		stubCompositeProduct.items[0].options[0].quantity = stubQty0;
		stubCompositeProduct.items[0].options[1].price = stubPrice01;
		stubCompositeProduct.items[0].options[0].discount = {
			amount: stubDiscountAmount00,
			percent: null
		}
		stubCompositeProduct.items[0].options[1].discount = {
			amount: stubDiscountAmount01,
			percent: null
		}
		stubCompositeProduct.items[1].required = false;
		stubCompositeProduct.items[1].options[0].is_default = false;
		stubCompositeProduct.items[1].options[0].price = stubPrice10;
		stubCompositeProduct.items[1].options[1].price = stubPrice11;
		stubCompositeProduct.items[1].options[0].quantity = stubQty1;
		stubCompositeProduct.items[1].options[0].discount = {
			amount: stubDiscountAmount10,
			percent: null
		};
		stubCompositeProduct.items[1].options[1].discount = {
			amount: stubDiscountAmount11,
			percent: null
		};
		store = TestBed.inject(Store);
		store.dispatch(new DaffProductLoadSuccess(stubCompositeProduct));
		store.dispatch(new DaffProductLoadSuccess(stubProduct));
	});

	describe('selectCompositeProductRequiredItemPricesForConfiguration', () => {

		it('should return undefined when the product is not a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductRequiredItemPricesForConfiguration, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should return the broadest price range when no configuration is provided', () => {
			const selector = store.pipe(select(selectCompositeProductRequiredItemPricesForConfiguration, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: {
				minPrice: {
					discountedPrice: stubCompositeProduct.price + stubPrice00 - stubCompositeProduct.discount.amount - stubDiscountAmount00,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + stubPrice00
				},
				maxPrice: {
					discountedPrice: stubCompositeProduct.price + stubPrice01 - stubCompositeProduct.discount.amount - stubDiscountAmount01,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + stubPrice01
				}
			}});

			expect(selector).toBeObservable(expected);
		});

		it('should return the expected price range when a partial configuration is provided', () => {
			const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
				[stubCompositeProduct.items[1].id]: {
					value: stubCompositeProduct.items[1].options[1].id,
					qty: stubQty1
				}
			}
			const selector = store.pipe(select(selectCompositeProductRequiredItemPricesForConfiguration, { id: stubCompositeProduct.id, configuration: stubConfiguration }));
			const expected = cold('a', { a: {
				minPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice00 - stubDiscountAmount00 +
						(stubPrice11 - stubDiscountAmount11) * stubQty1,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + stubPrice00 + (stubPrice11 * stubQty1)
				},
				maxPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01 +
						(stubPrice11 - stubDiscountAmount11) * stubQty1,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + stubPrice01 + (stubPrice11 * stubQty1)
				}
			}});

			expect(selector).toBeObservable(expected);
		});

		it('should return the expected price range when a full configuration is provided', () => {
			const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
				[stubCompositeProduct.items[0].id]: {
					value: stubCompositeProduct.items[0].options[1].id,
					qty: stubQty0
				},
				[stubCompositeProduct.items[1].id]: {
					value: stubCompositeProduct.items[1].options[1].id,
					qty: stubQty1
				}
			}
			const selector = store.pipe(select(selectCompositeProductRequiredItemPricesForConfiguration, { id: stubCompositeProduct.id, configuration: stubConfiguration }));
			const expected = cold('a', { a: {
				minPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty0 +
						(stubPrice11 - stubDiscountAmount11) * stubQty1,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty0) + (stubPrice11 * stubQty1)
				},
				maxPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty0 +
						(stubPrice11 - stubDiscountAmount11) * stubQty1,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty0) + (stubPrice11 * stubQty1)
				}
			}});

			expect(selector).toBeObservable(expected);
		});

		it('should return the expected price range when a configuration without quantities is provided', () => {
			const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
				[stubCompositeProduct.items[0].id]: {
					value: stubCompositeProduct.items[0].options[1].id
				},
				[stubCompositeProduct.items[1].id]: {
					value: stubCompositeProduct.items[1].options[1].id
				}
			}
			const selector = store.pipe(select(selectCompositeProductRequiredItemPricesForConfiguration, { id: stubCompositeProduct.id, configuration: stubConfiguration }));
			const expected = cold('a', { a: {
				minPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01 +
						stubPrice11 - stubDiscountAmount11,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + stubPrice01 + stubPrice11
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
			}});

			expect(selector).toBeObservable(expected);
		});

		it('should return the expected price range when a configuration with only quantities is provided', () => {
			const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
				[stubCompositeProduct.items[0].id]: {
					qty: stubQty0
				},
				[stubCompositeProduct.items[1].id]: {
					qty: stubQty1
				}
			}
			const selector = store.pipe(select(selectCompositeProductRequiredItemPricesForConfiguration, { id: stubCompositeProduct.id, configuration: stubConfiguration }));
			const expected = cold('a', { a: {
				minPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice00 - stubDiscountAmount00) * stubQty0,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + (stubPrice00 * stubQty0)
				},
				maxPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty0,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty0)
				}
			}});

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductOptionalItemPricesForConfiguration', () => {

		it('should return undefined when the product is not a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductOptionalItemPricesForConfiguration, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it(`should return the broadest price range for a composite product including optional items
				when no configuration is provided`, () => {
			const selector = store.pipe(select(selectCompositeProductOptionalItemPricesForConfiguration, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: {
				minPrice: {
					discountedPrice: stubCompositeProduct.price + stubPrice00 - stubCompositeProduct.discount.amount - stubDiscountAmount00,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + stubPrice00
				},
				maxPrice: {
					discountedPrice: stubCompositeProduct.price + stubPrice01 + stubPrice11 -
						stubCompositeProduct.discount.amount - stubDiscountAmount01 - stubDiscountAmount11,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + stubPrice01 + stubPrice11
				}
			}});

			expect(selector).toBeObservable(expected);
		});

		it(`should return the expected price range including optional items
				when a partial configuration is provided`, () => {
			const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
				[stubCompositeProduct.items[0].id]: {
					value: stubCompositeProduct.items[0].options[0].id,
					qty: stubQty0
				}
			}
			const selector = store.pipe(select(selectCompositeProductOptionalItemPricesForConfiguration, { id: stubCompositeProduct.id, configuration: stubConfiguration }));
			const expected = cold('a', { a: {
				minPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount + (stubPrice00 - stubDiscountAmount00) * stubQty0,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + (stubPrice00 * stubQty0)
				},
				maxPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice00 - stubDiscountAmount00) * stubQty0 + (stubPrice11 - stubDiscountAmount11),
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + (stubPrice00 * stubQty0) + (stubPrice11)
				}
			}});

			expect(selector).toBeObservable(expected);
		});

		it(`should return the expected price range when a full configuration is provided`, () => {
			const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
				[stubCompositeProduct.items[0].id]: {
					value: stubCompositeProduct.items[0].options[1].id,
					qty: stubQty0
				},
				[stubCompositeProduct.items[1].id]: {
					value: stubCompositeProduct.items[1].options[1].id,
					qty: stubQty1
				}
			}
			const selector = store.pipe(select(selectCompositeProductOptionalItemPricesForConfiguration, { id: stubCompositeProduct.id, configuration: stubConfiguration }));
			const expected = cold('a', { a: {
				minPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty0 +
						(stubPrice11 - stubDiscountAmount11) * stubQty1,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty0) + (stubPrice11 * stubQty1)
				},
				maxPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty0 +
						(stubPrice11 - stubDiscountAmount11) * stubQty1,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty0) + (stubPrice11 * stubQty1)
				}
			}});

			expect(selector).toBeObservable(expected);
		});

		it(`should return the expected price range when a configuration without quantities is provided`, () => {
			const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
				[stubCompositeProduct.items[0].id]: {
					value: stubCompositeProduct.items[0].options[1].id
				},
				[stubCompositeProduct.items[1].id]: {
					value: stubCompositeProduct.items[1].options[1].id
				}
			}
			const selector = store.pipe(select(selectCompositeProductOptionalItemPricesForConfiguration, { id: stubCompositeProduct.id, configuration: stubConfiguration }));
			const expected = cold('a', { a: {
				minPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						stubPrice01 - stubDiscountAmount01 +
						stubPrice11 - stubDiscountAmount11,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + stubPrice01 + stubPrice11
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
			}});

			expect(selector).toBeObservable(expected);
		});

		it('should return the expected price range when a configuration with only quantities is provided', () => {
			const stubConfiguration: Dictionary<DaffCompositeConfigurationItem> = {
				[stubCompositeProduct.items[0].id]: {
					qty: stubQty0
				},
				[stubCompositeProduct.items[1].id]: {
					qty: stubQty1
				}
			}
			const selector = store.pipe(select(selectCompositeProductOptionalItemPricesForConfiguration, { id: stubCompositeProduct.id, configuration: stubConfiguration }));
			const expected = cold('a', { a: {
				minPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice00 - stubDiscountAmount00) * stubQty0,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + (stubPrice00 * stubQty0)
				},
				maxPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty0 + (stubPrice11 - stubDiscountAmount11) * stubQty1,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty0) + (stubPrice11 * stubQty1)
				}
			}});

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductPricesAsCurrentlyConfigured', () => {

		it('should return undefined when the product is not a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductPricesAsCurrentlyConfigured, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });

			expect(selector).toBeObservable(expected);
		});

		it('should return the expected price range for the current configuration of the product in state', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id,
				stubQty0
			));
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[1].id,
				stubCompositeProduct.items[1].options[1].id,
				stubQty1
			));

			const selector = store.pipe(select(selectCompositeProductPricesAsCurrentlyConfigured, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: {
				minPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty0 +
						(stubPrice11 - stubDiscountAmount11) * stubQty1,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty0) + (stubPrice11 * stubQty1)
				},
				maxPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty0 +
						(stubPrice11 - stubDiscountAmount11) * stubQty1,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty0) + (stubPrice11 * stubQty1)
				}
			}});

			expect(selector).toBeObservable(expected);
		});

		it('should return a price range that reflects the expected option quantity when the default item option is out of stock', () => {
			store.dispatch(new DaffProductLoadSuccess({
        ...stubCompositeProduct,
        items: [
          {
            ...stubCompositeProduct.items[0],
            options: [
              {
                ...stubCompositeProduct.items[0].options[0],
                in_stock: false
              },
              ...stubCompositeProduct.items[0].options.slice(1)
            ]
          },
          ...stubCompositeProduct.items.slice(1)
        ]
      }));

			const selector = store.pipe(select(selectCompositeProductPricesAsCurrentlyConfigured, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: {
				minPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice00 - stubDiscountAmount00) * stubQty0,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + (stubPrice00 * stubQty0)
				},
				maxPrice: {
					discountedPrice: stubCompositeProduct.price - stubCompositeProduct.discount.amount +
						(stubPrice01 - stubDiscountAmount01) * stubQty0,
					discount: {
						amount: null,
						percent: null
					},
					originalPrice: stubCompositeProduct.price + (stubPrice01 * stubQty0)
				}
			}});

			expect(selector).toBeObservable(expected);
		});
	});
});
