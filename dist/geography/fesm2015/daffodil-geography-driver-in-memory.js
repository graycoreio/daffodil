import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffCountryNotFoundError, DaffGeographyDriver } from '@daffodil/geography/driver';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffCountryFactory, DaffSubdivisionFactory } from '@daffodil/geography/testing';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryGeographyService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/countries';
    }
    /**
     * @param {?} countryId
     * @return {?}
     */
    get(countryId) {
        return this.http.get(`${this.url}/${countryId}`).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(DaffCountryNotFoundError))), map((/**
         * @param {?} result
         * @return {?}
         */
        result => result)));
    }
    /**
     * @return {?}
     */
    list() {
        return this.http.get(`${this.url}/`);
    }
}
DaffInMemoryGeographyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryGeographyService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryGeographyService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryGeographyService_Factory() { return new DaffInMemoryGeographyService(ɵɵinject(HttpClient)); }, token: DaffInMemoryGeographyService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryGeographyService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryGeographyService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffGeographyInMemoryDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffGeographyInMemoryDriverModule,
            providers: [
                {
                    provide: DaffGeographyDriver,
                    useExisting: DaffInMemoryGeographyService
                },
            ]
        };
    }
}
DaffGeographyInMemoryDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An in-memory service that stubs out the backend services for getting countries.
 */
class DaffInMemoryBackendGeographyService {
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
/** @nocollapse */ DaffInMemoryBackendGeographyService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendGeographyService_Factory() { return new DaffInMemoryBackendGeographyService(ɵɵinject(DaffCountryFactory), ɵɵinject(DaffSubdivisionFactory)); }, token: DaffInMemoryBackendGeographyService, providedIn: "root" });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffGeographyInMemoryDriverModule, DaffInMemoryBackendGeographyService, DaffInMemoryGeographyService };
//# sourceMappingURL=daffodil-geography-driver-in-memory.js.map
