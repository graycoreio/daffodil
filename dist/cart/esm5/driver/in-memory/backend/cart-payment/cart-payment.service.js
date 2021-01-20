/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import * as i0 from "@angular/core";
var DaffInMemoryBackendCartPaymentService = /** @class */ (function () {
    function DaffInMemoryBackendCartPaymentService() {
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.getPayment(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentService.prototype.put = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.updatePayment(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentService.prototype.delete = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.removePayment(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentService.prototype.getCart = /**
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
    DaffInMemoryBackendCartPaymentService.prototype.getPayment = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.getCart(reqInfo).payment;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentService.prototype.updatePayment = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        var _a = reqInfo.utils.getJsonBody(reqInfo.req), payment = _a.payment, address = _a.address;
        cart.payment = payment;
        if (address)
            cart.billing_address = address;
        return cart;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentService.prototype.removePayment = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        cart.payment = null;
        return cart;
    };
    DaffInMemoryBackendCartPaymentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendCartPaymentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartPaymentService_Factory() { return new DaffInMemoryBackendCartPaymentService(); }, token: DaffInMemoryBackendCartPaymentService, providedIn: "root" });
    return DaffInMemoryBackendCartPaymentService;
}());
export { DaffInMemoryBackendCartPaymentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiYmFja2VuZC9jYXJ0LXBheW1lbnQvY2FydC1wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLDJCQUEyQixDQUFDOztBQVFoRTtJQUFBO0tBbURDOzs7OztJQS9DQyxtREFBRzs7OztJQUFILFVBQUksT0FBb0I7UUFBeEIsaUJBS0M7UUFKQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUMsY0FBTSxPQUFBLENBQUM7WUFDMUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQzlCLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNsQixDQUFDLEVBSHlDLENBR3pDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRUQsbURBQUc7Ozs7SUFBSCxVQUFJLE9BQW9CO1FBQXhCLGlCQUtDO1FBSkMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLGNBQU0sT0FBQSxDQUFDO1lBQzFDLElBQUksRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUNqQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDbEIsQ0FBQyxFQUh5QyxDQUd6QyxFQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVELHNEQUFNOzs7O0lBQU4sVUFBTyxPQUFvQjtRQUEzQixpQkFLQztRQUpDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlOzs7UUFBQyxjQUFNLE9BQUEsQ0FBQztZQUMxQyxJQUFJLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDakMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFIeUMsQ0FHekMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRU8sdURBQU87Ozs7O0lBQWYsVUFBZ0IsT0FBb0I7UUFDbEMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBVyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNqRixDQUFDOzs7Ozs7SUFFTywwREFBVTs7Ozs7SUFBbEIsVUFBbUIsT0FBTztRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUVPLDZEQUFhOzs7OztJQUFyQixVQUFzQixPQUFvQjs7WUFDbEMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUEsMkNBQTJELEVBQTFELG9CQUFPLEVBQUUsb0JBQWlEO1FBRWpFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksT0FBTztZQUFFLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBRTVDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRU8sNkRBQWE7Ozs7O0lBQXJCLFVBQXNCLE9BQW9COztZQUNsQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFFbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFFbkIsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDOztnQkFsREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O2dEQVhEO0NBNERDLEFBbkRELElBbURDO1NBaERZLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNUQVRVUywgUmVxdWVzdEluZm8gfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcblxuaW1wb3J0IHtcbiAgRGFmZkNhcnQsXG4gIERhZmZDYXJ0UGF5bWVudE1ldGhvZCxcbn0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5RGF0YVNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5QmFja2VuZENhcnRQYXltZW50U2VydmljZSBpbXBsZW1lbnRzIERhZmZJbk1lbW9yeURhdGFTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgZ2V0KHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG4gICAgICBib2R5OiB0aGlzLmdldFBheW1lbnQocmVxSW5mbyksXG4gICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgIH0pKTtcbiAgfVxuXG4gIHB1dChyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keTogdGhpcy51cGRhdGVQYXltZW50KHJlcUluZm8pLFxuICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICB9KSk7XG4gIH1cblxuICBkZWxldGUocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gKHtcbiAgICAgIGJvZHk6IHRoaXMucmVtb3ZlUGF5bWVudChyZXFJbmZvKSxcbiAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYXJ0KHJlcUluZm86IFJlcXVlc3RJbmZvKTogRGFmZkNhcnQge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmZpbmRCeUlkPERhZmZDYXJ0PihyZXFJbmZvLmNvbGxlY3Rpb24sIE51bWJlcihyZXFJbmZvLmlkKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGF5bWVudChyZXFJbmZvKTogRGFmZkNhcnRQYXltZW50TWV0aG9kIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDYXJ0KHJlcUluZm8pLnBheW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBheW1lbnQocmVxSW5mbzogUmVxdWVzdEluZm8pOiBEYWZmQ2FydCB7XG4gICAgY29uc3QgY2FydCA9IHRoaXMuZ2V0Q2FydChyZXFJbmZvKTtcbiAgICBjb25zdCB7cGF5bWVudCwgYWRkcmVzc30gPSByZXFJbmZvLnV0aWxzLmdldEpzb25Cb2R5KHJlcUluZm8ucmVxKTtcblxuICAgIGNhcnQucGF5bWVudCA9IHBheW1lbnQ7XG5cbiAgICBpZiAoYWRkcmVzcykgY2FydC5iaWxsaW5nX2FkZHJlc3MgPSBhZGRyZXNzO1xuXG4gICAgcmV0dXJuIGNhcnQ7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVBheW1lbnQocmVxSW5mbzogUmVxdWVzdEluZm8pOiBEYWZmQ2FydCB7XG4gICAgY29uc3QgY2FydCA9IHRoaXMuZ2V0Q2FydChyZXFJbmZvKTtcblxuICAgIGNhcnQucGF5bWVudCA9IG51bGxcblxuICAgIHJldHVybiBjYXJ0XG4gIH1cbn1cbiJdfQ==