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
class MockPaypalTokenResponse {
    constructor() {
        this.token = 'tokenstring';
        this.urls = {
            start: internet.url(),
            edit: internet.url()
        };
    }
}
if (false) {
    /** @type {?} */
    MockPaypalTokenResponse.prototype.token;
    /** @type {?} */
    MockPaypalTokenResponse.prototype.urls;
}
class DaffPaypalTokenResponseFactory extends DaffModelFactory {
    constructor() {
        super(MockPaypalTokenResponse);
    }
}
DaffPaypalTokenResponseFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffPaypalTokenResponseFactory.ctorParameters = () => [];
/** @nocollapse */ DaffPaypalTokenResponseFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffPaypalTokenResponseFactory_Factory() { return new DaffPaypalTokenResponseFactory(); }, token: DaffPaypalTokenResponseFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryBackendPaypalService {
    /**
     * @param {?} paypalTokenResponseFactory
     */
    constructor(paypalTokenResponseFactory) {
        this.paypalTokenResponseFactory = paypalTokenResponseFactory;
        this.paypalTokenResponse = this.paypalTokenResponseFactory.create();
    }
    /**
     * @param {?} url
     * @param {?} utils
     * @return {?}
     */
    parseRequestUrl(url, utils) {
        return utils.parseRequestUrl(url);
    }
    /**
     * @return {?}
     */
    createDb() {
        return {
            paypalTokenResponse: this.paypalTokenResponse
        };
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => {
            return {
                body: this.paypalTokenResponse,
                status: STATUS.OK
            };
        }));
    }
}
DaffInMemoryBackendPaypalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendPaypalService.ctorParameters = () => [
    { type: DaffPaypalTokenResponseFactory }
];
/** @nocollapse */ DaffInMemoryBackendPaypalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendPaypalService_Factory() { return new DaffInMemoryBackendPaypalService(ɵɵinject(DaffPaypalTokenResponseFactory)); }, token: DaffInMemoryBackendPaypalService, providedIn: "root" });
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
class DaffTestingPaypalService {
    /**
     * @param {?} paypalTokenResponseFactory
     */
    constructor(paypalTokenResponseFactory) {
        this.paypalTokenResponseFactory = paypalTokenResponseFactory;
    }
    /**
     * @param {?} tokenRequest
     * @return {?}
     */
    generateToken(tokenRequest) {
        return of(this.paypalTokenResponseFactory.create());
    }
}
DaffTestingPaypalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingPaypalService.ctorParameters = () => [
    { type: DaffPaypalTokenResponseFactory }
];
/** @nocollapse */ DaffTestingPaypalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingPaypalService_Factory() { return new DaffTestingPaypalService(ɵɵinject(DaffPaypalTokenResponseFactory)); }, token: DaffTestingPaypalService, providedIn: "root" });
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
class DaffInMemoryPaypalService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/paypal/';
    }
    /**
     * @param {?} tokenRequest
     * @return {?}
     */
    generateToken(tokenRequest) {
        return this.http.get(this.url + tokenRequest.cartId);
    }
}
DaffInMemoryPaypalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryPaypalService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryPaypalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryPaypalService_Factory() { return new DaffInMemoryPaypalService(ɵɵinject(HttpClient)); }, token: DaffInMemoryPaypalService, providedIn: "root" });
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
class DaffPaypalInMemoryDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffPaypalInMemoryDriverModule,
            providers: [
                {
                    provide: DaffPaypalDriver,
                    useExisting: DaffInMemoryPaypalService
                }
            ]
        };
    }
}
DaffPaypalInMemoryDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffPaypalTestingDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffPaypalTestingDriverModule,
            providers: [
                {
                    provide: DaffPaypalDriver,
                    useExisting: DaffTestingPaypalService
                }
            ]
        };
    }
}
DaffPaypalTestingDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockDaffPaypalFacade {
    constructor() {
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
    dispatch(action) { }
    ;
}
MockDaffPaypalFacade.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MockDaffPaypalFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffPaypalFacade_Factory() { return new MockDaffPaypalFacade(); }, token: MockDaffPaypalFacade, providedIn: "root" });
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
class DaffPaypalTestingModule {
}
DaffPaypalTestingModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    { provide: DaffPaypalFacade, useExisting: MockDaffPaypalFacade }
                ]
            },] }
];

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
