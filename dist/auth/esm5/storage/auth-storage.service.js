/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { DaffPersistenceServiceToken } from '@daffodil/core';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/core";
var DaffAuthStorageService = /** @class */ (function () {
    function DaffAuthStorageService(storageService) {
        this.storageService = storageService;
        this.AUTH_STORAGE_TOKEN = 'DAFF_AUTH_TOKEN';
    }
    /**
     * @return {?}
     */
    DaffAuthStorageService.prototype.getAuthToken = /**
     * @return {?}
     */
    function () {
        return this.storageService.getItem(this.AUTH_STORAGE_TOKEN);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DaffAuthStorageService.prototype.setAuthToken = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.storageService.setItem(this.AUTH_STORAGE_TOKEN, value);
    };
    /**
     * @return {?}
     */
    DaffAuthStorageService.prototype.removeAuthToken = /**
     * @return {?}
     */
    function () {
        this.storageService.removeItem(this.AUTH_STORAGE_TOKEN);
    };
    DaffAuthStorageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffAuthStorageService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DaffPersistenceServiceToken,] }] }
    ]; };
    /** @nocollapse */ DaffAuthStorageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffAuthStorageService_Factory() { return new DaffAuthStorageService(i0.ɵɵinject(i1.DaffPersistenceServiceToken)); }, token: DaffAuthStorageService, providedIn: "root" });
    return DaffAuthStorageService;
}());
export { DaffAuthStorageService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1zdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC8iLCJzb3VyY2VzIjpbInN0b3JhZ2UvYXV0aC1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBMEIsMkJBQTJCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXJGO0lBTUUsZ0NBQXlELGNBQXNDO1FBQXRDLG1CQUFjLEdBQWQsY0FBYyxDQUF3QjtRQUY5RSx1QkFBa0IsR0FBRyxpQkFBaUIsQ0FBQztJQUUwQyxDQUFDOzs7O0lBRW5HLDZDQUFZOzs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCw2Q0FBWTs7OztJQUFaLFVBQWEsS0FBYTtRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7OztJQUVELGdEQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7O2dCQWxCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dEQUljLE1BQU0sU0FBQywyQkFBMkI7OztpQ0FWakQ7Q0F1QkMsQUFuQkQsSUFtQkM7U0FoQlksc0JBQXNCOzs7Ozs7SUFDakMsb0RBQXdEOzs7OztJQUU1QyxnREFBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZlBlcnNpc3RlbmNlU2VydmljZSwgRGFmZlBlcnNpc3RlbmNlU2VydmljZVRva2VuIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQXV0aFN0b3JhZ2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBBVVRIX1NUT1JBR0VfVE9LRU4gPSAnREFGRl9BVVRIX1RPS0VOJztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERhZmZQZXJzaXN0ZW5jZVNlcnZpY2VUb2tlbikgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogRGFmZlBlcnNpc3RlbmNlU2VydmljZSkge31cblxuICBnZXRBdXRoVG9rZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRJdGVtKHRoaXMuQVVUSF9TVE9SQUdFX1RPS0VOKTtcbiAgfVxuXG4gIHNldEF1dGhUb2tlbih2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXRJdGVtKHRoaXMuQVVUSF9TVE9SQUdFX1RPS0VOLCB2YWx1ZSk7XG4gIH1cblxuICByZW1vdmVBdXRoVG9rZW4oKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlU2VydmljZS5yZW1vdmVJdGVtKHRoaXMuQVVUSF9TVE9SQUdFX1RPS0VOKTtcbiAgfVxufVxuIl19