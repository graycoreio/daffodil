/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Transforms magento auths into an object usable by daffodil.
 */
var DaffMagentoLoginInfoTransformerService = /** @class */ (function () {
    function DaffMagentoLoginInfoTransformerService() {
    }
    /**
     * @param {?} registration
     * @return {?}
     */
    DaffMagentoLoginInfoTransformerService.prototype.transform = /**
     * @param {?} registration
     * @return {?}
     */
    function (registration) {
        return {
            email: registration.customer.email,
            password: registration.password
        };
    };
    DaffMagentoLoginInfoTransformerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoLoginInfoTransformerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoLoginInfoTransformerService_Factory() { return new DaffMagentoLoginInfoTransformerService(); }, token: DaffMagentoLoginInfoTransformerService, providedIn: "root" });
    return DaffMagentoLoginInfoTransformerService;
}());
export { DaffMagentoLoginInfoTransformerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4taW5mby10cmFuc2Zvcm1lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vdHJhbnNmb3Jtcy9sb2dpbi1pbmZvLXRyYW5zZm9ybWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUTNDO0lBQUE7S0FVQzs7Ozs7SUFOQywwREFBUzs7OztJQUFULFVBQVUsWUFBcUM7UUFDN0MsT0FBTztZQUNMLEtBQUssRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDbEMsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO1NBQ2hDLENBQUE7SUFDSCxDQUFDOztnQkFURixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7aURBVkQ7Q0FrQkMsQUFWRCxJQVVDO1NBUFksc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmTG9naW5JbmZvIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2xvZ2luLWluZm8nXG5pbXBvcnQgeyBEYWZmQWNjb3VudFJlZ2lzdHJhdGlvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9hY2NvdW50LXJlZ2lzdHJhdGlvbidcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIG1hZ2VudG8gYXV0aHMgaW50byBhbiBvYmplY3QgdXNhYmxlIGJ5IGRhZmZvZGlsLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b0xvZ2luSW5mb1RyYW5zZm9ybWVyU2VydmljZSB7XG4gIHRyYW5zZm9ybShyZWdpc3RyYXRpb246IERhZmZBY2NvdW50UmVnaXN0cmF0aW9uKTogRGFmZkxvZ2luSW5mbyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVtYWlsOiByZWdpc3RyYXRpb24uY3VzdG9tZXIuZW1haWwsXG4gICAgICBwYXNzd29yZDogcmVnaXN0cmF0aW9uLnBhc3N3b3JkXG4gICAgfVxuICB9XG59XG4iXX0=