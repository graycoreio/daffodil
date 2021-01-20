(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angular-in-memory-web-api'), require('@daffodil/navigation/testing'), require('@angular/common/http'), require('@angular/common'), require('@daffodil/navigation/driver')) :
    typeof define === 'function' && define.amd ? define('@daffodil/navigation/driver/in-memory', ['exports', '@angular/core', 'angular-in-memory-web-api', '@daffodil/navigation/testing', '@angular/common/http', '@angular/common', '@daffodil/navigation/driver'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.navigation = global.daffodil.navigation || {}, global.daffodil.navigation.driver = global.daffodil.navigation.driver || {}, global.daffodil.navigation.driver['in-memory'] = {}), global.ng.core, global.angularInMemoryWebApi, global.daffodil.navigation.testing, global.ng.common.http, global.ng.common, global.daffodil.navigation.driver));
}(this, function (exports, core, angularInMemoryWebApi, testing, http, common, driver) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryBackendNavigationService = /** @class */ (function () {
        function DaffInMemoryBackendNavigationService(navigationTreeFactory) {
            this.navigationTreeFactory = navigationTreeFactory;
            this.navigationTree = this.navigationTreeFactory.create();
        }
        /**
         * @param {?} url
         * @param {?} utils
         * @return {?}
         */
        DaffInMemoryBackendNavigationService.prototype.parseRequestUrl = /**
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
        DaffInMemoryBackendNavigationService.prototype.createDb = /**
         * @return {?}
         */
        function () {
            return {
                navigation: [this.navigationTree]
            };
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendNavigationService.prototype.get = /**
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
                    body: _this.navigationTree,
                    status: angularInMemoryWebApi.STATUS.OK
                };
            }));
        };
        DaffInMemoryBackendNavigationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryBackendNavigationService.ctorParameters = function () { return [
            { type: testing.DaffNavigationTreeFactory }
        ]; };
        /** @nocollapse */ DaffInMemoryBackendNavigationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendNavigationService_Factory() { return new DaffInMemoryBackendNavigationService(core.ɵɵinject(testing.DaffNavigationTreeFactory)); }, token: DaffInMemoryBackendNavigationService, providedIn: "root" });
        return DaffInMemoryBackendNavigationService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryBackendNavigationService.prototype.navigationTree;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendNavigationService.prototype.navigationTreeFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryNavigationService = /** @class */ (function () {
        function DaffInMemoryNavigationService(http) {
            this.http = http;
            this.url = '/api/navigation/';
        }
        /**
         * @param {?} navigationId
         * @return {?}
         */
        DaffInMemoryNavigationService.prototype.get = /**
         * @param {?} navigationId
         * @return {?}
         */
        function (navigationId) {
            return this.http.get(this.url + navigationId);
        };
        DaffInMemoryNavigationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryNavigationService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryNavigationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryNavigationService_Factory() { return new DaffInMemoryNavigationService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryNavigationService, providedIn: "root" });
        return DaffInMemoryNavigationService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryNavigationService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryNavigationService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffNavigationInMemoryDriverModule = /** @class */ (function () {
        function DaffNavigationInMemoryDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffNavigationInMemoryDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffNavigationInMemoryDriverModule,
                providers: [
                    {
                        provide: driver.DaffNavigationDriver,
                        useExisting: DaffInMemoryNavigationService
                    }
                ]
            };
        };
        DaffNavigationInMemoryDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffNavigationInMemoryDriverModule;
    }());

    exports.DaffInMemoryBackendNavigationService = DaffInMemoryBackendNavigationService;
    exports.DaffInMemoryNavigationService = DaffInMemoryNavigationService;
    exports.DaffNavigationInMemoryDriverModule = DaffNavigationInMemoryDriverModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-navigation-driver-in-memory.umd.js.map
