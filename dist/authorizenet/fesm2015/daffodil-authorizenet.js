import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AuthorizeNetRequest() { }
if (false) {
    /** @type {?} */
    AuthorizeNetRequest.prototype.cardData;
    /** @type {?} */
    AuthorizeNetRequest.prototype.authData;
}
/**
 * @record
 */
function AuthorizeNetCreditCard() { }
if (false) {
    /** @type {?} */
    AuthorizeNetCreditCard.prototype.cardNumber;
    /** @type {?} */
    AuthorizeNetCreditCard.prototype.cardCode;
    /** @type {?} */
    AuthorizeNetCreditCard.prototype.month;
    /** @type {?} */
    AuthorizeNetCreditCard.prototype.year;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AuthorizeNetMessage() { }
if (false) {
    /** @type {?} */
    AuthorizeNetMessage.prototype.code;
    /** @type {?} */
    AuthorizeNetMessage.prototype.text;
}
/**
 * @record
 */
function AuthorizeNetResponse() { }
if (false) {
    /** @type {?} */
    AuthorizeNetResponse.prototype.opaqueData;
    /** @type {?} */
    AuthorizeNetResponse.prototype.messages;
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
 * A token that represents the version to use for Accept.JS calls.
 * A "true" value configures the package to use the production AcceptJs endpoint,
 * and a "false" value configures it to use the Sandbox AcceptJs endpoint.
 * By default, we assume you're using the sandbox (false).
 * @type {?}
 */
const DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION = new InjectionToken('DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => false),
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ACCEPT_JS_SANDBOX_URL = 'https://jstest.authorize.net/v1/Accept.js';
/** @type {?} */
const ACCEPT_JS_PRODUCTION_URL = 'https://js.authorize.net/v1/Accept.js';
class DaffAcceptJsLoadingService {
    /**
     * @param {?} production
     * @param {?} doc
     */
    constructor(production, doc) {
        this.production = production;
        this.doc = doc;
    }
    /**
     * @return {?}
     */
    load() {
        if (typeof Accept === 'undefined') {
            /** @type {?} */
            const acceptJsScript = this.doc.createElement('script');
            acceptJsScript.async = true;
            acceptJsScript.setAttribute('type', 'text/javascript');
            acceptJsScript.setAttribute('src', this.production ? ACCEPT_JS_PRODUCTION_URL : ACCEPT_JS_SANDBOX_URL);
            acceptJsScript.setAttribute('charset', 'utf-8');
            this.doc.body.appendChild(acceptJsScript);
        }
    }
    /**
     * @return {?}
     */
    getAccept() {
        return Accept;
    }
}
DaffAcceptJsLoadingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
DaffAcceptJsLoadingService.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: Inject, args: [DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ DaffAcceptJsLoadingService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffAcceptJsLoadingService_Factory() { return new DaffAcceptJsLoadingService(ɵɵinject(DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION), ɵɵinject(DOCUMENT)); }, token: DaffAcceptJsLoadingService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffAcceptJsLoadingService.prototype.production;
    /**
     * @type {?}
     * @private
     */
    DaffAcceptJsLoadingService.prototype.doc;
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
 * Transforms `DaffError`s into `DaffStateError`s before they are serialized into state.
 * Can be used to further refine Daffodil errors into more specific app errors.
 * @type {?}
 */
const DAFF_AUTHORIZENET_ERROR_MATCHER = new InjectionToken('DAFF_AUTHORIZENET_ERROR_MATCHER', { factory: (/**
     * @return {?}
     */
    () => daffTransformErrorToStateError) });

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

export { DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION, DAFF_AUTHORIZENET_ERROR_MATCHER, DaffAcceptJsLoadingService };
//# sourceMappingURL=daffodil-authorizenet.js.map
