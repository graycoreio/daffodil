/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffMagentoCartAddressInputTransformer } from './cart-address.service';
var DaffMagentoBillingAddressInputTransformer = /** @class */ (function () {
    function DaffMagentoBillingAddressInputTransformer(cartAddressTransformer) {
        this.cartAddressTransformer = cartAddressTransformer;
    }
    /**
     * @param {?} cartAddress
     * @return {?}
     */
    DaffMagentoBillingAddressInputTransformer.prototype.transform = /**
     * @param {?} cartAddress
     * @return {?}
     */
    function (cartAddress) {
        return cartAddress.address_id
            ? {
                address: null,
                customer_address_id: cartAddress.address_id,
            }
            : {
                address: this.cartAddressTransformer.transform(cartAddress),
                customer_address_id: null,
            };
    };
    DaffMagentoBillingAddressInputTransformer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffMagentoBillingAddressInputTransformer.ctorParameters = function () { return [
        { type: DaffMagentoCartAddressInputTransformer }
    ]; };
    return DaffMagentoBillingAddressInputTransformer;
}());
export { DaffMagentoBillingAddressInputTransformer };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoBillingAddressInputTransformer.prototype.cartAddressTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInRyYW5zZm9ybXMvaW5wdXRzL2JpbGxpbmctYWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWhGO0lBRUUsbURBQW9CLHNCQUE4RDtRQUE5RCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdDO0lBQUcsQ0FBQzs7Ozs7SUFFdEYsNkRBQVM7Ozs7SUFBVCxVQUFVLFdBQXFDO1FBQzdDLE9BQU8sV0FBVyxDQUFDLFVBQVU7WUFDM0IsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyxVQUFVO2FBQzVDO1lBQ0QsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztnQkFDM0QsbUJBQW1CLEVBQUUsSUFBSTthQUMxQixDQUFBO0lBQ0wsQ0FBQzs7Z0JBZEYsVUFBVTs7OztnQkFGRixzQ0FBc0M7O0lBaUIvQyxnREFBQztDQUFBLEFBZkQsSUFlQztTQWRZLHlDQUF5Qzs7Ozs7O0lBQ3hDLDJFQUFzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkNhcnRBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5pbXBvcnQgeyBNYWdlbnRvQmlsbGluZ0FkZHJlc3NJbnB1dCB9IGZyb20gJy4uLy4uL21vZGVscy9yZXF1ZXN0cy9iaWxsaW5nLWFkZHJlc3MnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0QWRkcmVzc0lucHV0VHJhbnNmb3JtZXIgfSBmcm9tICcuL2NhcnQtYWRkcmVzcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQmlsbGluZ0FkZHJlc3NJbnB1dFRyYW5zZm9ybWVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJ0QWRkcmVzc1RyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0NhcnRBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lcikge31cblxuICB0cmFuc2Zvcm0oY2FydEFkZHJlc3M6IFBhcnRpYWw8RGFmZkNhcnRBZGRyZXNzPik6IE1hZ2VudG9CaWxsaW5nQWRkcmVzc0lucHV0IHtcbiAgICByZXR1cm4gY2FydEFkZHJlc3MuYWRkcmVzc19pZFxuICAgICAgPyB7XG4gICAgICAgIGFkZHJlc3M6IG51bGwsXG4gICAgICAgIGN1c3RvbWVyX2FkZHJlc3NfaWQ6IGNhcnRBZGRyZXNzLmFkZHJlc3NfaWQsXG4gICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgYWRkcmVzczogdGhpcy5jYXJ0QWRkcmVzc1RyYW5zZm9ybWVyLnRyYW5zZm9ybShjYXJ0QWRkcmVzcyksXG4gICAgICAgIGN1c3RvbWVyX2FkZHJlc3NfaWQ6IG51bGwsXG4gICAgICB9XG4gIH1cbn1cbiJdfQ==