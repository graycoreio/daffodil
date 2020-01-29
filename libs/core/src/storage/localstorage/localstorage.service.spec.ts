import { TestBed } from '@angular/core/testing';

import { DaffLocalStorageService } from './localstorage.service';
import { PLATFORM_ID } from '@angular/core';
import { ɵPLATFORM_SERVER_ID, ɵPLATFORM_BROWSER_ID } from '@angular/common';

describe('DaffLocalStorageService', () => {
	describe('On the server', () => {
		beforeEach(() =>
			TestBed.configureTestingModule({
				providers: [{ provide: PLATFORM_ID, useValue: ɵPLATFORM_SERVER_ID }],
			}),
		);

		it('should throw an error in a non-browser context', () => {
			expect(() => TestBed.get(DaffLocalStorageService)).toThrowError();
		});
	});

	describe('in the browser', () => {
		let service: DaffLocalStorageService;

		beforeEach(() => {
			TestBed.configureTestingModule({
				providers: [{ provide: PLATFORM_ID, useValue: ɵPLATFORM_BROWSER_ID }],
			});

			service = TestBed.get(DaffLocalStorageService);
		});

		it('should be created', () => {
			expect(service).toBeTruthy();
		});

		it('should persist a key, value pair into localstorage', () => {
			service.setItem('key', 'value');
			expect(localStorage.getItem('key')).toEqual('value');
		});

		it('should remove a key from localstorage', () => {
			service.setItem('key', 'value');
			service.removeItem('key');
			expect(localStorage.getItem('key')).toBeNull();
		});

		it('should update a key in localstorage', () => {
			service.setItem('key', 'value2');
			expect(localStorage.getItem('key')).toEqual('value2');
		});

		it('should retrieve a key from localstorage', () => {
			service.setItem('key', 'value');
			expect(localStorage.getItem('key')).toEqual('value');
		});
	});
});
