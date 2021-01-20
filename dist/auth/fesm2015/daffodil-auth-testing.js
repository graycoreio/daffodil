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
class MockCustomerRegistration {
    constructor() {
        this.email = internet.email();
        this.firstName = name.firstName();
        this.lastName = name.lastName();
    }
}
if (false) {
    /** @type {?} */
    MockCustomerRegistration.prototype.email;
    /** @type {?} */
    MockCustomerRegistration.prototype.firstName;
    /** @type {?} */
    MockCustomerRegistration.prototype.lastName;
}
class DaffCustomerRegistrationFactory extends DaffModelFactory {
    constructor() {
        super(MockCustomerRegistration);
    }
}
DaffCustomerRegistrationFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCustomerRegistrationFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCustomerRegistrationFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCustomerRegistrationFactory_Factory() { return new DaffCustomerRegistrationFactory(); }, token: DaffCustomerRegistrationFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockAccountRegistration {
    constructor() {
        this.customer = this.fakeCustomer();
        this.password = random.alphaNumeric(16);
    }
    /**
     * @private
     * @return {?}
     */
    fakeCustomer() {
        /** @type {?} */
        const factory = new DaffCustomerRegistrationFactory();
        return factory.create();
    }
}
if (false) {
    /** @type {?} */
    MockAccountRegistration.prototype.customer;
    /** @type {?} */
    MockAccountRegistration.prototype.password;
}
;
class DaffAccountRegistrationFactory extends DaffModelFactory {
    constructor() {
        super(MockAccountRegistration);
    }
}
DaffAccountRegistrationFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffAccountRegistrationFactory.ctorParameters = () => [];
/** @nocollapse */ DaffAccountRegistrationFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffAccountRegistrationFactory_Factory() { return new DaffAccountRegistrationFactory(); }, token: DaffAccountRegistrationFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockAuthToken {
    constructor() {
        this.token = random.alphaNumeric(16);
    }
}
if (false) {
    /** @type {?} */
    MockAuthToken.prototype.token;
}
;
class DaffAuthTokenFactory extends DaffModelFactory {
    constructor() {
        super(MockAuthToken);
    }
}
DaffAuthTokenFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffAuthTokenFactory.ctorParameters = () => [];
/** @nocollapse */ DaffAuthTokenFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffAuthTokenFactory_Factory() { return new DaffAuthTokenFactory(); }, token: DaffAuthTokenFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryBackendAuthService {
    constructor() { }
    /**
     * @private
     * @return {?}
     */
    generateToken() {
        return random.alphaNumeric(16);
    }
    /**
     * @private
     * @return {?}
     */
    generateId() {
        return random.uuid();
    }
    /**
     * @return {?}
     */
    createDb() {
        return {
            auth: {}
        };
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    post(reqInfo) {
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
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    login(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: {
                token: this.generateToken()
            },
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    register(reqInfo) {
        const { customer, password } = reqInfo.utils.getJsonBody(reqInfo.req);
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: {
                email: customer.email,
                password
            },
            status: STATUS.CREATED
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    logout(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: { success: true },
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    check(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: {},
            status: STATUS.OK
        })));
    }
}
DaffInMemoryBackendAuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendAuthService.ctorParameters = () => [];
/** @nocollapse */ DaffInMemoryBackendAuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendAuthService_Factory() { return new DaffInMemoryBackendAuthService(); }, token: DaffInMemoryBackendAuthService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffTestingLoginService {
    /**
     * @param {?} factory
     */
    constructor(factory) {
        this.factory = factory;
    }
    /**
     * @param {?} loginInfo
     * @return {?}
     */
    login(loginInfo) {
        return of(this.factory.create());
    }
    /**
     * @return {?}
     */
    logout() {
        return of(undefined);
    }
}
DaffTestingLoginService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingLoginService.ctorParameters = () => [
    { type: DaffAuthTokenFactory }
];
/** @nocollapse */ DaffTestingLoginService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingLoginService_Factory() { return new DaffTestingLoginService(ɵɵinject(DaffAuthTokenFactory)); }, token: DaffTestingLoginService, providedIn: "root" });
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
class DaffTestingRegisterService {
    /**
     * @param {?} registration
     * @return {?}
     */
    register(registration) {
        return of({
            email: registration.customer.email,
            password: registration.password
        });
    }
}
DaffTestingRegisterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffTestingRegisterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingRegisterService_Factory() { return new DaffTestingRegisterService(); }, token: DaffTestingRegisterService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffTestingAuthService {
    /**
     * @return {?}
     */
    check() {
        return of(undefined);
    }
}
DaffTestingAuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffTestingAuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingAuthService_Factory() { return new DaffTestingAuthService(); }, token: DaffTestingAuthService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffAuthTestingDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
DaffAuthTestingDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryLoginService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/auth/';
    }
    /**
     * @param {?} request
     * @return {?}
     */
    login(request) {
        return this.http.post(`${this.url}login`, request);
    }
    /**
     * @return {?}
     */
    logout() {
        return this.http.post(`${this.url}logout`, {}).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ success }) => success ? of(undefined) : throwError(new Error('Logout failed')))));
    }
}
DaffInMemoryLoginService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryLoginService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryLoginService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryLoginService_Factory() { return new DaffInMemoryLoginService(ɵɵinject(HttpClient)); }, token: DaffInMemoryLoginService, providedIn: "root" });
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
class DaffInMemoryRegisterService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/auth/';
    }
    /**
     * @param {?} registration
     * @return {?}
     */
    register(registration) {
        return this.http.post(`${this.url}register`, registration).pipe(mapTo({
            email: registration.customer.email,
            password: registration.password
        }));
    }
}
DaffInMemoryRegisterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryRegisterService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryRegisterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryRegisterService_Factory() { return new DaffInMemoryRegisterService(ɵɵinject(HttpClient)); }, token: DaffInMemoryRegisterService, providedIn: "root" });
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
class DaffInMemoryAuthService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/auth/';
    }
    /**
     * @return {?}
     */
    check() {
        return this.http.post(`${this.url}check`, {}).pipe(mapTo(undefined));
    }
}
DaffInMemoryAuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryAuthService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryAuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryAuthService_Factory() { return new DaffInMemoryAuthService(ɵɵinject(HttpClient)); }, token: DaffInMemoryAuthService, providedIn: "root" });
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
class DaffAuthInMemoryDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
DaffAuthInMemoryDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
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

export { DaffAccountRegistrationFactory, DaffAuthInMemoryDriverModule, DaffAuthTestingDriverModule, DaffAuthTokenFactory, DaffCustomerRegistrationFactory, DaffInMemoryBackendAuthService, DaffTestingLoginService as ɵa, DaffTestingRegisterService as ɵb, DaffTestingAuthService as ɵc, DaffInMemoryLoginService as ɵd, DaffInMemoryRegisterService as ɵe, DaffInMemoryAuthService as ɵf };
//# sourceMappingURL=daffodil-auth-testing.js.map
