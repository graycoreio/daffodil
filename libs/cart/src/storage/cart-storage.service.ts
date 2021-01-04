import { Injectable, Inject, PLATFORM_ID } from '@angular/core';

import {
	DaffPersistenceService,
	DaffPersistenceServiceToken,
	DaffServerErrorStorageService,
} from '@daffodil/core';
import { isPlatformBrowser } from '@angular/common';  

/**
 * The DaffCartStorageService is responsible for storing the cart id of a customer
 * in storage when necessary. For some ecommerce platforms, where cart information
 * is stored in a cookie instead of storage accessible via javsacript, this service
 * isn't explicitly necessary, so be sure to use this service only in the driver
 * layer for platforms that require it.
 */
@Injectable({
	providedIn: 'root',
	useFactory: daffCartStorageServiceFactory,
	deps: [
		PLATFORM_ID,
		DaffPersistenceServiceToken,
		DaffServerErrorStorageService
	]
})
export class DaffCartStorageService {
	private readonly CART_STORAGE_ID = 'DAFF_CART_ID';

	constructor(private storageService: DaffPersistenceService) {}

	getCartId(): string {
		return this.storageService.getItem(this.CART_STORAGE_ID);
	}

	setCartId(value: string): void {
		this.storageService.setItem(this.CART_STORAGE_ID, value);
	}

	removeCartId(): void {
		this.storageService.removeItem(this.CART_STORAGE_ID);
	}
}

/**
 * The factory that describe construction of a DaffCartStorageService
 */
export function daffCartStorageServiceFactory(
	platformId: string, 
	persistenceService: DaffPersistenceService, 
	serverStorage: DaffServerErrorStorageService) {
	return isPlatformBrowser(platformId) 
			? new DaffCartStorageService(persistenceService) 
			: new DaffCartStorageService(serverStorage)
}