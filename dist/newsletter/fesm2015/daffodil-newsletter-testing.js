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
class DaffTestingNewsletterService {
    /**
     * @param {?} payload
     * @return {?}
     */
    send(payload) {
        return of('Success').pipe(delay(10));
    }
}
DaffTestingNewsletterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffTestingNewsletterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingNewsletterService_Factory() { return new DaffTestingNewsletterService(); }, token: DaffTestingNewsletterService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The newsletter inmemory driver to mock the newsletter backend service.
 *
 * \@Param HttpClient
 */
class DaffInMemoryNewsletterService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/newsletters/';
    }
    /**
     * Sends your newsletter submission data.
     *
     * @param {?} payload DaffNewsletterUnion
     * @return {?} An Observable of DaffNewsletterUnion
     */
    send(payload) {
        return this.http.post(this.url, payload);
    }
}
DaffInMemoryNewsletterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryNewsletterService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryNewsletterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryNewsletterService_Factory() { return new DaffInMemoryNewsletterService(ɵɵinject(HttpClient)); }, token: DaffInMemoryNewsletterService, providedIn: "root" });
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
class DaffNewsletterInMemoryDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffNewsletterInMemoryDriverModule,
            providers: [
                {
                    provide: DaffNewsletterDriver,
                    useExisting: DaffInMemoryNewsletterService
                }
            ]
        };
    }
}
DaffNewsletterInMemoryDriverModule.decorators = [
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
class DaffInMemoryBackendNewsletterService {
    constructor() {
        this.newsletters = [];
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
            newsletters: this.newsletters
        };
    }
    //validate that its not empty
    //validate that it doesn't already exist
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    post(reqInfo) {
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
    }
}
DaffInMemoryBackendNewsletterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendNewsletterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendNewsletterService_Factory() { return new DaffInMemoryBackendNewsletterService(); }, token: DaffInMemoryBackendNewsletterService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryBackendNewsletterService.prototype.newsletters;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffNewsletterTestingDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffNewsletterTestingDriverModule,
            providers: [
                {
                    provide: DaffNewsletterDriver,
                    useClass: DaffTestingNewsletterService
                }
            ]
        };
    }
}
DaffNewsletterTestingDriverModule.decorators = [
    { type: NgModule }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockDaffNewsletterFacade {
    constructor() {
        this.success$ = new BehaviorSubject(false);
        this.error$ = new BehaviorSubject(null);
        this.loading$ = new BehaviorSubject(false);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) { }
}
MockDaffNewsletterFacade.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MockDaffNewsletterFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffNewsletterFacade_Factory() { return new MockDaffNewsletterFacade(); }, token: MockDaffNewsletterFacade, providedIn: "root" });
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
class DaffNewsletterTestingModule {
}
DaffNewsletterTestingModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    { provide: DaffNewsletterFacade, useExisting: MockDaffNewsletterFacade }
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

export { DaffInMemoryBackendNewsletterService, DaffNewsletterInMemoryDriverModule, DaffNewsletterTestingDriverModule, DaffNewsletterTestingModule, DaffTestingNewsletterService, MockDaffNewsletterFacade, DaffInMemoryNewsletterService as ɵa };
//# sourceMappingURL=daffodil-newsletter-testing.js.map
