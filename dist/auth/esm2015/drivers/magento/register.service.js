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
export class DaffMagentoRegisterService {
    /**
     * @param {?} apollo
     * @param {?} loginInfoTransformer
     */
    constructor(apollo, loginInfoTransformer) {
        this.apollo = apollo;
        this.loginInfoTransformer = loginInfoTransformer;
    }
    /**
     * @param {?} registration
     * @return {?}
     */
    register(registration) {
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
        err => throwError(transformMagentoAuthError(err)))));
    }
}
DaffMagentoRegisterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoRegisterService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffMagentoLoginInfoTransformerService }
];
/** @nocollapse */ DaffMagentoRegisterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoRegisterService_Factory() { return new DaffMagentoRegisterService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DaffMagentoLoginInfoTransformerService)); }, token: DaffMagentoRegisterService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoLyIsInNvdXJjZXMiOlsiZHJpdmVycy9tYWdlbnRvL3JlZ2lzdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt4QyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUsvRCxNQUFNLE9BQU8sMEJBQTBCOzs7OztJQUNyQyxZQUNVLE1BQWMsRUFDZCxvQkFBNEQ7UUFENUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBd0M7SUFDbkUsQ0FBQzs7Ozs7SUFFSixRQUFRLENBQUMsWUFBcUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN4QixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFNBQVMsRUFBRTtnQkFDVCxLQUFLLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLO2dCQUNsQyxRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVE7Z0JBQy9CLFNBQVMsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVM7Z0JBQzFDLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVE7YUFDekM7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQ3hELFVBQVU7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQzlELENBQUE7SUFDSCxDQUFDOzs7WUF0QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBWFEsTUFBTTtZQUtOLHNDQUFzQzs7Ozs7Ozs7SUFTM0MsNENBQXNCOzs7OztJQUN0QiwwREFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXBUbywgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcblxuaW1wb3J0IHsgRGFmZlJlZ2lzdGVyU2VydmljZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcmVnaXN0ZXItc2VydmljZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkxvZ2luSW5mbyB9IGZyb20gJy4uLy4uL21vZGVscy9sb2dpbi1pbmZvJztcbmltcG9ydCB7IERhZmZBY2NvdW50UmVnaXN0cmF0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FjY291bnQtcmVnaXN0cmF0aW9uJztcbmltcG9ydCB7IERhZmZNYWdlbnRvTG9naW5JbmZvVHJhbnNmb3JtZXJTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2xvZ2luLWluZm8tdHJhbnNmb3JtZXIuc2VydmljZSc7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b21lck11dGF0aW9uIH0gZnJvbSAnLi9xdWVyaWVzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgdHJhbnNmb3JtTWFnZW50b0F1dGhFcnJvciB9IGZyb20gJy4vZXJyb3JzL3RyYW5zZm9ybSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvUmVnaXN0ZXJTZXJ2aWNlIGltcGxlbWVudHMgRGFmZlJlZ2lzdGVyU2VydmljZUludGVyZmFjZTxEYWZmQWNjb3VudFJlZ2lzdHJhdGlvbiwgRGFmZkxvZ2luSW5mbz4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvLFxuICAgIHByaXZhdGUgbG9naW5JbmZvVHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvTG9naW5JbmZvVHJhbnNmb3JtZXJTZXJ2aWNlXG4gICkge31cblxuICByZWdpc3RlcihyZWdpc3RyYXRpb246IERhZmZBY2NvdW50UmVnaXN0cmF0aW9uKTogT2JzZXJ2YWJsZTxEYWZmTG9naW5JbmZvPiB7XG4gICAgcmV0dXJuIHRoaXMuYXBvbGxvLm11dGF0ZSh7XG4gICAgICBtdXRhdGlvbjogY3JlYXRlQ3VzdG9tZXJNdXRhdGlvbixcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBlbWFpbDogcmVnaXN0cmF0aW9uLmN1c3RvbWVyLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogcmVnaXN0cmF0aW9uLnBhc3N3b3JkLFxuICAgICAgICBmaXJzdG5hbWU6IHJlZ2lzdHJhdGlvbi5jdXN0b21lci5maXJzdE5hbWUsXG4gICAgICAgIGxhc3RuYW1lOiByZWdpc3RyYXRpb24uY3VzdG9tZXIubGFzdE5hbWVcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwVG8odGhpcy5sb2dpbkluZm9UcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVnaXN0cmF0aW9uKSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB0aHJvd0Vycm9yKHRyYW5zZm9ybU1hZ2VudG9BdXRoRXJyb3IoZXJyKSkpXG4gICAgKVxuICB9XG59XG4iXX0=