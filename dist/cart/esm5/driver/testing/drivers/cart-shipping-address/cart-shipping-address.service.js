/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartAddressFactory, DaffCartFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
var DaffTestingCartShippingAddressService = /** @class */ (function () {
    function DaffTestingCartShippingAddressService(addressFactory, cartFactory) {
        this.addressFactory = addressFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartShippingAddressService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.addressFactory.create());
    };
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffTestingCartShippingAddressService.prototype.update = /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        return of(this.cartFactory.create());
    };
    DaffTestingCartShippingAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartShippingAddressService.ctorParameters = function () { return [
        { type: DaffCartAddressFactory },
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartShippingAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartShippingAddressService_Factory() { return new DaffTestingCartShippingAddressService(i0.ɵɵinject(i1.DaffCartAddressFactory), i0.ɵɵinject(i1.DaffCartFactory)); }, token: DaffTestingCartShippingAddressService, providedIn: "root" });
    return DaffTestingCartShippingAddressService;
}());
export { DaffTestingCartShippingAddressService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC1zaGlwcGluZy1hZGRyZXNzL2NhcnQtc2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFFakY7SUFJRSwrQ0FDVSxjQUFzQyxFQUN0QyxXQUE0QjtRQUQ1QixtQkFBYyxHQUFkLGNBQWMsQ0FBd0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQ25DLENBQUM7Ozs7O0lBRUosbURBQUc7Ozs7SUFBSCxVQUFJLE1BQXNCO1FBQ3hCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFFRCxzREFBTTs7Ozs7SUFBTixVQUFPLE1BQXNCLEVBQUUsT0FBd0I7UUFDckQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O2dCQWZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsc0JBQXNCO2dCQUFFLGVBQWU7OztnREFSaEQ7Q0EwQkMsQUFoQkQsSUFnQkM7U0FiWSxxQ0FBcUM7Ozs7OztJQUU5QywrREFBOEM7Ozs7O0lBQzlDLDREQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydEFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQge1xuICBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZDYXJ0QWRkcmVzc0ZhY3RvcnksIERhZmZDYXJ0RmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L3Rlc3RpbmcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmVGVzdGluZ0NhcnRTaGlwcGluZ0FkZHJlc3NTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhZGRyZXNzRmFjdG9yeTogRGFmZkNhcnRBZGRyZXNzRmFjdG9yeSxcbiAgICBwcml2YXRlIGNhcnRGYWN0b3J5OiBEYWZmQ2FydEZhY3RvcnlcbiAgKSB7fVxuXG4gIGdldChjYXJ0SWQ6IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTxEYWZmQ2FydEFkZHJlc3M+IHtcbiAgICByZXR1cm4gb2YodGhpcy5hZGRyZXNzRmFjdG9yeS5jcmVhdGUoKSk7XG4gIH1cblxuICB1cGRhdGUoY2FydElkOiBEYWZmQ2FydFsnaWQnXSwgYWRkcmVzczogRGFmZkNhcnRBZGRyZXNzKTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiBvZih0aGlzLmNhcnRGYWN0b3J5LmNyZWF0ZSgpKTtcbiAgfVxufVxuIl19