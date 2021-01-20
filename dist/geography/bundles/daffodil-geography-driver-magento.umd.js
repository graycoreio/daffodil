(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('graphql-tag'), require('apollo-angular'), require('rxjs'), require('rxjs/operators'), require('@daffodil/geography/driver'), require('@daffodil/driver/magento'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@daffodil/geography/driver/magento', ['exports', '@angular/core', 'graphql-tag', 'apollo-angular', 'rxjs', 'rxjs/operators', '@daffodil/geography/driver', '@daffodil/driver/magento', '@angular/common'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.geography = global.daffodil.geography || {}, global.daffodil.geography.driver = global.daffodil.geography.driver || {}, global.daffodil.geography.driver.magento = {}), global.ng.core, global.gql, global.apolloAngular, global.rxjs, global.rxjs.operators, global.daffodil.geography.driver, global.magento, global.ng.common));
}(this, function (exports, core, gql, apolloAngular, rxjs, operators, driver, magento, common) { 'use strict';

    gql = gql && gql.hasOwnProperty('default') ? gql['default'] : gql;

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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffMagentoSubdivisionTransformer.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoSubdivisionTransformer_Factory() { return new DaffMagentoSubdivisionTransformer(); }, token: DaffMagentoSubdivisionTransformer, providedIn: "root" });
        return DaffMagentoSubdivisionTransformer;
    }());

    var __assign$1 = (this && this.__assign) || function () {
        __assign$1 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };
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
            return country ? __assign$1({ magento_country: country }, { subdivisions: this.transformSubdivisions(country.available_regions || []), id: country.id, name: country.full_name_locale, name_en: country.full_name_english, alpha2: country.two_letter_abbreviation, alpha3: country.three_letter_abbreviation }) : null;
        };
        DaffMagentoCountryTransformer.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffMagentoCountryTransformer.ctorParameters = function () { return [
            { type: DaffMagentoSubdivisionTransformer }
        ]; };
        /** @nocollapse */ DaffMagentoCountryTransformer.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoCountryTransformer_Factory() { return new DaffMagentoCountryTransformer(core.ɵɵinject(DaffMagentoSubdivisionTransformer)); }, token: DaffMagentoCountryTransformer, providedIn: "root" });
        return DaffMagentoCountryTransformer;
    }());
    if (false) {
        /** @type {?} */
        DaffMagentoCountryTransformer.prototype.subdivisionTransformer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var countryFragment = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment country on Country {\n    id\n    full_name_english\n    full_name_locale\n    three_letter_abbreviation\n    two_letter_abbreviation\n  }\n"], ["\n  fragment country on Country {\n    id\n    full_name_english\n    full_name_locale\n    three_letter_abbreviation\n    two_letter_abbreviation\n  }\n"])));
    var templateObject_1;

    var __makeTemplateObject$1 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var regionFragment = gql(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject$1(["\n  fragment region on Region {\n    code\n    id\n    name\n  }\n"], ["\n  fragment region on Region {\n    code\n    id\n    name\n  }\n"])));
    var templateObject_1$1;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var __makeTemplateObject$2 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var getCountries = gql(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject$2(["\n  query GetCountries {\n    countries {\n      ...country\n    }\n  }\n  ", "\n"], ["\n  query GetCountries {\n    countries {\n      ...country\n    }\n  }\n  ", "\n"])), countryFragment);
    var templateObject_1$2;

    var __makeTemplateObject$3 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var getCountry = gql(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject$3(["\n  query GetCountry($countryId: String!) {\n    country(id: $countryId) {\n      ...country\n      available_regions {\n        ...region\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query GetCountry($countryId: String!) {\n    country(id: $countryId) {\n      ...country\n      available_regions {\n        ...region\n      }\n    }\n  }\n  ", "\n  ", "\n"])), countryFragment, regionFragment);
    var templateObject_1$3;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var validateGetCountriesResponse = (/**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (response.data.countries) {
            return response;
        }
        else {
            throw new driver.DaffGeographyInvalidAPIResponseError('Get countries response does not contain a valid list of countries.');
        }
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var MagentoGeographyGraphQlErrorCode = {
        COUNTRY_NOT_FOUND: 'graphql-no-such-entity',
    };

    var _a;
    /** @type {?} */
    var DaffGeographyMagentoErrorMap = (_a = {},
        _a[MagentoGeographyGraphQlErrorCode.COUNTRY_NOT_FOUND] = driver.DaffCountryNotFoundError,
        _a);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} error
     * @return {?}
     */
    function transformMagentoGeographyError(error) {
        return magento.daffTransformMagentoError(error, DaffGeographyMagentoErrorMap);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            }).pipe(operators.map(validateGetCountriesResponse), operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return result.data.countries.map((/**
             * @param {?} country
             * @return {?}
             */
            function (country) { return _this.countryTransformer.transform(country); })); })), operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return rxjs.throwError(transformMagentoGeographyError(err)); })));
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
            }).pipe(operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return _this.countryTransformer.transform(result.data.country); })), operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return rxjs.throwError(transformMagentoGeographyError(err)); })));
        };
        DaffGeographyMagentoService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffGeographyMagentoService.ctorParameters = function () { return [
            { type: apolloAngular.Apollo },
            { type: DaffMagentoCountryTransformer }
        ]; };
        /** @nocollapse */ DaffGeographyMagentoService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffGeographyMagentoService_Factory() { return new DaffGeographyMagentoService(core.ɵɵinject(apolloAngular.Apollo), core.ɵɵinject(DaffMagentoCountryTransformer)); }, token: DaffGeographyMagentoService, providedIn: "root" });
        return DaffGeographyMagentoService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffGeographyMagentoService.prototype.apollo;
        /** @type {?} */
        DaffGeographyMagentoService.prototype.countryTransformer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffGeographyMagentoDriverModule = /** @class */ (function () {
        function DaffGeographyMagentoDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffGeographyMagentoDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffGeographyMagentoDriverModule,
                providers: [
                    {
                        provide: driver.DaffGeographyDriver,
                        useExisting: DaffGeographyMagentoService
                    }
                ]
            };
        };
        DaffGeographyMagentoDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ]
                    },] }
        ];
        return DaffGeographyMagentoDriverModule;
    }());

    exports.DaffGeographyMagentoDriverModule = DaffGeographyMagentoDriverModule;
    exports.DaffGeographyMagentoService = DaffGeographyMagentoService;
    exports.DaffMagentoCountryTransformer = DaffMagentoCountryTransformer;
    exports.DaffMagentoSubdivisionTransformer = DaffMagentoSubdivisionTransformer;
    exports.countryFragment = countryFragment;
    exports.getCountries = getCountries;
    exports.getCountry = getCountry;
    exports.regionFragment = regionFragment;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-geography-driver-magento.umd.js.map
