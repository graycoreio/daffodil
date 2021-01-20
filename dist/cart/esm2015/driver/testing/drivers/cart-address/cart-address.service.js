/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartAddressFactory, DaffCartFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
export class DaffTestingCartAddressService {
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
     * @param {?} address
     * @return {?}
     */
    update(cartId, address) {
        return of(this.cartFactory.create());
    }
}
DaffTestingCartAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartAddressService.ctorParameters = () => [
    { type: DaffCartAddressFactory },
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffTestingCartAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartAddressService_Factory() { return new DaffTestingCartAddressService(i0.ɵɵinject(i1.DaffCartAddressFactory), i0.ɵɵinject(i1.DaffCartFactory)); }, token: DaffTestingCartAddressService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC1hZGRyZXNzL2NhcnQtYWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFLakYsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7SUFDeEMsWUFDVSxjQUFzQyxFQUN0QyxXQUE0QjtRQUQ1QixtQkFBYyxHQUFkLGNBQWMsQ0FBd0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQ25DLENBQUM7Ozs7OztJQUVKLE1BQU0sQ0FBQyxNQUFzQixFQUFFLE9BQXdCO1FBQ3JELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUFYRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxzQkFBc0I7WUFBRSxlQUFlOzs7Ozs7OztJQU81Qyx1REFBOEM7Ozs7O0lBQzlDLG9EQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydEFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQge1xuICBEYWZmQ2FydEFkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3NGYWN0b3J5LCBEYWZmQ2FydEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY2FydC90ZXN0aW5nJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlRlc3RpbmdDYXJ0QWRkcmVzc1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydEFkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhZGRyZXNzRmFjdG9yeTogRGFmZkNhcnRBZGRyZXNzRmFjdG9yeSxcbiAgICBwcml2YXRlIGNhcnRGYWN0b3J5OiBEYWZmQ2FydEZhY3RvcnlcbiAgKSB7fVxuXG4gIHVwZGF0ZShjYXJ0SWQ6IERhZmZDYXJ0WydpZCddLCBhZGRyZXNzOiBEYWZmQ2FydEFkZHJlc3MpOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuY2FydEZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG59XG4iXX0=