/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockMagentoCartAddress } from './cart-address.factory';
import * as i0 from "@angular/core";
export class MockMagentoShippingAddress extends MockMagentoCartAddress {
    constructor() {
        super(...arguments);
        this.__typename = 'ShippingCartAddress';
        this.available_shipping_methods = [];
        this.selected_shipping_method = null;
    }
}
if (false) {
    /** @type {?} */
    MockMagentoShippingAddress.prototype.__typename;
    /** @type {?} */
    MockMagentoShippingAddress.prototype.available_shipping_methods;
    /** @type {?} */
    MockMagentoShippingAddress.prototype.selected_shipping_method;
}
export class MagentoShippingAddressFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoShippingAddress);
    }
}
MagentoShippingAddressFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoShippingAddressFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoShippingAddressFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoShippingAddressFactory_Factory() { return new MagentoShippingAddressFactory(); }, token: MagentoShippingAddressFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9zaGlwcGluZy1hZGRyZXNzLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRWhFLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxzQkFBc0I7SUFBdEU7O1FBQ0MsZUFBVSxHQUFHLHFCQUFxQixDQUFDO1FBQ2xDLCtCQUEwQixHQUFHLEVBQUUsQ0FBQztRQUNoQyw2QkFBd0IsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztDQUFBOzs7SUFIQSxnREFBbUM7O0lBQ2xDLGdFQUFnQzs7SUFDaEMsOERBQWdDOztBQU1sQyxNQUFNLE9BQU8sNkJBQThCLFNBQVEsZ0JBQXdDO0lBQ3pGO1FBQ0UsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBTkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYWdlbnRvU2hpcHBpbmdBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8nO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBNb2NrTWFnZW50b0NhcnRBZGRyZXNzIH0gZnJvbSAnLi9jYXJ0LWFkZHJlc3MuZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrTWFnZW50b1NoaXBwaW5nQWRkcmVzcyBleHRlbmRzIE1vY2tNYWdlbnRvQ2FydEFkZHJlc3MgaW1wbGVtZW50cyBNYWdlbnRvU2hpcHBpbmdBZGRyZXNzIHtcblx0X190eXBlbmFtZSA9ICdTaGlwcGluZ0NhcnRBZGRyZXNzJztcbiAgYXZhaWxhYmxlX3NoaXBwaW5nX21ldGhvZHMgPSBbXTtcbiAgc2VsZWN0ZWRfc2hpcHBpbmdfbWV0aG9kID0gbnVsbDtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWFnZW50b1NoaXBwaW5nQWRkcmVzc0ZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PE1hZ2VudG9TaGlwcGluZ0FkZHJlc3M+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja01hZ2VudG9TaGlwcGluZ0FkZHJlc3MpO1xuICB9XG59XG4iXX0=