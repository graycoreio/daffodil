import { InjectionToken } from '@angular/core';
import { __extends } from 'tslib';
import { DaffInheritableError } from '@daffodil/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DaffAuthorizeNetConfigToken = new InjectionToken('DaffAuthorizeNetConfigToken');
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
var DaffAuthorizeNetDriver = new InjectionToken('DaffAuthorizeNetDriver');
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
var DaffAuthorizeNetPaymentId = new InjectionToken('DaffAuthorizeNetPaymentId');

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
var  /**
 * An error thrown when Accept.js has been loaded incorrectly.
 * This can be caused by the script being loaded from a local source
 * or when the browser or proxy has improperly cached an older version of the script.
 */
DaffAuthorizeNetAcceptjsInvalidError = /** @class */ (function (_super) {
    __extends(DaffAuthorizeNetAcceptjsInvalidError, _super);
    function DaffAuthorizeNetAcceptjsInvalidError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_ACCEPTJS_INVALID';
        return _this;
    }
    return DaffAuthorizeNetAcceptjsInvalidError;
}(DaffInheritableError));
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
var  /**
 * An error thrown when Accept.js has not been loaded.
 */
DaffAuthorizeNetAcceptjsMissingError = /** @class */ (function (_super) {
    __extends(DaffAuthorizeNetAcceptjsMissingError, _super);
    function DaffAuthorizeNetAcceptjsMissingError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_ACCEPTJS_MISSING';
        return _this;
    }
    return DaffAuthorizeNetAcceptjsMissingError;
}(DaffInheritableError));
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
var  /**
 * An error thrown when either the API Login ID or Public Client Key values are incorrect.
 */
DaffAuthorizeNetAuthFailedError = /** @class */ (function (_super) {
    __extends(DaffAuthorizeNetAuthFailedError, _super);
    function DaffAuthorizeNetAuthFailedError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_AUTH_FAILED';
        return _this;
    }
    return DaffAuthorizeNetAuthFailedError;
}(DaffInheritableError));
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
var  /**
 * An error thrown when required information is missing from the request payload.
 */
DaffAuthorizeNetInputMissingError = /** @class */ (function (_super) {
    __extends(DaffAuthorizeNetInputMissingError, _super);
    function DaffAuthorizeNetInputMissingError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_INPUT_MISSING';
        return _this;
    }
    return DaffAuthorizeNetInputMissingError;
}(DaffInheritableError));
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
var  /**
 * An error thrown when requests are not made over HTTPS.
 */
DaffAuthorizeNetInsecureConnectionError = /** @class */ (function (_super) {
    __extends(DaffAuthorizeNetInsecureConnectionError, _super);
    function DaffAuthorizeNetInsecureConnectionError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_INSECURE_CONNECTION';
        return _this;
    }
    return DaffAuthorizeNetInsecureConnectionError;
}(DaffInheritableError));
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
var  /**
 * An error thrown when the platform response is missing key information or malformed in an unrecoverable way.
 */
DaffAuthorizeNetInvalidAPIResponseError = /** @class */ (function (_super) {
    __extends(DaffAuthorizeNetInvalidAPIResponseError, _super);
    function DaffAuthorizeNetInvalidAPIResponseError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_INVALID_API_RESPONSE';
        return _this;
    }
    return DaffAuthorizeNetInvalidAPIResponseError;
}(DaffInheritableError));
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
var  /**
 * An error thrown when the credit card cvv number is invalid.
 */
DaffAuthorizeNetInvalidCCCVVError = /** @class */ (function (_super) {
    __extends(DaffAuthorizeNetInvalidCCCVVError, _super);
    function DaffAuthorizeNetInvalidCCCVVError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_CVV';
        return _this;
    }
    return DaffAuthorizeNetInvalidCCCVVError;
}(DaffInheritableError));
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
var  /**
 * An error thrown when the credit card expiration month is invalid.
 */
DaffAuthorizeNetInvalidCCExpMonthError = /** @class */ (function (_super) {
    __extends(DaffAuthorizeNetInvalidCCExpMonthError, _super);
    function DaffAuthorizeNetInvalidCCExpMonthError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_EXP_MONTH';
        return _this;
    }
    return DaffAuthorizeNetInvalidCCExpMonthError;
}(DaffInheritableError));
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
var  /**
 * An error thrown when the credit card expiration year is invalid.
 */
DaffAuthorizeNetInvalidCCExpYearError = /** @class */ (function (_super) {
    __extends(DaffAuthorizeNetInvalidCCExpYearError, _super);
    function DaffAuthorizeNetInvalidCCExpYearError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_EXP_YEAR';
        return _this;
    }
    return DaffAuthorizeNetInvalidCCExpYearError;
}(DaffInheritableError));
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
var  /**
 * An error thrown when the cardholder name is invalid.
 * It should be no more than 64 characters in length.
 */
DaffAuthorizeNetInvalidCCNameError = /** @class */ (function (_super) {
    __extends(DaffAuthorizeNetInvalidCCNameError, _super);
    function DaffAuthorizeNetInvalidCCNameError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_NAME';
        return _this;
    }
    return DaffAuthorizeNetInvalidCCNameError;
}(DaffInheritableError));
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
var  /**
 * An error thrown when the credit card number is invalid.
 */
DaffAuthorizeNetInvalidCCNumberError = /** @class */ (function (_super) {
    __extends(DaffAuthorizeNetInvalidCCNumberError, _super);
    function DaffAuthorizeNetInvalidCCNumberError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_NUMBER';
        return _this;
    }
    return DaffAuthorizeNetInvalidCCNumberError;
}(DaffInheritableError));
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
var  /**
 * An error thrown when the `clientKey` value with which the Authorize.net driver has been configured is invalid or missing.
 * @see {\@link DaffAuthorizeNetConfig}
 */
DaffAuthorizeNetInvalidClientKeyError = /** @class */ (function (_super) {
    __extends(DaffAuthorizeNetInvalidClientKeyError, _super);
    function DaffAuthorizeNetInvalidClientKeyError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_INVALID_CLIENT_KEY';
        return _this;
    }
    return DaffAuthorizeNetInvalidClientKeyError;
}(DaffInheritableError));
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
var  /**
 * An error thrown when the `apiLoginID` value with which the Authorize.net driver has been configured is invalid or missing.
 * @see {\@link DaffAuthorizeNetConfig}
 */
DaffAuthorizeNetInvalidLoginIdError = /** @class */ (function (_super) {
    __extends(DaffAuthorizeNetInvalidLoginIdError, _super);
    function DaffAuthorizeNetInvalidLoginIdError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_INVALID_LOGIN_ID';
        return _this;
    }
    return DaffAuthorizeNetInvalidLoginIdError;
}(DaffInheritableError));
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
var  /**
 * An error thrown when the postal code is invalid.
 * It should be no more than 20 characters in length.
 */
DaffAuthorizeNetInvalidPostalCodeError = /** @class */ (function (_super) {
    __extends(DaffAuthorizeNetInvalidPostalCodeError, _super);
    function DaffAuthorizeNetInvalidPostalCodeError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_INVALID_POSTAL_CODE';
        return _this;
    }
    return DaffAuthorizeNetInvalidPostalCodeError;
}(DaffInheritableError));
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
var  /**
 * An error thrown when the credit card expiration date is in the past.
 */
DaffAuthorizeNetPastCCExpirationError = /** @class */ (function (_super) {
    __extends(DaffAuthorizeNetPastCCExpirationError, _super);
    function DaffAuthorizeNetPastCCExpirationError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTHORIZE_NET_PAST_CC_EXPIRATION';
        return _this;
    }
    return DaffAuthorizeNetPastCCExpirationError;
}(DaffInheritableError));
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
var DAFF_AUTHORIZE_NET_ERROR_CODE_MAP = {
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
