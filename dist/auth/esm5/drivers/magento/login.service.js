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
var DaffMagentoLoginService = /** @class */ (function () {
    function DaffMagentoLoginService(apollo, authTransformer) {
        this.apollo = apollo;
        this.authTransformer = authTransformer;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    DaffMagentoLoginService.prototype.login = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var email = _a.email, password = _a.password;
        return this.apollo.mutate({
            mutation: generateTokenMutation,
            variables: {
                email: email,
                password: password
            }
        }).pipe(map(validateGenerateTokenResponse), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.authTransformer.transform(res.data.generateCustomerToken); })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformMagentoAuthError(err)); })));
    };
    /**
     * @return {?}
     */
    DaffMagentoLoginService.prototype.logout = /**
     * @return {?}
     */
    function () {
        return this.apollo.mutate({ mutation: revokeCustomerTokenMutation }).pipe(map(validateRevokeTokenResponse), mapTo(undefined), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformMagentoAuthError(err)); })));
    };
    DaffMagentoLoginService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoLoginService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffMagentoAuthTransformerService }
    ]; };
    /** @nocollapse */ DaffMagentoLoginService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoLoginService_Factory() { return new DaffMagentoLoginService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DaffMagentoAuthTransformerService)); }, token: DaffMagentoLoginService, providedIn: "root" });
    return DaffMagentoLoginService;
}());
export { DaffMagentoLoginService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoLoginService.prototype.apollo;
    /** @type {?} */
    DaffMagentoLoginService.prototype.authTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoLyIsInNvdXJjZXMiOlsiZHJpdmVycy9tYWdlbnRvL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLeEMsT0FBTyxFQUdMLHFCQUFxQixFQUNyQiwyQkFBMkIsRUFDNUIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUVyRztJQUlFLGlDQUNVLE1BQWMsRUFDZixlQUFrRDtRQURqRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Ysb0JBQWUsR0FBZixlQUFlLENBQW1DO0lBQ3hELENBQUM7Ozs7O0lBRUosdUNBQUs7Ozs7SUFBTCxVQUFNLEVBQWdDO1FBQXRDLGlCQVlDO1lBWk0sZ0JBQUssRUFBRSxzQkFBUTtRQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUErQjtZQUN0RCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRTtnQkFDVCxLQUFLLE9BQUE7Z0JBQ0wsUUFBUSxVQUFBO2FBQ1Q7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxFQUNsQyxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQTlELENBQThELEVBQUMsRUFDMUUsVUFBVTs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsVUFBVSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQTFDLENBQTBDLEVBQUMsQ0FDOUQsQ0FBQTtJQUNILENBQUM7Ozs7SUFFRCx3Q0FBTTs7O0lBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFxQyxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUN6RyxHQUFHLENBQUMsMkJBQTJCLENBQUMsRUFDaEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixVQUFVOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxVQUFVLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBMUMsQ0FBMEMsRUFBQyxDQUM5RCxDQUFBO0lBQ0gsQ0FBQzs7Z0JBN0JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBakJRLE1BQU07Z0JBV04saUNBQWlDOzs7a0NBZDFDO0NBZ0RDLEFBOUJELElBOEJDO1NBM0JZLHVCQUF1Qjs7Ozs7O0lBRWhDLHlDQUFzQjs7SUFDdEIsa0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcblxuaW1wb3J0IHsgRGFmZkxvZ2luU2VydmljZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvbG9naW4tc2VydmljZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkxvZ2luSW5mbyB9IGZyb20gJy4uLy4uL21vZGVscy9sb2dpbi1pbmZvJztcbmltcG9ydCB7IERhZmZBdXRoVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvYXV0aC10b2tlbic7XG5pbXBvcnQge1xuICBNYWdlbnRvUmV2b2tlQ3VzdG9tZXJUb2tlblJlc3BvbnNlLFxuICBNYWdlbnRvR2VuZXJhdGVUb2tlblJlc3BvbnNlLFxuICBnZW5lcmF0ZVRva2VuTXV0YXRpb24sXG4gIHJldm9rZUN1c3RvbWVyVG9rZW5NdXRhdGlvblxufSBmcm9tICcuL3F1ZXJpZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0F1dGhUcmFuc2Zvcm1lclNlcnZpY2UgfSBmcm9tICcuL3RyYW5zZm9ybXMvYXV0aC10cmFuc2Zvcm1lci5zZXJ2aWNlJztcbmltcG9ydCB7IHRyYW5zZm9ybU1hZ2VudG9BdXRoRXJyb3IgfSBmcm9tICcuL2Vycm9ycy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgdmFsaWRhdGVSZXZva2VUb2tlblJlc3BvbnNlLCB2YWxpZGF0ZUdlbmVyYXRlVG9rZW5SZXNwb25zZSB9IGZyb20gJy4vdmFsaWRhdG9ycy9wdWJsaWNfYXBpJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9Mb2dpblNlcnZpY2UgaW1wbGVtZW50cyBEYWZmTG9naW5TZXJ2aWNlSW50ZXJmYWNlPERhZmZMb2dpbkluZm8sIERhZmZBdXRoVG9rZW4+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcG9sbG86IEFwb2xsbyxcbiAgICBwdWJsaWMgYXV0aFRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0F1dGhUcmFuc2Zvcm1lclNlcnZpY2UsXG4gICkge31cblxuICBsb2dpbih7ZW1haWwsIHBhc3N3b3JkfTogRGFmZkxvZ2luSW5mbyk6IE9ic2VydmFibGU8RGFmZkF1dGhUb2tlbj4ge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5tdXRhdGU8TWFnZW50b0dlbmVyYXRlVG9rZW5SZXNwb25zZT4oe1xuICAgICAgbXV0YXRpb246IGdlbmVyYXRlVG9rZW5NdXRhdGlvbixcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHZhbGlkYXRlR2VuZXJhdGVUb2tlblJlc3BvbnNlKSxcbiAgICAgIG1hcChyZXMgPT4gdGhpcy5hdXRoVHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlcy5kYXRhLmdlbmVyYXRlQ3VzdG9tZXJUb2tlbikpLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4gdGhyb3dFcnJvcih0cmFuc2Zvcm1NYWdlbnRvQXV0aEVycm9yKGVycikpKVxuICAgIClcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcG9sbG8ubXV0YXRlPE1hZ2VudG9SZXZva2VDdXN0b21lclRva2VuUmVzcG9uc2U+KHttdXRhdGlvbjogcmV2b2tlQ3VzdG9tZXJUb2tlbk11dGF0aW9ufSkucGlwZShcbiAgICAgIG1hcCh2YWxpZGF0ZVJldm9rZVRva2VuUmVzcG9uc2UpLFxuICAgICAgbWFwVG8odW5kZWZpbmVkKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHRocm93RXJyb3IodHJhbnNmb3JtTWFnZW50b0F1dGhFcnJvcihlcnIpKSlcbiAgICApXG4gIH1cbn1cbiJdfQ==