/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffInheritableError } from '@daffodil/core';
import { DaffCartDriverErrorCodes } from './codes.enum';
/**
 * An error thrown when the specified region is invalid for the specified address
 * or missing where it is required.
 */
var /**
 * An error thrown when the specified region is invalid for the specified address
 * or missing where it is required.
 */
DaffInvalidRegionError = /** @class */ (function (_super) {
    tslib_1.__extends(DaffInvalidRegionError, _super);
    function DaffInvalidRegionError(message) {
        var _this = _super.call(this, message) || this;
        _this.code = DaffCartDriverErrorCodes.INVALID_REGION;
        return _this;
    }
    return DaffInvalidRegionError;
}(DaffInheritableError));
/**
 * An error thrown when the specified region is invalid for the specified address
 * or missing where it is required.
 */
export { DaffInvalidRegionError };
if (false) {
    /** @type {?} */
    DaffInvalidRegionError.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1yZWdpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvIiwic291cmNlcyI6WyJlcnJvcnMvaW52YWxpZC1yZWdpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWEsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBTXhEOzs7OztJQUE0QyxrREFBb0I7SUFHL0QsZ0NBQVksT0FBZ0I7UUFBNUIsWUFDQyxrQkFBTSxPQUFPLENBQUMsU0FDZDtRQUplLFVBQUksR0FBVyx3QkFBd0IsQ0FBQyxjQUFjLENBQUE7O0lBSXRFLENBQUM7SUFDRiw2QkFBQztBQUFELENBQUMsQUFORCxDQUE0QyxvQkFBb0IsR0FNL0Q7Ozs7Ozs7O0lBTEEsc0NBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkVycm9yLCBEYWZmSW5oZXJpdGFibGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkNhcnREcml2ZXJFcnJvckNvZGVzIH0gZnJvbSAnLi9jb2Rlcy5lbnVtJztcblxuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgc3BlY2lmaWVkIHJlZ2lvbiBpcyBpbnZhbGlkIGZvciB0aGUgc3BlY2lmaWVkIGFkZHJlc3NcbiAqIG9yIG1pc3Npbmcgd2hlcmUgaXQgaXMgcmVxdWlyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmSW52YWxpZFJlZ2lvbkVycm9yIGV4dGVuZHMgRGFmZkluaGVyaXRhYmxlRXJyb3IgaW1wbGVtZW50cyBEYWZmRXJyb3Ige1xuXHRwdWJsaWMgcmVhZG9ubHkgY29kZTogc3RyaW5nID0gRGFmZkNhcnREcml2ZXJFcnJvckNvZGVzLklOVkFMSURfUkVHSU9OXG5cblx0Y29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHR9XG59XG4iXX0=