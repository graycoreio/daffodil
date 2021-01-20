/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when the payment token used for the payment method update has expired.
 * This happens when the a place order request happens too long after payment update.
 * The payment must be updated again before an order can be placed.
 */
export class DaffCartExpiredPaymentTokenError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = DaffCartDriverErrorCodes.EXPIRED_PAYMENT_METHOD;
    }
}
if (false) {
    /** @type {?} */
    DaffCartExpiredPaymentTokenError.prototype.code;
    /** @type {?} */
    DaffCartExpiredPaymentTokenError.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwaXJlZC1wYXltZW50LXRva2VuLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyLyIsInNvdXJjZXMiOlsiZXJyb3JzL2V4cGlyZWQtcGF5bWVudC10b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFPeEQsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLG9CQUFvQjs7OztJQUd6RSxZQUFtQixPQUFlO1FBQ2pDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURHLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGakIsU0FBSSxHQUFXLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDO0lBSWhGLENBQUM7Q0FDRDs7O0lBTEMsZ0RBQStFOztJQUVwRSxtREFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmRXJyb3IsIERhZmZJbmhlcml0YWJsZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydERyaXZlckVycm9yQ29kZXMgfSBmcm9tICcuL2NvZGVzLmVudW0nO1xuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIHRoZSBwYXltZW50IHRva2VuIHVzZWQgZm9yIHRoZSBwYXltZW50IG1ldGhvZCB1cGRhdGUgaGFzIGV4cGlyZWQuXG4gKiBUaGlzIGhhcHBlbnMgd2hlbiB0aGUgYSBwbGFjZSBvcmRlciByZXF1ZXN0IGhhcHBlbnMgdG9vIGxvbmcgYWZ0ZXIgcGF5bWVudCB1cGRhdGUuXG4gKiBUaGUgcGF5bWVudCBtdXN0IGJlIHVwZGF0ZWQgYWdhaW4gYmVmb3JlIGFuIG9yZGVyIGNhbiBiZSBwbGFjZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEV4cGlyZWRQYXltZW50VG9rZW5FcnJvciBleHRlbmRzIERhZmZJbmhlcml0YWJsZUVycm9yIGltcGxlbWVudHMgRGFmZkVycm9yIHtcbiAgcHVibGljIHJlYWRvbmx5IGNvZGU6IHN0cmluZyA9IERhZmZDYXJ0RHJpdmVyRXJyb3JDb2Rlcy5FWFBJUkVEX1BBWU1FTlRfTUVUSE9EO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0fVxufVxuIl19