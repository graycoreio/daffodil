/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
var DaffTestingRegisterService = /** @class */ (function () {
    function DaffTestingRegisterService() {
    }
    /**
     * @param {?} registration
     * @return {?}
     */
    DaffTestingRegisterService.prototype.register = /**
     * @param {?} registration
     * @return {?}
     */
    function (registration) {
        return of({
            email: registration.customer.email,
            password: registration.password
        });
    };
    DaffTestingRegisterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffTestingRegisterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingRegisterService_Factory() { return new DaffTestingRegisterService(); }, token: DaffTestingRegisterService, providedIn: "root" });
    return DaffTestingRegisterService;
}());
export { DaffTestingRegisterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL3Rlc3RpbmcvcmVnaXN0ZXIvcmVnaXN0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQVF0QztJQUFBO0tBYUM7Ozs7O0lBTkMsNkNBQVE7Ozs7SUFBUixVQUFTLFlBQXFDO1FBQzVDLE9BQU8sRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSztZQUNsQyxRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVE7U0FDaEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBWkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O3FDQVhEO0NBc0JDLEFBYkQsSUFhQztTQVZZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgRGFmZkFjY291bnRSZWdpc3RyYXRpb24sXG4gIERhZmZMb2dpbkluZm8sXG4gIERhZmZSZWdpc3RlclNlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9hdXRoJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlRlc3RpbmdSZWdpc3RlclNlcnZpY2UgaW1wbGVtZW50cyBEYWZmUmVnaXN0ZXJTZXJ2aWNlSW50ZXJmYWNlPFxuICBEYWZmQWNjb3VudFJlZ2lzdHJhdGlvbixcbiAgRGFmZkxvZ2luSW5mb1xuPiB7XG4gIHJlZ2lzdGVyKHJlZ2lzdHJhdGlvbjogRGFmZkFjY291bnRSZWdpc3RyYXRpb24pOiBPYnNlcnZhYmxlPERhZmZMb2dpbkluZm8+IHtcbiAgICByZXR1cm4gb2Yoe1xuICAgICAgZW1haWw6IHJlZ2lzdHJhdGlvbi5jdXN0b21lci5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiByZWdpc3RyYXRpb24ucGFzc3dvcmRcbiAgICB9KTtcbiAgfVxufVxuIl19