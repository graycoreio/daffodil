import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

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

describe('Composite Product Selectors | integration tests', () => {

  let store: Store<DaffProductReducersState>;
  const compositeProductFactory: DaffCompositeProductFactory = new DaffCompositeProductFactory();
  const productFactory: DaffProductFactory = new DaffProductFactory();
	let stubCompositeProduct: DaffCompositeProduct;
	let stubProduct: DaffProduct;
	const {
		selectCompositeProductPrice,
		selectCompositeProductDiscountAmount,
		selectCompositeProductDiscountedPrice,
		selectCompositeProductHasDiscount
	} = getDaffCompositeProductSelectors();
	const stubDefaultPrice0 = 10;
	const stubDiscountAmount0 = 2.4;
	const stubDiscountAmount1 = 1.4;
	const stubChangedPrice0 = 20;
  
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
		store.dispatch(new DaffProductLoadSuccess(stubCompositeProduct));
		store.dispatch(new DaffProductLoadSuccess(stubProduct));
	});

	describe('selectCompositeProductPrice', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });
	
			expect(selector).toBeObservable(expected);
		});
		
		it('should initialize to the expected price', () => {
			const selector = store.pipe(select(selectCompositeProductPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubDefaultPrice0 });
	
			expect(selector).toBeObservable(expected);
		});

		it('should update the price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id
			));
			const selector = store.pipe(select(selectCompositeProductPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.price + stubChangedPrice0 });

			expect(selector).toBeObservable(expected);
		});
	});

	describe('selectCompositeProductDiscountAmount', () => {
		
		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductDiscountAmount, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });
	
			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the expected discount amount', () => {
			const selector = store.pipe(select(selectCompositeProductDiscountAmount, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.discount.amount + stubDiscountAmount0 });
	
			expect(selector).toBeObservable(expected);
		});

		it('should update the discount amount when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id
			));
			const selector = store.pipe(select(selectCompositeProductDiscountAmount, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: stubCompositeProduct.discount.amount + stubDiscountAmount1 });

			expect(selector).toBeObservable(expected);
		});
	});
	
	describe('selectCompositeProductDiscountedPrice', () => {
		
		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductDiscountedPrice, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });
	
			expect(selector).toBeObservable(expected);
		});

		it('should initialize to the expected discounted price', () => {
			const selector = store.pipe(select(selectCompositeProductDiscountedPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: 
				stubCompositeProduct.price 
				+ stubCompositeProduct.items[0].options[0].price 
				- stubCompositeProduct.discount.amount 
				- stubCompositeProduct.items[0].options[0].discount.amount
			});
	
			expect(selector).toBeObservable(expected);
		});

		it('should update the discounted price when an option change occurs', () => {
			store.dispatch(new DaffCompositeProductApplyOption(
				stubCompositeProduct.id,
				<string>stubCompositeProduct.items[0].id,
				stubCompositeProduct.items[0].options[1].id
			));
			const selector = store.pipe(select(selectCompositeProductDiscountedPrice, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: 
				stubCompositeProduct.price 
				+ stubCompositeProduct.items[0].options[1].price 
				- stubCompositeProduct.discount.amount 
				- stubCompositeProduct.items[0].options[1].discount.amount
			});
			expect(selector).toBeObservable(expected);
		});

		describe('when the price or discount are long decimal values', () => {
			
			it('should return the expected discounted price', () => {
				const newCompositeProduct = compositeProductFactory.create();
				newCompositeProduct.price = 70.53578;
				newCompositeProduct.discount.amount = 20.3243;
				newCompositeProduct.items[0].options[0].price = 10.3287;
				newCompositeProduct.items[0].options[0].is_default = true;
				newCompositeProduct.items[0].options[0].discount = { 
					amount: 1.53518,
					percent: null
				};
				store.dispatch(new DaffProductLoadSuccess(newCompositeProduct));
				const selector = store.pipe(select(selectCompositeProductDiscountedPrice, { id: newCompositeProduct.id }));
				const expected = cold('a', { a: 59.005 });
				expect(selector).toBeObservable(expected);
			});
		});
	});

	describe('selectCompositeProductHasDiscount', () => {

		it('should return undefined if the given product id is not from a composite product', () => {
			const selector = store.pipe(select(selectCompositeProductHasDiscount, { id: stubProduct.id }));
			const expected = cold('a', { a: undefined });
	
			expect(selector).toBeObservable(expected);
		});
		
		it('should return whether the composite product has a discount', () => {
			const selector = store.pipe(select(selectCompositeProductHasDiscount, { id: stubCompositeProduct.id }));
			const expected = cold('a', { a: true });
	
			expect(selector).toBeObservable(expected);
		});
	});
});
