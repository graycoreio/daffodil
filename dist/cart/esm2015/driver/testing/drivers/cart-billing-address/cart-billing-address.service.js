/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartAddressFactory, DaffCartFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
export class DaffTestingCartBillingAddressService {
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
DaffTestingCartBillingAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartBillingAddressService.ctorParameters = () => [
    { type: DaffCartAddressFactory },
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffTestingCartBillingAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartBillingAddressService_Factory() { return new DaffTestingCartBillingAddressService(i0.ɵɵinject(i1.DaffCartAddressFactory), i0.ɵɵinject(i1.DaffCartFactory)); }, token: DaffTestingCartBillingAddressService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartBillingAddressService.prototype.addressFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartBillingAddressService.prototype.cartFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1iaWxsaW5nLWFkZHJlc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy9jYXJ0LWJpbGxpbmctYWRkcmVzcy9jYXJ0LWJpbGxpbmctYWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFLakYsTUFBTSxPQUFPLG9DQUFvQzs7Ozs7SUFDL0MsWUFDVSxjQUFzQyxFQUN0QyxXQUE0QjtRQUQ1QixtQkFBYyxHQUFkLGNBQWMsQ0FBd0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQ25DLENBQUM7Ozs7O0lBRUosR0FBRyxDQUFDLE1BQXNCO1FBQ3hCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBc0IsRUFBRSxPQUF3QjtRQUNyRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBZkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsc0JBQXNCO1lBQUUsZUFBZTs7Ozs7Ozs7SUFPNUMsOERBQThDOzs7OztJQUM5QywyREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHtcbiAgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc1NlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZDYXJ0QWRkcmVzc0ZhY3RvcnksIERhZmZDYXJ0RmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L3Rlc3RpbmcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmVGVzdGluZ0NhcnRCaWxsaW5nQWRkcmVzc1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzU2VydmljZUludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWRkcmVzc0ZhY3Rvcnk6IERhZmZDYXJ0QWRkcmVzc0ZhY3RvcnksXG4gICAgcHJpdmF0ZSBjYXJ0RmFjdG9yeTogRGFmZkNhcnRGYWN0b3J5XG4gICkge31cblxuICBnZXQoY2FydElkOiBEYWZmQ2FydFsnaWQnXSk6IE9ic2VydmFibGU8RGFmZkNhcnRBZGRyZXNzPiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuYWRkcmVzc0ZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG5cbiAgdXBkYXRlKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIGFkZHJlc3M6IERhZmZDYXJ0QWRkcmVzcyk6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gb2YodGhpcy5jYXJ0RmFjdG9yeS5jcmVhdGUoKSk7XG4gIH1cbn1cbiJdfQ==