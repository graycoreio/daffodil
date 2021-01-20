import { InjectionToken } from '@angular/core';
import { DaffInheritableError } from '@daffodil/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DaffOrderDriver = new InjectionToken('DaffOrderDriver');
/**
 * Query order objects accessible by the logged-in user.
 * @record
 * @template T, V
 */
function DaffOrderServiceInterface() { }
if (false) {
    /**
     * Get an order object with the specified order ID.
     * @param {?} orderId
     * @param {?=} cartId
     * @return {?}
     */
    DaffOrderServiceInterface.prototype.get = function (orderId, cartId) { };
    /**
     * List all order objects for the logged-in user.
     * @param {?=} cartId
     * @return {?}
     */
    DaffOrderServiceInterface.prototype.list = function (cartId) { };
}

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
var DaffOrderInvalidAPIResponseError = /** @class */ (function (_super) {
    __extends(DaffOrderInvalidAPIResponseError, _super);
    function DaffOrderInvalidAPIResponseError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_ORDER_INVALID_API_RESPONSE';
        return _this;
    }
    return DaffOrderInvalidAPIResponseError;
}(DaffInheritableError));
if (false) {
    /** @type {?} */
    DaffOrderInvalidAPIResponseError.prototype.code;
    /** @type {?} */
    DaffOrderInvalidAPIResponseError.prototype.message;
}

var __extends$1 = (this && this.__extends) || (function () {
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
var DaffOrderNotFoundError = /** @class */ (function (_super) {
    __extends$1(DaffOrderNotFoundError, _super);
    function DaffOrderNotFoundError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_ORDER_NOT_FOUND';
        return _this;
    }
    return DaffOrderNotFoundError;
}(DaffInheritableError));
if (false) {
    /** @type {?} */
    DaffOrderNotFoundError.prototype.code;
    /** @type {?} */
    DaffOrderNotFoundError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffOrderDriver, DaffOrderInvalidAPIResponseError, DaffOrderNotFoundError };
//# sourceMappingURL=daffodil-order-driver.js.map
