/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffAuthTokenFactory } from '../../../factories/auth-token.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../../factories/auth-token.factory";
export class DaffTestingLoginService {
    /**
     * @param {?} factory
     */
    constructor(factory) {
        this.factory = factory;
    }
    /**
     * @param {?} loginInfo
     * @return {?}
     */
    login(loginInfo) {
        return of(this.factory.create());
    }
    /**
     * @return {?}
     */
    logout() {
        return of(undefined);
    }
}
DaffTestingLoginService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingLoginService.ctorParameters = () => [
    { type: DaffAuthTokenFactory }
];
/** @nocollapse */ DaffTestingLoginService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingLoginService_Factory() { return new DaffTestingLoginService(i0.ɵɵinject(i1.DaffAuthTokenFactory)); }, token: DaffTestingLoginService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingLoginService.prototype.factory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL3Rlc3RpbmcvbG9naW4vbG9naW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUXRDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7QUFLN0UsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUNsQyxZQUFxQixPQUE2QjtRQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtJQUFHLENBQUM7Ozs7O0lBRXRELEtBQUssQ0FBQyxTQUF3QjtRQUM1QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7WUFaRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxvQkFBb0I7Ozs7Ozs7O0lBTWQsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgRGFmZkxvZ2luU2VydmljZUludGVyZmFjZSxcbiAgRGFmZkxvZ2luSW5mbyxcbiAgRGFmZkF1dGhUb2tlblxufSBmcm9tICdAZGFmZm9kaWwvYXV0aCc7XG5cbmltcG9ydCB7IERhZmZBdXRoVG9rZW5GYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZmFjdG9yaWVzL2F1dGgtdG9rZW4uZmFjdG9yeSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZUZXN0aW5nTG9naW5TZXJ2aWNlIGltcGxlbWVudHMgRGFmZkxvZ2luU2VydmljZUludGVyZmFjZTxEYWZmTG9naW5JbmZvLCBEYWZmQXV0aFRva2VuPiB7XG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIGZhY3Rvcnk6IERhZmZBdXRoVG9rZW5GYWN0b3J5KSB7fVxuXG4gIGxvZ2luKGxvZ2luSW5mbzogRGFmZkxvZ2luSW5mbyk6IE9ic2VydmFibGU8RGFmZkF1dGhUb2tlbj4ge1xuICAgIHJldHVybiBvZih0aGlzLmZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG5cbiAgbG9nb3V0KCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiBvZih1bmRlZmluZWQpO1xuICB9XG59XG4iXX0=