import { DaffPersistenceService, DaffServerErrorStorageService } from '@daffodil/core';
/**
 * The DaffCartStorageService is responsible for storing the cart id of a customer
 * in storage when necessary. For some ecommerce platforms, where cart information
 * is stored in a cookie instead of storage accessible via javsacript, this service
 * isn't explicitly necessary, so be sure to use this service only in the driver
 * layer for platforms that require it.
 */
export declare class DaffCartStorageService {
    private storageService;
    private readonly CART_STORAGE_ID;
    constructor(storageService: DaffPersistenceService);
    getCartId(): string;
    setCartId(value: string): void;
    removeCartId(): void;
}
/**
 * The factory that describe construction of a DaffCartStorageService
 */
export declare function daffCartStorageServiceFactory(platformId: string, persistenceService: DaffPersistenceService, serverStorage: DaffServerErrorStorageService): DaffCartStorageService;
