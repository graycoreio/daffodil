/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffStorageServiceError } from '../error/error';
/**
 * An error thrown when there is an attempt to access storage on the server and none is available.
 */
var /**
 * An error thrown when there is an attempt to access storage on the server and none is available.
 */
DaffServerSideStorageError = /** @class */ (function (_super) {
    tslib_1.__extends(DaffServerSideStorageError, _super);
    function DaffServerSideStorageError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_SERVER_STORAGE_FAILURE';
        return _this;
    }
    return DaffServerSideStorageError;
}(DaffStorageServiceError));
/**
 * An error thrown when there is an attempt to access storage on the server and none is available.
 */
export { DaffServerSideStorageError };
if (false) {
    /** @type {?} */
    DaffServerSideStorageError.prototype.code;
    /** @type {?} */
    DaffServerSideStorageError.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWVycm9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvcmUvIiwic291cmNlcyI6WyJzdG9yYWdlL3NlcnZlci1lcnJvci9zZXJ2ZXItZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUt6RDs7OztJQUFnRCxzREFBdUI7SUFHdEUsb0NBQW1CLE9BQWU7UUFBbEMsWUFDQyxrQkFBTSxPQUFPLENBQUMsU0FDZDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRmpCLFVBQUksR0FBVyw2QkFBNkIsQ0FBQzs7SUFJOUQsQ0FBQztJQUNGLGlDQUFDO0FBQUQsQ0FBQyxBQU5ELENBQWdELHVCQUF1QixHQU10RTs7Ozs7OztJQUxDLDBDQUE2RDs7SUFFbEQsNkNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkVycm9yIH0gZnJvbSAnLi4vLi4vZXJyb3JzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZlN0b3JhZ2VTZXJ2aWNlRXJyb3IgfSBmcm9tICcuLi9lcnJvci9lcnJvcic7XG5cbi8qKlxuICogQW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlcmUgaXMgYW4gYXR0ZW1wdCB0byBhY2Nlc3Mgc3RvcmFnZSBvbiB0aGUgc2VydmVyIGFuZCBub25lIGlzIGF2YWlsYWJsZS5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZTZXJ2ZXJTaWRlU3RvcmFnZUVycm9yIGV4dGVuZHMgRGFmZlN0b3JhZ2VTZXJ2aWNlRXJyb3IgaW1wbGVtZW50cyBEYWZmRXJyb3Ige1xuICBwdWJsaWMgcmVhZG9ubHkgY29kZTogc3RyaW5nID0gJ0RBRkZfU0VSVkVSX1NUT1JBR0VfRkFJTFVSRSc7XG5cblx0Y29uc3RydWN0b3IocHVibGljIG1lc3NhZ2U6IHN0cmluZykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHR9XG59XG4iXX0=