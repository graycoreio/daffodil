/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Transforms magento auths into an object usable by daffodil.
 */
export class DaffMagentoLoginInfoTransformerService {
    /**
     * @param {?} registration
     * @return {?}
     */
    transform(registration) {
        return {
            email: registration.customer.email,
            password: registration.password
        };
    }
}
DaffMagentoLoginInfoTransformerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoLoginInfoTransformerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoLoginInfoTransformerService_Factory() { return new DaffMagentoLoginInfoTransformerService(); }, token: DaffMagentoLoginInfoTransformerService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4taW5mby10cmFuc2Zvcm1lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vdHJhbnNmb3Jtcy9sb2dpbi1pbmZvLXRyYW5zZm9ybWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBVzNDLE1BQU0sT0FBTyxzQ0FBc0M7Ozs7O0lBQ2pELFNBQVMsQ0FBQyxZQUFxQztRQUM3QyxPQUFPO1lBQ0wsS0FBSyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSztZQUNsQyxRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVE7U0FDaEMsQ0FBQTtJQUNILENBQUM7OztZQVRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkxvZ2luSW5mbyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9sb2dpbi1pbmZvJ1xuaW1wb3J0IHsgRGFmZkFjY291bnRSZWdpc3RyYXRpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvYWNjb3VudC1yZWdpc3RyYXRpb24nXG5cbi8qKlxuICogVHJhbnNmb3JtcyBtYWdlbnRvIGF1dGhzIGludG8gYW4gb2JqZWN0IHVzYWJsZSBieSBkYWZmb2RpbC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9Mb2dpbkluZm9UcmFuc2Zvcm1lclNlcnZpY2Uge1xuICB0cmFuc2Zvcm0ocmVnaXN0cmF0aW9uOiBEYWZmQWNjb3VudFJlZ2lzdHJhdGlvbik6IERhZmZMb2dpbkluZm8ge1xuICAgIHJldHVybiB7XG4gICAgICBlbWFpbDogcmVnaXN0cmF0aW9uLmN1c3RvbWVyLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHJlZ2lzdHJhdGlvbi5wYXNzd29yZFxuICAgIH1cbiAgfVxufVxuIl19