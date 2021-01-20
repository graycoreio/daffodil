/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import * as i0 from "@angular/core";
var DaffInMemoryBackendCartBillingAddressService = /** @class */ (function () {
    function DaffInMemoryBackendCartBillingAddressService() {
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartBillingAddressService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.getBillingAddress(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartBillingAddressService.prototype.put = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.updateBillingAddress(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartBillingAddressService.prototype.getCart = /**
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
    DaffInMemoryBackendCartBillingAddressService.prototype.getBillingAddress = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.getCart(reqInfo).billing_address;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartBillingAddressService.prototype.updateBillingAddress = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        /** @type {?} */
        var address = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.billing_address = address;
        return cart;
    };
    DaffInMemoryBackendCartBillingAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendCartBillingAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartBillingAddressService_Factory() { return new DaffInMemoryBackendCartBillingAddressService(); }, token: DaffInMemoryBackendCartBillingAddressService, providedIn: "root" });
    return DaffInMemoryBackendCartBillingAddressService;
}());
export { DaffInMemoryBackendCartBillingAddressService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1iaWxsaW5nLWFkZHJlc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9pbi1tZW1vcnkvIiwic291cmNlcyI6WyJiYWNrZW5kL2NhcnQtYmlsbGluZy1hZGRyZXNzL2NhcnQtYmlsbGluZy1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLDJCQUEyQixDQUFDOztBQVFoRTtJQUFBO0tBa0NDOzs7OztJQTlCQywwREFBRzs7OztJQUFILFVBQUksT0FBb0I7UUFBeEIsaUJBS0M7UUFKQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUMsY0FBTSxPQUFBLENBQUM7WUFDMUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7WUFDckMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFIeUMsQ0FHekMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCwwREFBRzs7OztJQUFILFVBQUksT0FBb0I7UUFBeEIsaUJBS0M7UUFKQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUMsY0FBTSxPQUFBLENBQUM7WUFDMUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7WUFDeEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFIeUMsQ0FHekMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRU8sOERBQU87Ozs7O0lBQWYsVUFBZ0IsT0FBb0I7UUFDbEMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBVyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNqRixDQUFDOzs7Ozs7SUFFTyx3RUFBaUI7Ozs7O0lBQXpCLFVBQTBCLE9BQU87UUFDL0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7SUFFTywyRUFBb0I7Ozs7O0lBQTVCLFVBQTZCLE9BQW9COztZQUN6QyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7O1lBQzVCLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRXhELElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBRTdCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBakNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozt1REFYRDtDQTJDQyxBQWxDRCxJQWtDQztTQS9CWSw0Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTVEFUVVMsIFJlcXVlc3RJbmZvIH0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XG5cbmltcG9ydCB7XG4gIERhZmZDYXJ0LFxuICBEYWZmQ2FydEFkZHJlc3MsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZJbk1lbW9yeURhdGFTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkluTWVtb3J5RGF0YVNlcnZpY2VJbnRlcmZhY2Uge1xuICBnZXQocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gKHtcbiAgICAgIGJvZHk6IHRoaXMuZ2V0QmlsbGluZ0FkZHJlc3MocmVxSW5mbyksXG4gICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgIH0pKTtcbiAgfVxuXG4gIHB1dChyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keTogdGhpcy51cGRhdGVCaWxsaW5nQWRkcmVzcyhyZXFJbmZvKSxcbiAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYXJ0KHJlcUluZm86IFJlcXVlc3RJbmZvKTogRGFmZkNhcnQge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmZpbmRCeUlkPERhZmZDYXJ0PihyZXFJbmZvLmNvbGxlY3Rpb24sIE51bWJlcihyZXFJbmZvLmlkKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QmlsbGluZ0FkZHJlc3MocmVxSW5mbyk6IERhZmZDYXJ0QWRkcmVzcyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2FydChyZXFJbmZvKS5iaWxsaW5nX2FkZHJlc3M7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUJpbGxpbmdBZGRyZXNzKHJlcUluZm86IFJlcXVlc3RJbmZvKTogRGFmZkNhcnQge1xuICAgIGNvbnN0IGNhcnQgPSB0aGlzLmdldENhcnQocmVxSW5mbyk7XG4gICAgY29uc3QgYWRkcmVzcyA9IHJlcUluZm8udXRpbHMuZ2V0SnNvbkJvZHkocmVxSW5mby5yZXEpO1xuXG5cdFx0Y2FydC5iaWxsaW5nX2FkZHJlc3MgPSBhZGRyZXNzO1xuXG4gICAgcmV0dXJuIGNhcnQ7XG4gIH1cbn1cbiJdfQ==