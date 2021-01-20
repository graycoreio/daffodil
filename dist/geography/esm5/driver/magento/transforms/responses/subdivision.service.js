var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Transforms magento carts into an object usable by daffodil.
 */
var DaffMagentoSubdivisionTransformer = /** @class */ (function () {
    function DaffMagentoSubdivisionTransformer() {
    }
    /**
     * Transforms the MagentoRegion from the magento region query into a DaffSubdivision.
     */
    /**
     * Transforms the MagentoRegion from the magento region query into a DaffSubdivision.
     * @param {?} region
     * @return {?}
     */
    DaffMagentoSubdivisionTransformer.prototype.transform = /**
     * Transforms the MagentoRegion from the magento region query into a DaffSubdivision.
     * @param {?} region
     * @return {?}
     */
    function (region) {
        return region ? __assign({ magento_region: region }, { id: String(region.id), name: region.name, iso_3166_2: region.code }) : null;
    };
    DaffMagentoSubdivisionTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoSubdivisionTransformer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoSubdivisionTransformer_Factory() { return new DaffMagentoSubdivisionTransformer(); }, token: DaffMagentoSubdivisionTransformer, providedIn: "root" });
    return DaffMagentoSubdivisionTransformer;
}());
export { DaffMagentoSubdivisionTransformer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViZGl2aXNpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9nZW9ncmFwaHkvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJ0cmFuc2Zvcm1zL3Jlc3BvbnNlcy9zdWJkaXZpc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUzNDO0lBQUE7S0FnQkM7SUFaQzs7T0FFRzs7Ozs7O0lBQ0gscURBQVM7Ozs7O0lBQVQsVUFBVSxNQUFxQjtRQUM3QixPQUFPLE1BQU0sQ0FBQyxDQUFDLFVBQ1YsRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLElBRTNCLEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUNyQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFDakIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUE7SUFDVixDQUFDOztnQkFmRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NENBWEQ7Q0F5QkMsQUFoQkQsSUFnQkM7U0FiWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZTdWJkaXZpc2lvbiB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHknO1xuXG5pbXBvcnQgeyBNYWdlbnRvUmVnaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlcy9yZWdpb24nO1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgbWFnZW50byBjYXJ0cyBpbnRvIGFuIG9iamVjdCB1c2FibGUgYnkgZGFmZm9kaWwuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvU3ViZGl2aXNpb25UcmFuc2Zvcm1lciB7XG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBNYWdlbnRvUmVnaW9uIGZyb20gdGhlIG1hZ2VudG8gcmVnaW9uIHF1ZXJ5IGludG8gYSBEYWZmU3ViZGl2aXNpb24uXG4gICAqL1xuICB0cmFuc2Zvcm0ocmVnaW9uOiBNYWdlbnRvUmVnaW9uKTogRGFmZlN1YmRpdmlzaW9uIHtcbiAgICByZXR1cm4gcmVnaW9uID8ge1xuICAgICAgLi4ue21hZ2VudG9fcmVnaW9uOiByZWdpb259LFxuXG4gICAgICBpZDogU3RyaW5nKHJlZ2lvbi5pZCksXG4gICAgICBuYW1lOiByZWdpb24ubmFtZSxcbiAgICAgIGlzb18zMTY2XzI6IHJlZ2lvbi5jb2RlXG4gICAgfSA6IG51bGxcbiAgfVxufVxuIl19