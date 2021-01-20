/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, PLATFORM_ID } from '@angular/core';
import { DaffPersistenceServiceToken, DaffServerErrorStorageService, } from '@daffodil/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/core";
/**
 * The DaffCartStorageService is responsible for storing the cart id of a customer
 * in storage when necessary. For some ecommerce platforms, where cart information
 * is stored in a cookie instead of storage accessible via javsacript, this service
 * isn't explicitly necessary, so be sure to use this service only in the driver
 * layer for platforms that require it.
 */
var DaffCartStorageService = /** @class */ (function () {
    function DaffCartStorageService(storageService) {
        this.storageService = storageService;
        this.CART_STORAGE_ID = 'DAFF_CART_ID';
    }
    /**
     * @return {?}
     */
    DaffCartStorageService.prototype.getCartId = /**
     * @return {?}
     */
    function () {
        return this.storageService.getItem(this.CART_STORAGE_ID);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DaffCartStorageService.prototype.setCartId = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.storageService.setItem(this.CART_STORAGE_ID, value);
    };
    /**
     * @return {?}
     */
    DaffCartStorageService.prototype.removeCartId = /**
     * @return {?}
     */
    function () {
        this.storageService.removeItem(this.CART_STORAGE_ID);
    };
    DaffCartStorageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                    useFactory: daffCartStorageServiceFactory,
                    deps: [
                        PLATFORM_ID,
                        DaffPersistenceServiceToken,
                        DaffServerErrorStorageService
                    ]
                },] }
    ];
    /** @nocollapse */
    DaffCartStorageService.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    /** @nocollapse */ DaffCartStorageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCartStorageService_Factory() { return daffCartStorageServiceFactory(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.DaffPersistenceServiceToken), i0.ɵɵinject(i1.DaffServerErrorStorageService)); }, token: DaffCartStorageService, providedIn: "root" });
    return DaffCartStorageService;
}());
export { DaffCartStorageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffCartStorageService.prototype.CART_STORAGE_ID;
    /**
     * @type {?}
     * @private
     */
    DaffCartStorageService.prototype.storageService;
}
/**
 * The factory that describe construction of a DaffCartStorageService
 * @param {?} platformId
 * @param {?} persistenceService
 * @param {?} serverStorage
 * @return {?}
 */
export function daffCartStorageServiceFactory(platformId, persistenceService, serverStorage) {
    return isPlatformBrowser(platformId)
        ? new DaffCartStorageService(persistenceService)
        : new DaffCartStorageService(serverStorage);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC8iLCJzb3VyY2VzIjpbInN0b3JhZ2UvY2FydC1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhFLE9BQU8sRUFFTiwyQkFBMkIsRUFDM0IsNkJBQTZCLEdBQzdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7QUFTcEQ7SUFZQyxnQ0FBb0IsY0FBc0M7UUFBdEMsbUJBQWMsR0FBZCxjQUFjLENBQXdCO1FBRnpDLG9CQUFlLEdBQUcsY0FBYyxDQUFDO0lBRVcsQ0FBQzs7OztJQUU5RCwwQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVELDBDQUFTOzs7O0lBQVQsVUFBVSxLQUFhO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELDZDQUFZOzs7SUFBWjtRQUNDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkF4QkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO29CQUNsQixVQUFVLEVBQUUsNkJBQTZCO29CQUN6QyxJQUFJLEVBQUU7d0JBQ0wsV0FBVzt3QkFDWCwyQkFBMkI7d0JBQzNCLDZCQUE2QjtxQkFDN0I7aUJBQ0Q7Ozs7Ozs7aUNBeEJEO0NBeUNDLEFBekJELElBeUJDO1NBaEJZLHNCQUFzQjs7Ozs7O0lBQ2xDLGlEQUFrRDs7Ozs7SUFFdEMsZ0RBQThDOzs7Ozs7Ozs7QUFrQjNELE1BQU0sVUFBVSw2QkFBNkIsQ0FDNUMsVUFBa0IsRUFDbEIsa0JBQTBDLEVBQzFDLGFBQTRDO0lBQzVDLE9BQU8saUJBQWlCLENBQUMsVUFBVSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDO1FBQ2hELENBQUMsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBQzlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG5cdERhZmZQZXJzaXN0ZW5jZVNlcnZpY2UsXG5cdERhZmZQZXJzaXN0ZW5jZVNlcnZpY2VUb2tlbixcblx0RGFmZlNlcnZlckVycm9yU3RvcmFnZVNlcnZpY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgIFxuXG4vKipcbiAqIFRoZSBEYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlIGlzIHJlc3BvbnNpYmxlIGZvciBzdG9yaW5nIHRoZSBjYXJ0IGlkIG9mIGEgY3VzdG9tZXJcbiAqIGluIHN0b3JhZ2Ugd2hlbiBuZWNlc3NhcnkuIEZvciBzb21lIGVjb21tZXJjZSBwbGF0Zm9ybXMsIHdoZXJlIGNhcnQgaW5mb3JtYXRpb25cbiAqIGlzIHN0b3JlZCBpbiBhIGNvb2tpZSBpbnN0ZWFkIG9mIHN0b3JhZ2UgYWNjZXNzaWJsZSB2aWEgamF2c2FjcmlwdCwgdGhpcyBzZXJ2aWNlXG4gKiBpc24ndCBleHBsaWNpdGx5IG5lY2Vzc2FyeSwgc28gYmUgc3VyZSB0byB1c2UgdGhpcyBzZXJ2aWNlIG9ubHkgaW4gdGhlIGRyaXZlclxuICogbGF5ZXIgZm9yIHBsYXRmb3JtcyB0aGF0IHJlcXVpcmUgaXQuXG4gKi9cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnLFxuXHR1c2VGYWN0b3J5OiBkYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlRmFjdG9yeSxcblx0ZGVwczogW1xuXHRcdFBMQVRGT1JNX0lELFxuXHRcdERhZmZQZXJzaXN0ZW5jZVNlcnZpY2VUb2tlbixcblx0XHREYWZmU2VydmVyRXJyb3JTdG9yYWdlU2VydmljZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U3RvcmFnZVNlcnZpY2Uge1xuXHRwcml2YXRlIHJlYWRvbmx5IENBUlRfU1RPUkFHRV9JRCA9ICdEQUZGX0NBUlRfSUQnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IERhZmZQZXJzaXN0ZW5jZVNlcnZpY2UpIHt9XG5cblx0Z2V0Q2FydElkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0SXRlbSh0aGlzLkNBUlRfU1RPUkFHRV9JRCk7XG5cdH1cblxuXHRzZXRDYXJ0SWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0SXRlbSh0aGlzLkNBUlRfU1RPUkFHRV9JRCwgdmFsdWUpO1xuXHR9XG5cblx0cmVtb3ZlQ2FydElkKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RvcmFnZVNlcnZpY2UucmVtb3ZlSXRlbSh0aGlzLkNBUlRfU1RPUkFHRV9JRCk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgZmFjdG9yeSB0aGF0IGRlc2NyaWJlIGNvbnN0cnVjdGlvbiBvZiBhIERhZmZDYXJ0U3RvcmFnZVNlcnZpY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhZmZDYXJ0U3RvcmFnZVNlcnZpY2VGYWN0b3J5KFxuXHRwbGF0Zm9ybUlkOiBzdHJpbmcsIFxuXHRwZXJzaXN0ZW5jZVNlcnZpY2U6IERhZmZQZXJzaXN0ZW5jZVNlcnZpY2UsIFxuXHRzZXJ2ZXJTdG9yYWdlOiBEYWZmU2VydmVyRXJyb3JTdG9yYWdlU2VydmljZSkge1xuXHRyZXR1cm4gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkgXG5cdFx0XHQ/IG5ldyBEYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlKHBlcnNpc3RlbmNlU2VydmljZSkgXG5cdFx0XHQ6IG5ldyBEYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlKHNlcnZlclN0b3JhZ2UpXG59Il19