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
var DaffMagentoAuthService = /** @class */ (function () {
    function DaffMagentoAuthService(apollo) {
        this.apollo = apollo;
    }
    /**
     * @return {?}
     */
    DaffMagentoAuthService.prototype.check = /**
     * @return {?}
     */
    function () {
        return this.apollo.query({ query: checkTokenQuery }).pipe(map(validateCheckTokenResponse), mapTo(undefined), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformMagentoAuthError(err)); })));
    };
    DaffMagentoAuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoAuthService.ctorParameters = function () { return [
        { type: Apollo }
    ]; };
    /** @nocollapse */ DaffMagentoAuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoAuthService_Factory() { return new DaffMagentoAuthService(i0.ɵɵinject(i1.Apollo)); }, token: DaffMagentoAuthService, providedIn: "root" });
    return DaffMagentoAuthService;
}());
export { DaffMagentoAuthService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoAuthService.prototype.apollo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFDTCxlQUFlLEVBRWhCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUUvRDtJQUlFLGdDQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7Ozs7SUFFdEMsc0NBQUs7OztJQUFMO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBNEIsRUFBQyxLQUFLLEVBQUUsZUFBZSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2hGLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUMvQixLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLFVBQVU7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxFQUFDLENBQzlELENBQUE7SUFDSCxDQUFDOztnQkFaRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVpRLE1BQU07OztpQ0FIZjtDQTBCQyxBQWJELElBYUM7U0FWWSxzQkFBc0I7Ozs7OztJQUNyQix3Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBvbGxvIH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuXG5pbXBvcnQgeyBEYWZmQXV0aFNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2F1dGgtc2VydmljZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtcbiAgY2hlY2tUb2tlblF1ZXJ5LFxuICBNYWdlbnRvQ2hlY2tUb2tlblJlc3BvbnNlXG59IGZyb20gJy4vcXVlcmllcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IHZhbGlkYXRlQ2hlY2tUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi92YWxpZGF0b3JzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgdHJhbnNmb3JtTWFnZW50b0F1dGhFcnJvciB9IGZyb20gJy4vZXJyb3JzL3RyYW5zZm9ybSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQXV0aFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQXV0aFNlcnZpY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwb2xsbzogQXBvbGxvKSB7fVxuXG4gIGNoZWNrKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeTxNYWdlbnRvQ2hlY2tUb2tlblJlc3BvbnNlPih7cXVlcnk6IGNoZWNrVG9rZW5RdWVyeX0pLnBpcGUoXG4gICAgICBtYXAodmFsaWRhdGVDaGVja1Rva2VuUmVzcG9uc2UpLFxuICAgICAgbWFwVG8odW5kZWZpbmVkKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHRocm93RXJyb3IodHJhbnNmb3JtTWFnZW50b0F1dGhFcnJvcihlcnIpKSlcbiAgICApXG4gIH1cbn1cbiJdfQ==