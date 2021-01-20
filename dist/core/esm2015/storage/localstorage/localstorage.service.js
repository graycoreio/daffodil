/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
export class DaffLocalStorageService {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        if (!isPlatformBrowser(platformId)) {
            throw new Error('The DaffLocalStorageService can only be instantiated in the browser.');
        }
    }
    /**
     * Persist the given item into local storage.
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setItem(key, value) {
        localStorage.setItem(key, value);
    }
    /**
     * Retrieve the given item from localstorage.
     * @param {?} key
     * @return {?}
     */
    getItem(key) {
        return localStorage.getItem(key);
    }
    /**
     * Remove a given item from localstorage
     * @param {?} key
     * @return {?}
     */
    removeItem(key) {
        localStorage.removeItem(key);
    }
    /**
     * @return {?}
     */
    clear() {
        localStorage.clear();
    }
}
DaffLocalStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffLocalStorageService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ DaffLocalStorageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffLocalStorageService_Factory() { return new DaffLocalStorageService(i0.ɵɵinject(i0.PLATFORM_ID)); }, token: DaffLocalStorageService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY29yZS8iLCJzb3VyY2VzIjpbInN0b3JhZ2UvbG9jYWxzdG9yYWdlL2xvY2Fsc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBS3BELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFDbEMsWUFBaUMsVUFBa0I7UUFDakQsSUFBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFDO1lBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsc0VBQXNFLENBQUMsQ0FBQztTQUN6RjtJQUNILENBQUM7Ozs7Ozs7SUFLRCxPQUFPLENBQUMsR0FBVyxFQUFFLEtBQVU7UUFDN0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBS0QsT0FBTyxDQUFDLEdBQVc7UUFDakIsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUtELFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7O1lBakNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozt5Q0FFYyxNQUFNLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhZmZQZXJzaXN0ZW5jZVNlcnZpY2UgfSBmcm9tICcuLi9wZXJzaXN0ZW5jZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTG9jYWxTdG9yYWdlU2VydmljZSBpbXBsZW1lbnRzIERhZmZQZXJzaXN0ZW5jZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcpe1xuICAgIGlmKCFpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBEYWZmTG9jYWxTdG9yYWdlU2VydmljZSBjYW4gb25seSBiZSBpbnN0YW50aWF0ZWQgaW4gdGhlIGJyb3dzZXIuJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcnNpc3QgdGhlIGdpdmVuIGl0ZW0gaW50byBsb2NhbCBzdG9yYWdlLiBcbiAgICovXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSB0aGUgZ2l2ZW4gaXRlbSBmcm9tIGxvY2Fsc3RvcmFnZS5cbiAgICovXG4gIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGdpdmVuIGl0ZW0gZnJvbSBsb2NhbHN0b3JhZ2VcbiAgICovXG4gIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cblxuICBjbGVhcigpe1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9XG59XG4iXX0=