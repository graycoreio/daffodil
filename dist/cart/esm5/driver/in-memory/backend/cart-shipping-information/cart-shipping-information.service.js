/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import * as i0 from "@angular/core";
var DaffInMemoryBackendCartShippingInformationService = /** @class */ (function () {
    function DaffInMemoryBackendCartShippingInformationService() {
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingInformationService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.getShippingInformation(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingInformationService.prototype.put = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.updateShippingInformation(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingInformationService.prototype.delete = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.removeShippingInformation(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingInformationService.prototype.getCart = /**
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
    DaffInMemoryBackendCartShippingInformationService.prototype.getShippingInformation = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.getCart(reqInfo).shipping_information;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingInformationService.prototype.updateShippingInformation = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        /** @type {?} */
        var shippingInformation = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.shipping_information = shippingInformation;
        return cart;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingInformationService.prototype.removeShippingInformation = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        cart.shipping_information = null;
        return cart;
    };
    DaffInMemoryBackendCartShippingInformationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendCartShippingInformationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartShippingInformationService_Factory() { return new DaffInMemoryBackendCartShippingInformationService(); }, token: DaffInMemoryBackendCartShippingInformationService, providedIn: "root" });
    return DaffInMemoryBackendCartShippingInformationService;
}());
export { DaffInMemoryBackendCartShippingInformationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImJhY2tlbmQvY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi9jYXJ0LXNoaXBwaW5nLWluZm9ybWF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLDJCQUEyQixDQUFDOztBQVFoRTtJQUFBO0tBaURDOzs7OztJQTdDQywrREFBRzs7OztJQUFILFVBQUksT0FBb0I7UUFBeEIsaUJBS0M7UUFKQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUMsY0FBTSxPQUFBLENBQUM7WUFDMUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7WUFDMUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFIeUMsQ0FHekMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCwrREFBRzs7OztJQUFILFVBQUksT0FBb0I7UUFBeEIsaUJBS0M7UUFKQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUMsY0FBTSxPQUFBLENBQUM7WUFDMUMsSUFBSSxFQUFFLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUM7WUFDN0MsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFIeUMsQ0FHekMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCxrRUFBTTs7OztJQUFOLFVBQU8sT0FBb0I7UUFBM0IsaUJBS0M7UUFKQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUMsY0FBTSxPQUFBLENBQUM7WUFDMUMsSUFBSSxFQUFFLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUM7WUFDN0MsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFIeUMsQ0FHekMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRU8sbUVBQU87Ozs7O0lBQWYsVUFBZ0IsT0FBb0I7UUFDbEMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBVyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNqRixDQUFDOzs7Ozs7SUFFTyxrRkFBc0I7Ozs7O0lBQTlCLFVBQStCLE9BQU87UUFDcEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixDQUFDO0lBQ3BELENBQUM7Ozs7OztJQUVPLHFGQUF5Qjs7Ozs7SUFBakMsVUFBa0MsT0FBb0I7O1lBQzlDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzs7WUFDNUIsbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUVwRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsbUJBQW1CLENBQUM7UUFFOUMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFTyxxRkFBeUI7Ozs7O0lBQWpDLFVBQWtDLE9BQW9COztZQUM5QyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFFbEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQTtRQUVoQyxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7O2dCQWhERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NERBWEQ7Q0EwREMsQUFqREQsSUFpREM7U0E5Q1ksaURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU1RBVFVTLCBSZXF1ZXN0SW5mbyB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuXG5pbXBvcnQge1xuICBEYWZmQ2FydCxcbiAgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlIGltcGxlbWVudHMgRGFmZkluTWVtb3J5RGF0YVNlcnZpY2VJbnRlcmZhY2Uge1xuICBnZXQocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gKHtcbiAgICAgIGJvZHk6IHRoaXMuZ2V0U2hpcHBpbmdJbmZvcm1hdGlvbihyZXFJbmZvKSxcbiAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgfSkpO1xuICB9XG5cbiAgcHV0KHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG4gICAgICBib2R5OiB0aGlzLnVwZGF0ZVNoaXBwaW5nSW5mb3JtYXRpb24ocmVxSW5mbyksXG4gICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgIH0pKTtcbiAgfVxuXG4gIGRlbGV0ZShyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keTogdGhpcy5yZW1vdmVTaGlwcGluZ0luZm9ybWF0aW9uKHJlcUluZm8pLFxuICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIGdldENhcnQocmVxSW5mbzogUmVxdWVzdEluZm8pOiBEYWZmQ2FydCB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuZmluZEJ5SWQ8RGFmZkNhcnQ+KHJlcUluZm8uY29sbGVjdGlvbiwgTnVtYmVyKHJlcUluZm8uaWQpKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaGlwcGluZ0luZm9ybWF0aW9uKHJlcUluZm8pOiBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb24ge1xuICAgIHJldHVybiB0aGlzLmdldENhcnQocmVxSW5mbykuc2hpcHBpbmdfaW5mb3JtYXRpb247XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNoaXBwaW5nSW5mb3JtYXRpb24ocmVxSW5mbzogUmVxdWVzdEluZm8pOiBEYWZmQ2FydCB7XG4gICAgY29uc3QgY2FydCA9IHRoaXMuZ2V0Q2FydChyZXFJbmZvKTtcbiAgICBjb25zdCBzaGlwcGluZ0luZm9ybWF0aW9uID0gcmVxSW5mby51dGlscy5nZXRKc29uQm9keShyZXFJbmZvLnJlcSk7XG5cblx0XHRjYXJ0LnNoaXBwaW5nX2luZm9ybWF0aW9uID0gc2hpcHBpbmdJbmZvcm1hdGlvbjtcblxuICAgIHJldHVybiBjYXJ0O1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVTaGlwcGluZ0luZm9ybWF0aW9uKHJlcUluZm86IFJlcXVlc3RJbmZvKTogRGFmZkNhcnQge1xuICAgIGNvbnN0IGNhcnQgPSB0aGlzLmdldENhcnQocmVxSW5mbyk7XG5cbiAgICBjYXJ0LnNoaXBwaW5nX2luZm9ybWF0aW9uID0gbnVsbFxuXG4gICAgcmV0dXJuIGNhcnRcbiAgfVxufVxuIl19