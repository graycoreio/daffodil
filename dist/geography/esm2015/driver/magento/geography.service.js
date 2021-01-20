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
export class DaffGeographyMagentoService {
    /**
     * @param {?} apollo
     * @param {?} countryTransformer
     */
    constructor(apollo, countryTransformer) {
        this.apollo = apollo;
        this.countryTransformer = countryTransformer;
    }
    /**
     * @return {?}
     */
    list() {
        return this.apollo.query({
            query: getCountries,
        }).pipe(map(validateGetCountriesResponse), map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.countries.map((/**
         * @param {?} country
         * @return {?}
         */
        country => this.countryTransformer.transform(country))))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformMagentoGeographyError(err)))));
    }
    /**
     * @param {?} countryId
     * @return {?}
     */
    get(countryId) {
        return this.apollo.query({
            query: getCountry,
            variables: {
                countryId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.countryTransformer.transform(result.data.country))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformMagentoGeographyError(err)))));
    }
}
DaffGeographyMagentoService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffGeographyMagentoService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffMagentoCountryTransformer }
];
/** @nocollapse */ DaffGeographyMagentoService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffGeographyMagentoService_Factory() { return new DaffGeographyMagentoService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DaffMagentoCountryTransformer)); }, token: DaffGeographyMagentoService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffGeographyMagentoService.prototype.apollo;
    /** @type {?} */
    DaffGeographyMagentoService.prototype.countryTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsiZ2VvZ3JhcGh5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUtqRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsWUFBWSxFQUErQixNQUFNLHNCQUFzQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7OztBQVFwRSxNQUFNLE9BQU8sMkJBQTJCOzs7OztJQUN0QyxZQUNVLE1BQWMsRUFDZixrQkFBaUQ7UUFEaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNmLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBK0I7SUFDdkQsQ0FBQzs7OztJQUVKLElBQUk7UUFDRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUE4QjtZQUNwRCxLQUFLLEVBQUUsWUFBWTtTQUNwQixDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxFQUNqQyxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEVBQUMsRUFDL0YsVUFBVTs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FDbkUsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLFNBQTRCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQTRCO1lBQ2xELEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRTtnQkFDVCxTQUFTO2FBQ1Y7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxFQUNyRSxVQUFVOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQzs7O1lBN0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQXBCUSxNQUFNO1lBUU4sNkJBQTZCOzs7Ozs7OztJQWVsQyw2Q0FBc0I7O0lBQ3RCLHlEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmQ291bnRyeSB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHknO1xuaW1wb3J0IHsgRGFmZkdlb2dyYXBoeVNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZNYWdlbnRvQ291bnRyeVRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL3Jlc3BvbnNlcy9jb3VudHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0Q291bnRyaWVzLCBNYWdlbnRvR2V0Q291bnRyaWVzUmVzcG9uc2UgfSBmcm9tICcuL3F1ZXJpZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBnZXRDb3VudHJ5IH0gZnJvbSAnLi9xdWVyaWVzL2dldC1jb3VudHJ5JztcbmltcG9ydCB7IE1hZ2VudG9HZXRDb3VudHJ5UmVzcG9uc2UgfSBmcm9tICcuL3F1ZXJpZXMvcmVzcG9uc2VzL2dldC1jb3VudHJ5JztcbmltcG9ydCB7IHZhbGlkYXRlR2V0Q291bnRyaWVzUmVzcG9uc2UgfSBmcm9tICcuL3ZhbGlkYXRvcnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1NYWdlbnRvR2VvZ3JhcGh5RXJyb3IgfSBmcm9tICcuL2Vycm9ycy90cmFuc2Zvcm0nO1xuXG4vKipcbiAqIEEgc2VydmljZSBmb3IgbWFraW5nIE1hZ2VudG8gR3JhcGhRTCBxdWVyaWVzIGZvciBjYXJ0cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkdlb2dyYXBoeU1hZ2VudG9TZXJ2aWNlIGltcGxlbWVudHMgRGFmZkdlb2dyYXBoeVNlcnZpY2VJbnRlcmZhY2U8RGFmZkNvdW50cnk+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcG9sbG86IEFwb2xsbyxcbiAgICBwdWJsaWMgY291bnRyeVRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0NvdW50cnlUcmFuc2Zvcm1lcixcbiAgKSB7fVxuXG4gIGxpc3QoKTogT2JzZXJ2YWJsZTxEYWZmQ291bnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYXBvbGxvLnF1ZXJ5PE1hZ2VudG9HZXRDb3VudHJpZXNSZXNwb25zZT4oe1xuICAgICAgcXVlcnk6IGdldENvdW50cmllcyxcbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHZhbGlkYXRlR2V0Q291bnRyaWVzUmVzcG9uc2UpLFxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQuZGF0YS5jb3VudHJpZXMubWFwKGNvdW50cnkgPT4gdGhpcy5jb3VudHJ5VHJhbnNmb3JtZXIudHJhbnNmb3JtKGNvdW50cnkpKSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB0aHJvd0Vycm9yKHRyYW5zZm9ybU1hZ2VudG9HZW9ncmFwaHlFcnJvcihlcnIpKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0KGNvdW50cnlJZDogRGFmZkNvdW50cnlbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZDb3VudHJ5PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBvbGxvLnF1ZXJ5PE1hZ2VudG9HZXRDb3VudHJ5UmVzcG9uc2U+KHtcbiAgICAgIHF1ZXJ5OiBnZXRDb3VudHJ5LFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNvdW50cnlJZFxuICAgICAgfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHRoaXMuY291bnRyeVRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXN1bHQuZGF0YS5jb3VudHJ5KSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB0aHJvd0Vycm9yKHRyYW5zZm9ybU1hZ2VudG9HZW9ncmFwaHlFcnJvcihlcnIpKSlcbiAgICApO1xuICB9XG59XG4iXX0=