import { TestBed } from '@angular/core/testing';

import { DaffInMemoryCartDataService } from './cart-data.service';
import { DaffCartFactory, DaffCartItemFactory } from '../factories/public_api';

describe('Cart | Testing | In Memory Backend | DaffInMemoryCartDataService', () => {

	let service: DaffInMemoryCartDataService;
	const stubCart = new DaffCartFactory().create();
	stubCart.items = new DaffCartItemFactory().createMany(3);
	const cartFactorySpy = jasmine.createSpyObj('DaffCartFactory', ['create']);
	cartFactorySpy.create.and.returnValue(stubCart);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
				DaffInMemoryCartDataService,
				{ provide: DaffCartFactory, useValue: cartFactorySpy }
			]
    });

    service = TestBed.get(DaffInMemoryCartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {

		it('should return a cart', () => {
			expect(service.get()).toEqual(stubCart);
		});
	});

  describe('getId', () => {

		it('should return the cart id', () => {
			expect(service.getId()).toEqual(stubCart.id);
		});
	});

  describe('getItems', () => {

		it('should return the cart items', () => {
			expect(service.getItems()).toEqual(stubCart.items);
		});
	});

  describe('getItem', () => {

		it('should return a cart item based on a given index', () => {
			expect(service.getItem(1)).toEqual(stubCart.items[1]);
		});
	});

  describe('setItem', () => {

		it('should set a cart item to the given value', () => {
			const newItem = {
				...service.getItem(0),
				qty: 24
			}
			service.setItem(0, newItem);

			expect(service.getItem(0)).toEqual(newItem);
		});
	});

  describe('removeItem', () => {

		it('should remove the given item from the cart', () => {
			service.removeItem(0);
			
			expect(service.getItems().length).toEqual(2);
		});
	});
});
