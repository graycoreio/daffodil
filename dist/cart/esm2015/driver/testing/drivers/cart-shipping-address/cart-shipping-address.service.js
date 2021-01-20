/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartAddressFactory, DaffCartFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
export class DaffTestingCartShippingAddressService {
    /**
     * @param {?} addressFactory
     * @param {?} cartFactory
     */
    constructor(addressFactory, cartFactory) {
        this.addressFactory = addressFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return of(this.addressFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    update(cartId, address) {
        return of(this.cartFactory.create());
    }
}
DaffTestingCartShippingAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartShippingAddressService.ctorParameters = () => [
    { type: DaffCartAddressFactory },
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffTestingCartShippingAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartShippingAddressService_Factory() { return new DaffTestingCartShippingAddressService(i0.ɵɵinject(i1.DaffCartAddressFactory), i0.ɵɵinject(i1.DaffCartFactory)); }, token: DaffTestingCartShippingAddressService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartShippingAddressService.prototype.addressFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartShippingAddressService.prototype.cartFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC1zaGlwcGluZy1hZGRyZXNzL2NhcnQtc2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFLakYsTUFBTSxPQUFPLHFDQUFxQzs7Ozs7SUFDaEQsWUFDVSxjQUFzQyxFQUN0QyxXQUE0QjtRQUQ1QixtQkFBYyxHQUFkLGNBQWMsQ0FBd0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQ25DLENBQUM7Ozs7O0lBRUosR0FBRyxDQUFDLE1BQXNCO1FBQ3hCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBc0IsRUFBRSxPQUF3QjtRQUNyRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBZkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsc0JBQXNCO1lBQUUsZUFBZTs7Ozs7Ozs7SUFPNUMsK0RBQThDOzs7OztJQUM5Qyw0REFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHtcbiAgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3NGYWN0b3J5LCBEYWZmQ2FydEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY2FydC90ZXN0aW5nJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlRlc3RpbmdDYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZUludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWRkcmVzc0ZhY3Rvcnk6IERhZmZDYXJ0QWRkcmVzc0ZhY3RvcnksXG4gICAgcHJpdmF0ZSBjYXJ0RmFjdG9yeTogRGFmZkNhcnRGYWN0b3J5XG4gICkge31cblxuICBnZXQoY2FydElkOiBEYWZmQ2FydFsnaWQnXSk6IE9ic2VydmFibGU8RGFmZkNhcnRBZGRyZXNzPiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuYWRkcmVzc0ZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG5cbiAgdXBkYXRlKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIGFkZHJlc3M6IERhZmZDYXJ0QWRkcmVzcyk6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gb2YodGhpcy5jYXJ0RmFjdG9yeS5jcmVhdGUoKSk7XG4gIH1cbn1cbiJdfQ==