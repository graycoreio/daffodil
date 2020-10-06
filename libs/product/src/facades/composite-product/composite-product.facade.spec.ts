import { TestBed } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
	DaffCompositeProduct,
	DaffProductLoadSuccess,
	daffProductReducers,
	DaffProductReducersState
} from '@daffodil/product';
import { DaffCompositeProductFactory } from '@daffodil/product/testing';

import { DaffCompositeProductFacade } from './composite-product.facade';

describe('DaffCompositeProductFacade', () => {
  let store: MockStore<Partial<DaffProductReducersState>>;
	let facade: DaffCompositeProductFacade;
	let stubCompositeProduct: DaffCompositeProduct;
	let compositeProductFactory: DaffCompositeProductFactory;

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

    store = TestBed.get(Store);
    facade = TestBed.get(DaffCompositeProductFacade);
    compositeProductFactory = TestBed.get(DaffCompositeProductFactory);

		stubCompositeProduct = compositeProductFactory.create();
		stubCompositeProduct.items[0].required = true;
		stubCompositeProduct.items[1].required = false;
		stubCompositeProduct.items[0].options[0].price = 10;
		stubCompositeProduct.items[0].options[1].price = 20;
		stubCompositeProduct.items[1].options[0].price = 30;
		stubCompositeProduct.items[1].options[1].price = 40;
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

  describe('getMinPossiblePrice', () => {

    it('should return the minimum price possible for the product', () => {
			const expected = cold('a', { a:
				stubCompositeProduct.price +
				stubCompositeProduct.items[0].options[0].price
			});

			expect(facade.getMinPossiblePrice(stubCompositeProduct.id)).toBeObservable(expected);
		});
  });

  describe('getMaxPossiblePrice', () => {

    it('should return the maximum price possible for the product', () => {
			const expected = cold('a', { a:
				stubCompositeProduct.price +
				stubCompositeProduct.items[0].options[1].price +
				stubCompositeProduct.items[1].options[1].price
			});

			expect(facade.getMaxPossiblePrice(stubCompositeProduct.id)).toBeObservable(expected);
		});
  });

  describe('possiblyHasPriceRange', () => {

    it('should return whether the product could have a price range', () => {
			const expected = cold('a', { a: true });

			expect(facade.possiblyHasPriceRange(stubCompositeProduct.id)).toBeObservable(expected);
		});
	});

  describe('getMinPossibleDiscountedPrice', () => {

    it('should return the minimum discounted price possible for the product', () => {
			const expected = cold('a', { a:
				stubCompositeProduct.price - stubCompositeProduct.discount.amount +
				stubCompositeProduct.items[0].options[0].price
			});

			expect(facade.getMinPossibleDiscountedPrice(stubCompositeProduct.id)).toBeObservable(expected);
		});
  });

  describe('getMaxPossibleDiscountedPrice', () => {

    it('should return the maximum discounted price possible for the product', () => {
			const expected = cold('a', { a:
				stubCompositeProduct.price - stubCompositeProduct.discount.amount +
				stubCompositeProduct.items[0].options[1].price +
				stubCompositeProduct.items[1].options[1].price
			});

			expect(facade.getMaxPossibleDiscountedPrice(stubCompositeProduct.id)).toBeObservable(expected);
		});
  });

  describe('possiblyHasDiscountedPriceRange', () => {

    it('should return whether the product could have a discounted price range', () => {
			const expected = cold('a', { a: true });

			expect(facade.possiblyHasDiscountedPriceRange(stubCompositeProduct.id)).toBeObservable(expected);
		});
	});

  describe('possiblyHasDiscount', () => {
    let productWithDiscount;

    beforeEach(() => {
      productWithDiscount = compositeProductFactory.create({
        discount: {
          amount: 10,
          percent: 10
        }
      })
      store.dispatch(new DaffProductLoadSuccess(productWithDiscount));
    })

    it('should return whether the product has a discount including optional items', () => {
			const expected = cold('a', { a: true });

			expect(facade.possiblyHasDiscount(productWithDiscount.id)).toBeObservable(expected);
		});
	});

  describe('getMinRequiredItemPrice', () => {

    it('should return the minimum price for the product', () => {
			const expected = cold('a', { a:
				stubCompositeProduct.price +
				stubCompositeProduct.items[0].options[0].price*stubCompositeProduct.items[0].options[0].quantity +
				stubCompositeProduct.items[1].options[0].price*stubCompositeProduct.items[1].options[0].quantity
			});

			expect(facade.getMinRequiredItemPrice(stubCompositeProduct.id)).toBeObservable(expected);
		});
  });

  describe('getMaxRequiredItemPrice', () => {

    it('should return the maximum price for the product', () => {
			const expected = cold('a', { a:
				stubCompositeProduct.price +
				stubCompositeProduct.items[0].options[0].price*stubCompositeProduct.items[0].options[0].quantity +
				stubCompositeProduct.items[1].options[0].price*stubCompositeProduct.items[1].options[0].quantity
			});

			expect(facade.getMaxRequiredItemPrice(stubCompositeProduct.id)).toBeObservable(expected);
		});
  });

  describe('hasRequiredItemPriceRange', () => {

    it('should return whether the product currently has a price range', () => {
			const expected = cold('a', { a: false });

			expect(facade.hasRequiredItemPriceRange(stubCompositeProduct.id)).toBeObservable(expected);
		});
	});

  describe('getMinRequiredItemDiscountedPrice', () => {

    it('should return the discounted price of the product', () => {
			const expected = cold('a', { a:
				stubCompositeProduct.price - stubCompositeProduct.discount.amount +
				(stubCompositeProduct.items[0].options[0].price - stubCompositeProduct.items[0].options[0].discount.amount)*stubCompositeProduct.items[0].options[0].quantity +
				(stubCompositeProduct.items[1].options[0].price - stubCompositeProduct.items[1].options[0].discount.amount)*stubCompositeProduct.items[1].options[0].quantity
			});

			expect(facade.getMinRequiredItemDiscountedPrice(stubCompositeProduct.id)).toBeObservable(expected);
		});
  });

  describe('getMaxRequiredItemDiscountedPrice', () => {

    it('should return the price of the product', () => {
			const expected = cold('a', { a:
				stubCompositeProduct.price - stubCompositeProduct.discount.amount +
				(stubCompositeProduct.items[0].options[0].price - stubCompositeProduct.items[0].options[0].discount.amount)*stubCompositeProduct.items[0].options[0].quantity +
				(stubCompositeProduct.items[1].options[0].price - stubCompositeProduct.items[1].options[0].discount.amount)*stubCompositeProduct.items[1].options[0].quantity
			});

			expect(facade.getMaxRequiredItemDiscountedPrice(stubCompositeProduct.id)).toBeObservable(expected);
		});
  });

  describe('hasRequiredItemDiscountedPriceRange', () => {

    it('should return whether the product currently has a discounted price range', () => {
			const expected = cold('a', { a: false });

			expect(facade.hasRequiredItemDiscountedPriceRange(stubCompositeProduct.id)).toBeObservable(expected);
		});
  });

  describe('hasRequiredItemDiscount', () => {
    let productWithDiscount;

    beforeEach(() => {
      productWithDiscount = compositeProductFactory.create({
        discount: {
          amount: 10,
          percent: 10
        }
      })
      store.dispatch(new DaffProductLoadSuccess(productWithDiscount));
    })

    it('should return whether the product has a discount excluding optional items', () => {
			const expected = cold('a', { a: true });

			expect(facade.hasRequiredItemDiscount(productWithDiscount.id)).toBeObservable(expected);
		});
	});

	describe('getAppliedOptions', () => {

		it('should return the applied option for a composite product', () => {
			const expected = cold('a', { a: {
				[stubCompositeProduct.items[0].id]: stubCompositeProduct.items[0].options[0],
				[stubCompositeProduct.items[1].id]: stubCompositeProduct.items[1].options[0]
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
