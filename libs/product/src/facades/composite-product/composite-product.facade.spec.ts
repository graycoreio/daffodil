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
	stubCompositeProduct = new DaffCompositeProductFactory().create();
	const stubDefaultPrice0 = 10;
	const stubDiscountAmount0 = 2.4;
	const stubDiscountAmount1 = 1.4;
	const stubChangedPrice0 = 20;

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
		// setup: set items to required, set a default option on each item, and set prices/discounts.
		stubCompositeProduct.items[0].required = true;
		stubCompositeProduct.items[0].options[0].is_default = true;
		stubCompositeProduct.items[0].options[0].price = stubDefaultPrice0;
		stubCompositeProduct.items[0].options[1].price = stubChangedPrice0;
		stubCompositeProduct.items[0].options[0].discount = {
			amount: stubDiscountAmount0,
			percent: null
		}
		stubCompositeProduct.items[0].options[1].discount = {
			amount: stubDiscountAmount1,
			percent: null
		}

    store = TestBed.get(Store);
		facade = TestBed.get(DaffCompositeProductFacade);
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

  describe('getPrice', () => {

    it('should return the price of the product', () => {
			console.log(stubCompositeProduct);
			const expected = cold('a', { a: stubCompositeProduct.price + stubDefaultPrice0 });
	
			expect(facade.getPrice(stubCompositeProduct.id)).toBeObservable(expected);
		});
  });

  describe('getDiscountAmount', () => {

    it('should return the total discount amount for a composite product', () => {
			const expected = cold('a', { a: stubCompositeProduct.discount.amount + stubDiscountAmount0 });
	
			expect(facade.getDiscountAmount(stubCompositeProduct.id)).toBeObservable(expected);
		});
  });

  describe('getDiscountedPrice', () => {

    it('should the discounted price for a composite product', () => {
			const expected = cold('a', { a: 
				stubCompositeProduct.price 
				+ stubCompositeProduct.items[0].options[0].price 
				- stubCompositeProduct.discount.amount 
				- stubCompositeProduct.items[0].options[0].discount.amount
			});
	
			expect(facade.getDiscountedPrice(stubCompositeProduct.id)).toBeObservable(expected);
		});
  });

  describe('hasDiscount', () => {

    it('should return whether the product has a discount', () => {
			const expected = cold('a', { a: true });
	
			expect(facade.hasDiscount(stubCompositeProduct.id)).toBeObservable(expected);
		});
	});
	
	describe('getAppliedOptions', () => {
		
		it('should return the applied option for a composite product', () => {
			const expected = cold('a', { a: { 
				[stubCompositeProduct.items[0].id]: stubCompositeProduct.items[0].options[0].id 
			}});

			expect(facade.getAppliedOptions(stubCompositeProduct.id)).toBeObservable(expected);
		});
	});
});
