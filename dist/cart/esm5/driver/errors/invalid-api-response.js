/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when the platform's API response is missing required information
 * or malformed in an unrecoverable way.
 */
var /**
 * An error thrown when the platform's API response is missing required information
 * or malformed in an unrecoverable way.
 */
DaffCartInvalidAPIResponseError = /** @class */ (function (_super) {
    tslib_1.__extends(DaffCartInvalidAPIResponseError, _super);
    function DaffCartInvalidAPIResponseError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = DaffCartDriverErrorCodes.INVALID_API_RESPONSE;
        return _this;
    }
    return DaffCartInvalidAPIResponseError;
}(DaffInheritableError));
/**
 * An error thrown when the platform's API response is missing required information
 * or malformed in an unrecoverable way.
 */
export { DaffCartInvalidAPIResponseError };
if (false) {
    /** @type {?} */
    DaffCartInvalidAPIResponseError.prototype.code;
    /** @type {?} */
    DaffCartInvalidAPIResponseError.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1hcGktcmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvIiwic291cmNlcyI6WyJlcnJvcnMvaW52YWxpZC1hcGktcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWEsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBTXhEOzs7OztJQUFxRCwyREFBb0I7SUFHeEUseUNBQW1CLE9BQWU7UUFBbEMsWUFDQyxrQkFBTSxPQUFPLENBQUMsU0FDZDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRmpCLFVBQUksR0FBVyx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQzs7SUFJOUUsQ0FBQztJQUNGLHNDQUFDO0FBQUQsQ0FBQyxBQU5ELENBQXFELG9CQUFvQixHQU14RTs7Ozs7Ozs7SUFMQywrQ0FBNkU7O0lBRWxFLGtEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZFcnJvciwgRGFmZkluaGVyaXRhYmxlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5cbmltcG9ydCB7IERhZmZDYXJ0RHJpdmVyRXJyb3JDb2RlcyB9IGZyb20gJy4vY29kZXMuZW51bSc7XG5cbi8qKlxuICogQW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlIHBsYXRmb3JtJ3MgQVBJIHJlc3BvbnNlIGlzIG1pc3NpbmcgcmVxdWlyZWQgaW5mb3JtYXRpb25cbiAqIG9yIG1hbGZvcm1lZCBpbiBhbiB1bnJlY292ZXJhYmxlIHdheS5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDYXJ0SW52YWxpZEFQSVJlc3BvbnNlRXJyb3IgZXh0ZW5kcyBEYWZmSW5oZXJpdGFibGVFcnJvciBpbXBsZW1lbnRzIERhZmZFcnJvciB7XG4gIHB1YmxpYyByZWFkb25seSBjb2RlOiBzdHJpbmcgPSBEYWZmQ2FydERyaXZlckVycm9yQ29kZXMuSU5WQUxJRF9BUElfUkVTUE9OU0U7XG5cblx0Y29uc3RydWN0b3IocHVibGljIG1lc3NhZ2U6IHN0cmluZykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHR9XG59XG4iXX0=