/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Transforms magento carts into an object usable by daffodil.
 */
export class DaffMagentoSubdivisionTransformer {
    /**
     * Transforms the MagentoRegion from the magento region query into a DaffSubdivision.
     * @param {?} region
     * @return {?}
     */
    transform(region) {
        return region ? Object.assign({ magento_region: region }, { id: String(region.id), name: region.name, iso_3166_2: region.code }) : null;
    }
}
DaffMagentoSubdivisionTransformer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoSubdivisionTransformer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoSubdivisionTransformer_Factory() { return new DaffMagentoSubdivisionTransformer(); }, token: DaffMagentoSubdivisionTransformer, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViZGl2aXNpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9nZW9ncmFwaHkvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJ0cmFuc2Zvcm1zL3Jlc3BvbnNlcy9zdWJkaXZpc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQVkzQyxNQUFNLE9BQU8saUNBQWlDOzs7Ozs7SUFJNUMsU0FBUyxDQUFDLE1BQXFCO1FBQzdCLE9BQU8sTUFBTSxDQUFDLENBQUMsZUFDVixFQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUMsSUFFM0IsRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQ3JCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUNqQixVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksSUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQTtJQUNWLENBQUM7OztZQWZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZlN1YmRpdmlzaW9uIH0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeSc7XG5cbmltcG9ydCB7IE1hZ2VudG9SZWdpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2VzL3JlZ2lvbic7XG5cbi8qKlxuICogVHJhbnNmb3JtcyBtYWdlbnRvIGNhcnRzIGludG8gYW4gb2JqZWN0IHVzYWJsZSBieSBkYWZmb2RpbC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9TdWJkaXZpc2lvblRyYW5zZm9ybWVyIHtcbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIE1hZ2VudG9SZWdpb24gZnJvbSB0aGUgbWFnZW50byByZWdpb24gcXVlcnkgaW50byBhIERhZmZTdWJkaXZpc2lvbi5cbiAgICovXG4gIHRyYW5zZm9ybShyZWdpb246IE1hZ2VudG9SZWdpb24pOiBEYWZmU3ViZGl2aXNpb24ge1xuICAgIHJldHVybiByZWdpb24gPyB7XG4gICAgICAuLi57bWFnZW50b19yZWdpb246IHJlZ2lvbn0sXG5cbiAgICAgIGlkOiBTdHJpbmcocmVnaW9uLmlkKSxcbiAgICAgIG5hbWU6IHJlZ2lvbi5uYW1lLFxuICAgICAgaXNvXzMxNjZfMjogcmVnaW9uLmNvZGVcbiAgICB9IDogbnVsbFxuICB9XG59XG4iXX0=