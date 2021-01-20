/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import * as i0 from "@angular/core";
export class DaffInMemoryBackendCartOrderService {
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    post(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.placeOrder(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    placeOrder(reqInfo) {
        return {
            id: '8235422034',
            cartId: '89fdsa8sadf',
            orderId: '8235422034',
        };
    }
}
DaffInMemoryBackendCartOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendCartOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartOrderService_Factory() { return new DaffInMemoryBackendCartOrderService(); }, token: DaffInMemoryBackendCartOrderService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImJhY2tlbmQvY2FydC1vcmRlci9jYXJ0LW9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLDJCQUEyQixDQUFDOztBQVVoRSxNQUFNLE9BQU8sbUNBQW1DOzs7OztJQUM5QyxJQUFJLENBQUMsT0FBb0I7UUFDdkIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQzlCLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNsQixDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxPQUFPO1FBQ3hCLE9BQU87WUFDTCxFQUFFLEVBQUUsWUFBWTtZQUNoQixNQUFNLEVBQUUsYUFBYTtZQUNyQixPQUFPLEVBQUUsWUFBWTtTQUN0QixDQUFDO0lBQ0osQ0FBQzs7O1lBakJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNUQVRVUywgUmVxdWVzdEluZm8gfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcblxuaW1wb3J0IHtcbiAgRGFmZkNhcnRPcmRlclJlc3VsdFxufSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydE9yZGVyU2VydmljZSBpbXBsZW1lbnRzIERhZmZJbk1lbW9yeURhdGFTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgcG9zdChyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keTogdGhpcy5wbGFjZU9yZGVyKHJlcUluZm8pLFxuICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIHBsYWNlT3JkZXIocmVxSW5mbyk6IERhZmZDYXJ0T3JkZXJSZXN1bHQge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogJzgyMzU0MjIwMzQnLFxuICAgICAgY2FydElkOiAnODlmZHNhOHNhZGYnLFxuICAgICAgb3JkZXJJZDogJzgyMzU0MjIwMzQnLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==