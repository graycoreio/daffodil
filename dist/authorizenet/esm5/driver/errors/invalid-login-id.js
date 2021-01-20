/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffInheritableError } from '@daffodil/core';
/**
 * An error thrown when the `apiLoginID` value with which the Authorize.net driver has been configured is invalid or missing.
 * @see {\@link DaffAuthorizeNetConfig}
 */
var /**
 * An error thrown when the `apiLoginID` value with which the Authorize.net driver has been configured is invalid or missing.
 * @see {\@link DaffAuthorizeNetConfig}
 */
DaffAuthorizeNetInvalidLoginIdError = /** @class */ (function (_super) {
    tslib_1.__extends(DaffAuthorizeNetInvalidLoginIdError, _super);
    function DaffAuthorizeNetInvalidLoginIdError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_INVALID_LOGIN_ID';
        return _this;
    }
    return DaffAuthorizeNetInvalidLoginIdError;
}(DaffInheritableError));
/**
 * An error thrown when the `apiLoginID` value with which the Authorize.net driver has been configured is invalid or missing.
 * @see {\@link DaffAuthorizeNetConfig}
 */
export { DaffAuthorizeNetInvalidLoginIdError };
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInvalidLoginIdError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInvalidLoginIdError.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1sb2dpbi1pZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRob3JpemVuZXQvZHJpdmVyLyIsInNvdXJjZXMiOlsiZXJyb3JzL2ludmFsaWQtbG9naW4taWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWEsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFNakU7Ozs7O0lBQXlELCtEQUFvQjtJQUc1RSw2Q0FBbUIsT0FBZTtRQUFsQyxZQUNDLGtCQUFNLE9BQU8sQ0FBQyxTQUNkO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFGakIsVUFBSSxHQUFXLHFDQUFxQyxDQUFDOztJQUl0RSxDQUFDO0lBQ0YsMENBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBeUQsb0JBQW9CLEdBTTVFOzs7Ozs7OztJQUxDLG1EQUFxRTs7SUFFMUQsc0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkVycm9yLCBEYWZmSW5oZXJpdGFibGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcblxuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgYGFwaUxvZ2luSURgIHZhbHVlIHdpdGggd2hpY2ggdGhlIEF1dGhvcml6ZS5uZXQgZHJpdmVyIGhhcyBiZWVuIGNvbmZpZ3VyZWQgaXMgaW52YWxpZCBvciBtaXNzaW5nLlxuICogQHNlZSB7QGxpbmsgRGFmZkF1dGhvcml6ZU5ldENvbmZpZ31cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZBdXRob3JpemVOZXRJbnZhbGlkTG9naW5JZEVycm9yIGV4dGVuZHMgRGFmZkluaGVyaXRhYmxlRXJyb3IgaW1wbGVtZW50cyBEYWZmRXJyb3Ige1xuICBwdWJsaWMgcmVhZG9ubHkgY29kZTogc3RyaW5nID0gJ0RBRkZfQVVUSE9SSVpFX05FVF9JTlZBTElEX0xPR0lOX0lEJztcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdH1cbn1cbiJdfQ==