(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@daffodil/authorizenet/driver'), require('rxjs'), require('@daffodil/authorizenet')) :
    typeof define === 'function' && define.amd ? define('@daffodil/authorizenet/driver/magento', ['exports', '@angular/core', '@angular/common', '@daffodil/authorizenet/driver', 'rxjs', '@daffodil/authorizenet'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.authorizenet = global.daffodil.authorizenet || {}, global.daffodil.authorizenet.driver = global.daffodil.authorizenet.driver || {}, global.daffodil.authorizenet.driver.magento = {}), global.ng.core, global.ng.common, global.daffodil.authorizenet.driver, global.rxjs, global.daffodil.authorizenet));
}(this, function (exports, core, common, driver, rxjs, authorizenet) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} request
     * @param {?} config
     * @return {?}
     */
    function transformMagentoAuthorizeNetRequest(request, config) {
        return {
            cardData: {
                cardNumber: request.creditCard.cardnumber,
                cardCode: request.creditCard.securitycode,
                month: request.creditCard.month,
                year: request.creditCard.year
            },
            authData: {
                clientKey: config.clientKey,
                apiLoginID: config.apiLoginID
            }
        };
    }
    ;
    /**
     * @param {?} response
     * @param {?} ccNumber
     * @return {?}
     */
    function transformMagentoAuthorizeNetResponse(response, ccNumber) {
        return {
            code: 'authorizenet_acceptjs',
            authorizenet_acceptjs: {
                cc_last_4: parseInt(ccNumber.slice(12), 10),
                opaque_data_descriptor: 'COMMON.ACCEPT.INAPP.PAYMENT',
                opaque_data_value: response.opaqueData.dataValue
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffMagentoAuthorizeNetService = /** @class */ (function () {
        function DaffMagentoAuthorizeNetService(config, acceptJsLoader) {
            this.config = config;
            this.acceptJsLoader = acceptJsLoader;
        }
        /**
         * @param {?} paymentTokenRequest
         * @return {?}
         */
        DaffMagentoAuthorizeNetService.prototype.generateToken = /**
         * @param {?} paymentTokenRequest
         * @return {?}
         */
        function (paymentTokenRequest) {
            var _this = this;
            return new rxjs.Observable((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                return _this.acceptJsLoader.getAccept().dispatchData(transformMagentoAuthorizeNetRequest(paymentTokenRequest, _this.config), (/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    if (response.messages.resultCode === 'Error') {
                        /** @type {?} */
                        var MappedError = driver.DAFF_AUTHORIZE_NET_ERROR_CODE_MAP[response.messages.message[0].code];
                        /** @type {?} */
                        var message = response.messages.message[0].code + ': ' + response.messages.message[0].text;
                        throw MappedError ? new MappedError(message) : new Error(message);
                    }
                    else {
                        observer.next(transformMagentoAuthorizeNetResponse(response, paymentTokenRequest.creditCard.cardnumber));
                    }
                }));
            }));
        };
        DaffMagentoAuthorizeNetService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffMagentoAuthorizeNetService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [driver.DaffAuthorizeNetConfigToken,] }] },
            { type: authorizenet.DaffAcceptJsLoadingService }
        ]; };
        /** @nocollapse */ DaffMagentoAuthorizeNetService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoAuthorizeNetService_Factory() { return new DaffMagentoAuthorizeNetService(core.ɵɵinject(driver.DaffAuthorizeNetConfigToken), core.ɵɵinject(authorizenet.DaffAcceptJsLoadingService)); }, token: DaffMagentoAuthorizeNetService, providedIn: "root" });
        return DaffMagentoAuthorizeNetService;
    }());
    if (false) {
        /** @type {?} */
        DaffMagentoAuthorizeNetService.prototype.config;
        /**
         * @type {?}
         * @private
         */
        DaffMagentoAuthorizeNetService.prototype.acceptJsLoader;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAGENTO_AUTHORIZE_NET_PAYMENT_ID = 'authorizenet_acceptjs';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffMagentoAuthorizeNetDriverModule = /** @class */ (function () {
        function DaffMagentoAuthorizeNetDriverModule() {
        }
        /**
         * @param {?} config
         * @return {?}
         */
        DaffMagentoAuthorizeNetDriverModule.forRoot = /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            if (!config.apiLoginID || !config.clientKey) {
                throw Error('You must provide an apiLoginID and clientKey for Authorize.Net configuration.');
            }
            return {
                ngModule: DaffMagentoAuthorizeNetDriverModule,
                providers: [
                    {
                        provide: driver.DaffAuthorizeNetConfigToken,
                        useValue: config
                    },
                    {
                        provide: driver.DaffAuthorizeNetDriver,
                        useExisting: DaffMagentoAuthorizeNetService
                    },
                    {
                        provide: driver.DaffAuthorizeNetPaymentId,
                        useValue: MAGENTO_AUTHORIZE_NET_PAYMENT_ID
                    }
                ]
            };
        };
        DaffMagentoAuthorizeNetDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffMagentoAuthorizeNetDriverModule;
    }());

    exports.DaffMagentoAuthorizeNetDriverModule = DaffMagentoAuthorizeNetDriverModule;
    exports.MAGENTO_AUTHORIZE_NET_PAYMENT_ID = MAGENTO_AUTHORIZE_NET_PAYMENT_ID;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-authorizenet-driver-magento.umd.js.map
