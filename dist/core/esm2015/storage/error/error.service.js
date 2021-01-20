/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffStorageServiceError } from './error';
import * as i0 from "@angular/core";
export class DaffErrorStorageService {
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
        throw new DaffStorageServiceError(DaffErrorStorageService.ERROR_MESSAGE);
    }
}
DaffErrorStorageService.ERROR_MESSAGE = 'The DaffErrorStorageService always throws an error.';
DaffErrorStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffErrorStorageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffErrorStorageService_Factory() { return new DaffErrorStorageService(); }, token: DaffErrorStorageService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffErrorStorageService.ERROR_MESSAGE;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jb3JlLyIsInNvdXJjZXMiOlsic3RvcmFnZS9lcnJvci9lcnJvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFLbEQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBR2xDLE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBVztRQUNwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyxVQUFVO1FBQ2hCLE1BQU0sSUFBSSx1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzRSxDQUFDOztBQXBCZSxxQ0FBYSxHQUFHLHFEQUFxRCxDQUFDOztZQUp2RixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBRUMsc0NBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmUGVyc2lzdGVuY2VTZXJ2aWNlIH0gZnJvbSAnLi4vcGVyc2lzdGVuY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZTdG9yYWdlU2VydmljZUVycm9yIH0gZnJvbSAnLi9lcnJvcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZFcnJvclN0b3JhZ2VTZXJ2aWNlIGltcGxlbWVudHMgRGFmZlBlcnNpc3RlbmNlU2VydmljZSB7XG4gIHN0YXRpYyByZWFkb25seSBFUlJPUl9NRVNTQUdFID0gJ1RoZSBEYWZmRXJyb3JTdG9yYWdlU2VydmljZSBhbHdheXMgdGhyb3dzIGFuIGVycm9yLic7XG5cbiAgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudGhyb3dFcnJvcigpO1xuICB9XG5cbiAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgdGhpcy50aHJvd0Vycm9yKCk7XG4gIH1cblxuICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogYW55IHtcbiAgICB0aGlzLnRocm93RXJyb3IoKTtcbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgdGhpcy50aHJvd0Vycm9yKCk7XG4gIH1cblxuICBwcml2YXRlIHRocm93RXJyb3IoKSB7XG4gICAgdGhyb3cgbmV3IERhZmZTdG9yYWdlU2VydmljZUVycm9yKERhZmZFcnJvclN0b3JhZ2VTZXJ2aWNlLkVSUk9SX01FU1NBR0UpO1xuICB9XG59XG4iXX0=