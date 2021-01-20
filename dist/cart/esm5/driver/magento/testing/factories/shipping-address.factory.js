/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockMagentoCartAddress } from './cart-address.factory';
import * as i0 from "@angular/core";
var MockMagentoShippingAddress = /** @class */ (function (_super) {
    tslib_1.__extends(MockMagentoShippingAddress, _super);
    function MockMagentoShippingAddress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__typename = 'ShippingCartAddress';
        _this.available_shipping_methods = [];
        _this.selected_shipping_method = null;
        return _this;
    }
    return MockMagentoShippingAddress;
}(MockMagentoCartAddress));
export { MockMagentoShippingAddress };
if (false) {
    /** @type {?} */
    MockMagentoShippingAddress.prototype.__typename;
    /** @type {?} */
    MockMagentoShippingAddress.prototype.available_shipping_methods;
    /** @type {?} */
    MockMagentoShippingAddress.prototype.selected_shipping_method;
}
var MagentoShippingAddressFactory = /** @class */ (function (_super) {
    tslib_1.__extends(MagentoShippingAddressFactory, _super);
    function MagentoShippingAddressFactory() {
        return _super.call(this, MockMagentoShippingAddress) || this;
    }
    MagentoShippingAddressFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoShippingAddressFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoShippingAddressFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoShippingAddressFactory_Factory() { return new MagentoShippingAddressFactory(); }, token: MagentoShippingAddressFactory, providedIn: "root" });
    return MagentoShippingAddressFactory;
}(DaffModelFactory));
export { MagentoShippingAddressFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9zaGlwcGluZy1hZGRyZXNzLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUVoRTtJQUFnRCxzREFBc0I7SUFBdEU7UUFBQSxxRUFJQztRQUhBLGdCQUFVLEdBQUcscUJBQXFCLENBQUM7UUFDbEMsZ0NBQTBCLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLDhCQUF3QixHQUFHLElBQUksQ0FBQzs7SUFDbEMsQ0FBQztJQUFELGlDQUFDO0FBQUQsQ0FBQyxBQUpELENBQWdELHNCQUFzQixHQUlyRTs7OztJQUhBLGdEQUFtQzs7SUFDbEMsZ0VBQWdDOztJQUNoQyw4REFBZ0M7O0FBR2xDO0lBR21ELHlEQUF3QztJQUN6RjtlQUNFLGtCQUFNLDBCQUEwQixDQUFDO0lBQ25DLENBQUM7O2dCQU5GLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3dDQWZEO0NBb0JDLEFBUEQsQ0FHbUQsZ0JBQWdCLEdBSWxFO1NBSlksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYWdlbnRvU2hpcHBpbmdBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8nO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBNb2NrTWFnZW50b0NhcnRBZGRyZXNzIH0gZnJvbSAnLi9jYXJ0LWFkZHJlc3MuZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrTWFnZW50b1NoaXBwaW5nQWRkcmVzcyBleHRlbmRzIE1vY2tNYWdlbnRvQ2FydEFkZHJlc3MgaW1wbGVtZW50cyBNYWdlbnRvU2hpcHBpbmdBZGRyZXNzIHtcblx0X190eXBlbmFtZSA9ICdTaGlwcGluZ0NhcnRBZGRyZXNzJztcbiAgYXZhaWxhYmxlX3NoaXBwaW5nX21ldGhvZHMgPSBbXTtcbiAgc2VsZWN0ZWRfc2hpcHBpbmdfbWV0aG9kID0gbnVsbDtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWFnZW50b1NoaXBwaW5nQWRkcmVzc0ZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PE1hZ2VudG9TaGlwcGluZ0FkZHJlc3M+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja01hZ2VudG9TaGlwcGluZ0FkZHJlc3MpO1xuICB9XG59XG4iXX0=