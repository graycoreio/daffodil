import { __extends } from 'tslib';
import { DaffInheritableError } from '@daffodil/core';

var DaffBadInputError = /** @class */ (function (_super) {
    __extends(DaffBadInputError, _super);
    function DaffBadInputError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_BAD_INPUT';
        return _this;
    }
    return DaffBadInputError;
}(DaffInheritableError));

/**
 * Generated bundle index. Do not edit.
 */

export { DaffBadInputError };
//# sourceMappingURL=daffodil-driver.js.map
