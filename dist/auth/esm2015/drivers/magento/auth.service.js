/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError, mapTo } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { checkTokenQuery } from './queries/public_api';
import { validateCheckTokenResponse } from './validators/public_api';
import { transformMagentoAuthError } from './errors/transform';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
export class DaffMagentoAuthService {
    /**
     * @param {?} apollo
     */
    constructor(apollo) {
        this.apollo = apollo;
    }
    /**
     * @return {?}
     */
    check() {
        return this.apollo.query({ query: checkTokenQuery }).pipe(map(validateCheckTokenResponse), mapTo(undefined), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformMagentoAuthError(err)))));
    }
}
DaffMagentoAuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoAuthService.ctorParameters = () => [
    { type: Apollo }
];
/** @nocollapse */ DaffMagentoAuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoAuthService_Factory() { return new DaffMagentoAuthService(i0.ɵɵinject(i1.Apollo)); }, token: DaffMagentoAuthService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoAuthService.prototype.apollo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFDTCxlQUFlLEVBRWhCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUsvRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBQ2pDLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQzs7OztJQUV0QyxLQUFLO1FBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBNEIsRUFBQyxLQUFLLEVBQUUsZUFBZSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2hGLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUMvQixLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLFVBQVU7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQzlELENBQUE7SUFDSCxDQUFDOzs7WUFaRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFaUSxNQUFNOzs7Ozs7OztJQWNELHdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBcG9sbG8gfSBmcm9tICdhcG9sbG8tYW5ndWxhcic7XG5cbmltcG9ydCB7IERhZmZBdXRoU2VydmljZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXV0aC1zZXJ2aWNlLmludGVyZmFjZSc7XG5pbXBvcnQge1xuICBjaGVja1Rva2VuUXVlcnksXG4gIE1hZ2VudG9DaGVja1Rva2VuUmVzcG9uc2Vcbn0gZnJvbSAnLi9xdWVyaWVzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgdmFsaWRhdGVDaGVja1Rva2VuUmVzcG9uc2UgfSBmcm9tICcuL3ZhbGlkYXRvcnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1NYWdlbnRvQXV0aEVycm9yIH0gZnJvbSAnLi9lcnJvcnMvdHJhbnNmb3JtJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9BdXRoU2VydmljZSBpbXBsZW1lbnRzIERhZmZBdXRoU2VydmljZUludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBvbGxvOiBBcG9sbG8pIHt9XG5cbiAgY2hlY2soKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuYXBvbGxvLnF1ZXJ5PE1hZ2VudG9DaGVja1Rva2VuUmVzcG9uc2U+KHtxdWVyeTogY2hlY2tUb2tlblF1ZXJ5fSkucGlwZShcbiAgICAgIG1hcCh2YWxpZGF0ZUNoZWNrVG9rZW5SZXNwb25zZSksXG4gICAgICBtYXBUbyh1bmRlZmluZWQpLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4gdGhyb3dFcnJvcih0cmFuc2Zvcm1NYWdlbnRvQXV0aEVycm9yKGVycikpKVxuICAgIClcbiAgfVxufVxuIl19