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
class DaffInMemoryBackendNavigationService {
    /**
     * @param {?} navigationTreeFactory
     */
    constructor(navigationTreeFactory) {
        this.navigationTreeFactory = navigationTreeFactory;
        this.navigationTree = this.navigationTreeFactory.create();
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
            navigation: [this.navigationTree]
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
                body: this.navigationTree,
                status: STATUS.OK
            };
        }));
    }
}
DaffInMemoryBackendNavigationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendNavigationService.ctorParameters = () => [
    { type: DaffNavigationTreeFactory }
];
/** @nocollapse */ DaffInMemoryBackendNavigationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendNavigationService_Factory() { return new DaffInMemoryBackendNavigationService(ɵɵinject(DaffNavigationTreeFactory)); }, token: DaffInMemoryBackendNavigationService, providedIn: "root" });
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
class DaffInMemoryNavigationService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/navigation/';
    }
    /**
     * @param {?} navigationId
     * @return {?}
     */
    get(navigationId) {
        return this.http.get(this.url + navigationId);
    }
}
DaffInMemoryNavigationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryNavigationService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryNavigationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryNavigationService_Factory() { return new DaffInMemoryNavigationService(ɵɵinject(HttpClient)); }, token: DaffInMemoryNavigationService, providedIn: "root" });
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
class DaffNavigationInMemoryDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffNavigationInMemoryDriverModule,
            providers: [
                {
                    provide: DaffNavigationDriver,
                    useExisting: DaffInMemoryNavigationService
                }
            ]
        };
    }
}
DaffNavigationInMemoryDriverModule.decorators = [
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
