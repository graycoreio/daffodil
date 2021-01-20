/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffStorageServiceError } from './error';
import * as i0 from "@angular/core";
var DaffErrorStorageService = /** @class */ (function () {
    function DaffErrorStorageService() {
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    DaffErrorStorageService.prototype.setItem = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.throwError();
    };
    /**
     * @param {?} key
     * @return {?}
     */
    DaffErrorStorageService.prototype.getItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.throwError();
    };
    /**
     * @param {?} key
     * @return {?}
     */
    DaffErrorStorageService.prototype.removeItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.throwError();
    };
    /**
     * @return {?}
     */
    DaffErrorStorageService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.throwError();
    };
    /**
     * @private
     * @return {?}
     */
    DaffErrorStorageService.prototype.throwError = /**
     * @private
     * @return {?}
     */
    function () {
        throw new DaffStorageServiceError(DaffErrorStorageService.ERROR_MESSAGE);
    };
    DaffErrorStorageService.ERROR_MESSAGE = 'The DaffErrorStorageService always throws an error.';
    DaffErrorStorageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffErrorStorageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffErrorStorageService_Factory() { return new DaffErrorStorageService(); }, token: DaffErrorStorageService, providedIn: "root" });
    return DaffErrorStorageService;
}());
export { DaffErrorStorageService };
if (false) {
    /** @type {?} */
    DaffErrorStorageService.ERROR_MESSAGE;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jb3JlLyIsInNvdXJjZXMiOlsic3RvcmFnZS9lcnJvci9lcnJvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFFbEQ7SUFBQTtLQXlCQzs7Ozs7O0lBbkJDLHlDQUFPOzs7OztJQUFQLFVBQVEsR0FBVyxFQUFFLEtBQVU7UUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQseUNBQU87Ozs7SUFBUCxVQUFRLEdBQVc7UUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsNENBQVU7Ozs7SUFBVixVQUFXLEdBQVc7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCx1Q0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyw0Q0FBVTs7OztJQUFsQjtRQUNFLE1BQU0sSUFBSSx1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBcEJlLHFDQUFhLEdBQUcscURBQXFELENBQUM7O2dCQUp2RixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7a0NBUEQ7Q0E4QkMsQUF6QkQsSUF5QkM7U0F0QlksdUJBQXVCOzs7SUFDbEMsc0NBQXNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmUGVyc2lzdGVuY2VTZXJ2aWNlIH0gZnJvbSAnLi4vcGVyc2lzdGVuY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZTdG9yYWdlU2VydmljZUVycm9yIH0gZnJvbSAnLi9lcnJvcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZFcnJvclN0b3JhZ2VTZXJ2aWNlIGltcGxlbWVudHMgRGFmZlBlcnNpc3RlbmNlU2VydmljZSB7XG4gIHN0YXRpYyByZWFkb25seSBFUlJPUl9NRVNTQUdFID0gJ1RoZSBEYWZmRXJyb3JTdG9yYWdlU2VydmljZSBhbHdheXMgdGhyb3dzIGFuIGVycm9yLic7XG5cbiAgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudGhyb3dFcnJvcigpO1xuICB9XG5cbiAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgdGhpcy50aHJvd0Vycm9yKCk7XG4gIH1cblxuICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogYW55IHtcbiAgICB0aGlzLnRocm93RXJyb3IoKTtcbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgdGhpcy50aHJvd0Vycm9yKCk7XG4gIH1cblxuICBwcml2YXRlIHRocm93RXJyb3IoKSB7XG4gICAgdGhyb3cgbmV3IERhZmZTdG9yYWdlU2VydmljZUVycm9yKERhZmZFcnJvclN0b3JhZ2VTZXJ2aWNlLkVSUk9SX01FU1NBR0UpO1xuICB9XG59XG4iXX0=