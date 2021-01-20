import { InjectionToken } from '@angular/core';
import { DaffInheritableError } from '@daffodil/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The interface responsible for managing a customer's cart.
 * @record
 * @template T
 */
function DaffCartServiceInterface() { }
if (false) {
    /**
     * Retrieve a cart
     * @param {?} id
     * @return {?}
     */
    DaffCartServiceInterface.prototype.get = function (id) { };
    /**
     * Creates a cart.
     * @return {?}
     */
    DaffCartServiceInterface.prototype.create = function () { };
    /**
     * @deprecated
     * Prefer DaffCartItemServiceInterface.add
     *
     * Add an item to the cart.
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    DaffCartServiceInterface.prototype.addToCart = function (productId, qty) { };
    /**
     * Remove all items from a cart.
     * @param {?} id
     * @return {?}
     */
    DaffCartServiceInterface.prototype.clear = function (id) { };
}
/** @type {?} */
const DaffCartDriver = new InjectionToken('DaffCartDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The interface responsible for managing the billing address of a cart.
 * @record
 * @template T, V
 */
function DaffCartBillingAddressServiceInterface() { }
if (false) {
    /**
     * Retrieve the billing address of a cart
     * @param {?} cartId
     * @return {?}
     */
    DaffCartBillingAddressServiceInterface.prototype.get = function (cartId) { };
    /**
     * Update the billing address of a cart
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffCartBillingAddressServiceInterface.prototype.update = function (cartId, address) { };
}
/** @type {?} */
const DaffCartBillingAddressDriver = new InjectionToken('DaffCartBillingAddressDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The interface responsible for managing the address of a cart.
 * @record
 * @template T, V
 */
function DaffCartAddressServiceInterface() { }
if (false) {
    /**
     * Update the billing and shipping address of a cart
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffCartAddressServiceInterface.prototype.update = function (cartId, address) { };
}
/** @type {?} */
const DaffCartAddressDriver = new InjectionToken('DaffCartAddressDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The interface responsible for applying a coupon to a cart.
 * @record
 * @template T, V
 */
function DaffCartCouponServiceInterface() { }
if (false) {
    /**
     * Apply a coupon to the cart and return a partial of the cart.
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    DaffCartCouponServiceInterface.prototype.apply = function (cartId, coupon) { };
    /**
     * List coupon codes applied to a cart.
     * @param {?} cartId
     * @return {?}
     */
    DaffCartCouponServiceInterface.prototype.list = function (cartId) { };
    /**
     * Remove a coupon from the cart and return a partial of the cart.
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    DaffCartCouponServiceInterface.prototype.remove = function (cartId, coupon) { };
    /**
     * Remove all coupons from the cart and return a partial of the cart.
     * @param {?} cartId
     * @return {?}
     */
    DaffCartCouponServiceInterface.prototype.removeAll = function (cartId) { };
}
/** @type {?} */
const DaffCartCouponDriver = new InjectionToken('DaffCartCouponDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The interface responsible for managing the items of a cart.
 * @record
 * @template T, U, V
 */
function DaffCartItemServiceInterface() { }
if (false) {
    /**
     * List all of the available items of a cart
     * @param {?} cartId
     * @return {?}
     */
    DaffCartItemServiceInterface.prototype.list = function (cartId) { };
    /**
     * Get a specific cart item of a cart.
     * @param {?} cartId
     * @param {?} item_id
     * @return {?}
     */
    DaffCartItemServiceInterface.prototype.get = function (cartId, item_id) { };
    /**
     * Add something to a cart.
     * @param {?} id
     * @param {?} product
     * @return {?}
     */
    DaffCartItemServiceInterface.prototype.add = function (id, product) { };
    /**
     * Update an existing item in a cart
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} changes
     * @return {?}
     */
    DaffCartItemServiceInterface.prototype.update = function (cartId, itemId, changes) { };
    /**
     * Remove an item from a cart.
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    DaffCartItemServiceInterface.prototype.delete = function (cartId, itemId) { };
}
/** @type {?} */
const DaffCartItemDriver = new InjectionToken('DaffCartItemDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The interface responsible for retrieving the available payment methods of a cart.
 * @record
 * @template T
 */
function DaffCartPaymentMethodsServiceInterface() { }
if (false) {
    /**
     * List the available payment methods of a cart.
     * @param {?} cartId
     * @return {?}
     */
    DaffCartPaymentMethodsServiceInterface.prototype.list = function (cartId) { };
}
/** @type {?} */
const DaffCartPaymentMethodsDriver = new InjectionToken('DaffCartPaymentMethodsDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The interface responsible for managing the selected payment method of a cart.
 * @record
 * @template T, V, R
 */
function DaffCartPaymentServiceInterface() { }
if (false) {
    /**
     * Get the currently applied payment method of a cart.
     * @param {?} cartId
     * @return {?}
     */
    DaffCartPaymentServiceInterface.prototype.get = function (cartId) { };
    /**
     * Update the payment method applied to a cart.
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    DaffCartPaymentServiceInterface.prototype.update = function (cartId, payment) { };
    /**
     * Update the billing address and payment method applied to a cart.
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    DaffCartPaymentServiceInterface.prototype.updateWithBilling = function (cartId, payment, address) { };
    /**
     * Remove the payment method applied to a cart.
     * @param {?} cartId
     * @return {?}
     */
    DaffCartPaymentServiceInterface.prototype.remove = function (cartId) { };
}
/** @type {?} */
const DaffCartPaymentDriver = new InjectionToken('DaffCartPaymentDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The interface responsible for managing the shipping address of a cart.
 * @record
 * @template T, V
 */
function DaffCartShippingAddressServiceInterface() { }
if (false) {
    /**
     * Retrieve the shipping address of a cart.
     * @param {?} cartId
     * @return {?}
     */
    DaffCartShippingAddressServiceInterface.prototype.get = function (cartId) { };
    /**
     * Update the shipping address of a cart.
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffCartShippingAddressServiceInterface.prototype.update = function (cartId, address) { };
}
/** @type {?} */
const DaffCartShippingAddressDriver = new InjectionToken('DaffCartShippingAddressDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The interface responsible for mediating the interaction of the shipping
 * information of a cart with a given platform.
 * @record
 * @template T, V
 */
function DaffCartShippingInformationServiceInterface() { }
if (false) {
    /**
     * Get the currently selected shipping method of a cart.
     * @param {?} cartId
     * @return {?}
     */
    DaffCartShippingInformationServiceInterface.prototype.get = function (cartId) { };
    /**
     * Update the currently selected shipping method of a cart.
     * @param {?} cartId
     * @param {?} shippingInfo
     * @return {?}
     */
    DaffCartShippingInformationServiceInterface.prototype.update = function (cartId, shippingInfo) { };
    /**
     * Remove the currently selected shipping method from a cart.
     * @param {?} cartId
     * @param {?=} id
     * @return {?}
     */
    DaffCartShippingInformationServiceInterface.prototype.delete = function (cartId, id) { };
}
/** @type {?} */
const DaffCartShippingInformationDriver = new InjectionToken('DaffCartShippingInformationDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The interface responsible for retrieving the available shipping methods of a cart.
 * @record
 * @template T
 */
function DaffCartShippingMethodsServiceInterface() { }
if (false) {
    /**
     * List the available shipping methods for a cart.
     * @param {?} cartId
     * @return {?}
     */
    DaffCartShippingMethodsServiceInterface.prototype.list = function (cartId) { };
}
/** @type {?} */
const DaffCartShippingMethodsDriver = new InjectionToken('DaffCartShippingMethodsDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The interface responsible for placing an order for the customer's cart.
 * @record
 * @template T, V, R
 */
function DaffCartOrderServiceInterface() { }
if (false) {
    /**
     * Place an order and return the order ID.
     * @param {?} id
     * @param {?=} payment
     * @return {?}
     */
    DaffCartOrderServiceInterface.prototype.placeOrder = function (id, payment) { };
}
/** @type {?} */
const DaffCartOrderDriver = new InjectionToken('DaffCartOrderDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartDriverErrorCodes = {
    CART_NOT_FOUND: 'DAFF_CART_NOT_FOUND',
    PRODUCT_NOT_FOUND: 'DAFF_PRODUCT_NOT_FOUND',
    PRODUCT_OUT_OF_STOCK: 'DAFF_PRODUCT_OUT_OF_STOCK',
    INVALID_COUPON_CODE: 'DAFF_INVALID_COUPON_CODE',
    INVALID_COUNTRY: 'DAFF_INVALID_COUNTRY',
    INVALID_REGION: 'DAFF_INVALID_REGION',
    INVALID_API_RESPONSE: 'DAFF_INVALID_API_RESPONSE',
    EXPIRED_PAYMENT_METHOD: 'DAFF_EXPIRED_PAYMENT_METHOD',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when a cart driver call is sent with a cart identifier
 * that cannot be found by the platform.
 */
class DaffCartNotFoundError extends DaffInheritableError {
    /**
     * @param {?=} message
     */
    constructor(message) {
        super(message);
        this.code = DaffCartDriverErrorCodes.CART_NOT_FOUND;
    }
}
if (false) {
    /** @type {?} */
    DaffCartNotFoundError.prototype.code;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when the payment token used for the payment method update has expired.
 * This happens when the a place order request happens too long after payment update.
 * The payment must be updated again before an order can be placed.
 */
class DaffCartExpiredPaymentTokenError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = DaffCartDriverErrorCodes.EXPIRED_PAYMENT_METHOD;
    }
}
if (false) {
    /** @type {?} */
    DaffCartExpiredPaymentTokenError.prototype.code;
    /** @type {?} */
    DaffCartExpiredPaymentTokenError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when the platform's API response is missing required information
 * or malformed in an unrecoverable way.
 */
class DaffCartInvalidAPIResponseError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = DaffCartDriverErrorCodes.INVALID_API_RESPONSE;
    }
}
if (false) {
    /** @type {?} */
    DaffCartInvalidAPIResponseError.prototype.code;
    /** @type {?} */
    DaffCartInvalidAPIResponseError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when the specified country is invalid for the specified address
 * or missing where it is required.
 */
class DaffInvalidCountryError extends DaffInheritableError {
    /**
     * @param {?=} message
     */
    constructor(message) {
        super(message);
        this.code = DaffCartDriverErrorCodes.INVALID_COUNTRY;
    }
}
if (false) {
    /** @type {?} */
    DaffInvalidCountryError.prototype.code;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when the specified coupon code cannot be applied to the cart.
 * Either the coupon code does not exist or the required conditions are not met.
 */
class DaffInvalidCouponCodeError extends DaffInheritableError {
    /**
     * @param {?=} message
     */
    constructor(message) {
        super(message);
        this.code = DaffCartDriverErrorCodes.INVALID_COUPON_CODE;
    }
}
if (false) {
    /** @type {?} */
    DaffInvalidCouponCodeError.prototype.code;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when the specified region is invalid for the specified address
 * or missing where it is required.
 */
class DaffInvalidRegionError extends DaffInheritableError {
    /**
     * @param {?=} message
     */
    constructor(message) {
        super(message);
        this.code = DaffCartDriverErrorCodes.INVALID_REGION;
    }
}
if (false) {
    /** @type {?} */
    DaffInvalidRegionError.prototype.code;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when an add to cart request is sent
 * for a product that cannot be found.
 */
class DaffProductNotFoundError extends DaffInheritableError {
    /**
     * @param {?=} message
     */
    constructor(message) {
        super(message);
        this.code = DaffCartDriverErrorCodes.PRODUCT_NOT_FOUND;
    }
}
if (false) {
    /** @type {?} */
    DaffProductNotFoundError.prototype.code;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when a cart item's requested quantity
 * exceeds that allowed by the platform for the specified product.
 */
class DaffProductOutOfStockError extends DaffInheritableError {
    /**
     * @param {?=} message
     */
    constructor(message) {
        super(message);
        this.code = DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK;
    }
}
if (false) {
    /** @type {?} */
    DaffProductOutOfStockError.prototype.code;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A mapping from error codes to error class constructors.
 * @type {?}
 */
const DaffCartDriverErrorMap = {
    [DaffCartDriverErrorCodes.CART_NOT_FOUND]: DaffCartNotFoundError,
    [DaffCartDriverErrorCodes.PRODUCT_NOT_FOUND]: DaffProductNotFoundError,
    [DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK]: DaffProductOutOfStockError,
    [DaffCartDriverErrorCodes.INVALID_COUPON_CODE]: DaffInvalidCouponCodeError,
    [DaffCartDriverErrorCodes.INVALID_COUNTRY]: DaffInvalidCountryError,
    [DaffCartDriverErrorCodes.INVALID_REGION]: DaffInvalidRegionError,
    [DaffCartDriverErrorCodes.INVALID_API_RESPONSE]: DaffCartInvalidAPIResponseError,
    [DaffCartDriverErrorCodes.EXPIRED_PAYMENT_METHOD]: DaffCartExpiredPaymentTokenError,
};

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffCartAddressDriver, DaffCartBillingAddressDriver, DaffCartCouponDriver, DaffCartDriver, DaffCartDriverErrorCodes, DaffCartDriverErrorMap, DaffCartExpiredPaymentTokenError, DaffCartInvalidAPIResponseError, DaffCartItemDriver, DaffCartNotFoundError, DaffCartOrderDriver, DaffCartPaymentDriver, DaffCartPaymentMethodsDriver, DaffCartShippingAddressDriver, DaffCartShippingInformationDriver, DaffCartShippingMethodsDriver, DaffInvalidCountryError, DaffInvalidCouponCodeError, DaffInvalidRegionError, DaffProductNotFoundError, DaffProductOutOfStockError };
//# sourceMappingURL=daffodil-cart-driver.js.map
