import { __extends } from 'tslib';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { internet } from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import { STATUS } from 'angular-in-memory-web-api';
import { of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DaffPaypalDriver, DaffPaypalFacade } from '@daffodil/paypal';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockPaypalTokenResponse = /** @class */ (function () {
    function MockPaypalTokenResponse() {
        this.token = 'tokenstring';
        this.urls = {
            start: internet.url(),
            edit: internet.url()
        };
    }
    return MockPaypalTokenResponse;
}());
if (false) {
    /** @type {?} */
    MockPaypalTokenResponse.prototype.token;
    /** @type {?} */
    MockPaypalTokenResponse.prototype.urls;
}
var DaffPaypalTokenResponseFactory = /** @class */ (function (_super) {
    __extends(DaffPaypalTokenResponseFactory, _super);
    function DaffPaypalTokenResponseFactory() {
        return _super.call(this, MockPaypalTokenResponse) || this;
    }
    DaffPaypalTokenResponseFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffPaypalTokenResponseFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffPaypalTokenResponseFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffPaypalTokenResponseFactory_Factory() { return new DaffPaypalTokenResponseFactory(); }, token: DaffPaypalTokenResponseFactory, providedIn: "root" });
    return DaffPaypalTokenResponseFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendPaypalService = /** @class */ (function () {
    function DaffInMemoryBackendPaypalService(paypalTokenResponseFactory) {
        this.paypalTokenResponseFactory = paypalTokenResponseFactory;
        this.paypalTokenResponse = this.paypalTokenResponseFactory.create();
    }
    /**
     * @param {?} url
     * @param {?} utils
     * @return {?}
     */
    DaffInMemoryBackendPaypalService.prototype.parseRequestUrl = /**
     * @param {?} url
     * @param {?} utils
     * @return {?}
     */
    function (url, utils) {
        return utils.parseRequestUrl(url);
    };
    /**
     * @return {?}
     */
    DaffInMemoryBackendPaypalService.prototype.createDb = /**
     * @return {?}
     */
    function () {
        return {
            paypalTokenResponse: this.paypalTokenResponse
        };
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendPaypalService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () {
            return {
                body: _this.paypalTokenResponse,
                status: STATUS.OK
            };
        }));
    };
    DaffInMemoryBackendPaypalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendPaypalService.ctorParameters = function () { return [
        { type: DaffPaypalTokenResponseFactory }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendPaypalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendPaypalService_Factory() { return new DaffInMemoryBackendPaypalService(ɵɵinject(DaffPaypalTokenResponseFactory)); }, token: DaffInMemoryBackendPaypalService, providedIn: "root" });
    return DaffInMemoryBackendPaypalService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryBackendPaypalService.prototype.paypalTokenResponse;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendPaypalService.prototype.paypalTokenResponseFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingPaypalService = /** @class */ (function () {
    function DaffTestingPaypalService(paypalTokenResponseFactory) {
        this.paypalTokenResponseFactory = paypalTokenResponseFactory;
    }
    /**
     * @param {?} tokenRequest
     * @return {?}
     */
    DaffTestingPaypalService.prototype.generateToken = /**
     * @param {?} tokenRequest
     * @return {?}
     */
    function (tokenRequest) {
        return of(this.paypalTokenResponseFactory.create());
    };
    DaffTestingPaypalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingPaypalService.ctorParameters = function () { return [
        { type: DaffPaypalTokenResponseFactory }
    ]; };
    /** @nocollapse */ DaffTestingPaypalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingPaypalService_Factory() { return new DaffTestingPaypalService(ɵɵinject(DaffPaypalTokenResponseFactory)); }, token: DaffTestingPaypalService, providedIn: "root" });
    return DaffTestingPaypalService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingPaypalService.prototype.paypalTokenResponseFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryPaypalService = /** @class */ (function () {
    function DaffInMemoryPaypalService(http) {
        this.http = http;
        this.url = '/api/paypal/';
    }
    /**
     * @param {?} tokenRequest
     * @return {?}
     */
    DaffInMemoryPaypalService.prototype.generateToken = /**
     * @param {?} tokenRequest
     * @return {?}
     */
    function (tokenRequest) {
        return this.http.get(this.url + tokenRequest.cartId);
    };
    DaffInMemoryPaypalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryPaypalService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryPaypalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryPaypalService_Factory() { return new DaffInMemoryPaypalService(ɵɵinject(HttpClient)); }, token: DaffInMemoryPaypalService, providedIn: "root" });
    return DaffInMemoryPaypalService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryPaypalService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryPaypalService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffPaypalInMemoryDriverModule = /** @class */ (function () {
    function DaffPaypalInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffPaypalInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffPaypalInMemoryDriverModule,
            providers: [
                {
                    provide: DaffPaypalDriver,
                    useExisting: DaffInMemoryPaypalService
                }
            ]
        };
    };
    DaffPaypalInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffPaypalInMemoryDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffPaypalTestingDriverModule = /** @class */ (function () {
    function DaffPaypalTestingDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffPaypalTestingDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffPaypalTestingDriverModule,
            providers: [
                {
                    provide: DaffPaypalDriver,
                    useExisting: DaffTestingPaypalService
                }
            ]
        };
    };
    DaffPaypalTestingDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffPaypalTestingDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockDaffPaypalFacade = /** @class */ (function () {
    function MockDaffPaypalFacade() {
        this.loading$ = new BehaviorSubject(false);
        this.paypalTokenResponse$ = new BehaviorSubject(null);
        this.paypalToken$ = new BehaviorSubject(null);
        this.paypalStartUrl$ = new BehaviorSubject(null);
        this.paypalEditUrl$ = new BehaviorSubject(null);
        this.error$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffPaypalFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    MockDaffPaypalFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffPaypalFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffPaypalFacade_Factory() { return new MockDaffPaypalFacade(); }, token: MockDaffPaypalFacade, providedIn: "root" });
    return MockDaffPaypalFacade;
}());
if (false) {
    /** @type {?} */
    MockDaffPaypalFacade.prototype.loading$;
    /** @type {?} */
    MockDaffPaypalFacade.prototype.paypalTokenResponse$;
    /** @type {?} */
    MockDaffPaypalFacade.prototype.paypalToken$;
    /** @type {?} */
    MockDaffPaypalFacade.prototype.paypalStartUrl$;
    /** @type {?} */
    MockDaffPaypalFacade.prototype.paypalEditUrl$;
    /** @type {?} */
    MockDaffPaypalFacade.prototype.error$;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffPaypalTestingModule = /** @class */ (function () {
    function DaffPaypalTestingModule() {
    }
    DaffPaypalTestingModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        { provide: DaffPaypalFacade, useExisting: MockDaffPaypalFacade }
                    ]
                },] }
    ];
    return DaffPaypalTestingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffInMemoryBackendPaypalService, DaffInMemoryPaypalService, DaffPaypalInMemoryDriverModule, DaffPaypalTestingDriverModule, DaffPaypalTestingModule, DaffPaypalTokenResponseFactory, DaffTestingPaypalService, MockDaffPaypalFacade };
//# sourceMappingURL=daffodil-paypal-testing.js.map
