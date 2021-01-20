/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartPaymentFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
var DaffTestingCartPaymentMethodsService = /** @class */ (function () {
    function DaffTestingCartPaymentMethodsService(paymentFactory) {
        this.paymentFactory = paymentFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartPaymentMethodsService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.paymentFactory.createMany(3));
    };
    DaffTestingCartPaymentMethodsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartPaymentMethodsService.ctorParameters = function () { return [
        { type: DaffCartPaymentFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartPaymentMethodsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartPaymentMethodsService_Factory() { return new DaffTestingCartPaymentMethodsService(i0.ɵɵinject(i1.DaffCartPaymentFactory)); }, token: DaffTestingCartPaymentMethodsService, providedIn: "root" });
    return DaffTestingCartPaymentMethodsService;
}());
export { DaffTestingCartPaymentMethodsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartPaymentMethodsService.prototype.paymentFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LW1ldGhvZHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy9jYXJ0LXBheW1lbnQtbWV0aG9kcy9jYXJ0LXBheW1lbnQtbWV0aG9kcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQUVoRTtJQUlFLDhDQUNVLGNBQXNDO1FBQXRDLG1CQUFjLEdBQWQsY0FBYyxDQUF3QjtJQUM3QyxDQUFDOzs7OztJQUVKLG1EQUFJOzs7O0lBQUosVUFBSyxNQUFzQjtRQUN6QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQVZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsc0JBQXNCOzs7K0NBUi9CO0NBcUJDLEFBWEQsSUFXQztTQVJZLG9DQUFvQzs7Ozs7O0lBRTdDLDhEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydFBheW1lbnRNZXRob2QgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQge1xuICBEYWZmQ2FydFBheW1lbnRNZXRob2RzU2VydmljZUludGVyZmFjZSxcbn0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuaW1wb3J0IHsgRGFmZkNhcnRQYXltZW50RmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L3Rlc3RpbmcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmVGVzdGluZ0NhcnRQYXltZW50TWV0aG9kc1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydFBheW1lbnRNZXRob2RzU2VydmljZUludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGF5bWVudEZhY3Rvcnk6IERhZmZDYXJ0UGF5bWVudEZhY3RvcnksXG4gICkge31cblxuICBsaXN0KGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZDYXJ0UGF5bWVudE1ldGhvZFtdPiB7XG4gICAgcmV0dXJuIG9mKHRoaXMucGF5bWVudEZhY3RvcnkuY3JlYXRlTWFueSgzKSk7XG4gIH1cbn1cbiJdfQ==