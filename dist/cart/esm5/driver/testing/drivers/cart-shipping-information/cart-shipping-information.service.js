/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartFactory, DaffCartShippingRateFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
var DaffTestingCartShippingInformationService = /** @class */ (function () {
    function DaffTestingCartShippingInformationService(shippingInfoFactory, cartFactory) {
        this.shippingInfoFactory = shippingInfoFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartShippingInformationService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.shippingInfoFactory.create());
    };
    /**
     * @param {?} cartId
     * @param {?} info
     * @return {?}
     */
    DaffTestingCartShippingInformationService.prototype.update = /**
     * @param {?} cartId
     * @param {?} info
     * @return {?}
     */
    function (cartId, info) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartShippingInformationService.prototype.delete = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.cartFactory.create());
    };
    DaffTestingCartShippingInformationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartShippingInformationService.ctorParameters = function () { return [
        { type: DaffCartShippingRateFactory },
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartShippingInformationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartShippingInformationService_Factory() { return new DaffTestingCartShippingInformationService(i0.ɵɵinject(i1.DaffCartShippingRateFactory), i0.ɵɵinject(i1.DaffCartFactory)); }, token: DaffTestingCartShippingInformationService, providedIn: "root" });
    return DaffTestingCartShippingInformationService;
}());
export { DaffTestingCartShippingInformationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartShippingInformationService.prototype.shippingInfoFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartShippingInformationService.prototype.cartFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL2NhcnQtc2hpcHBpbmctaW5mb3JtYXRpb24vY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFFdEY7SUFJRSxtREFDVSxtQkFBZ0QsRUFDaEQsV0FBNEI7UUFENUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE2QjtRQUNoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7SUFDbkMsQ0FBQzs7Ozs7SUFFSix1REFBRzs7OztJQUFILFVBQUksTUFBc0I7UUFDeEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRUQsMERBQU07Ozs7O0lBQU4sVUFBTyxNQUFzQixFQUFFLElBQW1DO1FBQ2hFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELDBEQUFNOzs7O0lBQU4sVUFBTyxNQUFzQjtRQUMzQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Z0JBbkJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSnlCLDJCQUEyQjtnQkFBNUMsZUFBZTs7O29EQVJ4QjtDQThCQyxBQXBCRCxJQW9CQztTQWpCWSx5Q0FBeUM7Ozs7OztJQUVsRCx3RUFBd0Q7Ozs7O0lBQ3hELGdFQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydFNoaXBwaW5nUmF0ZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7XG4gIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblNlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZDYXJ0RmFjdG9yeSwgRGFmZkNhcnRTaGlwcGluZ1JhdGVGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvdGVzdGluZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZUZXN0aW5nQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uU2VydmljZUludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2hpcHBpbmdJbmZvRmFjdG9yeTogRGFmZkNhcnRTaGlwcGluZ1JhdGVGYWN0b3J5LFxuICAgIHByaXZhdGUgY2FydEZhY3Rvcnk6IERhZmZDYXJ0RmFjdG9yeVxuICApIHt9XG5cbiAgZ2V0KGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZDYXJ0U2hpcHBpbmdSYXRlPiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuc2hpcHBpbmdJbmZvRmFjdG9yeS5jcmVhdGUoKSk7XG4gIH1cblxuICB1cGRhdGUoY2FydElkOiBEYWZmQ2FydFsnaWQnXSwgaW5mbzogUGFydGlhbDxEYWZmQ2FydFNoaXBwaW5nUmF0ZT4pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuY2FydEZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG5cbiAgZGVsZXRlKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuY2FydEZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG59XG4iXX0=