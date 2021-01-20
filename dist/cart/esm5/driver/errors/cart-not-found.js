/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when a cart driver call is sent with a cart identifier
 * that cannot be found by the platform.
 */
var /**
 * An error thrown when a cart driver call is sent with a cart identifier
 * that cannot be found by the platform.
 */
DaffCartNotFoundError = /** @class */ (function (_super) {
    tslib_1.__extends(DaffCartNotFoundError, _super);
    function DaffCartNotFoundError(message) {
        var _this = _super.call(this, message) || this;
        _this.code = DaffCartDriverErrorCodes.CART_NOT_FOUND;
        return _this;
    }
    return DaffCartNotFoundError;
}(DaffInheritableError));
/**
 * An error thrown when a cart driver call is sent with a cart identifier
 * that cannot be found by the platform.
 */
export { DaffCartNotFoundError };
if (false) {
    /** @type {?} */
    DaffCartNotFoundError.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1ub3QtZm91bmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvIiwic291cmNlcyI6WyJlcnJvcnMvY2FydC1ub3QtZm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWEsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBTXhEOzs7OztJQUEyQyxpREFBb0I7SUFHOUQsK0JBQVksT0FBZ0I7UUFBNUIsWUFDQyxrQkFBTSxPQUFPLENBQUMsU0FDZDtRQUplLFVBQUksR0FBVyx3QkFBd0IsQ0FBQyxjQUFjLENBQUM7O0lBSXZFLENBQUM7SUFDRiw0QkFBQztBQUFELENBQUMsQUFORCxDQUEyQyxvQkFBb0IsR0FNOUQ7Ozs7Ozs7O0lBTEEscUNBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkVycm9yLCBEYWZmSW5oZXJpdGFibGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkNhcnREcml2ZXJFcnJvckNvZGVzIH0gZnJvbSAnLi9jb2Rlcy5lbnVtJztcblxuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiBhIGNhcnQgZHJpdmVyIGNhbGwgaXMgc2VudCB3aXRoIGEgY2FydCBpZGVudGlmaWVyXG4gKiB0aGF0IGNhbm5vdCBiZSBmb3VuZCBieSB0aGUgcGxhdGZvcm0uXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBEYWZmSW5oZXJpdGFibGVFcnJvciBpbXBsZW1lbnRzIERhZmZFcnJvciB7XG5cdHB1YmxpYyByZWFkb25seSBjb2RlOiBzdHJpbmcgPSBEYWZmQ2FydERyaXZlckVycm9yQ29kZXMuQ0FSVF9OT1RfRk9VTkQ7XG5cblx0Y29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHR9XG59XG4iXX0=