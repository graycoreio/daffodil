/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the credit card number is invalid.
 */
var /**
 * An error thrown when the credit card number is invalid.
 */
DaffAuthorizeNetInvalidCCNumberError = /** @class */ (function (_super) {
    tslib_1.__extends(DaffAuthorizeNetInvalidCCNumberError, _super);
    function DaffAuthorizeNetInvalidCCNumberError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_NUMBER';
        return _this;
    }
    return DaffAuthorizeNetInvalidCCNumberError;
}(DaffInheritableError));
/**
 * An error thrown when the credit card number is invalid.
 */
export { DaffAuthorizeNetInvalidCCNumberError };
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInvalidCCNumberError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInvalidCCNumberError.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1jYy1udW1iZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aG9yaXplbmV0L2RyaXZlci8iLCJzb3VyY2VzIjpbImVycm9ycy9pbnZhbGlkLWNjLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBS2pFOzs7O0lBQTBELGdFQUFvQjtJQUc3RSw4Q0FBbUIsT0FBZTtRQUFsQyxZQUNDLGtCQUFNLE9BQU8sQ0FBQyxTQUNkO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFGakIsVUFBSSxHQUFXLHNDQUFzQyxDQUFDOztJQUl2RSxDQUFDO0lBQ0YsMkNBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBMEQsb0JBQW9CLEdBTTdFOzs7Ozs7O0lBTEMsb0RBQXNFOztJQUUzRCx1REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmRXJyb3IsIERhZmZJbmhlcml0YWJsZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIHRoZSBjcmVkaXQgY2FyZCBudW1iZXIgaXMgaW52YWxpZC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZBdXRob3JpemVOZXRJbnZhbGlkQ0NOdW1iZXJFcnJvciBleHRlbmRzIERhZmZJbmhlcml0YWJsZUVycm9yIGltcGxlbWVudHMgRGFmZkVycm9yIHtcbiAgcHVibGljIHJlYWRvbmx5IGNvZGU6IHN0cmluZyA9ICdEQUZGX0FVVEhPUklaRV9ORVRfSU5WQUxJRF9DQ19OVU1CRVInO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0fVxufVxuIl19