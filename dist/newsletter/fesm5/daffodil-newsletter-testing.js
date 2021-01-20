import { of, BehaviorSubject } from 'rxjs';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { delay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { DaffNewsletterDriver, DaffNewsletterFacade } from '@daffodil/newsletter';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingNewsletterService = /** @class */ (function () {
    function DaffTestingNewsletterService() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    DaffTestingNewsletterService.prototype.send = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return of('Success').pipe(delay(10));
    };
    DaffTestingNewsletterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffTestingNewsletterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingNewsletterService_Factory() { return new DaffTestingNewsletterService(); }, token: DaffTestingNewsletterService, providedIn: "root" });
    return DaffTestingNewsletterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The newsletter inmemory driver to mock the newsletter backend service.
 *
 * \@Param HttpClient
 */
var DaffInMemoryNewsletterService = /** @class */ (function () {
    function DaffInMemoryNewsletterService(http) {
        this.http = http;
        this.url = '/api/newsletters/';
    }
    /**
     * Sends your newsletter submission data.
     *
     * @param payload DaffNewsletterUnion
     * @returns An Observable of DaffNewsletterUnion
     */
    /**
     * Sends your newsletter submission data.
     *
     * @param {?} payload DaffNewsletterUnion
     * @return {?} An Observable of DaffNewsletterUnion
     */
    DaffInMemoryNewsletterService.prototype.send = /**
     * Sends your newsletter submission data.
     *
     * @param {?} payload DaffNewsletterUnion
     * @return {?} An Observable of DaffNewsletterUnion
     */
    function (payload) {
        return this.http.post(this.url, payload);
    };
    DaffInMemoryNewsletterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryNewsletterService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryNewsletterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryNewsletterService_Factory() { return new DaffInMemoryNewsletterService(ɵɵinject(HttpClient)); }, token: DaffInMemoryNewsletterService, providedIn: "root" });
    return DaffInMemoryNewsletterService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryNewsletterService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryNewsletterService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Module for providing the DaffInMemoryNewsletterService driver to your application
 */
var DaffNewsletterInMemoryDriverModule = /** @class */ (function () {
    function DaffNewsletterInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffNewsletterInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffNewsletterInMemoryDriverModule,
            providers: [
                {
                    provide: DaffNewsletterDriver,
                    useExisting: DaffInMemoryNewsletterService
                }
            ]
        };
    };
    DaffNewsletterInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffNewsletterInMemoryDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendNewsletterService = /** @class */ (function () {
    function DaffInMemoryBackendNewsletterService() {
        this.newsletters = [];
    }
    /**
     * @param {?} url
     * @param {?} utils
     * @return {?}
     */
    DaffInMemoryBackendNewsletterService.prototype.parseRequestUrl = /**
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
    DaffInMemoryBackendNewsletterService.prototype.createDb = /**
     * @return {?}
     */
    function () {
        return {
            newsletters: this.newsletters
        };
    };
    //validate that its not empty
    //validate that it doesn't already exist
    //validate that its not empty
    //validate that it doesn't already exist
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendNewsletterService.prototype.post = 
    //validate that its not empty
    //validate that it doesn't already exist
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        if (reqInfo === undefined) {
            return Error('Payload is undefined');
        }
        else if (this.newsletters.indexOf(reqInfo) > -1) {
            return Error('Already contains submission');
        }
        else {
            this.newsletters.push(reqInfo);
            return reqInfo;
        }
    };
    DaffInMemoryBackendNewsletterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendNewsletterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendNewsletterService_Factory() { return new DaffInMemoryBackendNewsletterService(); }, token: DaffInMemoryBackendNewsletterService, providedIn: "root" });
    return DaffInMemoryBackendNewsletterService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryBackendNewsletterService.prototype.newsletters;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffNewsletterTestingDriverModule = /** @class */ (function () {
    function DaffNewsletterTestingDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffNewsletterTestingDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffNewsletterTestingDriverModule,
            providers: [
                {
                    provide: DaffNewsletterDriver,
                    useClass: DaffTestingNewsletterService
                }
            ]
        };
    };
    DaffNewsletterTestingDriverModule.decorators = [
        { type: NgModule }
    ];
    return DaffNewsletterTestingDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockDaffNewsletterFacade = /** @class */ (function () {
    function MockDaffNewsletterFacade() {
        this.success$ = new BehaviorSubject(false);
        this.error$ = new BehaviorSubject(null);
        this.loading$ = new BehaviorSubject(false);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffNewsletterFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    MockDaffNewsletterFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffNewsletterFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffNewsletterFacade_Factory() { return new MockDaffNewsletterFacade(); }, token: MockDaffNewsletterFacade, providedIn: "root" });
    return MockDaffNewsletterFacade;
}());
if (false) {
    /** @type {?} */
    MockDaffNewsletterFacade.prototype.success$;
    /** @type {?} */
    MockDaffNewsletterFacade.prototype.error$;
    /** @type {?} */
    MockDaffNewsletterFacade.prototype.loading$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffNewsletterTestingModule = /** @class */ (function () {
    function DaffNewsletterTestingModule() {
    }
    DaffNewsletterTestingModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        { provide: DaffNewsletterFacade, useExisting: MockDaffNewsletterFacade }
                    ]
                },] }
    ];
    return DaffNewsletterTestingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffInMemoryBackendNewsletterService, DaffNewsletterInMemoryDriverModule, DaffNewsletterTestingDriverModule, DaffNewsletterTestingModule, DaffTestingNewsletterService, MockDaffNewsletterFacade, DaffInMemoryNewsletterService as ɵa };
//# sourceMappingURL=daffodil-newsletter-testing.js.map
