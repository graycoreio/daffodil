/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Compares two addresses and returns true if all of their fields are equal.
 *
 * @param {?} address0 An address.
 * @param {?} address1 An address.
 * @return {?}
 */
function daffCompareAddresses(address0, address1) {
    return !!(address0 && address1 &&
        address0.street === address1.street &&
        address0.street2 === address1.street2 &&
        address0.city === address1.city &&
        address0.region === address1.region &&
        address0.country === address1.country &&
        address0.country_id === address1.country_id &&
        address0.postcode === address1.postcode);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Compares two personal addresses and returns true if all of their fields are equal.
 *
 * @param {?} address0 A personal address.
 * @param {?} address1 A personal address.
 * @return {?}
 */
function daffComparePersonalAddresses(address0, address1) {
    return !!(address0 && address1 &&
        address0.prefix === address1.prefix &&
        address0.suffix === address1.suffix &&
        address0.firstname === address1.firstname &&
        address0.middlename === address1.middlename &&
        address0.lastname === address1.lastname &&
        address0.telephone === address1.telephone &&
        address0.email === address1.email &&
        daffCompareAddresses(address0, address1));
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

export { daffCompareAddresses, daffComparePersonalAddresses };
//# sourceMappingURL=daffodil-geography.js.map
