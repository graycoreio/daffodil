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
export class DaffInMemoryProductService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/products/';
    }
    /**
     * Gets all products.
     *
     * @return {?} An Observable of DaffProduct[]
     */
    getAll() {
        return this.http.get(this.url);
    }
    /**
     * Gets all best selling products.
     *
     * @return {?} An Observable of DaffProduct[]
     */
    getBestSellers() {
        return this.http.get(this.url + 'best-sellers');
    }
    /**
     * Get a product by ID.
     *
     * @param {?} productId string - product ID
     * @return {?} An Observable of a DaffProduct
     */
    get(productId) {
        return this.http.get(this.url + productId);
    }
}
DaffInMemoryProductService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryProductService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryProductService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryProductService_Factory() { return new DaffInMemoryProductService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryProductService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryProductService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryProductService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvaW4tbWVtb3J5L3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7O0FBYWxELE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFHckMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxRQUFHLEdBQUcsZ0JBQWdCLENBQUM7SUFFZ0IsQ0FBQzs7Ozs7O0lBT3hDLE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBT0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWdCLElBQUksQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7OztJQVFELEdBQUcsQ0FBQyxTQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFjLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7O1lBbENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVpRLFVBQVU7Ozs7O0lBY2pCLHlDQUF1Qjs7Ozs7SUFFWCwwQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmUHJvZHVjdCwgRGFmZlByb2R1Y3RTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuXG4vKipcbiAqIFRoZSBwcm9kdWN0IGlubWVtb3J5IGRyaXZlciB0byBtb2NrIHRoZSBwcm9kdWN0IGJhY2tlbmQgc2VydmljZS5cbiAqIFxuICogQFBhcmFtIEh0dHBDbGllbnRcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5UHJvZHVjdFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmUHJvZHVjdFNlcnZpY2VJbnRlcmZhY2Uge1xuICB1cmwgPSAnL2FwaS9wcm9kdWN0cy8nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICAvKipcbiAgICogR2V0cyBhbGwgcHJvZHVjdHMuXG4gICAqIFxuICAgKiBAcmV0dXJucyBBbiBPYnNlcnZhYmxlIG9mIERhZmZQcm9kdWN0W11cbiAgICovXG4gIGdldEFsbCgpOiBPYnNlcnZhYmxlPERhZmZQcm9kdWN0W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEYWZmUHJvZHVjdFtdPih0aGlzLnVybCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbGwgYmVzdCBzZWxsaW5nIHByb2R1Y3RzLlxuICAgKiBcbiAgICogQHJldHVybnMgQW4gT2JzZXJ2YWJsZSBvZiBEYWZmUHJvZHVjdFtdXG4gICAqL1xuICBnZXRCZXN0U2VsbGVycygpOiBPYnNlcnZhYmxlPERhZmZQcm9kdWN0W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEYWZmUHJvZHVjdFtdPih0aGlzLnVybCArICdiZXN0LXNlbGxlcnMnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBwcm9kdWN0IGJ5IElELlxuICAgKiBcbiAgICogQHBhcmFtIHByb2R1Y3RJZCBzdHJpbmcgLSBwcm9kdWN0IElEXG4gICAqIEByZXR1cm5zIEFuIE9ic2VydmFibGUgb2YgYSBEYWZmUHJvZHVjdFxuICAgKi9cbiAgZ2V0KHByb2R1Y3RJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEYWZmUHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERhZmZQcm9kdWN0Pih0aGlzLnVybCArIHByb2R1Y3RJZCk7XG4gIH1cbn1cbiJdfQ==