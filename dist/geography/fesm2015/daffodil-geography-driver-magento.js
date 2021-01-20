import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DaffGeographyInvalidAPIResponseError, DaffCountryNotFoundError, DaffGeographyDriver } from '@daffodil/geography/driver';
import { daffTransformMagentoError } from '@daffodil/driver/magento';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento carts into an object usable by daffodil.
 */
class DaffMagentoSubdivisionTransformer {
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
/** @nocollapse */ DaffMagentoSubdivisionTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoSubdivisionTransformer_Factory() { return new DaffMagentoSubdivisionTransformer(); }, token: DaffMagentoSubdivisionTransformer, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento carts into an object usable by daffodil.
 */
class DaffMagentoCountryTransformer {
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
/** @nocollapse */ DaffMagentoCountryTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCountryTransformer_Factory() { return new DaffMagentoCountryTransformer(ɵɵinject(DaffMagentoSubdivisionTransformer)); }, token: DaffMagentoCountryTransformer, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffMagentoCountryTransformer.prototype.subdivisionTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const countryFragment = gql `
  fragment country on Country {
    id
    full_name_english
    full_name_locale
    three_letter_abbreviation
    two_letter_abbreviation
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const regionFragment = gql `
  fragment region on Region {
    code
    id
    name
  }
`;

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
/** @type {?} */
const getCountries = gql `
  query GetCountries {
    countries {
      ...country
    }
  }
  ${countryFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getCountry = gql `
  query GetCountry($countryId: String!) {
    country(id: $countryId) {
      ...country
      available_regions {
        ...region
      }
    }
  }
  ${countryFragment}
  ${regionFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const validateGetCountriesResponse = (/**
 * @param {?} response
 * @return {?}
 */
(response) => {
    if (response.data.countries) {
        return response;
    }
    else {
        throw new DaffGeographyInvalidAPIResponseError('Get countries response does not contain a valid list of countries.');
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
const MagentoGeographyGraphQlErrorCode = {
    COUNTRY_NOT_FOUND: 'graphql-no-such-entity',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffGeographyMagentoErrorMap = {
    [MagentoGeographyGraphQlErrorCode.COUNTRY_NOT_FOUND]: DaffCountryNotFoundError,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} error
 * @return {?}
 */
function transformMagentoGeographyError(error) {
    return daffTransformMagentoError(error, DaffGeographyMagentoErrorMap);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for making Magento GraphQL queries for carts.
 */
class DaffGeographyMagentoService {
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
/** @nocollapse */ DaffGeographyMagentoService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffGeographyMagentoService_Factory() { return new DaffGeographyMagentoService(ɵɵinject(Apollo), ɵɵinject(DaffMagentoCountryTransformer)); }, token: DaffGeographyMagentoService, providedIn: "root" });
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
class DaffGeographyMagentoDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffGeographyMagentoDriverModule,
            providers: [
                {
                    provide: DaffGeographyDriver,
                    useExisting: DaffGeographyMagentoService
                }
            ]
        };
    }
}
DaffGeographyMagentoDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffGeographyMagentoDriverModule, DaffGeographyMagentoService, DaffMagentoCountryTransformer, DaffMagentoSubdivisionTransformer, countryFragment, getCountries, getCountry, regionFragment };
//# sourceMappingURL=daffodil-geography-driver-magento.js.map
