(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/core'), require('rxjs/operators'), require('@angular/common'), require('@daffodil/newsletter'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@daffodil/newsletter/testing', ['exports', 'rxjs', '@angular/core', 'rxjs/operators', '@angular/common', '@daffodil/newsletter', '@angular/common/http'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.newsletter = global.daffodil.newsletter || {}, global.daffodil.newsletter.testing = {}), global.rxjs, global.ng.core, global.rxjs.operators, global.ng.common, global.daffodil.newsletter, global.ng.common.http));
}(this, function (exports, rxjs, core, operators, common, newsletter, http) { 'use strict';

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
            return rxjs.of('Success').pipe(operators.delay(10));
        };
        DaffTestingNewsletterService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffTestingNewsletterService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingNewsletterService_Factory() { return new DaffTestingNewsletterService(); }, token: DaffTestingNewsletterService, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryNewsletterService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryNewsletterService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryNewsletterService_Factory() { return new DaffInMemoryNewsletterService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryNewsletterService, providedIn: "root" });
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
                        provide: newsletter.DaffNewsletterDriver,
                        useExisting: DaffInMemoryNewsletterService
                    }
                ]
            };
        };
        DaffNewsletterInMemoryDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffInMemoryBackendNewsletterService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendNewsletterService_Factory() { return new DaffInMemoryBackendNewsletterService(); }, token: DaffInMemoryBackendNewsletterService, providedIn: "root" });
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
                        provide: newsletter.DaffNewsletterDriver,
                        useClass: DaffTestingNewsletterService
                    }
                ]
            };
        };
        DaffNewsletterTestingDriverModule.decorators = [
            { type: core.NgModule }
        ];
        return DaffNewsletterTestingDriverModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockDaffNewsletterFacade = /** @class */ (function () {
        function MockDaffNewsletterFacade() {
            this.success$ = new rxjs.BehaviorSubject(false);
            this.error$ = new rxjs.BehaviorSubject(null);
            this.loading$ = new rxjs.BehaviorSubject(false);
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
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ MockDaffNewsletterFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MockDaffNewsletterFacade_Factory() { return new MockDaffNewsletterFacade(); }, token: MockDaffNewsletterFacade, providedIn: "root" });
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
            { type: core.NgModule, args: [{
                        providers: [
                            { provide: newsletter.DaffNewsletterFacade, useExisting: MockDaffNewsletterFacade }
                        ]
                    },] }
        ];
        return DaffNewsletterTestingModule;
    }());

    exports.DaffInMemoryBackendNewsletterService = DaffInMemoryBackendNewsletterService;
    exports.DaffNewsletterInMemoryDriverModule = DaffNewsletterInMemoryDriverModule;
    exports.DaffNewsletterTestingDriverModule = DaffNewsletterTestingDriverModule;
    exports.DaffNewsletterTestingModule = DaffNewsletterTestingModule;
    exports.DaffTestingNewsletterService = DaffTestingNewsletterService;
    exports.MockDaffNewsletterFacade = MockDaffNewsletterFacade;
    exports.ɵa = DaffInMemoryNewsletterService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-newsletter-testing.umd.js.map
