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
export class DaffCartStorageService {
    /**
     * @param {?} storageService
     */
    constructor(storageService) {
        this.storageService = storageService;
        this.CART_STORAGE_ID = 'DAFF_CART_ID';
    }
    /**
     * @return {?}
     */
    getCartId() {
        return this.storageService.getItem(this.CART_STORAGE_ID);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setCartId(value) {
        this.storageService.setItem(this.CART_STORAGE_ID, value);
    }
    /**
     * @return {?}
     */
    removeCartId() {
        this.storageService.removeItem(this.CART_STORAGE_ID);
    }
}
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
DaffCartStorageService.ctorParameters = () => [
    { type: undefined }
];
/** @nocollapse */ DaffCartStorageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCartStorageService_Factory() { return daffCartStorageServiceFactory(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.DaffPersistenceServiceToken), i0.ɵɵinject(i1.DaffServerErrorStorageService)); }, token: DaffCartStorageService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC8iLCJzb3VyY2VzIjpbInN0b3JhZ2UvY2FydC1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhFLE9BQU8sRUFFTiwyQkFBMkIsRUFDM0IsNkJBQTZCLEdBQzdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7QUFrQnBELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFHbEMsWUFBb0IsY0FBc0M7UUFBdEMsbUJBQWMsR0FBZCxjQUFjLENBQXdCO1FBRnpDLG9CQUFlLEdBQUcsY0FBYyxDQUFDO0lBRVcsQ0FBQzs7OztJQUU5RCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQXhCRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07Z0JBQ2xCLFVBQVUsRUFBRSw2QkFBNkI7Z0JBQ3pDLElBQUksRUFBRTtvQkFDTCxXQUFXO29CQUNYLDJCQUEyQjtvQkFDM0IsNkJBQTZCO2lCQUM3QjthQUNEOzs7Ozs7Ozs7Ozs7SUFFQSxpREFBa0Q7Ozs7O0lBRXRDLGdEQUE4Qzs7Ozs7Ozs7O0FBa0IzRCxNQUFNLFVBQVUsNkJBQTZCLENBQzVDLFVBQWtCLEVBQ2xCLGtCQUEwQyxFQUMxQyxhQUE0QztJQUM1QyxPQUFPLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztRQUNsQyxDQUFDLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQztRQUNoRCxDQUFDLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUM5QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuXHREYWZmUGVyc2lzdGVuY2VTZXJ2aWNlLFxuXHREYWZmUGVyc2lzdGVuY2VTZXJ2aWNlVG9rZW4sXG5cdERhZmZTZXJ2ZXJFcnJvclN0b3JhZ2VTZXJ2aWNlLFxufSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7ICBcblxuLyoqXG4gKiBUaGUgRGFmZkNhcnRTdG9yYWdlU2VydmljZSBpcyByZXNwb25zaWJsZSBmb3Igc3RvcmluZyB0aGUgY2FydCBpZCBvZiBhIGN1c3RvbWVyXG4gKiBpbiBzdG9yYWdlIHdoZW4gbmVjZXNzYXJ5LiBGb3Igc29tZSBlY29tbWVyY2UgcGxhdGZvcm1zLCB3aGVyZSBjYXJ0IGluZm9ybWF0aW9uXG4gKiBpcyBzdG9yZWQgaW4gYSBjb29raWUgaW5zdGVhZCBvZiBzdG9yYWdlIGFjY2Vzc2libGUgdmlhIGphdnNhY3JpcHQsIHRoaXMgc2VydmljZVxuICogaXNuJ3QgZXhwbGljaXRseSBuZWNlc3NhcnksIHNvIGJlIHN1cmUgdG8gdXNlIHRoaXMgc2VydmljZSBvbmx5IGluIHRoZSBkcml2ZXJcbiAqIGxheWVyIGZvciBwbGF0Zm9ybXMgdGhhdCByZXF1aXJlIGl0LlxuICovXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290Jyxcblx0dXNlRmFjdG9yeTogZGFmZkNhcnRTdG9yYWdlU2VydmljZUZhY3RvcnksXG5cdGRlcHM6IFtcblx0XHRQTEFURk9STV9JRCxcblx0XHREYWZmUGVyc2lzdGVuY2VTZXJ2aWNlVG9rZW4sXG5cdFx0RGFmZlNlcnZlckVycm9yU3RvcmFnZVNlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlIHtcblx0cHJpdmF0ZSByZWFkb25seSBDQVJUX1NUT1JBR0VfSUQgPSAnREFGRl9DQVJUX0lEJztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBEYWZmUGVyc2lzdGVuY2VTZXJ2aWNlKSB7fVxuXG5cdGdldENhcnRJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0odGhpcy5DQVJUX1NUT1JBR0VfSUQpO1xuXHR9XG5cblx0c2V0Q2FydElkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0odGhpcy5DQVJUX1NUT1JBR0VfSUQsIHZhbHVlKTtcblx0fVxuXG5cdHJlbW92ZUNhcnRJZCgpOiB2b2lkIHtcblx0XHR0aGlzLnN0b3JhZ2VTZXJ2aWNlLnJlbW92ZUl0ZW0odGhpcy5DQVJUX1NUT1JBR0VfSUQpO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIGZhY3RvcnkgdGhhdCBkZXNjcmliZSBjb25zdHJ1Y3Rpb24gb2YgYSBEYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlRmFjdG9yeShcblx0cGxhdGZvcm1JZDogc3RyaW5nLCBcblx0cGVyc2lzdGVuY2VTZXJ2aWNlOiBEYWZmUGVyc2lzdGVuY2VTZXJ2aWNlLCBcblx0c2VydmVyU3RvcmFnZTogRGFmZlNlcnZlckVycm9yU3RvcmFnZVNlcnZpY2UpIHtcblx0cmV0dXJuIGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpIFxuXHRcdFx0PyBuZXcgRGFmZkNhcnRTdG9yYWdlU2VydmljZShwZXJzaXN0ZW5jZVNlcnZpY2UpIFxuXHRcdFx0OiBuZXcgRGFmZkNhcnRTdG9yYWdlU2VydmljZShzZXJ2ZXJTdG9yYWdlKVxufSJdfQ==