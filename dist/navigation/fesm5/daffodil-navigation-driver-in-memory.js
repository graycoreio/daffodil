import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DaffNavigationDriver } from '@daffodil/navigation/driver';

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
                status: STATUS.OK
            };
        }));
    };
    DaffInMemoryBackendNavigationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendNavigationService.ctorParameters = function () { return [
        { type: DaffNavigationTreeFactory }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendNavigationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendNavigationService_Factory() { return new DaffInMemoryBackendNavigationService(ɵɵinject(DaffNavigationTreeFactory)); }, token: DaffInMemoryBackendNavigationService, providedIn: "root" });
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryNavigationService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryNavigationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryNavigationService_Factory() { return new DaffInMemoryNavigationService(ɵɵinject(HttpClient)); }, token: DaffInMemoryNavigationService, providedIn: "root" });
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
                    provide: DaffNavigationDriver,
                    useExisting: DaffInMemoryNavigationService
                }
            ]
        };
    };
    DaffNavigationInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffNavigationInMemoryDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffInMemoryBackendNavigationService, DaffInMemoryNavigationService, DaffNavigationInMemoryDriverModule };
//# sourceMappingURL=daffodil-navigation-driver-in-memory.js.map
