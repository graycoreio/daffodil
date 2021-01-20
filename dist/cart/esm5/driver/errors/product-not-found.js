/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when an add to cart request is sent
 * for a product that cannot be found.
 */
var /**
 * An error thrown when an add to cart request is sent
 * for a product that cannot be found.
 */
DaffProductNotFoundError = /** @class */ (function (_super) {
    tslib_1.__extends(DaffProductNotFoundError, _super);
    function DaffProductNotFoundError(message) {
        var _this = _super.call(this, message) || this;
        _this.code = DaffCartDriverErrorCodes.PRODUCT_NOT_FOUND;
        return _this;
    }
    return DaffProductNotFoundError;
}(DaffInheritableError));
/**
 * An error thrown when an add to cart request is sent
 * for a product that cannot be found.
 */
export { DaffProductNotFoundError };
if (false) {
    /** @type {?} */
    DaffProductNotFoundError.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1ub3QtZm91bmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvIiwic291cmNlcyI6WyJlcnJvcnMvcHJvZHVjdC1ub3QtZm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWEsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBTXhEOzs7OztJQUE4QyxvREFBb0I7SUFHakUsa0NBQVksT0FBZ0I7UUFBNUIsWUFDQyxrQkFBTSxPQUFPLENBQUMsU0FDZDtRQUplLFVBQUksR0FBVyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQzs7SUFJMUUsQ0FBQztJQUNGLCtCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQThDLG9CQUFvQixHQU1qRTs7Ozs7Ozs7SUFMQSx3Q0FBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmRXJyb3IsIERhZmZJbmhlcml0YWJsZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydERyaXZlckVycm9yQ29kZXMgfSBmcm9tICcuL2NvZGVzLmVudW0nO1xuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIGFuIGFkZCB0byBjYXJ0IHJlcXVlc3QgaXMgc2VudFxuICogZm9yIGEgcHJvZHVjdCB0aGF0IGNhbm5vdCBiZSBmb3VuZC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZQcm9kdWN0Tm90Rm91bmRFcnJvciBleHRlbmRzIERhZmZJbmhlcml0YWJsZUVycm9yIGltcGxlbWVudHMgRGFmZkVycm9yIHtcblx0cHVibGljIHJlYWRvbmx5IGNvZGU6IHN0cmluZyA9IERhZmZDYXJ0RHJpdmVyRXJyb3JDb2Rlcy5QUk9EVUNUX05PVF9GT1VORDtcblxuXHRjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdH1cbn1cbiJdfQ==