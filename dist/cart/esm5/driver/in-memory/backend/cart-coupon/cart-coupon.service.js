/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import * as i0 from "@angular/core";
var DaffInMemoryBackendCartCouponService = /** @class */ (function () {
    function DaffInMemoryBackendCartCouponService() {
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.listCoupons(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.post = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.applyCoupon(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.delete = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var body;
            /** @type {?} */
            var action = _this.getAction(reqInfo);
            if (action) {
                body = _this.removeCoupon(reqInfo, action);
            }
            else {
                body = _this.removeAllCoupons(reqInfo);
            }
            return {
                body: body,
                status: STATUS.OK
            };
        }));
    };
    /**
     * Gets whatever follows the cart ID section of the request URL.
     */
    /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.getAction = /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.url.replace("/" + reqInfo.resourceUrl + reqInfo.id + "/", '');
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.getCart = /**
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
    DaffInMemoryBackendCartCouponService.prototype.listCoupons = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.getCart(reqInfo).coupons;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.applyCoupon = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        /** @type {?} */
        var coupon = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.coupons.push(coupon);
        return cart;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @param {?} couponCode
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.removeCoupon = /**
     * @private
     * @param {?} reqInfo
     * @param {?} couponCode
     * @return {?}
     */
    function (reqInfo, couponCode) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        cart.coupons = cart.coupons.filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var code = _a.code;
            return code !== couponCode;
        }));
        return cart;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.removeAllCoupons = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        cart.coupons = [];
        return cart;
    };
    DaffInMemoryBackendCartCouponService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendCartCouponService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartCouponService_Factory() { return new DaffInMemoryBackendCartCouponService(); }, token: DaffInMemoryBackendCartCouponService, providedIn: "root" });
    return DaffInMemoryBackendCartCouponService;
}());
export { DaffInMemoryBackendCartCouponService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9pbi1tZW1vcnkvIiwic291cmNlcyI6WyJiYWNrZW5kL2NhcnQtY291cG9uL2NhcnQtY291cG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLDJCQUEyQixDQUFDOztBQVFoRTtJQUFBO0tBMkVDOzs7OztJQXZFQyxrREFBRzs7OztJQUFILFVBQUksT0FBb0I7UUFBeEIsaUJBS0M7UUFKQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUMsY0FBTSxPQUFBLENBQUM7WUFDMUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1lBQy9CLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNsQixDQUFDLEVBSHlDLENBR3pDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRUQsbURBQUk7Ozs7SUFBSixVQUFLLE9BQW9CO1FBQXpCLGlCQUtDO1FBSkMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLGNBQU0sT0FBQSxDQUFDO1lBQzFDLElBQUksRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztZQUMvQixNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDbEIsQ0FBQyxFQUh5QyxDQUd6QyxFQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVELHFEQUFNOzs7O0lBQU4sVUFBTyxPQUFvQjtRQUEzQixpQkFnQkM7UUFmQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUM7O2dCQUMvQixJQUFJOztnQkFDRixNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFFdEMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzNDO2lCQUFNO2dCQUNMLElBQUksR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdkM7WUFFRCxPQUFPO2dCQUNMLElBQUksTUFBQTtnQkFDSixNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7YUFDbEIsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ0ssd0RBQVM7Ozs7OztJQUFqQixVQUFrQixPQUFvQjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQUksT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsRUFBRSxNQUFHLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDekUsQ0FBQzs7Ozs7O0lBRU8sc0RBQU87Ozs7O0lBQWYsVUFBZ0IsT0FBb0I7UUFDbEMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBVyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNqRixDQUFDOzs7Ozs7SUFFTywwREFBVzs7Ozs7SUFBbkIsVUFBb0IsT0FBTztRQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUVPLDBEQUFXOzs7OztJQUFuQixVQUFvQixPQUFvQjs7WUFDaEMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDOztZQUM1QixNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUV2RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFTywyREFBWTs7Ozs7O0lBQXBCLFVBQXFCLE9BQW9CLEVBQUUsVUFBa0M7O1lBQ3JFLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUVsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsRUFBTTtnQkFBTCxjQUFJO1lBQU0sT0FBQSxJQUFJLEtBQUssVUFBVTtRQUFuQixDQUFtQixFQUFDLENBQUE7UUFFbkUsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDOzs7Ozs7SUFFTywrREFBZ0I7Ozs7O0lBQXhCLFVBQXlCLE9BQW9COztZQUNyQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFFcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFaEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkExRUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OytDQVhEO0NBb0ZDLEFBM0VELElBMkVDO1NBeEVZLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNUQVRVUywgUmVxdWVzdEluZm8gfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcblxuaW1wb3J0IHtcbiAgRGFmZkNhcnQsXG4gIERhZmZDYXJ0Q291cG9uLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydENvdXBvblNlcnZpY2UgaW1wbGVtZW50cyBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB7XG4gIGdldChyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keTogdGhpcy5saXN0Q291cG9ucyhyZXFJbmZvKSxcbiAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgfSkpO1xuICB9XG5cbiAgcG9zdChyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keTogdGhpcy5hcHBseUNvdXBvbihyZXFJbmZvKSxcbiAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgfSkpO1xuICB9XG5cbiAgZGVsZXRlKHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHtcbiAgICAgIGxldCBib2R5O1xuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5nZXRBY3Rpb24ocmVxSW5mbyk7XG5cbiAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgYm9keSA9IHRoaXMucmVtb3ZlQ291cG9uKHJlcUluZm8sIGFjdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5ID0gdGhpcy5yZW1vdmVBbGxDb3Vwb25zKHJlcUluZm8pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBib2R5LFxuICAgICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHdoYXRldmVyIGZvbGxvd3MgdGhlIGNhcnQgSUQgc2VjdGlvbiBvZiB0aGUgcmVxdWVzdCBVUkwuXG4gICAqL1xuICBwcml2YXRlIGdldEFjdGlvbihyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHJlcUluZm8udXJsLnJlcGxhY2UoYC8ke3JlcUluZm8ucmVzb3VyY2VVcmx9JHtyZXFJbmZvLmlkfS9gLCAnJylcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FydChyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IERhZmZDYXJ0IHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5maW5kQnlJZDxEYWZmQ2FydD4ocmVxSW5mby5jb2xsZWN0aW9uLCBOdW1iZXIocmVxSW5mby5pZCkpXG4gIH1cblxuICBwcml2YXRlIGxpc3RDb3Vwb25zKHJlcUluZm8pOiBEYWZmQ2FydENvdXBvbltdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDYXJ0KHJlcUluZm8pLmNvdXBvbnM7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5Q291cG9uKHJlcUluZm86IFJlcXVlc3RJbmZvKTogRGFmZkNhcnQge1xuICAgIGNvbnN0IGNhcnQgPSB0aGlzLmdldENhcnQocmVxSW5mbyk7XG4gICAgY29uc3QgY291cG9uID0gcmVxSW5mby51dGlscy5nZXRKc29uQm9keShyZXFJbmZvLnJlcSk7XG5cblx0XHRjYXJ0LmNvdXBvbnMucHVzaChjb3Vwb24pO1xuXG4gICAgcmV0dXJuIGNhcnQ7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUNvdXBvbihyZXFJbmZvOiBSZXF1ZXN0SW5mbywgY291cG9uQ29kZTogRGFmZkNhcnRDb3Vwb25bJ2NvZGUnXSk6IERhZmZDYXJ0IHtcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KHJlcUluZm8pO1xuXG4gICAgY2FydC5jb3Vwb25zID0gY2FydC5jb3Vwb25zLmZpbHRlcigoe2NvZGV9KSA9PiBjb2RlICE9PSBjb3Vwb25Db2RlKVxuXG4gICAgcmV0dXJuIGNhcnRcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlQWxsQ291cG9ucyhyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IERhZmZDYXJ0IHtcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KHJlcUluZm8pO1xuXG5cdFx0Y2FydC5jb3Vwb25zID0gW107XG5cbiAgICByZXR1cm4gY2FydDtcbiAgfVxufVxuIl19