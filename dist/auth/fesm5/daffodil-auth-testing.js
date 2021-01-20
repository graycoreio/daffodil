import { __extends } from 'tslib';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { internet, name, random } from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import { STATUS } from 'angular-in-memory-web-api';
import { CommonModule } from '@angular/common';
import { DaffLoginDriver, DaffRegisterDriver, DaffAuthDriver } from '@daffodil/auth';
import { of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, mapTo } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockCustomerRegistration = /** @class */ (function () {
    function MockCustomerRegistration() {
        this.email = internet.email();
        this.firstName = name.firstName();
        this.lastName = name.lastName();
    }
    return MockCustomerRegistration;
}());
if (false) {
    /** @type {?} */
    MockCustomerRegistration.prototype.email;
    /** @type {?} */
    MockCustomerRegistration.prototype.firstName;
    /** @type {?} */
    MockCustomerRegistration.prototype.lastName;
}
var DaffCustomerRegistrationFactory = /** @class */ (function (_super) {
    __extends(DaffCustomerRegistrationFactory, _super);
    function DaffCustomerRegistrationFactory() {
        return _super.call(this, MockCustomerRegistration) || this;
    }
    DaffCustomerRegistrationFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCustomerRegistrationFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCustomerRegistrationFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCustomerRegistrationFactory_Factory() { return new DaffCustomerRegistrationFactory(); }, token: DaffCustomerRegistrationFactory, providedIn: "root" });
    return DaffCustomerRegistrationFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockAccountRegistration = /** @class */ (function () {
    function MockAccountRegistration() {
        this.customer = this.fakeCustomer();
        this.password = random.alphaNumeric(16);
    }
    /**
     * @private
     * @return {?}
     */
    MockAccountRegistration.prototype.fakeCustomer = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = new DaffCustomerRegistrationFactory();
        return factory.create();
    };
    return MockAccountRegistration;
}());
if (false) {
    /** @type {?} */
    MockAccountRegistration.prototype.customer;
    /** @type {?} */
    MockAccountRegistration.prototype.password;
}
;
var DaffAccountRegistrationFactory = /** @class */ (function (_super) {
    __extends(DaffAccountRegistrationFactory, _super);
    function DaffAccountRegistrationFactory() {
        return _super.call(this, MockAccountRegistration) || this;
    }
    DaffAccountRegistrationFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffAccountRegistrationFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffAccountRegistrationFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffAccountRegistrationFactory_Factory() { return new DaffAccountRegistrationFactory(); }, token: DaffAccountRegistrationFactory, providedIn: "root" });
    return DaffAccountRegistrationFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockAuthToken = /** @class */ (function () {
    function MockAuthToken() {
        this.token = random.alphaNumeric(16);
    }
    return MockAuthToken;
}());
if (false) {
    /** @type {?} */
    MockAuthToken.prototype.token;
}
;
var DaffAuthTokenFactory = /** @class */ (function (_super) {
    __extends(DaffAuthTokenFactory, _super);
    function DaffAuthTokenFactory() {
        return _super.call(this, MockAuthToken) || this;
    }
    DaffAuthTokenFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffAuthTokenFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffAuthTokenFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffAuthTokenFactory_Factory() { return new DaffAuthTokenFactory(); }, token: DaffAuthTokenFactory, providedIn: "root" });
    return DaffAuthTokenFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendAuthService = /** @class */ (function () {
    function DaffInMemoryBackendAuthService() {
    }
    /**
     * @private
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.generateToken = /**
     * @private
     * @return {?}
     */
    function () {
        return random.alphaNumeric(16);
    };
    /**
     * @private
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.generateId = /**
     * @private
     * @return {?}
     */
    function () {
        return random.uuid();
    };
    /**
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.createDb = /**
     * @return {?}
     */
    function () {
        return {
            auth: {}
        };
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.post = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        if (reqInfo.id === 'login') {
            return this.login(reqInfo);
        }
        else if (reqInfo.id === 'register') {
            return this.register(reqInfo);
        }
        else if (reqInfo.id === 'logout') {
            return this.logout(reqInfo);
        }
        else if (reqInfo.id === 'check') {
            return this.check(reqInfo);
        }
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.login = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: {
                token: _this.generateToken()
            },
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.register = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _a = reqInfo.utils.getJsonBody(reqInfo.req), customer = _a.customer, password = _a.password;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: {
                email: customer.email,
                password: password
            },
            status: STATUS.CREATED
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.logout = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: { success: true },
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.check = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: {},
            status: STATUS.OK
        }); }));
    };
    DaffInMemoryBackendAuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendAuthService.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffInMemoryBackendAuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendAuthService_Factory() { return new DaffInMemoryBackendAuthService(); }, token: DaffInMemoryBackendAuthService, providedIn: "root" });
    return DaffInMemoryBackendAuthService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingLoginService = /** @class */ (function () {
    function DaffTestingLoginService(factory) {
        this.factory = factory;
    }
    /**
     * @param {?} loginInfo
     * @return {?}
     */
    DaffTestingLoginService.prototype.login = /**
     * @param {?} loginInfo
     * @return {?}
     */
    function (loginInfo) {
        return of(this.factory.create());
    };
    /**
     * @return {?}
     */
    DaffTestingLoginService.prototype.logout = /**
     * @return {?}
     */
    function () {
        return of(undefined);
    };
    DaffTestingLoginService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingLoginService.ctorParameters = function () { return [
        { type: DaffAuthTokenFactory }
    ]; };
    /** @nocollapse */ DaffTestingLoginService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingLoginService_Factory() { return new DaffTestingLoginService(ɵɵinject(DaffAuthTokenFactory)); }, token: DaffTestingLoginService, providedIn: "root" });
    return DaffTestingLoginService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingLoginService.prototype.factory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingRegisterService = /** @class */ (function () {
    function DaffTestingRegisterService() {
    }
    /**
     * @param {?} registration
     * @return {?}
     */
    DaffTestingRegisterService.prototype.register = /**
     * @param {?} registration
     * @return {?}
     */
    function (registration) {
        return of({
            email: registration.customer.email,
            password: registration.password
        });
    };
    DaffTestingRegisterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffTestingRegisterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingRegisterService_Factory() { return new DaffTestingRegisterService(); }, token: DaffTestingRegisterService, providedIn: "root" });
    return DaffTestingRegisterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingAuthService = /** @class */ (function () {
    function DaffTestingAuthService() {
    }
    /**
     * @return {?}
     */
    DaffTestingAuthService.prototype.check = /**
     * @return {?}
     */
    function () {
        return of(undefined);
    };
    DaffTestingAuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffTestingAuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingAuthService_Factory() { return new DaffTestingAuthService(); }, token: DaffTestingAuthService, providedIn: "root" });
    return DaffTestingAuthService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffAuthTestingDriverModule = /** @class */ (function () {
    function DaffAuthTestingDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffAuthTestingDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffAuthTestingDriverModule,
            providers: [
                {
                    provide: DaffLoginDriver,
                    useExisting: DaffTestingLoginService
                },
                {
                    provide: DaffRegisterDriver,
                    useExisting: DaffTestingRegisterService
                },
                {
                    provide: DaffAuthDriver,
                    useExisting: DaffTestingAuthService
                }
            ]
        };
    };
    DaffAuthTestingDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ]
                },] }
    ];
    return DaffAuthTestingDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryLoginService = /** @class */ (function () {
    function DaffInMemoryLoginService(http) {
        this.http = http;
        this.url = '/api/auth/';
    }
    /**
     * @param {?} request
     * @return {?}
     */
    DaffInMemoryLoginService.prototype.login = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.http.post(this.url + "login", request);
    };
    /**
     * @return {?}
     */
    DaffInMemoryLoginService.prototype.logout = /**
     * @return {?}
     */
    function () {
        return this.http.post(this.url + "logout", {}).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var success = _a.success;
            return success ? of(undefined) : throwError(new Error('Logout failed'));
        })));
    };
    DaffInMemoryLoginService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryLoginService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryLoginService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryLoginService_Factory() { return new DaffInMemoryLoginService(ɵɵinject(HttpClient)); }, token: DaffInMemoryLoginService, providedIn: "root" });
    return DaffInMemoryLoginService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryLoginService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryLoginService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryRegisterService = /** @class */ (function () {
    function DaffInMemoryRegisterService(http) {
        this.http = http;
        this.url = '/api/auth/';
    }
    /**
     * @param {?} registration
     * @return {?}
     */
    DaffInMemoryRegisterService.prototype.register = /**
     * @param {?} registration
     * @return {?}
     */
    function (registration) {
        return this.http.post(this.url + "register", registration).pipe(mapTo({
            email: registration.customer.email,
            password: registration.password
        }));
    };
    DaffInMemoryRegisterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryRegisterService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryRegisterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryRegisterService_Factory() { return new DaffInMemoryRegisterService(ɵɵinject(HttpClient)); }, token: DaffInMemoryRegisterService, providedIn: "root" });
    return DaffInMemoryRegisterService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryRegisterService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryRegisterService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryAuthService = /** @class */ (function () {
    function DaffInMemoryAuthService(http) {
        this.http = http;
        this.url = '/api/auth/';
    }
    /**
     * @return {?}
     */
    DaffInMemoryAuthService.prototype.check = /**
     * @return {?}
     */
    function () {
        return this.http.post(this.url + "check", {}).pipe(mapTo(undefined));
    };
    DaffInMemoryAuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryAuthService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryAuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryAuthService_Factory() { return new DaffInMemoryAuthService(ɵɵinject(HttpClient)); }, token: DaffInMemoryAuthService, providedIn: "root" });
    return DaffInMemoryAuthService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryAuthService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryAuthService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffAuthInMemoryDriverModule = /** @class */ (function () {
    function DaffAuthInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffAuthInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffAuthInMemoryDriverModule,
            providers: [
                {
                    provide: DaffLoginDriver,
                    useExisting: DaffInMemoryLoginService
                },
                {
                    provide: DaffRegisterDriver,
                    useExisting: DaffInMemoryRegisterService
                },
                {
                    provide: DaffAuthDriver,
                    useExisting: DaffInMemoryAuthService
                }
            ]
        };
    };
    DaffAuthInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ]
                },] }
    ];
    return DaffAuthInMemoryDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffAccountRegistrationFactory, DaffAuthInMemoryDriverModule, DaffAuthTestingDriverModule, DaffAuthTokenFactory, DaffCustomerRegistrationFactory, DaffInMemoryBackendAuthService, DaffTestingLoginService as ɵa, DaffTestingRegisterService as ɵb, DaffTestingAuthService as ɵc, DaffInMemoryLoginService as ɵd, DaffInMemoryRegisterService as ɵe, DaffInMemoryAuthService as ɵf };
//# sourceMappingURL=daffodil-auth-testing.js.map
