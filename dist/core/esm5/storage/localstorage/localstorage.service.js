/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
var DaffLocalStorageService = /** @class */ (function () {
    function DaffLocalStorageService(platformId) {
        if (!isPlatformBrowser(platformId)) {
            throw new Error('The DaffLocalStorageService can only be instantiated in the browser.');
        }
    }
    /**
     * Persist the given item into local storage.
     */
    /**
     * Persist the given item into local storage.
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    DaffLocalStorageService.prototype.setItem = /**
     * Persist the given item into local storage.
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        localStorage.setItem(key, value);
    };
    /**
     * Retrieve the given item from localstorage.
     */
    /**
     * Retrieve the given item from localstorage.
     * @param {?} key
     * @return {?}
     */
    DaffLocalStorageService.prototype.getItem = /**
     * Retrieve the given item from localstorage.
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return localStorage.getItem(key);
    };
    /**
     * Remove a given item from localstorage
     */
    /**
     * Remove a given item from localstorage
     * @param {?} key
     * @return {?}
     */
    DaffLocalStorageService.prototype.removeItem = /**
     * Remove a given item from localstorage
     * @param {?} key
     * @return {?}
     */
    function (key) {
        localStorage.removeItem(key);
    };
    /**
     * @return {?}
     */
    DaffLocalStorageService.prototype.clear = /**
     * @return {?}
     */
    function () {
        localStorage.clear();
    };
    DaffLocalStorageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffLocalStorageService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    /** @nocollapse */ DaffLocalStorageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffLocalStorageService_Factory() { return new DaffLocalStorageService(i0.ɵɵinject(i0.PLATFORM_ID)); }, token: DaffLocalStorageService, providedIn: "root" });
    return DaffLocalStorageService;
}());
export { DaffLocalStorageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY29yZS8iLCJzb3VyY2VzIjpbInN0b3JhZ2UvbG9jYWxzdG9yYWdlL2xvY2Fsc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRXBEO0lBSUUsaUNBQWlDLFVBQWtCO1FBQ2pELElBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFBQztZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUM7U0FDekY7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSCx5Q0FBTzs7Ozs7O0lBQVAsVUFBUSxHQUFXLEVBQUUsS0FBVTtRQUM3QixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILHlDQUFPOzs7OztJQUFQLFVBQVEsR0FBVztRQUNqQixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCw0Q0FBVTs7Ozs7SUFBVixVQUFXLEdBQVc7UUFDcEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsdUNBQUs7OztJQUFMO1FBQ0UsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O2dCQWpDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzZDQUVjLE1BQU0sU0FBQyxXQUFXOzs7a0NBUmpDO0NBc0NDLEFBbENELElBa0NDO1NBL0JZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhZmZQZXJzaXN0ZW5jZVNlcnZpY2UgfSBmcm9tICcuLi9wZXJzaXN0ZW5jZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTG9jYWxTdG9yYWdlU2VydmljZSBpbXBsZW1lbnRzIERhZmZQZXJzaXN0ZW5jZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcpe1xuICAgIGlmKCFpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBEYWZmTG9jYWxTdG9yYWdlU2VydmljZSBjYW4gb25seSBiZSBpbnN0YW50aWF0ZWQgaW4gdGhlIGJyb3dzZXIuJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcnNpc3QgdGhlIGdpdmVuIGl0ZW0gaW50byBsb2NhbCBzdG9yYWdlLiBcbiAgICovXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSB0aGUgZ2l2ZW4gaXRlbSBmcm9tIGxvY2Fsc3RvcmFnZS5cbiAgICovXG4gIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGdpdmVuIGl0ZW0gZnJvbSBsb2NhbHN0b3JhZ2VcbiAgICovXG4gIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cblxuICBjbGVhcigpe1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9XG59XG4iXX0=