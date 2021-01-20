import { InjectionToken } from '@angular/core';
import { DaffInheritableError } from '@daffodil/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffOrderDriver = new InjectionToken('DaffOrderDriver');
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffOrderInvalidAPIResponseError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_ORDER_INVALID_API_RESPONSE';
    }
}
if (false) {
    /** @type {?} */
    DaffOrderInvalidAPIResponseError.prototype.code;
    /** @type {?} */
    DaffOrderInvalidAPIResponseError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffOrderNotFoundError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_ORDER_NOT_FOUND';
    }
}
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
