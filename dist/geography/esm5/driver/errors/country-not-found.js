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
var DaffCountryNotFoundError = /** @class */ (function (_super) {
    __extends(DaffCountryNotFoundError, _super);
    function DaffCountryNotFoundError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_GEOGRAPHY_COUNTRY_NOT_FOUND';
        return _this;
    }
    return DaffCountryNotFoundError;
}(DaffInheritableError));
export { DaffCountryNotFoundError };
if (false) {
    /** @type {?} */
    DaffCountryNotFoundError.prototype.code;
    /** @type {?} */
    DaffCountryNotFoundError.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1ub3QtZm91bmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci8iLCJzb3VyY2VzIjpbImVycm9ycy9jb3VudHJ5LW5vdC1mb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFO0lBQThDLDRDQUFvQjtJQUdqRSxrQ0FBbUIsT0FBZTtRQUFsQyxZQUNDLGtCQUFNLE9BQU8sQ0FBQyxTQUNkO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFGakIsVUFBSSxHQUFXLGtDQUFrQyxDQUFDOztJQUluRSxDQUFDO0lBQ0YsK0JBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBOEMsb0JBQW9CLEdBTWpFOzs7O0lBTEMsd0NBQWtFOztJQUV2RCwyQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmRXJyb3IsIERhZmZJbmhlcml0YWJsZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRGFmZkNvdW50cnlOb3RGb3VuZEVycm9yIGV4dGVuZHMgRGFmZkluaGVyaXRhYmxlRXJyb3IgaW1wbGVtZW50cyBEYWZmRXJyb3Ige1xuICBwdWJsaWMgcmVhZG9ubHkgY29kZTogc3RyaW5nID0gJ0RBRkZfR0VPR1JBUEhZX0NPVU5UUllfTk9UX0ZPVU5EJztcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdH1cbn1cbiJdfQ==