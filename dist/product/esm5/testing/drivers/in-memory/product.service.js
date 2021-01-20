/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * The product inmemory driver to mock the product backend service.
 *
 * \@Param HttpClient
 */
var DaffInMemoryProductService = /** @class */ (function () {
    function DaffInMemoryProductService(http) {
        this.http = http;
        this.url = '/api/products/';
    }
    /**
     * Gets all products.
     *
     * @returns An Observable of DaffProduct[]
     */
    /**
     * Gets all products.
     *
     * @return {?} An Observable of DaffProduct[]
     */
    DaffInMemoryProductService.prototype.getAll = /**
     * Gets all products.
     *
     * @return {?} An Observable of DaffProduct[]
     */
    function () {
        return this.http.get(this.url);
    };
    /**
     * Gets all best selling products.
     *
     * @returns An Observable of DaffProduct[]
     */
    /**
     * Gets all best selling products.
     *
     * @return {?} An Observable of DaffProduct[]
     */
    DaffInMemoryProductService.prototype.getBestSellers = /**
     * Gets all best selling products.
     *
     * @return {?} An Observable of DaffProduct[]
     */
    function () {
        return this.http.get(this.url + 'best-sellers');
    };
    /**
     * Get a product by ID.
     *
     * @param productId string - product ID
     * @returns An Observable of a DaffProduct
     */
    /**
     * Get a product by ID.
     *
     * @param {?} productId string - product ID
     * @return {?} An Observable of a DaffProduct
     */
    DaffInMemoryProductService.prototype.get = /**
     * Get a product by ID.
     *
     * @param {?} productId string - product ID
     * @return {?} An Observable of a DaffProduct
     */
    function (productId) {
        return this.http.get(this.url + productId);
    };
    DaffInMemoryProductService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryProductService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryProductService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryProductService_Factory() { return new DaffInMemoryProductService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryProductService, providedIn: "root" });
    return DaffInMemoryProductService;
}());
export { DaffInMemoryProductService };
if (false) {
    /** @type {?} */
    DaffInMemoryProductService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryProductService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvaW4tbWVtb3J5L3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7O0FBVWxEO0lBTUUsb0NBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsUUFBRyxHQUFHLGdCQUFnQixDQUFDO0lBRWdCLENBQUM7SUFFeEM7Ozs7T0FJRzs7Ozs7O0lBQ0gsMkNBQU07Ozs7O0lBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7O09BSUc7Ozs7OztJQUNILG1EQUFjOzs7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZ0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7SUFDSCx3Q0FBRzs7Ozs7O0lBQUgsVUFBSSxTQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFjLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Z0JBbENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWlEsVUFBVTs7O3FDQURuQjtDQThDQyxBQW5DRCxJQW1DQztTQWhDWSwwQkFBMEI7OztJQUNyQyx5Q0FBdUI7Ozs7O0lBRVgsMENBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3QsIERhZmZQcm9kdWN0U2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcblxuLyoqXG4gKiBUaGUgcHJvZHVjdCBpbm1lbW9yeSBkcml2ZXIgdG8gbW9jayB0aGUgcHJvZHVjdCBiYWNrZW5kIHNlcnZpY2UuXG4gKiBcbiAqIEBQYXJhbSBIdHRwQ2xpZW50XG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeVByb2R1Y3RTZXJ2aWNlIGltcGxlbWVudHMgRGFmZlByb2R1Y3RTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgdXJsID0gJy9hcGkvcHJvZHVjdHMvJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgLyoqXG4gICAqIEdldHMgYWxsIHByb2R1Y3RzLlxuICAgKiBcbiAgICogQHJldHVybnMgQW4gT2JzZXJ2YWJsZSBvZiBEYWZmUHJvZHVjdFtdXG4gICAqL1xuICBnZXRBbGwoKTogT2JzZXJ2YWJsZTxEYWZmUHJvZHVjdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGFmZlByb2R1Y3RbXT4odGhpcy51cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYWxsIGJlc3Qgc2VsbGluZyBwcm9kdWN0cy5cbiAgICogXG4gICAqIEByZXR1cm5zIEFuIE9ic2VydmFibGUgb2YgRGFmZlByb2R1Y3RbXVxuICAgKi9cbiAgZ2V0QmVzdFNlbGxlcnMoKTogT2JzZXJ2YWJsZTxEYWZmUHJvZHVjdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGFmZlByb2R1Y3RbXT4odGhpcy51cmwgKyAnYmVzdC1zZWxsZXJzJyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcHJvZHVjdCBieSBJRC5cbiAgICogXG4gICAqIEBwYXJhbSBwcm9kdWN0SWQgc3RyaW5nIC0gcHJvZHVjdCBJRFxuICAgKiBAcmV0dXJucyBBbiBPYnNlcnZhYmxlIG9mIGEgRGFmZlByb2R1Y3RcbiAgICovXG4gIGdldChwcm9kdWN0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZlByb2R1Y3Q+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEYWZmUHJvZHVjdD4odGhpcy51cmwgKyBwcm9kdWN0SWQpO1xuICB9XG59XG4iXX0=