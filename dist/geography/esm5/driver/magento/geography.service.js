/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DaffMagentoCountryTransformer } from './transforms/responses/country.service';
import { getCountries } from './queries/public_api';
import { getCountry } from './queries/get-country';
import { validateGetCountriesResponse } from './validators/public_api';
import { transformMagentoGeographyError } from './errors/transform';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "./transforms/responses/country.service";
/**
 * A service for making Magento GraphQL queries for carts.
 */
var DaffGeographyMagentoService = /** @class */ (function () {
    function DaffGeographyMagentoService(apollo, countryTransformer) {
        this.apollo = apollo;
        this.countryTransformer = countryTransformer;
    }
    /**
     * @return {?}
     */
    DaffGeographyMagentoService.prototype.list = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.apollo.query({
            query: getCountries,
        }).pipe(map(validateGetCountriesResponse), map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.countries.map((/**
         * @param {?} country
         * @return {?}
         */
        function (country) { return _this.countryTransformer.transform(country); })); })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformMagentoGeographyError(err)); })));
    };
    /**
     * @param {?} countryId
     * @return {?}
     */
    DaffGeographyMagentoService.prototype.get = /**
     * @param {?} countryId
     * @return {?}
     */
    function (countryId) {
        var _this = this;
        return this.apollo.query({
            query: getCountry,
            variables: {
                countryId: countryId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.countryTransformer.transform(result.data.country); })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformMagentoGeographyError(err)); })));
    };
    DaffGeographyMagentoService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffGeographyMagentoService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffMagentoCountryTransformer }
    ]; };
    /** @nocollapse */ DaffGeographyMagentoService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffGeographyMagentoService_Factory() { return new DaffGeographyMagentoService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DaffMagentoCountryTransformer)); }, token: DaffGeographyMagentoService, providedIn: "root" });
    return DaffGeographyMagentoService;
}());
export { DaffGeographyMagentoService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffGeographyMagentoService.prototype.apollo;
    /** @type {?} */
    DaffGeographyMagentoService.prototype.countryTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsiZ2VvZ3JhcGh5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUtqRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsWUFBWSxFQUErQixNQUFNLHNCQUFzQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7OztBQUtwRTtJQUlFLHFDQUNVLE1BQWMsRUFDZixrQkFBaUQ7UUFEaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNmLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBK0I7SUFDdkQsQ0FBQzs7OztJQUVKLDBDQUFJOzs7SUFBSjtRQUFBLGlCQVFDO1FBUEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBOEI7WUFDcEQsS0FBSyxFQUFFLFlBQVk7U0FDcEIsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsNEJBQTRCLENBQUMsRUFDakMsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBMUMsQ0FBMEMsRUFBQyxFQUFoRixDQUFnRixFQUFDLEVBQy9GLFVBQVU7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUEvQyxDQUErQyxFQUFDLENBQ25FLENBQUM7SUFDSixDQUFDOzs7OztJQUVELHlDQUFHOzs7O0lBQUgsVUFBSSxTQUE0QjtRQUFoQyxpQkFVQztRQVRDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQTRCO1lBQ2xELEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRTtnQkFDVCxTQUFTLFdBQUE7YUFDVjtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUF0RCxDQUFzRCxFQUFDLEVBQ3JFLFVBQVU7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUEvQyxDQUErQyxFQUFDLENBQ25FLENBQUM7SUFDSixDQUFDOztnQkE3QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFwQlEsTUFBTTtnQkFRTiw2QkFBNkI7OztzQ0FUdEM7Q0FpREMsQUE5QkQsSUE4QkM7U0EzQlksMkJBQTJCOzs7Ozs7SUFFcEMsNkNBQXNCOztJQUN0Qix5REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcG9sbG8gfSBmcm9tICdhcG9sbG8tYW5ndWxhcic7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGFmZkNvdW50cnkgfSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5JztcbmltcG9ydCB7IERhZmZHZW9ncmFwaHlTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeS9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmTWFnZW50b0NvdW50cnlUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9yZXNwb25zZXMvY291bnRyeS5zZXJ2aWNlJztcbmltcG9ydCB7IGdldENvdW50cmllcywgTWFnZW50b0dldENvdW50cmllc1Jlc3BvbnNlIH0gZnJvbSAnLi9xdWVyaWVzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgZ2V0Q291bnRyeSB9IGZyb20gJy4vcXVlcmllcy9nZXQtY291bnRyeSc7XG5pbXBvcnQgeyBNYWdlbnRvR2V0Q291bnRyeVJlc3BvbnNlIH0gZnJvbSAnLi9xdWVyaWVzL3Jlc3BvbnNlcy9nZXQtY291bnRyeSc7XG5pbXBvcnQgeyB2YWxpZGF0ZUdldENvdW50cmllc1Jlc3BvbnNlIH0gZnJvbSAnLi92YWxpZGF0b3JzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgdHJhbnNmb3JtTWFnZW50b0dlb2dyYXBoeUVycm9yIH0gZnJvbSAnLi9lcnJvcnMvdHJhbnNmb3JtJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIG1ha2luZyBNYWdlbnRvIEdyYXBoUUwgcXVlcmllcyBmb3IgY2FydHMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZHZW9ncmFwaHlNYWdlbnRvU2VydmljZSBpbXBsZW1lbnRzIERhZmZHZW9ncmFwaHlTZXJ2aWNlSW50ZXJmYWNlPERhZmZDb3VudHJ5PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXBvbGxvOiBBcG9sbG8sXG4gICAgcHVibGljIGNvdW50cnlUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9Db3VudHJ5VHJhbnNmb3JtZXIsXG4gICkge31cblxuICBsaXN0KCk6IE9ic2VydmFibGU8RGFmZkNvdW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeTxNYWdlbnRvR2V0Q291bnRyaWVzUmVzcG9uc2U+KHtcbiAgICAgIHF1ZXJ5OiBnZXRDb3VudHJpZXMsXG4gICAgfSkucGlwZShcbiAgICAgIG1hcCh2YWxpZGF0ZUdldENvdW50cmllc1Jlc3BvbnNlKSxcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0LmRhdGEuY291bnRyaWVzLm1hcChjb3VudHJ5ID0+IHRoaXMuY291bnRyeVRyYW5zZm9ybWVyLnRyYW5zZm9ybShjb3VudHJ5KSkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4gdGhyb3dFcnJvcih0cmFuc2Zvcm1NYWdlbnRvR2VvZ3JhcGh5RXJyb3IoZXJyKSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldChjb3VudHJ5SWQ6IERhZmZDb3VudHJ5WydpZCddKTogT2JzZXJ2YWJsZTxEYWZmQ291bnRyeT4ge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeTxNYWdlbnRvR2V0Q291bnRyeVJlc3BvbnNlPih7XG4gICAgICBxdWVyeTogZ2V0Q291bnRyeSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjb3VudHJ5SWRcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiB0aGlzLmNvdW50cnlUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzdWx0LmRhdGEuY291bnRyeSkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4gdGhyb3dFcnJvcih0cmFuc2Zvcm1NYWdlbnRvR2VvZ3JhcGh5RXJyb3IoZXJyKSkpXG4gICAgKTtcbiAgfVxufVxuIl19