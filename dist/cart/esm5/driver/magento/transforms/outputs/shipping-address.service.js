/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DaffMagentoCartAddressTransformer } from './cart-address.service';
import * as i0 from "@angular/core";
import * as i1 from "./cart-address.service";
/**
 * Transforms magento addresses into an object usable by daffodil.
 */
var DaffMagentoShippingAddressTransformer = /** @class */ (function () {
    function DaffMagentoShippingAddressTransformer(addressTransformer) {
        this.addressTransformer = addressTransformer;
    }
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param address the address from a magento cart query.
     */
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param {?} address the address from a magento cart query.
     * @return {?}
     */
    DaffMagentoShippingAddressTransformer.prototype.transform = /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param {?} address the address from a magento cart query.
     * @return {?}
     */
    function (address) {
        return address ? tslib_1.__assign({}, this.addressTransformer.transform(address), { address_type: 'shipping' }) : null;
    };
    DaffMagentoShippingAddressTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoShippingAddressTransformer.ctorParameters = function () { return [
        { type: DaffMagentoCartAddressTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoShippingAddressTransformer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoShippingAddressTransformer_Factory() { return new DaffMagentoShippingAddressTransformer(i0.ɵɵinject(i1.DaffMagentoCartAddressTransformer)); }, token: DaffMagentoShippingAddressTransformer, providedIn: "root" });
    return DaffMagentoShippingAddressTransformer;
}());
export { DaffMagentoShippingAddressTransformer };
if (false) {
    /** @type {?} */
    DaffMagentoShippingAddressTransformer.prototype.addressTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJ0cmFuc2Zvcm1zL291dHB1dHMvc2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7O0FBTTNFO0lBSUUsK0NBQW9CLGtCQUFxRDtRQUFyRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1DO0lBQUcsQ0FBQztJQUU3RTs7O09BR0c7Ozs7OztJQUNILHlEQUFTOzs7OztJQUFULFVBQVUsT0FBK0I7UUFDdkMsT0FBTyxPQUFPLENBQUMsQ0FBQyxzQkFDWCxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUM3QyxZQUFZLEVBQUUsVUFBVSxJQUN4QixDQUFDLENBQUMsSUFBSSxDQUFBO0lBQ1YsQ0FBQzs7Z0JBZkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFSUSxpQ0FBaUM7OztnREFKMUM7Q0EwQkMsQUFoQkQsSUFnQkM7U0FiWSxxQ0FBcUM7OztJQUNuQyxtRUFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZDYXJ0QWRkcmVzcyB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0QWRkcmVzc1RyYW5zZm9ybWVyIH0gZnJvbSAnLi9jYXJ0LWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBNYWdlbnRvU2hpcHBpbmdBZGRyZXNzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlcy9zaGlwcGluZy1hZGRyZXNzJztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIG1hZ2VudG8gYWRkcmVzc2VzIGludG8gYW4gb2JqZWN0IHVzYWJsZSBieSBkYWZmb2RpbC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9TaGlwcGluZ0FkZHJlc3NUcmFuc2Zvcm1lciB7XG4gIGNvbnN0cnVjdG9yIChwdWJsaWMgYWRkcmVzc1RyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0NhcnRBZGRyZXNzVHJhbnNmb3JtZXIpIHt9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIG1hZ2VudG8gTWFnZW50b0NhcnQgZnJvbSB0aGUgbWFnZW50byBjYXJ0IHF1ZXJ5IGludG8gYSBEYWZmQ2FydEFkZHJlc3MuXG4gICAqIEBwYXJhbSBhZGRyZXNzIHRoZSBhZGRyZXNzIGZyb20gYSBtYWdlbnRvIGNhcnQgcXVlcnkuXG4gICAqL1xuICB0cmFuc2Zvcm0oYWRkcmVzczogTWFnZW50b1NoaXBwaW5nQWRkcmVzcyk6IERhZmZDYXJ0QWRkcmVzcyB7XG4gICAgcmV0dXJuIGFkZHJlc3MgPyB7XG4gICAgICAuLi50aGlzLmFkZHJlc3NUcmFuc2Zvcm1lci50cmFuc2Zvcm0oYWRkcmVzcyksXG4gICAgICBhZGRyZXNzX3R5cGU6ICdzaGlwcGluZycsXG4gICAgfSA6IG51bGxcbiAgfVxufVxuIl19