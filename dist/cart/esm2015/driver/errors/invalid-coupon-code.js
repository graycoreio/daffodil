/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when the specified coupon code cannot be applied to the cart.
 * Either the coupon code does not exist or the required conditions are not met.
 */
export class DaffInvalidCouponCodeError extends DaffInheritableError {
    /**
     * @param {?=} message
     */
    constructor(message) {
        super(message);
        this.code = DaffCartDriverErrorCodes.INVALID_COUPON_CODE;
    }
}
if (false) {
    /** @type {?} */
    DaffInvalidCouponCodeError.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1jb3Vwb24tY29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci8iLCJzb3VyY2VzIjpbImVycm9ycy9pbnZhbGlkLWNvdXBvbi1jb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWEsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBTXhELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxvQkFBb0I7Ozs7SUFHbkUsWUFBWSxPQUFnQjtRQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFIQSxTQUFJLEdBQVcsd0JBQXdCLENBQUMsbUJBQW1CLENBQUE7SUFJM0UsQ0FBQztDQUNEOzs7SUFMQSwwQ0FBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmRXJyb3IsIERhZmZJbmhlcml0YWJsZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydERyaXZlckVycm9yQ29kZXMgfSBmcm9tICcuL2NvZGVzLmVudW0nO1xuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIHRoZSBzcGVjaWZpZWQgY291cG9uIGNvZGUgY2Fubm90IGJlIGFwcGxpZWQgdG8gdGhlIGNhcnQuXG4gKiBFaXRoZXIgdGhlIGNvdXBvbiBjb2RlIGRvZXMgbm90IGV4aXN0IG9yIHRoZSByZXF1aXJlZCBjb25kaXRpb25zIGFyZSBub3QgbWV0LlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkludmFsaWRDb3Vwb25Db2RlRXJyb3IgZXh0ZW5kcyBEYWZmSW5oZXJpdGFibGVFcnJvciBpbXBsZW1lbnRzIERhZmZFcnJvciB7XG5cdHB1YmxpYyByZWFkb25seSBjb2RlOiBzdHJpbmcgPSBEYWZmQ2FydERyaXZlckVycm9yQ29kZXMuSU5WQUxJRF9DT1VQT05fQ09ERVxuXG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0fVxufVxuIl19