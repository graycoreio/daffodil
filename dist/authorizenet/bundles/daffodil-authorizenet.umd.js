(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@daffodil/core/state')) :
    typeof define === 'function' && define.amd ? define('@daffodil/authorizenet', ['exports', '@angular/core', '@angular/common', '@daffodil/core/state'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.authorizenet = {}), global.ng.core, global.ng.common, global.state));
}(this, function (exports, core, common, state) { 'use strict';

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
    var DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION = new core.InjectionToken('DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION', {
        providedIn: 'root',
        factory: (/**
         * @return {?}
         */
        function () { return false; }),
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ACCEPT_JS_SANDBOX_URL = 'https://jstest.authorize.net/v1/Accept.js';
    /** @type {?} */
    var ACCEPT_JS_PRODUCTION_URL = 'https://js.authorize.net/v1/Accept.js';
    var DaffAcceptJsLoadingService = /** @class */ (function () {
        function DaffAcceptJsLoadingService(production, doc) {
            this.production = production;
            this.doc = doc;
        }
        /**
         * @return {?}
         */
        DaffAcceptJsLoadingService.prototype.load = /**
         * @return {?}
         */
        function () {
            if (typeof Accept === 'undefined') {
                /** @type {?} */
                var acceptJsScript = this.doc.createElement('script');
                acceptJsScript.async = true;
                acceptJsScript.setAttribute('type', 'text/javascript');
                acceptJsScript.setAttribute('src', this.production ? ACCEPT_JS_PRODUCTION_URL : ACCEPT_JS_SANDBOX_URL);
                acceptJsScript.setAttribute('charset', 'utf-8');
                this.doc.body.appendChild(acceptJsScript);
            }
        };
        /**
         * @return {?}
         */
        DaffAcceptJsLoadingService.prototype.getAccept = /**
         * @return {?}
         */
        function () {
            return Accept;
        };
        DaffAcceptJsLoadingService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        DaffAcceptJsLoadingService.ctorParameters = function () { return [
            { type: Boolean, decorators: [{ type: core.Inject, args: [DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        /** @nocollapse */ DaffAcceptJsLoadingService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffAcceptJsLoadingService_Factory() { return new DaffAcceptJsLoadingService(core.ɵɵinject(DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION), core.ɵɵinject(common.DOCUMENT)); }, token: DaffAcceptJsLoadingService, providedIn: "root" });
        return DaffAcceptJsLoadingService;
    }());
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
    var DAFF_AUTHORIZENET_ERROR_MATCHER = new core.InjectionToken('DAFF_AUTHORIZENET_ERROR_MATCHER', { factory: (/**
         * @return {?}
         */
        function () { return state.daffTransformErrorToStateError; }) });

    exports.DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION = DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION;
    exports.DAFF_AUTHORIZENET_ERROR_MATCHER = DAFF_AUTHORIZENET_ERROR_MATCHER;
    exports.DaffAcceptJsLoadingService = DaffAcceptJsLoadingService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-authorizenet.umd.js.map
