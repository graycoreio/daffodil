/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffMagentoCartAddressInputTransformer } from './cart-address.service';
var DaffMagentoShippingAddressInputTransformer = /** @class */ (function () {
    function DaffMagentoShippingAddressInputTransformer(cartAddressTransformer) {
        this.cartAddressTransformer = cartAddressTransformer;
    }
    /**
     * @param {?} cartAddress
     * @return {?}
     */
    DaffMagentoShippingAddressInputTransformer.prototype.transform = /**
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
    DaffMagentoShippingAddressInputTransformer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffMagentoShippingAddressInputTransformer.ctorParameters = function () { return [
        { type: DaffMagentoCartAddressInputTransformer }
    ]; };
    return DaffMagentoShippingAddressInputTransformer;
}());
export { DaffMagentoShippingAddressInputTransformer };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoShippingAddressInputTransformer.prototype.cartAddressTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJ0cmFuc2Zvcm1zL2lucHV0cy9zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFaEY7SUFFRSxvREFBb0Isc0JBQThEO1FBQTlELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0M7SUFBRyxDQUFDOzs7OztJQUV0Riw4REFBUzs7OztJQUFULFVBQVUsV0FBcUM7UUFDN0MsT0FBTyxXQUFXLENBQUMsVUFBVTtZQUMzQixDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsbUJBQW1CLEVBQUUsV0FBVyxDQUFDLFVBQVU7YUFDNUM7WUFDRCxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO2dCQUMzRCxtQkFBbUIsRUFBRSxJQUFJO2FBQzFCLENBQUE7SUFDTCxDQUFDOztnQkFkRixVQUFVOzs7O2dCQUZGLHNDQUFzQzs7SUFpQi9DLGlEQUFDO0NBQUEsQUFmRCxJQWVDO1NBZFksMENBQTBDOzs7Ozs7SUFDekMsNEVBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmltcG9ydCB7IE1hZ2VudG9TaGlwcGluZ0FkZHJlc3NJbnB1dCB9IGZyb20gJy4uLy4uL21vZGVscy9yZXF1ZXN0cy9zaGlwcGluZy1hZGRyZXNzJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydEFkZHJlc3NJbnB1dFRyYW5zZm9ybWVyIH0gZnJvbSAnLi9jYXJ0LWFkZHJlc3Muc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b1NoaXBwaW5nQWRkcmVzc0lucHV0VHJhbnNmb3JtZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhcnRBZGRyZXNzVHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvQ2FydEFkZHJlc3NJbnB1dFRyYW5zZm9ybWVyKSB7fVxuXG4gIHRyYW5zZm9ybShjYXJ0QWRkcmVzczogUGFydGlhbDxEYWZmQ2FydEFkZHJlc3M+KTogTWFnZW50b1NoaXBwaW5nQWRkcmVzc0lucHV0IHtcbiAgICByZXR1cm4gY2FydEFkZHJlc3MuYWRkcmVzc19pZFxuICAgICAgPyB7XG4gICAgICAgIGFkZHJlc3M6IG51bGwsXG4gICAgICAgIGN1c3RvbWVyX2FkZHJlc3NfaWQ6IGNhcnRBZGRyZXNzLmFkZHJlc3NfaWQsXG4gICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgYWRkcmVzczogdGhpcy5jYXJ0QWRkcmVzc1RyYW5zZm9ybWVyLnRyYW5zZm9ybShjYXJ0QWRkcmVzcyksXG4gICAgICAgIGN1c3RvbWVyX2FkZHJlc3NfaWQ6IG51bGwsXG4gICAgICB9XG4gIH1cbn1cbiJdfQ==