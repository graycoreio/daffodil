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
var DaffInMemoryGeographyService = /** @class */ (function () {
    function DaffInMemoryGeographyService(http) {
        this.http = http;
        this.url = '/api/countries';
    }
    /**
     * @param {?} countryId
     * @return {?}
     */
    DaffInMemoryGeographyService.prototype.get = /**
     * @param {?} countryId
     * @return {?}
     */
    function (countryId) {
        return this.http.get(this.url + "/" + countryId).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(DaffCountryNotFoundError); })), map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result; })));
    };
    /**
     * @return {?}
     */
    DaffInMemoryGeographyService.prototype.list = /**
     * @return {?}
     */
    function () {
        return this.http.get(this.url + "/");
    };
    DaffInMemoryGeographyService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryGeographyService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryGeographyService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryGeographyService_Factory() { return new DaffInMemoryGeographyService(ɵɵinject(HttpClient)); }, token: DaffInMemoryGeographyService, providedIn: "root" });
    return DaffInMemoryGeographyService;
}());
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
var DaffGeographyInMemoryDriverModule = /** @class */ (function () {
    function DaffGeographyInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffGeographyInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffGeographyInMemoryDriverModule,
            providers: [
                {
                    provide: DaffGeographyDriver,
                    useExisting: DaffInMemoryGeographyService
                },
            ]
        };
    };
    DaffGeographyInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffGeographyInMemoryDriverModule;
}());

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
var DaffInMemoryBackendGeographyService = /** @class */ (function () {
    function DaffInMemoryBackendGeographyService(countryFactory, subdivisionFactory) {
        var _this = this;
        this.countryFactory = countryFactory;
        this.subdivisionFactory = subdivisionFactory;
        this.countries = this.countryFactory.createMany(5);
        this.countries.forEach((/**
         * @param {?} country
         * @return {?}
         */
        function (country) { return country.subdivisions = _this.subdivisionFactory.createMany(5); }));
    }
    /**
     * Creates a fake database of countries for the geography inmemory backend service.
     *
     * @returns A fake database of an array of countries
     */
    /**
     * Creates a fake database of countries for the geography inmemory backend service.
     *
     * @param {?} reqInfo
     * @return {?} A fake database of an array of countries
     */
    DaffInMemoryBackendGeographyService.prototype.createDb = /**
     * Creates a fake database of countries for the geography inmemory backend service.
     *
     * @param {?} reqInfo
     * @return {?} A fake database of an array of countries
     */
    function (reqInfo) {
        if (reqInfo) {
            /** @type {?} */
            var seedData = reqInfo.utils.getJsonBody(reqInfo.req).countries;
            if (seedData) {
                this.countries = seedData;
            }
        }
        return {
            countries: this.countries
        };
    };
    /**
     * Responds to GET requests.
     */
    /**
     * Responds to GET requests.
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendGeographyService.prototype.get = /**
     * Responds to GET requests.
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: reqInfo.id ? _this.getCountry(reqInfo) : _this.listCountries(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendGeographyService.prototype.getCountry = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.collection.find((/**
         * @param {?} country
         * @return {?}
         */
        function (country) { return country.id === reqInfo.id; }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendGeographyService.prototype.listCountries = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.collection;
    };
    DaffInMemoryBackendGeographyService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendGeographyService.ctorParameters = function () { return [
        { type: DaffCountryFactory },
        { type: DaffSubdivisionFactory }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendGeographyService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendGeographyService_Factory() { return new DaffInMemoryBackendGeographyService(ɵɵinject(DaffCountryFactory), ɵɵinject(DaffSubdivisionFactory)); }, token: DaffInMemoryBackendGeographyService, providedIn: "root" });
    return DaffInMemoryBackendGeographyService;
}());
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
