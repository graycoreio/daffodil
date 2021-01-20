import { DaffInheritableError } from '@daffodil/core';
import { InjectionToken } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffCountryNotFoundError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_GEOGRAPHY_COUNTRY_NOT_FOUND';
    }
}
if (false) {
    /** @type {?} */
    DaffCountryNotFoundError.prototype.code;
    /** @type {?} */
    DaffCountryNotFoundError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffGeographyInvalidAPIResponseError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_GEOGRAPHY_INVALID_API_RESPONSE';
    }
}
if (false) {
    /** @type {?} */
    DaffGeographyInvalidAPIResponseError.prototype.code;
    /** @type {?} */
    DaffGeographyInvalidAPIResponseError.prototype.message;
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
const DaffGeographyDriver = new InjectionToken('DaffGeographyDriver');
/**
 * @record
 * @template T
 */
function DaffGeographyServiceInterface() { }
if (false) {
    /**
     * Retrieves the list of countries available to the given store.
     * @return {?}
     */
    DaffGeographyServiceInterface.prototype.list = function () { };
    /**
     * Retrieve precise information about a specific country.
     * @param {?} id
     * @return {?}
     */
    DaffGeographyServiceInterface.prototype.get = function (id) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffCountryNotFoundError, DaffGeographyDriver, DaffGeographyInvalidAPIResponseError };
//# sourceMappingURL=daffodil-geography-driver.js.map
