/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import * as i0 from "@angular/core";
var DaffInMemoryBackendCartShippingAddressService = /** @class */ (function () {
    function DaffInMemoryBackendCartShippingAddressService() {
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingAddressService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.getShippingAddress(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingAddressService.prototype.put = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.updateShippingAddress(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingAddressService.prototype.getCart = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingAddressService.prototype.getShippingAddress = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.getCart(reqInfo).shipping_address;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingAddressService.prototype.updateShippingAddress = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        /** @type {?} */
        var address = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.shipping_address = address;
        return cart;
    };
    DaffInMemoryBackendCartShippingAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendCartShippingAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartShippingAddressService_Factory() { return new DaffInMemoryBackendCartShippingAddressService(); }, token: DaffInMemoryBackendCartShippingAddressService, providedIn: "root" });
    return DaffInMemoryBackendCartShippingAddressService;
}());
export { DaffInMemoryBackendCartShippingAddressService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiYmFja2VuZC9jYXJ0LXNoaXBwaW5nLWFkZHJlc3MvY2FydC1zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLDJCQUEyQixDQUFDOztBQVFoRTtJQUFBO0tBa0NDOzs7OztJQTlCQywyREFBRzs7OztJQUFILFVBQUksT0FBb0I7UUFBeEIsaUJBS0M7UUFKQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUMsY0FBTSxPQUFBLENBQUM7WUFDMUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDdEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFIeUMsQ0FHekMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCwyREFBRzs7OztJQUFILFVBQUksT0FBb0I7UUFBeEIsaUJBS0M7UUFKQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUMsY0FBTSxPQUFBLENBQUM7WUFDMUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUM7WUFDekMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFIeUMsQ0FHekMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRU8sK0RBQU87Ozs7O0lBQWYsVUFBZ0IsT0FBb0I7UUFDbEMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBVyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNqRixDQUFDOzs7Ozs7SUFFTywwRUFBa0I7Ozs7O0lBQTFCLFVBQTJCLE9BQU87UUFDaEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0lBQ2hELENBQUM7Ozs7OztJQUVPLDZFQUFxQjs7Ozs7SUFBN0IsVUFBOEIsT0FBb0I7O1lBQzFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzs7WUFDNUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFFeEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztRQUU5QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O2dCQWpDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7d0RBWEQ7Q0EyQ0MsQUFsQ0QsSUFrQ0M7U0EvQlksNkNBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU1RBVFVTLCBSZXF1ZXN0SW5mbyB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuXG5pbXBvcnQge1xuICBEYWZmQ2FydCxcbiAgRGFmZkNhcnRBZGRyZXNzLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB7XG4gIGdldChyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keTogdGhpcy5nZXRTaGlwcGluZ0FkZHJlc3MocmVxSW5mbyksXG4gICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgIH0pKTtcbiAgfVxuXG4gIHB1dChyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keTogdGhpcy51cGRhdGVTaGlwcGluZ0FkZHJlc3MocmVxSW5mbyksXG4gICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FydChyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IERhZmZDYXJ0IHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5maW5kQnlJZDxEYWZmQ2FydD4ocmVxSW5mby5jb2xsZWN0aW9uLCBOdW1iZXIocmVxSW5mby5pZCkpXG4gIH1cblxuICBwcml2YXRlIGdldFNoaXBwaW5nQWRkcmVzcyhyZXFJbmZvKTogRGFmZkNhcnRBZGRyZXNzIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDYXJ0KHJlcUluZm8pLnNoaXBwaW5nX2FkZHJlc3M7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNoaXBwaW5nQWRkcmVzcyhyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IERhZmZDYXJ0IHtcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KHJlcUluZm8pO1xuICAgIGNvbnN0IGFkZHJlc3MgPSByZXFJbmZvLnV0aWxzLmdldEpzb25Cb2R5KHJlcUluZm8ucmVxKTtcblxuXHRcdGNhcnQuc2hpcHBpbmdfYWRkcmVzcyA9IGFkZHJlc3M7XG5cbiAgICByZXR1cm4gY2FydDtcbiAgfVxufVxuIl19