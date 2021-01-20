import { InjectionToken } from '@angular/core';
import { DaffInheritableError } from '@daffodil/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffAuthorizeNetConfigToken = new InjectionToken('DaffAuthorizeNetConfigToken');
/**
 * An interface for providing \@daffodil/authorizenet with needed configurations specific to your authorizenet
 * endpoint.
 * @record
 */
function DaffAuthorizeNetConfig() { }
if (false) {
    /** @type {?} */
    DaffAuthorizeNetConfig.prototype.clientKey;
    /** @type {?} */
    DaffAuthorizeNetConfig.prototype.apiLoginID;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffAuthorizeNetDriver = new InjectionToken('DaffAuthorizeNetDriver');
/**
 * @record
 * @template T
 */
function DaffAuthorizeNetService() { }
if (false) {
    /**
     * @param {?} paymentTokenRequest
     * @return {?}
     */
    DaffAuthorizeNetService.prototype.generateToken = function (paymentTokenRequest) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffAuthorizeNetPaymentId = new InjectionToken('DaffAuthorizeNetPaymentId');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when Accept.js has been loaded incorrectly.
 * This can be caused by the script being loaded from a local source
 * or when the browser or proxy has improperly cached an older version of the script.
 */
class DaffAuthorizeNetAcceptjsInvalidError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_ACCEPTJS_INVALID';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetAcceptjsInvalidError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetAcceptjsInvalidError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when Accept.js has not been loaded.
 */
class DaffAuthorizeNetAcceptjsMissingError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_ACCEPTJS_MISSING';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetAcceptjsMissingError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetAcceptjsMissingError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when either the API Login ID or Public Client Key values are incorrect.
 */
class DaffAuthorizeNetAuthFailedError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_AUTH_FAILED';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetAuthFailedError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetAuthFailedError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when required information is missing from the request payload.
 */
class DaffAuthorizeNetInputMissingError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_INPUT_MISSING';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInputMissingError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInputMissingError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when requests are not made over HTTPS.
 */
class DaffAuthorizeNetInsecureConnectionError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_INSECURE_CONNECTION';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInsecureConnectionError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInsecureConnectionError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when the platform response is missing key information or malformed in an unrecoverable way.
 */
class DaffAuthorizeNetInvalidAPIResponseError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_INVALID_API_RESPONSE';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInvalidAPIResponseError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInvalidAPIResponseError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when the credit card cvv number is invalid.
 */
class DaffAuthorizeNetInvalidCCCVVError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_CVV';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInvalidCCCVVError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInvalidCCCVVError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when the credit card expiration month is invalid.
 */
class DaffAuthorizeNetInvalidCCExpMonthError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_EXP_MONTH';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInvalidCCExpMonthError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInvalidCCExpMonthError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when the credit card expiration year is invalid.
 */
class DaffAuthorizeNetInvalidCCExpYearError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_EXP_YEAR';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInvalidCCExpYearError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInvalidCCExpYearError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when the cardholder name is invalid.
 * It should be no more than 64 characters in length.
 */
class DaffAuthorizeNetInvalidCCNameError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_NAME';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInvalidCCNameError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInvalidCCNameError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when the credit card number is invalid.
 */
class DaffAuthorizeNetInvalidCCNumberError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_NUMBER';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInvalidCCNumberError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInvalidCCNumberError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when the `clientKey` value with which the Authorize.net driver has been configured is invalid or missing.
 * @see {\@link DaffAuthorizeNetConfig}
 */
class DaffAuthorizeNetInvalidClientKeyError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_INVALID_CLIENT_KEY';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInvalidClientKeyError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInvalidClientKeyError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when the `apiLoginID` value with which the Authorize.net driver has been configured is invalid or missing.
 * @see {\@link DaffAuthorizeNetConfig}
 */
class DaffAuthorizeNetInvalidLoginIdError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_INVALID_LOGIN_ID';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInvalidLoginIdError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInvalidLoginIdError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when the postal code is invalid.
 * It should be no more than 20 characters in length.
 */
class DaffAuthorizeNetInvalidPostalCodeError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_INVALID_POSTAL_CODE';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetInvalidPostalCodeError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetInvalidPostalCodeError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when the credit card expiration date is in the past.
 */
class DaffAuthorizeNetPastCCExpirationError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTHORIZE_NET_PAST_CC_EXPIRATION';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetPastCCExpirationError.prototype.code;
    /** @type {?} */
    DaffAuthorizeNetPastCCExpirationError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DAFF_AUTHORIZE_NET_ERROR_CODE_MAP = {
    E_WC_01: DaffAuthorizeNetAcceptjsMissingError,
    E_WC_02: DaffAuthorizeNetInsecureConnectionError,
    E_WC_03: DaffAuthorizeNetAcceptjsInvalidError,
    E_WC_04: DaffAuthorizeNetInputMissingError,
    E_WC_05: DaffAuthorizeNetInvalidCCNameError,
    E_WC_06: DaffAuthorizeNetInvalidCCExpMonthError,
    E_WC_07: DaffAuthorizeNetInvalidCCExpYearError,
    E_WC_08: DaffAuthorizeNetPastCCExpirationError,
    E_WC_10: DaffAuthorizeNetInvalidLoginIdError,
    E_WC_13: DaffAuthorizeNetAcceptjsInvalidError,
    E_WC_15: DaffAuthorizeNetInvalidCCCVVError,
    E_WC_16: DaffAuthorizeNetInvalidPostalCodeError,
    E_WC_17: DaffAuthorizeNetInvalidCCNameError,
    E_WC_18: DaffAuthorizeNetInvalidClientKeyError,
    E_WC_19: DaffAuthorizeNetInvalidLoginIdError,
    E_WC_21: DaffAuthorizeNetAuthFailedError,
    E_WC_23: DaffAuthorizeNetInputMissingError,
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

export { DAFF_AUTHORIZE_NET_ERROR_CODE_MAP, DaffAuthorizeNetAcceptjsInvalidError, DaffAuthorizeNetAcceptjsMissingError, DaffAuthorizeNetAuthFailedError, DaffAuthorizeNetConfigToken, DaffAuthorizeNetDriver, DaffAuthorizeNetInputMissingError, DaffAuthorizeNetInsecureConnectionError, DaffAuthorizeNetInvalidAPIResponseError, DaffAuthorizeNetInvalidCCCVVError, DaffAuthorizeNetInvalidCCExpMonthError, DaffAuthorizeNetInvalidCCExpYearError, DaffAuthorizeNetInvalidCCNameError, DaffAuthorizeNetInvalidCCNumberError, DaffAuthorizeNetInvalidClientKeyError, DaffAuthorizeNetInvalidLoginIdError, DaffAuthorizeNetInvalidPostalCodeError, DaffAuthorizeNetPastCCExpirationError, DaffAuthorizeNetPaymentId };
//# sourceMappingURL=daffodil-authorizenet-driver.js.map
