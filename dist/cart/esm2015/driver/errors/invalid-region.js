/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when the specified region is invalid for the specified address
 * or missing where it is required.
 */
export class DaffInvalidRegionError extends DaffInheritableError {
    /**
     * @param {?=} message
     */
    constructor(message) {
        super(message);
        this.code = DaffCartDriverErrorCodes.INVALID_REGION;
    }
}
if (false) {
    /** @type {?} */
    DaffInvalidRegionError.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1yZWdpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvIiwic291cmNlcyI6WyJlcnJvcnMvaW52YWxpZC1yZWdpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFNeEQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLG9CQUFvQjs7OztJQUcvRCxZQUFZLE9BQWdCO1FBQzNCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUhBLFNBQUksR0FBVyx3QkFBd0IsQ0FBQyxjQUFjLENBQUE7SUFJdEUsQ0FBQztDQUNEOzs7SUFMQSxzQ0FBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmRXJyb3IsIERhZmZJbmhlcml0YWJsZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydERyaXZlckVycm9yQ29kZXMgfSBmcm9tICcuL2NvZGVzLmVudW0nO1xuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIHRoZSBzcGVjaWZpZWQgcmVnaW9uIGlzIGludmFsaWQgZm9yIHRoZSBzcGVjaWZpZWQgYWRkcmVzc1xuICogb3IgbWlzc2luZyB3aGVyZSBpdCBpcyByZXF1aXJlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZJbnZhbGlkUmVnaW9uRXJyb3IgZXh0ZW5kcyBEYWZmSW5oZXJpdGFibGVFcnJvciBpbXBsZW1lbnRzIERhZmZFcnJvciB7XG5cdHB1YmxpYyByZWFkb25seSBjb2RlOiBzdHJpbmcgPSBEYWZmQ2FydERyaXZlckVycm9yQ29kZXMuSU5WQUxJRF9SRUdJT05cblxuXHRjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdH1cbn1cbiJdfQ==