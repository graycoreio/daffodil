/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when the payment token used for the payment method update has expired.
 * This happens when the a place order request happens too long after payment update.
 * The payment must be updated again before an order can be placed.
 */
var /**
 * An error thrown when the payment token used for the payment method update has expired.
 * This happens when the a place order request happens too long after payment update.
 * The payment must be updated again before an order can be placed.
 */
DaffCartExpiredPaymentTokenError = /** @class */ (function (_super) {
    tslib_1.__extends(DaffCartExpiredPaymentTokenError, _super);
    function DaffCartExpiredPaymentTokenError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = DaffCartDriverErrorCodes.EXPIRED_PAYMENT_METHOD;
        return _this;
    }
    return DaffCartExpiredPaymentTokenError;
}(DaffInheritableError));
/**
 * An error thrown when the payment token used for the payment method update has expired.
 * This happens when the a place order request happens too long after payment update.
 * The payment must be updated again before an order can be placed.
 */
export { DaffCartExpiredPaymentTokenError };
if (false) {
    /** @type {?} */
    DaffCartExpiredPaymentTokenError.prototype.code;
    /** @type {?} */
    DaffCartExpiredPaymentTokenError.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwaXJlZC1wYXltZW50LXRva2VuLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyLyIsInNvdXJjZXMiOlsiZXJyb3JzL2V4cGlyZWQtcGF5bWVudC10b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0FBT3hEOzs7Ozs7SUFBc0QsNERBQW9CO0lBR3pFLDBDQUFtQixPQUFlO1FBQWxDLFlBQ0Msa0JBQU0sT0FBTyxDQUFDLFNBQ2Q7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZqQixVQUFJLEdBQVcsd0JBQXdCLENBQUMsc0JBQXNCLENBQUM7O0lBSWhGLENBQUM7SUFDRix1Q0FBQztBQUFELENBQUMsQUFORCxDQUFzRCxvQkFBb0IsR0FNekU7Ozs7Ozs7OztJQUxDLGdEQUErRTs7SUFFcEUsbURBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkVycm9yLCBEYWZmSW5oZXJpdGFibGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkNhcnREcml2ZXJFcnJvckNvZGVzIH0gZnJvbSAnLi9jb2Rlcy5lbnVtJztcblxuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgcGF5bWVudCB0b2tlbiB1c2VkIGZvciB0aGUgcGF5bWVudCBtZXRob2QgdXBkYXRlIGhhcyBleHBpcmVkLlxuICogVGhpcyBoYXBwZW5zIHdoZW4gdGhlIGEgcGxhY2Ugb3JkZXIgcmVxdWVzdCBoYXBwZW5zIHRvbyBsb25nIGFmdGVyIHBheW1lbnQgdXBkYXRlLlxuICogVGhlIHBheW1lbnQgbXVzdCBiZSB1cGRhdGVkIGFnYWluIGJlZm9yZSBhbiBvcmRlciBjYW4gYmUgcGxhY2VkLlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRFeHBpcmVkUGF5bWVudFRva2VuRXJyb3IgZXh0ZW5kcyBEYWZmSW5oZXJpdGFibGVFcnJvciBpbXBsZW1lbnRzIERhZmZFcnJvciB7XG4gIHB1YmxpYyByZWFkb25seSBjb2RlOiBzdHJpbmcgPSBEYWZmQ2FydERyaXZlckVycm9yQ29kZXMuRVhQSVJFRF9QQVlNRU5UX01FVEhPRDtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdH1cbn1cbiJdfQ==