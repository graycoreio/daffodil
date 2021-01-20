/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when the specified coupon code cannot be applied to the cart.
 * Either the coupon code does not exist or the required conditions are not met.
 */
var /**
 * An error thrown when the specified coupon code cannot be applied to the cart.
 * Either the coupon code does not exist or the required conditions are not met.
 */
DaffInvalidCouponCodeError = /** @class */ (function (_super) {
    tslib_1.__extends(DaffInvalidCouponCodeError, _super);
    function DaffInvalidCouponCodeError(message) {
        var _this = _super.call(this, message) || this;
        _this.code = DaffCartDriverErrorCodes.INVALID_COUPON_CODE;
        return _this;
    }
    return DaffInvalidCouponCodeError;
}(DaffInheritableError));
/**
 * An error thrown when the specified coupon code cannot be applied to the cart.
 * Either the coupon code does not exist or the required conditions are not met.
 */
export { DaffInvalidCouponCodeError };
if (false) {
    /** @type {?} */
    DaffInvalidCouponCodeError.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1jb3Vwb24tY29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci8iLCJzb3VyY2VzIjpbImVycm9ycy9pbnZhbGlkLWNvdXBvbi1jb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFhLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQU14RDs7Ozs7SUFBZ0Qsc0RBQW9CO0lBR25FLG9DQUFZLE9BQWdCO1FBQTVCLFlBQ0Msa0JBQU0sT0FBTyxDQUFDLFNBQ2Q7UUFKZSxVQUFJLEdBQVcsd0JBQXdCLENBQUMsbUJBQW1CLENBQUE7O0lBSTNFLENBQUM7SUFDRixpQ0FBQztBQUFELENBQUMsQUFORCxDQUFnRCxvQkFBb0IsR0FNbkU7Ozs7Ozs7O0lBTEEsMENBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkVycm9yLCBEYWZmSW5oZXJpdGFibGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkNhcnREcml2ZXJFcnJvckNvZGVzIH0gZnJvbSAnLi9jb2Rlcy5lbnVtJztcblxuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgc3BlY2lmaWVkIGNvdXBvbiBjb2RlIGNhbm5vdCBiZSBhcHBsaWVkIHRvIHRoZSBjYXJ0LlxuICogRWl0aGVyIHRoZSBjb3Vwb24gY29kZSBkb2VzIG5vdCBleGlzdCBvciB0aGUgcmVxdWlyZWQgY29uZGl0aW9ucyBhcmUgbm90IG1ldC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZJbnZhbGlkQ291cG9uQ29kZUVycm9yIGV4dGVuZHMgRGFmZkluaGVyaXRhYmxlRXJyb3IgaW1wbGVtZW50cyBEYWZmRXJyb3Ige1xuXHRwdWJsaWMgcmVhZG9ubHkgY29kZTogc3RyaW5nID0gRGFmZkNhcnREcml2ZXJFcnJvckNvZGVzLklOVkFMSURfQ09VUE9OX0NPREVcblxuXHRjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdH1cbn1cbiJdfQ==