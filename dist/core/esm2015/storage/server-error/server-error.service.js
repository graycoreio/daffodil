/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffServerSideStorageError } from './server-error';
import * as i0 from "@angular/core";
/**
 * A storage service meant to be loaded into SSR contexts.
 * It will always throw the {\@link DaffServerSideStorageError}.
 */
export class DaffServerErrorStorageService {
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setItem(key, value) {
        this.throwError();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getItem(key) {
        this.throwError();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeItem(key) {
        this.throwError();
    }
    /**
     * @return {?}
     */
    clear() {
        this.throwError();
    }
    /**
     * @private
     * @return {?}
     */
    throwError() {
        throw new DaffServerSideStorageError(DaffServerErrorStorageService.ERROR_MESSAGE);
    }
}
DaffServerErrorStorageService.ERROR_MESSAGE = 'The DaffServerErrorStorageService always throws an error.';
DaffServerErrorStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffServerErrorStorageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffServerErrorStorageService_Factory() { return new DaffServerErrorStorageService(); }, token: DaffServerErrorStorageService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffServerErrorStorageService.ERROR_MESSAGE;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWVycm9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY29yZS8iLCJzb3VyY2VzIjpbInN0b3JhZ2Uvc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFTNUQsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7O0lBR3hDLE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBVztRQUNwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyxVQUFVO1FBQ2hCLE1BQU0sSUFBSSwwQkFBMEIsQ0FBQyw2QkFBNkIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRixDQUFDOztBQXBCZSwyQ0FBYSxHQUFHLDJEQUEyRCxDQUFDOztZQUo3RixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBRUMsNENBQTRGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmUGVyc2lzdGVuY2VTZXJ2aWNlIH0gZnJvbSAnLi4vcGVyc2lzdGVuY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZTZXJ2ZXJTaWRlU3RvcmFnZUVycm9yIH0gZnJvbSAnLi9zZXJ2ZXItZXJyb3InO1xuXG4vKipcbiAqIEEgc3RvcmFnZSBzZXJ2aWNlIG1lYW50IHRvIGJlIGxvYWRlZCBpbnRvIFNTUiBjb250ZXh0cy5cbiAqIEl0IHdpbGwgYWx3YXlzIHRocm93IHRoZSB7QGxpbmsgRGFmZlNlcnZlclNpZGVTdG9yYWdlRXJyb3J9LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmU2VydmVyRXJyb3JTdG9yYWdlU2VydmljZSBpbXBsZW1lbnRzIERhZmZQZXJzaXN0ZW5jZVNlcnZpY2Uge1xuICBzdGF0aWMgcmVhZG9ubHkgRVJST1JfTUVTU0FHRSA9ICdUaGUgRGFmZlNlcnZlckVycm9yU3RvcmFnZVNlcnZpY2UgYWx3YXlzIHRocm93cyBhbiBlcnJvci4nO1xuXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRocm93RXJyb3IoKTtcbiAgfVxuXG4gIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIHRoaXMudGhyb3dFcnJvcigpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgdGhpcy50aHJvd0Vycm9yKCk7XG4gIH1cblxuICBjbGVhcigpe1xuICAgIHRoaXMudGhyb3dFcnJvcigpO1xuICB9XG5cbiAgcHJpdmF0ZSB0aHJvd0Vycm9yKCkge1xuICAgIHRocm93IG5ldyBEYWZmU2VydmVyU2lkZVN0b3JhZ2VFcnJvcihEYWZmU2VydmVyRXJyb3JTdG9yYWdlU2VydmljZS5FUlJPUl9NRVNTQUdFKTtcbiAgfVxufVxuIl19