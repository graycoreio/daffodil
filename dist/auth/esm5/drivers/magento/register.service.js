/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { mapTo, catchError } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { DaffMagentoLoginInfoTransformerService } from './transforms/login-info-transformer.service';
import { createCustomerMutation } from './queries/public_api';
import { transformMagentoAuthError } from './errors/transform';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "./transforms/login-info-transformer.service";
var DaffMagentoRegisterService = /** @class */ (function () {
    function DaffMagentoRegisterService(apollo, loginInfoTransformer) {
        this.apollo = apollo;
        this.loginInfoTransformer = loginInfoTransformer;
    }
    /**
     * @param {?} registration
     * @return {?}
     */
    DaffMagentoRegisterService.prototype.register = /**
     * @param {?} registration
     * @return {?}
     */
    function (registration) {
        return this.apollo.mutate({
            mutation: createCustomerMutation,
            variables: {
                email: registration.customer.email,
                password: registration.password,
                firstname: registration.customer.firstName,
                lastname: registration.customer.lastName
            }
        }).pipe(mapTo(this.loginInfoTransformer.transform(registration)), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformMagentoAuthError(err)); })));
    };
    DaffMagentoRegisterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoRegisterService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffMagentoLoginInfoTransformerService }
    ]; };
    /** @nocollapse */ DaffMagentoRegisterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoRegisterService_Factory() { return new DaffMagentoRegisterService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DaffMagentoLoginInfoTransformerService)); }, token: DaffMagentoRegisterService, providedIn: "root" });
    return DaffMagentoRegisterService;
}());
export { DaffMagentoRegisterService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoRegisterService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoRegisterService.prototype.loginInfoTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoLyIsInNvdXJjZXMiOlsiZHJpdmVycy9tYWdlbnRvL3JlZ2lzdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt4QyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUUvRDtJQUlFLG9DQUNVLE1BQWMsRUFDZCxvQkFBNEQ7UUFENUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBd0M7SUFDbkUsQ0FBQzs7Ozs7SUFFSiw2Q0FBUTs7OztJQUFSLFVBQVMsWUFBcUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN4QixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFNBQVMsRUFBRTtnQkFDVCxLQUFLLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLO2dCQUNsQyxRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVE7Z0JBQy9CLFNBQVMsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVM7Z0JBQzFDLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVE7YUFDekM7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQ3hELFVBQVU7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxFQUFDLENBQzlELENBQUE7SUFDSCxDQUFDOztnQkF0QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFYUSxNQUFNO2dCQUtOLHNDQUFzQzs7O3FDQVIvQztDQW1DQyxBQXZCRCxJQXVCQztTQXBCWSwwQkFBMEI7Ozs7OztJQUVuQyw0Q0FBc0I7Ozs7O0lBQ3RCLDBEQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcFRvLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBvbGxvIH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuXG5pbXBvcnQgeyBEYWZmUmVnaXN0ZXJTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9yZWdpc3Rlci1zZXJ2aWNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmTG9naW5JbmZvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xvZ2luLWluZm8nO1xuaW1wb3J0IHsgRGFmZkFjY291bnRSZWdpc3RyYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvYWNjb3VudC1yZWdpc3RyYXRpb24nO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9Mb2dpbkluZm9UcmFuc2Zvcm1lclNlcnZpY2UgfSBmcm9tICcuL3RyYW5zZm9ybXMvbG9naW4taW5mby10cmFuc2Zvcm1lci5zZXJ2aWNlJztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbWVyTXV0YXRpb24gfSBmcm9tICcuL3F1ZXJpZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1NYWdlbnRvQXV0aEVycm9yIH0gZnJvbSAnLi9lcnJvcnMvdHJhbnNmb3JtJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9SZWdpc3RlclNlcnZpY2UgaW1wbGVtZW50cyBEYWZmUmVnaXN0ZXJTZXJ2aWNlSW50ZXJmYWNlPERhZmZBY2NvdW50UmVnaXN0cmF0aW9uLCBEYWZmTG9naW5JbmZvPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXBvbGxvOiBBcG9sbG8sXG4gICAgcHJpdmF0ZSBsb2dpbkluZm9UcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9Mb2dpbkluZm9UcmFuc2Zvcm1lclNlcnZpY2VcbiAgKSB7fVxuXG4gIHJlZ2lzdGVyKHJlZ2lzdHJhdGlvbjogRGFmZkFjY291bnRSZWdpc3RyYXRpb24pOiBPYnNlcnZhYmxlPERhZmZMb2dpbkluZm8+IHtcbiAgICByZXR1cm4gdGhpcy5hcG9sbG8ubXV0YXRlKHtcbiAgICAgIG11dGF0aW9uOiBjcmVhdGVDdXN0b21lck11dGF0aW9uLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGVtYWlsOiByZWdpc3RyYXRpb24uY3VzdG9tZXIuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiByZWdpc3RyYXRpb24ucGFzc3dvcmQsXG4gICAgICAgIGZpcnN0bmFtZTogcmVnaXN0cmF0aW9uLmN1c3RvbWVyLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdG5hbWU6IHJlZ2lzdHJhdGlvbi5jdXN0b21lci5sYXN0TmFtZVxuICAgICAgfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXBUbyh0aGlzLmxvZ2luSW5mb1RyYW5zZm9ybWVyLnRyYW5zZm9ybShyZWdpc3RyYXRpb24pKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHRocm93RXJyb3IodHJhbnNmb3JtTWFnZW50b0F1dGhFcnJvcihlcnIpKSlcbiAgICApXG4gIH1cbn1cbiJdfQ==