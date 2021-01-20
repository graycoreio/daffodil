/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffInheritableError } from '../../errors/public_api';
var DaffStorageServiceError = /** @class */ (function (_super) {
    tslib_1.__extends(DaffStorageServiceError, _super);
    function DaffStorageServiceError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_STORAGE_FAILURE';
        return _this;
    }
    return DaffStorageServiceError;
}(DaffInheritableError));
export { DaffStorageServiceError };
if (false) {
    /** @type {?} */
    DaffStorageServiceError.prototype.code;
    /** @type {?} */
    DaffStorageServiceError.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY29yZS8iLCJzb3VyY2VzIjpbInN0b3JhZ2UvZXJyb3IvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWEsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUxRTtJQUE2QyxtREFBb0I7SUFHaEUsaUNBQW1CLE9BQWU7UUFBbEMsWUFDQyxrQkFBTSxPQUFPLENBQUMsU0FDZDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRmpCLFVBQUksR0FBVyxzQkFBc0IsQ0FBQzs7SUFJdkQsQ0FBQztJQUNGLDhCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQTZDLG9CQUFvQixHQU1oRTs7OztJQUxDLHVDQUFzRDs7SUFFM0MsMENBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkVycm9yLCBEYWZmSW5oZXJpdGFibGVFcnJvciB9IGZyb20gJy4uLy4uL2Vycm9ycy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGNsYXNzIERhZmZTdG9yYWdlU2VydmljZUVycm9yIGV4dGVuZHMgRGFmZkluaGVyaXRhYmxlRXJyb3IgaW1wbGVtZW50cyBEYWZmRXJyb3Ige1xuICBwdWJsaWMgcmVhZG9ubHkgY29kZTogc3RyaW5nID0gJ0RBRkZfU1RPUkFHRV9GQUlMVVJFJztcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdH1cbn1cbiJdfQ==