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
export class DaffMagentoCountryTransformer {
    /**
     * @param {?} subdivisionTransformer
     */
    constructor(subdivisionTransformer) {
        this.subdivisionTransformer = subdivisionTransformer;
    }
    /**
     * @private
     * @param {?} regions
     * @return {?}
     */
    transformSubdivisions(regions) {
        return regions.map((/**
         * @param {?} region
         * @return {?}
         */
        region => this.subdivisionTransformer.transform(region)));
    }
    /**
     * Transforms the MagentoCountry from the magento country query into a DaffCountry.
     * @param {?} country
     * @return {?}
     */
    transform(country) {
        return country ? Object.assign({ magento_country: country }, { subdivisions: this.transformSubdivisions(country.available_regions || []), id: country.id, name: country.full_name_locale, name_en: country.full_name_english, alpha2: country.two_letter_abbreviation, alpha3: country.three_letter_abbreviation }) : null;
    }
}
DaffMagentoCountryTransformer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCountryTransformer.ctorParameters = () => [
    { type: DaffMagentoSubdivisionTransformer }
];
/** @nocollapse */ DaffMagentoCountryTransformer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCountryTransformer_Factory() { return new DaffMagentoCountryTransformer(i0.ɵɵinject(i1.DaffMagentoSubdivisionTransformer)); }, token: DaffMagentoCountryTransformer, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffMagentoCountryTransformer.prototype.subdivisionTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2dlb2dyYXBoeS9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInRyYW5zZm9ybXMvcmVzcG9uc2VzL2NvdW50cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBUzFFLE1BQU0sT0FBTyw2QkFBNkI7Ozs7SUFDeEMsWUFBbUIsc0JBQXlEO1FBQXpELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBbUM7SUFBRyxDQUFDOzs7Ozs7SUFFeEUscUJBQXFCLENBQUMsT0FBNEM7UUFDeEUsT0FBTyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFBO0lBQzdFLENBQUM7Ozs7OztJQUtELFNBQVMsQ0FBQyxPQUF1QjtRQUMvQixPQUFPLE9BQU8sQ0FBQyxDQUFDLGVBQ1gsRUFBQyxlQUFlLEVBQUUsT0FBTyxFQUFDLElBRTdCLFlBQVksRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixJQUFJLEVBQUUsQ0FBQyxFQUV6RSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFDZCxJQUFJLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixFQUM5QixPQUFPLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixFQUNsQyxNQUFNLEVBQUUsT0FBTyxDQUFDLHVCQUF1QixFQUN2QyxNQUFNLEVBQUUsT0FBTyxDQUFDLHlCQUF5QixJQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFBO0lBQ1YsQ0FBQzs7O1lBekJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLGlDQUFpQzs7Ozs7SUFVNUIsK0RBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ291bnRyeSB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHknO1xuXG5pbXBvcnQgeyBEYWZmTWFnZW50b1N1YmRpdmlzaW9uVHJhbnNmb3JtZXIgfSBmcm9tICcuL3N1YmRpdmlzaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFnZW50b0NvdW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2VzL2NvdW50cnknO1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgbWFnZW50byBjYXJ0cyBpbnRvIGFuIG9iamVjdCB1c2FibGUgYnkgZGFmZm9kaWwuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQ291bnRyeVRyYW5zZm9ybWVyIHtcbiAgY29uc3RydWN0b3IocHVibGljIHN1YmRpdmlzaW9uVHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvU3ViZGl2aXNpb25UcmFuc2Zvcm1lcikge31cblxuICBwcml2YXRlIHRyYW5zZm9ybVN1YmRpdmlzaW9ucyhyZWdpb25zOiBNYWdlbnRvQ291bnRyeVsnYXZhaWxhYmxlX3JlZ2lvbnMnXSk6IERhZmZDb3VudHJ5WydzdWJkaXZpc2lvbnMnXSB7XG4gICAgcmV0dXJuIHJlZ2lvbnMubWFwKHJlZ2lvbiA9PiB0aGlzLnN1YmRpdmlzaW9uVHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlZ2lvbikpXG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgTWFnZW50b0NvdW50cnkgZnJvbSB0aGUgbWFnZW50byBjb3VudHJ5IHF1ZXJ5IGludG8gYSBEYWZmQ291bnRyeS5cbiAgICovXG4gIHRyYW5zZm9ybShjb3VudHJ5OiBNYWdlbnRvQ291bnRyeSk6IERhZmZDb3VudHJ5IHtcbiAgICByZXR1cm4gY291bnRyeSA/IHtcbiAgICAgIC4uLnttYWdlbnRvX2NvdW50cnk6IGNvdW50cnl9LFxuXG4gICAgICBzdWJkaXZpc2lvbnM6IHRoaXMudHJhbnNmb3JtU3ViZGl2aXNpb25zKGNvdW50cnkuYXZhaWxhYmxlX3JlZ2lvbnMgfHwgW10pLFxuXG4gICAgICBpZDogY291bnRyeS5pZCxcbiAgICAgIG5hbWU6IGNvdW50cnkuZnVsbF9uYW1lX2xvY2FsZSxcbiAgICAgIG5hbWVfZW46IGNvdW50cnkuZnVsbF9uYW1lX2VuZ2xpc2gsXG4gICAgICBhbHBoYTI6IGNvdW50cnkudHdvX2xldHRlcl9hYmJyZXZpYXRpb24sXG4gICAgICBhbHBoYTM6IGNvdW50cnkudGhyZWVfbGV0dGVyX2FiYnJldmlhdGlvbixcbiAgICB9IDogbnVsbFxuICB9XG59XG4iXX0=