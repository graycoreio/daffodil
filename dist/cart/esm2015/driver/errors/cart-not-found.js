/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when a cart driver call is sent with a cart identifier
 * that cannot be found by the platform.
 */
export class DaffCartNotFoundError extends DaffInheritableError {
    /**
     * @param {?=} message
     */
    constructor(message) {
        super(message);
        this.code = DaffCartDriverErrorCodes.CART_NOT_FOUND;
    }
}
if (false) {
    /** @type {?} */
    DaffCartNotFoundError.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1ub3QtZm91bmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvIiwic291cmNlcyI6WyJlcnJvcnMvY2FydC1ub3QtZm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFNeEQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG9CQUFvQjs7OztJQUc5RCxZQUFZLE9BQWdCO1FBQzNCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUhBLFNBQUksR0FBVyx3QkFBd0IsQ0FBQyxjQUFjLENBQUM7SUFJdkUsQ0FBQztDQUNEOzs7SUFMQSxxQ0FBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmRXJyb3IsIERhZmZJbmhlcml0YWJsZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydERyaXZlckVycm9yQ29kZXMgfSBmcm9tICcuL2NvZGVzLmVudW0nO1xuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIGEgY2FydCBkcml2ZXIgY2FsbCBpcyBzZW50IHdpdGggYSBjYXJ0IGlkZW50aWZpZXJcbiAqIHRoYXQgY2Fubm90IGJlIGZvdW5kIGJ5IHRoZSBwbGF0Zm9ybS5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Tm90Rm91bmRFcnJvciBleHRlbmRzIERhZmZJbmhlcml0YWJsZUVycm9yIGltcGxlbWVudHMgRGFmZkVycm9yIHtcblx0cHVibGljIHJlYWRvbmx5IGNvZGU6IHN0cmluZyA9IERhZmZDYXJ0RHJpdmVyRXJyb3JDb2Rlcy5DQVJUX05PVF9GT1VORDtcblxuXHRjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdH1cbn1cbiJdfQ==