/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartAddressFactory, DaffCartFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
var DaffTestingCartAddressService = /** @class */ (function () {
    function DaffTestingCartAddressService(addressFactory, cartFactory) {
        this.addressFactory = addressFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffTestingCartAddressService.prototype.update = /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        return of(this.cartFactory.create());
    };
    DaffTestingCartAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartAddressService.ctorParameters = function () { return [
        { type: DaffCartAddressFactory },
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartAddressService_Factory() { return new DaffTestingCartAddressService(i0.ɵɵinject(i1.DaffCartAddressFactory), i0.ɵɵinject(i1.DaffCartFactory)); }, token: DaffTestingCartAddressService, providedIn: "root" });
    return DaffTestingCartAddressService;
}());
export { DaffTestingCartAddressService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartAddressService.prototype.addressFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartAddressService.prototype.cartFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC1hZGRyZXNzL2NhcnQtYWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFFakY7SUFJRSx1Q0FDVSxjQUFzQyxFQUN0QyxXQUE0QjtRQUQ1QixtQkFBYyxHQUFkLGNBQWMsQ0FBd0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQ25DLENBQUM7Ozs7OztJQUVKLDhDQUFNOzs7OztJQUFOLFVBQU8sTUFBc0IsRUFBRSxPQUF3QjtRQUNyRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Z0JBWEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxzQkFBc0I7Z0JBQUUsZUFBZTs7O3dDQVJoRDtDQXNCQyxBQVpELElBWUM7U0FUWSw2QkFBNkI7Ozs7OztJQUV0Qyx1REFBOEM7Ozs7O0lBQzlDLG9EQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydEFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQge1xuICBEYWZmQ2FydEFkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3NGYWN0b3J5LCBEYWZmQ2FydEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY2FydC90ZXN0aW5nJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlRlc3RpbmdDYXJ0QWRkcmVzc1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydEFkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhZGRyZXNzRmFjdG9yeTogRGFmZkNhcnRBZGRyZXNzRmFjdG9yeSxcbiAgICBwcml2YXRlIGNhcnRGYWN0b3J5OiBEYWZmQ2FydEZhY3RvcnlcbiAgKSB7fVxuXG4gIHVwZGF0ZShjYXJ0SWQ6IERhZmZDYXJ0WydpZCddLCBhZGRyZXNzOiBEYWZmQ2FydEFkZHJlc3MpOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuY2FydEZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG59XG4iXX0=