/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when a cart item's requested quantity
 * exceeds that allowed by the platform for the specified product.
 */
var /**
 * An error thrown when a cart item's requested quantity
 * exceeds that allowed by the platform for the specified product.
 */
DaffProductOutOfStockError = /** @class */ (function (_super) {
    tslib_1.__extends(DaffProductOutOfStockError, _super);
    function DaffProductOutOfStockError(message) {
        var _this = _super.call(this, message) || this;
        _this.code = DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK;
        return _this;
    }
    return DaffProductOutOfStockError;
}(DaffInheritableError));
/**
 * An error thrown when a cart item's requested quantity
 * exceeds that allowed by the platform for the specified product.
 */
export { DaffProductOutOfStockError };
if (false) {
    /** @type {?} */
    DaffProductOutOfStockError.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1vdXQtb2Ytc3RvY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvIiwic291cmNlcyI6WyJlcnJvcnMvcHJvZHVjdC1vdXQtb2Ytc3RvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWEsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBTXhEOzs7OztJQUFnRCxzREFBb0I7SUFHbkUsb0NBQVksT0FBZ0I7UUFBNUIsWUFDQyxrQkFBTSxPQUFPLENBQUMsU0FDZDtRQUplLFVBQUksR0FBVyx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQzs7SUFJN0UsQ0FBQztJQUNGLGlDQUFDO0FBQUQsQ0FBQyxBQU5ELENBQWdELG9CQUFvQixHQU1uRTs7Ozs7Ozs7SUFMQSwwQ0FBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmRXJyb3IsIERhZmZJbmhlcml0YWJsZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydERyaXZlckVycm9yQ29kZXMgfSBmcm9tICcuL2NvZGVzLmVudW0nO1xuXG4vKipcbiAqIEFuIGVycm9yIHRocm93biB3aGVuIGEgY2FydCBpdGVtJ3MgcmVxdWVzdGVkIHF1YW50aXR5XG4gKiBleGNlZWRzIHRoYXQgYWxsb3dlZCBieSB0aGUgcGxhdGZvcm0gZm9yIHRoZSBzcGVjaWZpZWQgcHJvZHVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZQcm9kdWN0T3V0T2ZTdG9ja0Vycm9yIGV4dGVuZHMgRGFmZkluaGVyaXRhYmxlRXJyb3IgaW1wbGVtZW50cyBEYWZmRXJyb3Ige1xuXHRwdWJsaWMgcmVhZG9ubHkgY29kZTogc3RyaW5nID0gRGFmZkNhcnREcml2ZXJFcnJvckNvZGVzLlBST0RVQ1RfT1VUX09GX1NUT0NLO1xuXG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0fVxufVxuIl19