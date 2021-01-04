import { TestBed } from '@angular/core/testing';

import { DaffCartStorageService } from '../cart-storage.service';

describe('DaffCartStorageService | on the client', () => {
	let service: DaffCartStorageService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
	});

	afterEach(() => {
		service.removeCartId();
	});

	beforeEach(() => {
		service = TestBed.get(DaffCartStorageService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should be able to persist and retrieve the cartId', () => {
		service.setCartId('id');
		expect(service.getCartId()).toEqual('id');

		service.setCartId('bob');
		expect(service.getCartId()).toEqual('bob');
	});

	it('should be able to persist a cartId', () => {
		service.setCartId('id');
		expect(service.getCartId()).toEqual('id');
	});

	it('should be able to remove a cartId', () => {
		service.removeCartId();
		expect(service.getCartId()).toEqual(null);
	});
});
