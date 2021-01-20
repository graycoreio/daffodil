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
import { DaffMagentoSubdivisionTransformer } from './subdivision.service';
import * as i0 from "@angular/core";
import * as i1 from "./subdivision.service";
/**
 * Transforms magento carts into an object usable by daffodil.
 */
var DaffMagentoCountryTransformer = /** @class */ (function () {
    function DaffMagentoCountryTransformer(subdivisionTransformer) {
        this.subdivisionTransformer = subdivisionTransformer;
    }
    /**
     * @private
     * @param {?} regions
     * @return {?}
     */
    DaffMagentoCountryTransformer.prototype.transformSubdivisions = /**
     * @private
     * @param {?} regions
     * @return {?}
     */
    function (regions) {
        var _this = this;
        return regions.map((/**
         * @param {?} region
         * @return {?}
         */
        function (region) { return _this.subdivisionTransformer.transform(region); }));
    };
    /**
     * Transforms the MagentoCountry from the magento country query into a DaffCountry.
     */
    /**
     * Transforms the MagentoCountry from the magento country query into a DaffCountry.
     * @param {?} country
     * @return {?}
     */
    DaffMagentoCountryTransformer.prototype.transform = /**
     * Transforms the MagentoCountry from the magento country query into a DaffCountry.
     * @param {?} country
     * @return {?}
     */
    function (country) {
        return country ? __assign({ magento_country: country }, { subdivisions: this.transformSubdivisions(country.available_regions || []), id: country.id, name: country.full_name_locale, name_en: country.full_name_english, alpha2: country.two_letter_abbreviation, alpha3: country.three_letter_abbreviation }) : null;
    };
    DaffMagentoCountryTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCountryTransformer.ctorParameters = function () { return [
        { type: DaffMagentoSubdivisionTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCountryTransformer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCountryTransformer_Factory() { return new DaffMagentoCountryTransformer(i0.ɵɵinject(i1.DaffMagentoSubdivisionTransformer)); }, token: DaffMagentoCountryTransformer, providedIn: "root" });
    return DaffMagentoCountryTransformer;
}());
export { DaffMagentoCountryTransformer };
if (false) {
    /** @type {?} */
    DaffMagentoCountryTransformer.prototype.subdivisionTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2dlb2dyYXBoeS9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInRyYW5zZm9ybXMvcmVzcG9uc2VzL2NvdW50cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFNMUU7SUFJRSx1Q0FBbUIsc0JBQXlEO1FBQXpELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBbUM7SUFBRyxDQUFDOzs7Ozs7SUFFeEUsNkRBQXFCOzs7OztJQUE3QixVQUE4QixPQUE0QztRQUExRSxpQkFFQztRQURDLE9BQU8sT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQTdDLENBQTZDLEVBQUMsQ0FBQTtJQUM3RSxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILGlEQUFTOzs7OztJQUFULFVBQVUsT0FBdUI7UUFDL0IsT0FBTyxPQUFPLENBQUMsQ0FBQyxVQUNYLEVBQUMsZUFBZSxFQUFFLE9BQU8sRUFBQyxJQUU3QixZQUFZLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUMsRUFFekUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQ2QsSUFBSSxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsRUFDOUIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsRUFDbEMsTUFBTSxFQUFFLE9BQU8sQ0FBQyx1QkFBdUIsRUFDdkMsTUFBTSxFQUFFLE9BQU8sQ0FBQyx5QkFBeUIsSUFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQTtJQUNWLENBQUM7O2dCQXpCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVJRLGlDQUFpQzs7O3dDQUoxQztDQW9DQyxBQTFCRCxJQTBCQztTQXZCWSw2QkFBNkI7OztJQUM1QiwrREFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZDb3VudHJ5IH0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeSc7XG5cbmltcG9ydCB7IERhZmZNYWdlbnRvU3ViZGl2aXNpb25UcmFuc2Zvcm1lciB9IGZyb20gJy4vc3ViZGl2aXNpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWdlbnRvQ291bnRyeSB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZXMvY291bnRyeSc7XG5cbi8qKlxuICogVHJhbnNmb3JtcyBtYWdlbnRvIGNhcnRzIGludG8gYW4gb2JqZWN0IHVzYWJsZSBieSBkYWZmb2RpbC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9Db3VudHJ5VHJhbnNmb3JtZXIge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3ViZGl2aXNpb25UcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9TdWJkaXZpc2lvblRyYW5zZm9ybWVyKSB7fVxuXG4gIHByaXZhdGUgdHJhbnNmb3JtU3ViZGl2aXNpb25zKHJlZ2lvbnM6IE1hZ2VudG9Db3VudHJ5WydhdmFpbGFibGVfcmVnaW9ucyddKTogRGFmZkNvdW50cnlbJ3N1YmRpdmlzaW9ucyddIHtcbiAgICByZXR1cm4gcmVnaW9ucy5tYXAocmVnaW9uID0+IHRoaXMuc3ViZGl2aXNpb25UcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVnaW9uKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBNYWdlbnRvQ291bnRyeSBmcm9tIHRoZSBtYWdlbnRvIGNvdW50cnkgcXVlcnkgaW50byBhIERhZmZDb3VudHJ5LlxuICAgKi9cbiAgdHJhbnNmb3JtKGNvdW50cnk6IE1hZ2VudG9Db3VudHJ5KTogRGFmZkNvdW50cnkge1xuICAgIHJldHVybiBjb3VudHJ5ID8ge1xuICAgICAgLi4ue21hZ2VudG9fY291bnRyeTogY291bnRyeX0sXG5cbiAgICAgIHN1YmRpdmlzaW9uczogdGhpcy50cmFuc2Zvcm1TdWJkaXZpc2lvbnMoY291bnRyeS5hdmFpbGFibGVfcmVnaW9ucyB8fCBbXSksXG5cbiAgICAgIGlkOiBjb3VudHJ5LmlkLFxuICAgICAgbmFtZTogY291bnRyeS5mdWxsX25hbWVfbG9jYWxlLFxuICAgICAgbmFtZV9lbjogY291bnRyeS5mdWxsX25hbWVfZW5nbGlzaCxcbiAgICAgIGFscGhhMjogY291bnRyeS50d29fbGV0dGVyX2FiYnJldmlhdGlvbixcbiAgICAgIGFscGhhMzogY291bnRyeS50aHJlZV9sZXR0ZXJfYWJicmV2aWF0aW9uLFxuICAgIH0gOiBudWxsXG4gIH1cbn1cbiJdfQ==