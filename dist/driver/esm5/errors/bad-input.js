import * as tslib_1 from "tslib";
import { DaffInheritableError } from '@daffodil/core';
var DaffBadInputError = /** @class */ (function (_super) {
    tslib_1.__extends(DaffBadInputError, _super);
    function DaffBadInputError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_BAD_INPUT';
        return _this;
    }
    return DaffBadInputError;
}(DaffInheritableError));
export { DaffBadInputError };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLWlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2RyaXZlci8iLCJzb3VyY2VzIjpbImVycm9ycy9iYWQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFO0lBQXVDLDZDQUFvQjtJQUcxRCwyQkFBbUIsT0FBZTtRQUFsQyxZQUNDLGtCQUFNLE9BQU8sQ0FBQyxTQUNkO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFGakIsVUFBSSxHQUFXLGdCQUFnQixDQUFDOztJQUlqRCxDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBdUMsb0JBQW9CLEdBTTFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkVycm9yLCBEYWZmSW5oZXJpdGFibGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIERhZmZCYWRJbnB1dEVycm9yIGV4dGVuZHMgRGFmZkluaGVyaXRhYmxlRXJyb3IgaW1wbGVtZW50cyBEYWZmRXJyb3Ige1xuICBwdWJsaWMgcmVhZG9ubHkgY29kZTogc3RyaW5nID0gJ0RBRkZfQkFEX0lOUFVUJztcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdH1cbn1cbiJdfQ==