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
var DaffOrderNotFoundError = /** @class */ (function (_super) {
    __extends(DaffOrderNotFoundError, _super);
    function DaffOrderNotFoundError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_ORDER_NOT_FOUND';
        return _this;
    }
    return DaffOrderNotFoundError;
}(DaffInheritableError));
export { DaffOrderNotFoundError };
if (false) {
    /** @type {?} */
    DaffOrderNotFoundError.prototype.code;
    /** @type {?} */
    DaffOrderNotFoundError.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItbm90LWZvdW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL2RyaXZlci8iLCJzb3VyY2VzIjpbImVycm9ycy9vcmRlci1ub3QtZm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQWEsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRTtJQUE0QywwQ0FBb0I7SUFHL0QsZ0NBQW1CLE9BQWU7UUFBbEMsWUFDQyxrQkFBTSxPQUFPLENBQUMsU0FDZDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRmpCLFVBQUksR0FBVyxzQkFBc0IsQ0FBQzs7SUFJdkQsQ0FBQztJQUNGLDZCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQTRDLG9CQUFvQixHQU0vRDs7OztJQUxDLHNDQUFzRDs7SUFFM0MseUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkVycm9yLCBEYWZmSW5oZXJpdGFibGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIERhZmZPcmRlck5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBEYWZmSW5oZXJpdGFibGVFcnJvciBpbXBsZW1lbnRzIERhZmZFcnJvciB7XG4gIHB1YmxpYyByZWFkb25seSBjb2RlOiBzdHJpbmcgPSAnREFGRl9PUkRFUl9OT1RfRk9VTkQnO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0fVxufVxuIl19