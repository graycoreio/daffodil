/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when the specified country is invalid for the specified address
 * or missing where it is required.
 */
var /**
 * An error thrown when the specified country is invalid for the specified address
 * or missing where it is required.
 */
DaffInvalidCountryError = /** @class */ (function (_super) {
    tslib_1.__extends(DaffInvalidCountryError, _super);
    function DaffInvalidCountryError(message) {
        var _this = _super.call(this, message) || this;
        _this.code = DaffCartDriverErrorCodes.INVALID_COUNTRY;
        return _this;
    }
    return DaffInvalidCountryError;
}(DaffInheritableError));
/**
 * An error thrown when the specified country is invalid for the specified address
 * or missing where it is required.
 */
export { DaffInvalidCountryError };
if (false) {
    /** @type {?} */
    DaffInvalidCountryError.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1jb3VudHJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyLyIsInNvdXJjZXMiOlsiZXJyb3JzL2ludmFsaWQtY291bnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFNeEQ7Ozs7O0lBQTZDLG1EQUFvQjtJQUdoRSxpQ0FBWSxPQUFnQjtRQUE1QixZQUNDLGtCQUFNLE9BQU8sQ0FBQyxTQUNkO1FBSmUsVUFBSSxHQUFXLHdCQUF3QixDQUFDLGVBQWUsQ0FBQTs7SUFJdkUsQ0FBQztJQUNGLDhCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQTZDLG9CQUFvQixHQU1oRTs7Ozs7Ozs7SUFMQSx1Q0FBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmRXJyb3IsIERhZmZJbmhlcml0YWJsZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydERyaXZlckVycm9yQ29kZXMgfSBmcm9tICcuL2NvZGVzLmVudW0nO1xuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIHRoZSBzcGVjaWZpZWQgY291bnRyeSBpcyBpbnZhbGlkIGZvciB0aGUgc3BlY2lmaWVkIGFkZHJlc3NcbiAqIG9yIG1pc3Npbmcgd2hlcmUgaXQgaXMgcmVxdWlyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmSW52YWxpZENvdW50cnlFcnJvciBleHRlbmRzIERhZmZJbmhlcml0YWJsZUVycm9yIGltcGxlbWVudHMgRGFmZkVycm9yIHtcblx0cHVibGljIHJlYWRvbmx5IGNvZGU6IHN0cmluZyA9IERhZmZDYXJ0RHJpdmVyRXJyb3JDb2Rlcy5JTlZBTElEX0NPVU5UUllcblxuXHRjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdH1cbn1cbiJdfQ==