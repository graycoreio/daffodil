/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { listShippingMethods } from './queries/public_api';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "./injection-tokens/fragments/cart";
import * as i3 from "./transforms/outputs/cart-shipping-rate.service";
/**
 * A service for making Magento GraphQL queries for carts' shipping methods.
 */
var DaffMagentoCartShippingMethodsService = /** @class */ (function () {
    function DaffMagentoCartShippingMethodsService(apollo, extraCartFragments, shippingRateTransformer) {
        this.apollo = apollo;
        this.extraCartFragments = extraCartFragments;
        this.shippingRateTransformer = shippingRateTransformer;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartShippingMethodsService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.apollo.query({
            query: listShippingMethods(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.cart.shipping_addresses[0].available_shipping_methods.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return _this.shippingRateTransformer.transform(item);
        })); })));
    };
    DaffMagentoCartShippingMethodsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartShippingMethodsService.ctorParameters = function () { return [
        { type: Apollo },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
        { type: DaffMagentoCartShippingRateTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartShippingMethodsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingMethodsService_Factory() { return new DaffMagentoCartShippingMethodsService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), i0.ɵɵinject(i3.DaffMagentoCartShippingRateTransformer)); }, token: DaffMagentoCartShippingMethodsService, providedIn: "root" });
    return DaffMagentoCartShippingMethodsService;
}());
export { DaffMagentoCartShippingMethodsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartShippingMethodsService.prototype.apollo;
    /** @type {?} */
    DaffMagentoCartShippingMethodsService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartShippingMethodsService.prototype.shippingRateTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1tZXRob2RzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbImNhcnQtc2hpcHBpbmctbWV0aG9kcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3JDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNELE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7OztBQUt2RjtJQUlFLCtDQUNVLE1BQWMsRUFDaUMsa0JBQWtDLEVBQ2xGLHVCQUErRDtRQUY5RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2lDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBZ0I7UUFDbEYsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF3QztJQUNyRSxDQUFDOzs7OztJQUVKLG9EQUFJOzs7O0lBQUosVUFBSyxNQUFjO1FBQW5CLGlCQVNDO1FBUkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBcUM7WUFDM0QsS0FBSyxFQUFFLG1CQUFtQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNuRCxTQUFTLEVBQUUsRUFBQyxNQUFNLFFBQUEsRUFBQztTQUNwQixDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUk7WUFDdEYsT0FBQSxLQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUE1QyxDQUE0QyxFQUM3QyxFQUZhLENBRWIsRUFBQyxDQUNILENBQUE7SUFDSCxDQUFDOztnQkFuQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFsQlEsTUFBTTs0Q0FzQlYsTUFBTSxTQUFDLHNDQUFzQztnQkFaekMsc0NBQXNDOzs7Z0RBWC9DO0NBcUNDLEFBcEJELElBb0JDO1NBakJZLHFDQUFxQzs7Ozs7O0lBRTlDLHVEQUFzQjs7SUFDdEIsbUVBQXlGOztJQUN6Rix3RUFBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nUmF0ZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZDYXJ0U2hpcHBpbmdNZXRob2RzU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7IGxpc3RTaGlwcGluZ01ldGhvZHMgfSBmcm9tICcuL3F1ZXJpZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBNYWdlbnRvTGlzdFNoaXBwaW5nTWV0aG9kc1Jlc3BvbnNlIH0gZnJvbSAnLi9xdWVyaWVzL3Jlc3BvbnNlcy9saXN0LXNoaXBwaW5nLW1ldGhvZHMnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdSYXRlVHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LXNoaXBwaW5nLXJhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBEQUZGX0NBUlRfTUFHRU5UT19FWFRSQV9DQVJUX0ZSQUdNRU5UUyB9IGZyb20gJy4vaW5qZWN0aW9uLXRva2Vucy9wdWJsaWNfYXBpJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIG1ha2luZyBNYWdlbnRvIEdyYXBoUUwgcXVlcmllcyBmb3IgY2FydHMnIHNoaXBwaW5nIG1ldGhvZHMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQ2FydFNoaXBwaW5nTWV0aG9kc1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc1NlcnZpY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvLFxuICAgIEBJbmplY3QoREFGRl9DQVJUX01BR0VOVE9fRVhUUkFfQ0FSVF9GUkFHTUVOVFMpIHB1YmxpYyBleHRyYUNhcnRGcmFnbWVudHM6IERvY3VtZW50Tm9kZVtdLFxuICAgIHB1YmxpYyBzaGlwcGluZ1JhdGVUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdSYXRlVHJhbnNmb3JtZXJcbiAgKSB7fVxuXG4gIGxpc3QoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhZmZDYXJ0U2hpcHBpbmdSYXRlW10+IHtcbiAgICByZXR1cm4gdGhpcy5hcG9sbG8ucXVlcnk8TWFnZW50b0xpc3RTaGlwcGluZ01ldGhvZHNSZXNwb25zZT4oe1xuICAgICAgcXVlcnk6IGxpc3RTaGlwcGluZ01ldGhvZHModGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7Y2FydElkfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5kYXRhLmNhcnQuc2hpcHBpbmdfYWRkcmVzc2VzWzBdLmF2YWlsYWJsZV9zaGlwcGluZ19tZXRob2RzLm1hcChpdGVtID0+XG4gICAgICAgIHRoaXMuc2hpcHBpbmdSYXRlVHJhbnNmb3JtZXIudHJhbnNmb3JtKGl0ZW0pXG4gICAgICApKVxuICAgIClcbiAgfVxufVxuIl19