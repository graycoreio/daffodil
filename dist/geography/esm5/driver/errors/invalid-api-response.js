var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffInheritableError } from '@daffodil/core';
var DaffGeographyInvalidAPIResponseError = /** @class */ (function (_super) {
    __extends(DaffGeographyInvalidAPIResponseError, _super);
    function DaffGeographyInvalidAPIResponseError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_GEOGRAPHY_INVALID_API_RESPONSE';
        return _this;
    }
    return DaffGeographyInvalidAPIResponseError;
}(DaffInheritableError));
export { DaffGeographyInvalidAPIResponseError };
if (false) {
    /** @type {?} */
    DaffGeographyInvalidAPIResponseError.prototype.code;
    /** @type {?} */
    DaffGeographyInvalidAPIResponseError.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZC1hcGktcmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci8iLCJzb3VyY2VzIjpbImVycm9ycy9pbnZhbGlkLWFwaS1yZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFO0lBQTBELHdEQUFvQjtJQUc3RSw4Q0FBbUIsT0FBZTtRQUFsQyxZQUNDLGtCQUFNLE9BQU8sQ0FBQyxTQUNkO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFGakIsVUFBSSxHQUFXLHFDQUFxQyxDQUFDOztJQUl0RSxDQUFDO0lBQ0YsMkNBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBMEQsb0JBQW9CLEdBTTdFOzs7O0lBTEMsb0RBQXFFOztJQUUxRCx1REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmRXJyb3IsIERhZmZJbmhlcml0YWJsZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRGFmZkdlb2dyYXBoeUludmFsaWRBUElSZXNwb25zZUVycm9yIGV4dGVuZHMgRGFmZkluaGVyaXRhYmxlRXJyb3IgaW1wbGVtZW50cyBEYWZmRXJyb3Ige1xuICBwdWJsaWMgcmVhZG9ubHkgY29kZTogc3RyaW5nID0gJ0RBRkZfR0VPR1JBUEhZX0lOVkFMSURfQVBJX1JFU1BPTlNFJztcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdH1cbn1cbiJdfQ==