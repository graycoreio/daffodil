/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError, mapTo } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { generateTokenMutation, revokeCustomerTokenMutation } from './queries/public_api';
import { DaffMagentoAuthTransformerService } from './transforms/auth-transformer.service';
import { transformMagentoAuthError } from './errors/transform';
import { validateRevokeTokenResponse, validateGenerateTokenResponse } from './validators/public_api';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "./transforms/auth-transformer.service";
export class DaffMagentoLoginService {
    /**
     * @param {?} apollo
     * @param {?} authTransformer
     */
    constructor(apollo, authTransformer) {
        this.apollo = apollo;
        this.authTransformer = authTransformer;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    login({ email, password }) {
        return this.apollo.mutate({
            mutation: generateTokenMutation,
            variables: {
                email,
                password
            }
        }).pipe(map(validateGenerateTokenResponse), map((/**
         * @param {?} res
         * @return {?}
         */
        res => this.authTransformer.transform(res.data.generateCustomerToken))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformMagentoAuthError(err)))));
    }
    /**
     * @return {?}
     */
    logout() {
        return this.apollo.mutate({ mutation: revokeCustomerTokenMutation }).pipe(map(validateRevokeTokenResponse), mapTo(undefined), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformMagentoAuthError(err)))));
    }
}
DaffMagentoLoginService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoLoginService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffMagentoAuthTransformerService }
];
/** @nocollapse */ DaffMagentoLoginService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoLoginService_Factory() { return new DaffMagentoLoginService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DaffMagentoAuthTransformerService)); }, token: DaffMagentoLoginService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoLoginService.prototype.apollo;
    /** @type {?} */
    DaffMagentoLoginService.prototype.authTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoLyIsInNvdXJjZXMiOlsiZHJpdmVycy9tYWdlbnRvL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLeEMsT0FBTyxFQUdMLHFCQUFxQixFQUNyQiwyQkFBMkIsRUFDNUIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUtyRyxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUNsQyxZQUNVLE1BQWMsRUFDZixlQUFrRDtRQURqRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Ysb0JBQWUsR0FBZixlQUFlLENBQW1DO0lBQ3hELENBQUM7Ozs7O0lBRUosS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBZ0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBK0I7WUFDdEQsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1QsS0FBSztnQkFDTCxRQUFRO2FBQ1Q7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxFQUNsQyxHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUMsRUFDMUUsVUFBVTs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FDOUQsQ0FBQTtJQUNILENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBcUMsRUFBQyxRQUFRLEVBQUUsMkJBQTJCLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FDekcsR0FBRyxDQUFDLDJCQUEyQixDQUFDLEVBQ2hDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsVUFBVTs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FDOUQsQ0FBQTtJQUNILENBQUM7OztZQTdCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFqQlEsTUFBTTtZQVdOLGlDQUFpQzs7Ozs7Ozs7SUFTdEMseUNBQXNCOztJQUN0QixrREFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBvbGxvIH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuXG5pbXBvcnQgeyBEYWZmTG9naW5TZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9sb2dpbi1zZXJ2aWNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmTG9naW5JbmZvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xvZ2luLWluZm8nO1xuaW1wb3J0IHsgRGFmZkF1dGhUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy9hdXRoLXRva2VuJztcbmltcG9ydCB7XG4gIE1hZ2VudG9SZXZva2VDdXN0b21lclRva2VuUmVzcG9uc2UsXG4gIE1hZ2VudG9HZW5lcmF0ZVRva2VuUmVzcG9uc2UsXG4gIGdlbmVyYXRlVG9rZW5NdXRhdGlvbixcbiAgcmV2b2tlQ3VzdG9tZXJUb2tlbk11dGF0aW9uXG59IGZyb20gJy4vcXVlcmllcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQXV0aFRyYW5zZm9ybWVyU2VydmljZSB9IGZyb20gJy4vdHJhbnNmb3Jtcy9hdXRoLXRyYW5zZm9ybWVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgdHJhbnNmb3JtTWFnZW50b0F1dGhFcnJvciB9IGZyb20gJy4vZXJyb3JzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyB2YWxpZGF0ZVJldm9rZVRva2VuUmVzcG9uc2UsIHZhbGlkYXRlR2VuZXJhdGVUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi92YWxpZGF0b3JzL3B1YmxpY19hcGknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b0xvZ2luU2VydmljZSBpbXBsZW1lbnRzIERhZmZMb2dpblNlcnZpY2VJbnRlcmZhY2U8RGFmZkxvZ2luSW5mbywgRGFmZkF1dGhUb2tlbj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvLFxuICAgIHB1YmxpYyBhdXRoVHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvQXV0aFRyYW5zZm9ybWVyU2VydmljZSxcbiAgKSB7fVxuXG4gIGxvZ2luKHtlbWFpbCwgcGFzc3dvcmR9OiBEYWZmTG9naW5JbmZvKTogT2JzZXJ2YWJsZTxEYWZmQXV0aFRva2VuPiB7XG4gICAgcmV0dXJuIHRoaXMuYXBvbGxvLm11dGF0ZTxNYWdlbnRvR2VuZXJhdGVUb2tlblJlc3BvbnNlPih7XG4gICAgICBtdXRhdGlvbjogZ2VuZXJhdGVUb2tlbk11dGF0aW9uLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZFxuICAgICAgfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAodmFsaWRhdGVHZW5lcmF0ZVRva2VuUmVzcG9uc2UpLFxuICAgICAgbWFwKHJlcyA9PiB0aGlzLmF1dGhUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzLmRhdGEuZ2VuZXJhdGVDdXN0b21lclRva2VuKSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB0aHJvd0Vycm9yKHRyYW5zZm9ybU1hZ2VudG9BdXRoRXJyb3IoZXJyKSkpXG4gICAgKVxuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5tdXRhdGU8TWFnZW50b1Jldm9rZUN1c3RvbWVyVG9rZW5SZXNwb25zZT4oe211dGF0aW9uOiByZXZva2VDdXN0b21lclRva2VuTXV0YXRpb259KS5waXBlKFxuICAgICAgbWFwKHZhbGlkYXRlUmV2b2tlVG9rZW5SZXNwb25zZSksXG4gICAgICBtYXBUbyh1bmRlZmluZWQpLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4gdGhyb3dFcnJvcih0cmFuc2Zvcm1NYWdlbnRvQXV0aEVycm9yKGVycikpKVxuICAgIClcbiAgfVxufVxuIl19