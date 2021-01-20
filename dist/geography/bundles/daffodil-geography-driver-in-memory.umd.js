(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@daffodil/geography/driver'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('angular-in-memory-web-api'), require('@daffodil/geography/testing')) :
    typeof define === 'function' && define.amd ? define('@daffodil/geography/driver/in-memory', ['exports', '@angular/core', '@angular/common', '@daffodil/geography/driver', '@angular/common/http', 'rxjs', 'rxjs/operators', 'angular-in-memory-web-api', '@daffodil/geography/testing'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.geography = global.daffodil.geography || {}, global.daffodil.geography.driver = global.daffodil.geography.driver || {}, global.daffodil.geography.driver['in-memory'] = {}), global.ng.core, global.ng.common, global.daffodil.geography.driver, global.ng.common.http, global.rxjs, global.rxjs.operators, global.angularInMemoryWebApi, global.daffodil.geography.testing));
}(this, function (exports, core, common, driver, http, rxjs, operators, angularInMemoryWebApi, testing) { 'use strict';

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
            return this.http.get(this.url + "/" + countryId).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return rxjs.throwError(driver.DaffCountryNotFoundError); })), operators.map((/**
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryGeographyService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryGeographyService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryGeographyService_Factory() { return new DaffInMemoryGeographyService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryGeographyService, providedIn: "root" });
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
                        provide: driver.DaffGeographyDriver,
                        useExisting: DaffInMemoryGeographyService
                    },
                ]
            };
        };
        DaffGeographyInMemoryDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
                status: angularInMemoryWebApi.STATUS.OK
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryBackendGeographyService.ctorParameters = function () { return [
            { type: testing.DaffCountryFactory },
            { type: testing.DaffSubdivisionFactory }
        ]; };
        /** @nocollapse */ DaffInMemoryBackendGeographyService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendGeographyService_Factory() { return new DaffInMemoryBackendGeographyService(core.ɵɵinject(testing.DaffCountryFactory), core.ɵɵinject(testing.DaffSubdivisionFactory)); }, token: DaffInMemoryBackendGeographyService, providedIn: "root" });
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

    exports.DaffGeographyInMemoryDriverModule = DaffGeographyInMemoryDriverModule;
    exports.DaffInMemoryBackendGeographyService = DaffInMemoryBackendGeographyService;
    exports.DaffInMemoryGeographyService = DaffInMemoryGeographyService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-geography-driver-in-memory.umd.js.map
