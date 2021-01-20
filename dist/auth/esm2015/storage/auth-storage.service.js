/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { DaffPersistenceServiceToken } from '@daffodil/core';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/core";
export class DaffAuthStorageService {
    /**
     * @param {?} storageService
     */
    constructor(storageService) {
        this.storageService = storageService;
        this.AUTH_STORAGE_TOKEN = 'DAFF_AUTH_TOKEN';
    }
    /**
     * @return {?}
     */
    getAuthToken() {
        return this.storageService.getItem(this.AUTH_STORAGE_TOKEN);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setAuthToken(value) {
        this.storageService.setItem(this.AUTH_STORAGE_TOKEN, value);
    }
    /**
     * @return {?}
     */
    removeAuthToken() {
        this.storageService.removeItem(this.AUTH_STORAGE_TOKEN);
    }
}
DaffAuthStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffAuthStorageService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DaffPersistenceServiceToken,] }] }
];
/** @nocollapse */ DaffAuthStorageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffAuthStorageService_Factory() { return new DaffAuthStorageService(i0.ɵɵinject(i1.DaffPersistenceServiceToken)); }, token: DaffAuthStorageService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffAuthStorageService.prototype.AUTH_STORAGE_TOKEN;
    /**
     * @type {?}
     * @private
     */
    DaffAuthStorageService.prototype.storageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1zdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC8iLCJzb3VyY2VzIjpbInN0b3JhZ2UvYXV0aC1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBMEIsMkJBQTJCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS3JGLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFHakMsWUFBeUQsY0FBc0M7UUFBdEMsbUJBQWMsR0FBZCxjQUFjLENBQXdCO1FBRjlFLHVCQUFrQixHQUFHLGlCQUFpQixDQUFDO0lBRTBDLENBQUM7Ozs7SUFFbkcsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7WUFsQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQUljLE1BQU0sU0FBQywyQkFBMkI7Ozs7Ozs7O0lBRi9DLG9EQUF3RDs7Ozs7SUFFNUMsZ0RBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZQZXJzaXN0ZW5jZVNlcnZpY2UsIERhZmZQZXJzaXN0ZW5jZVNlcnZpY2VUb2tlbiB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhTdG9yYWdlU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgQVVUSF9TVE9SQUdFX1RPS0VOID0gJ0RBRkZfQVVUSF9UT0tFTic7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChEYWZmUGVyc2lzdGVuY2VTZXJ2aWNlVG9rZW4pIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IERhZmZQZXJzaXN0ZW5jZVNlcnZpY2UpIHt9XG5cbiAgZ2V0QXV0aFRva2VuKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0SXRlbSh0aGlzLkFVVEhfU1RPUkFHRV9UT0tFTik7XG4gIH1cblxuICBzZXRBdXRoVG9rZW4odmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0SXRlbSh0aGlzLkFVVEhfU1RPUkFHRV9UT0tFTiwgdmFsdWUpO1xuICB9XG5cbiAgcmVtb3ZlQXV0aFRva2VuKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UucmVtb3ZlSXRlbSh0aGlzLkFVVEhfU1RPUkFHRV9UT0tFTik7XG4gIH1cbn1cbiJdfQ==