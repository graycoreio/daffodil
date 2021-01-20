/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffCountryFactory, DaffSubdivisionFactory } from '@daffodil/geography/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/geography/testing";
/**
 * An in-memory service that stubs out the backend services for getting countries.
 */
export class DaffInMemoryBackendGeographyService {
    /**
     * @param {?} countryFactory
     * @param {?} subdivisionFactory
     */
    constructor(countryFactory, subdivisionFactory) {
        this.countryFactory = countryFactory;
        this.subdivisionFactory = subdivisionFactory;
        this.countries = this.countryFactory.createMany(5);
        this.countries.forEach((/**
         * @param {?} country
         * @return {?}
         */
        country => country.subdivisions = this.subdivisionFactory.createMany(5)));
    }
    /**
     * Creates a fake database of countries for the geography inmemory backend service.
     *
     * @param {?} reqInfo
     * @return {?} A fake database of an array of countries
     */
    createDb(reqInfo) {
        if (reqInfo) {
            /** @type {?} */
            const seedData = reqInfo.utils.getJsonBody(reqInfo.req).countries;
            if (seedData) {
                this.countries = seedData;
            }
        }
        return {
            countries: this.countries
        };
    }
    /**
     * Responds to GET requests.
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: reqInfo.id ? this.getCountry(reqInfo) : this.listCountries(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getCountry(reqInfo) {
        return reqInfo.collection.find((/**
         * @param {?} country
         * @return {?}
         */
        country => country.id === reqInfo.id));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    listCountries(reqInfo) {
        return reqInfo.collection;
    }
}
DaffInMemoryBackendGeographyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendGeographyService.ctorParameters = () => [
    { type: DaffCountryFactory },
    { type: DaffSubdivisionFactory }
];
/** @nocollapse */ DaffInMemoryBackendGeographyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendGeographyService_Factory() { return new DaffInMemoryBackendGeographyService(i0.ɵɵinject(i1.DaffCountryFactory), i0.ɵɵinject(i1.DaffSubdivisionFactory)); }, token: DaffInMemoryBackendGeographyService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryBackendGeographyService.prototype.countries;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendGeographyService.prototype.countryFactory;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendGeographyService.prototype.subdivisionFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci9pbi1tZW1vcnkvIiwic291cmNlcyI6WyJiYWNrZW5kL2dlb2dyYXBoeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFHTCxNQUFNLEVBQ1AsTUFBTSwyQkFBMkIsQ0FBQztBQUluQyxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLHNCQUFzQixFQUN2QixNQUFNLDZCQUE2QixDQUFDOzs7Ozs7QUFRckMsTUFBTSxPQUFPLG1DQUFtQzs7Ozs7SUFHOUMsWUFDVSxjQUFrQyxFQUNsQyxrQkFBMEM7UUFEMUMsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ2xDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBd0I7UUFFbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFBO0lBQ2pHLENBQUM7Ozs7Ozs7SUFPRCxRQUFRLENBQUMsT0FBb0I7UUFDM0IsSUFBSSxPQUFPLEVBQUU7O2tCQUNMLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUztZQUNqRSxJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQzthQUMzQjtTQUNGO1FBRUQsT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMxQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBS0QsR0FBRyxDQUFDLE9BQW9CO1FBQ3RCLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUN6RSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDbEIsQ0FBQyxFQUFDLENBQUE7SUFDTCxDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsT0FBb0I7UUFDckMsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLEVBQUUsRUFBQyxDQUFBO0lBQ3RFLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxPQUFvQjtRQUN4QyxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUE7SUFDM0IsQ0FBQzs7O1lBaERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVRDLGtCQUFrQjtZQUNsQixzQkFBc0I7Ozs7O0lBVXRCLHdEQUF5Qjs7Ozs7SUFHdkIsNkRBQTBDOzs7OztJQUMxQyxpRUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBJbk1lbW9yeURiU2VydmljZSxcbiAgUmVxdWVzdEluZm8sXG4gIFNUQVRVU1xufSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcblxuaW1wb3J0IHsgRGFmZkluTWVtb3J5RGF0YVNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IERhZmZDb3VudHJ5IH0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeSc7XG5pbXBvcnQge1xuICBEYWZmQ291bnRyeUZhY3RvcnksXG4gIERhZmZTdWJkaXZpc2lvbkZhY3Rvcnlcbn0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeS90ZXN0aW5nJztcblxuLyoqXG4gKiBBbiBpbi1tZW1vcnkgc2VydmljZSB0aGF0IHN0dWJzIG91dCB0aGUgYmFja2VuZCBzZXJ2aWNlcyBmb3IgZ2V0dGluZyBjb3VudHJpZXMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUJhY2tlbmRHZW9ncmFwaHlTZXJ2aWNlIGltcGxlbWVudHMgSW5NZW1vcnlEYlNlcnZpY2UsIERhZmZJbk1lbW9yeURhdGFTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY291bnRyaWVzOiBEYWZmQ291bnRyeVtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY291bnRyeUZhY3Rvcnk6IERhZmZDb3VudHJ5RmFjdG9yeSxcbiAgICBwcml2YXRlIHN1YmRpdmlzaW9uRmFjdG9yeTogRGFmZlN1YmRpdmlzaW9uRmFjdG9yeVxuICApIHtcbiAgICB0aGlzLmNvdW50cmllcyA9IHRoaXMuY291bnRyeUZhY3RvcnkuY3JlYXRlTWFueSg1KTtcbiAgICB0aGlzLmNvdW50cmllcy5mb3JFYWNoKGNvdW50cnkgPT4gY291bnRyeS5zdWJkaXZpc2lvbnMgPSB0aGlzLnN1YmRpdmlzaW9uRmFjdG9yeS5jcmVhdGVNYW55KDUpKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBmYWtlIGRhdGFiYXNlIG9mIGNvdW50cmllcyBmb3IgdGhlIGdlb2dyYXBoeSBpbm1lbW9yeSBiYWNrZW5kIHNlcnZpY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgZmFrZSBkYXRhYmFzZSBvZiBhbiBhcnJheSBvZiBjb3VudHJpZXNcbiAgICovXG4gIGNyZWF0ZURiKHJlcUluZm86IFJlcXVlc3RJbmZvKTogYW55IHtcbiAgICBpZiAocmVxSW5mbykge1xuICAgICAgY29uc3Qgc2VlZERhdGEgPSByZXFJbmZvLnV0aWxzLmdldEpzb25Cb2R5KHJlcUluZm8ucmVxKS5jb3VudHJpZXM7XG4gICAgICBpZiAoc2VlZERhdGEpIHtcbiAgICAgICAgdGhpcy5jb3VudHJpZXMgPSBzZWVkRGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY291bnRyaWVzOiB0aGlzLmNvdW50cmllc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmVzcG9uZHMgdG8gR0VUIHJlcXVlc3RzLlxuICAgKi9cbiAgZ2V0KHJlcUluZm86IFJlcXVlc3RJbmZvKTogYW55IHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gKHtcbiAgICAgIGJvZHk6IHJlcUluZm8uaWQgPyB0aGlzLmdldENvdW50cnkocmVxSW5mbykgOiB0aGlzLmxpc3RDb3VudHJpZXMocmVxSW5mbyksXG4gICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgIH0pKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb3VudHJ5KHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8uY29sbGVjdGlvbi5maW5kKGNvdW50cnkgPT4gY291bnRyeS5pZCA9PT0gcmVxSW5mby5pZClcbiAgfVxuXG4gIHByaXZhdGUgbGlzdENvdW50cmllcyhyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLmNvbGxlY3Rpb25cbiAgfVxufVxuIl19