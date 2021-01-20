/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffAuthTokenFactory } from '../../../factories/auth-token.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../../factories/auth-token.factory";
var DaffTestingLoginService = /** @class */ (function () {
    function DaffTestingLoginService(factory) {
        this.factory = factory;
    }
    /**
     * @param {?} loginInfo
     * @return {?}
     */
    DaffTestingLoginService.prototype.login = /**
     * @param {?} loginInfo
     * @return {?}
     */
    function (loginInfo) {
        return of(this.factory.create());
    };
    /**
     * @return {?}
     */
    DaffTestingLoginService.prototype.logout = /**
     * @return {?}
     */
    function () {
        return of(undefined);
    };
    DaffTestingLoginService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingLoginService.ctorParameters = function () { return [
        { type: DaffAuthTokenFactory }
    ]; };
    /** @nocollapse */ DaffTestingLoginService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingLoginService_Factory() { return new DaffTestingLoginService(i0.ɵɵinject(i1.DaffAuthTokenFactory)); }, token: DaffTestingLoginService, providedIn: "root" });
    return DaffTestingLoginService;
}());
export { DaffTestingLoginService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingLoginService.prototype.factory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL3Rlc3RpbmcvbG9naW4vbG9naW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUXRDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7QUFFN0U7SUFJRSxpQ0FBcUIsT0FBNkI7UUFBN0IsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7SUFBRyxDQUFDOzs7OztJQUV0RCx1Q0FBSzs7OztJQUFMLFVBQU0sU0FBd0I7UUFDNUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCx3Q0FBTTs7O0lBQU47UUFDRSxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QixDQUFDOztnQkFaRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLG9CQUFvQjs7O2tDQVQ3QjtDQXdCQyxBQWJELElBYUM7U0FWWSx1QkFBdUI7Ozs7OztJQUNyQiwwQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBEYWZmTG9naW5TZXJ2aWNlSW50ZXJmYWNlLFxuICBEYWZmTG9naW5JbmZvLFxuICBEYWZmQXV0aFRva2VuXG59IGZyb20gJ0BkYWZmb2RpbC9hdXRoJztcblxuaW1wb3J0IHsgRGFmZkF1dGhUb2tlbkZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9mYWN0b3JpZXMvYXV0aC10b2tlbi5mYWN0b3J5JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlRlc3RpbmdMb2dpblNlcnZpY2UgaW1wbGVtZW50cyBEYWZmTG9naW5TZXJ2aWNlSW50ZXJmYWNlPERhZmZMb2dpbkluZm8sIERhZmZBdXRoVG9rZW4+IHtcbiAgY29uc3RydWN0b3IgKHByaXZhdGUgZmFjdG9yeTogRGFmZkF1dGhUb2tlbkZhY3RvcnkpIHt9XG5cbiAgbG9naW4obG9naW5JbmZvOiBEYWZmTG9naW5JbmZvKTogT2JzZXJ2YWJsZTxEYWZmQXV0aFRva2VuPiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuZmFjdG9yeS5jcmVhdGUoKSk7XG4gIH1cblxuICBsb2dvdXQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIG9mKHVuZGVmaW5lZCk7XG4gIH1cbn1cbiJdfQ==