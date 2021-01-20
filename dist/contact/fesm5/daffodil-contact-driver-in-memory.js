import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffContactDriver } from '@daffodil/contact/driver';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryContactService = /** @class */ (function () {
    function DaffInMemoryContactService(http) {
        this.http = http;
        this.url = '/api/contact';
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    DaffInMemoryContactService.prototype.send = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return this.http.post(this.url, payload);
    };
    DaffInMemoryContactService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryContactService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryContactService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryContactService_Factory() { return new DaffInMemoryContactService(ɵɵinject(HttpClient)); }, token: DaffInMemoryContactService, providedIn: "root" });
    return DaffInMemoryContactService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryContactService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryContactService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffContactInMemoryDriverModule = /** @class */ (function () {
    function DaffContactInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffContactInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffContactInMemoryDriverModule,
            providers: [
                {
                    provide: DaffContactDriver,
                    useClass: DaffInMemoryContactService,
                },
            ],
        };
    };
    DaffContactInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                },] }
    ];
    return DaffContactInMemoryDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendContactService = /** @class */ (function () {
    function DaffInMemoryBackendContactService() {
        this.forums = [];
    }
    /**
     * @param {?} url
     * @param {?} utils
     * @return {?}
     */
    DaffInMemoryBackendContactService.prototype.parseRequestUrl = /**
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
    DaffInMemoryBackendContactService.prototype.createDb = /**
     * @return {?}
     */
    function () {
        return {
            forums: this.forums
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
    DaffInMemoryBackendContactService.prototype.post = 
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
        else if (this.forums.indexOf(reqInfo.body) !== -1) {
            return Error('Already contains submission');
        }
        else {
            this.forums.push(reqInfo.body);
            return of(reqInfo);
        }
    };
    DaffInMemoryBackendContactService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendContactService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendContactService_Factory() { return new DaffInMemoryBackendContactService(); }, token: DaffInMemoryBackendContactService, providedIn: "root" });
    return DaffInMemoryBackendContactService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryBackendContactService.prototype.forums;
}

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

export { DaffContactInMemoryDriverModule, DaffInMemoryBackendContactService, DaffInMemoryContactService as ɵa };
//# sourceMappingURL=daffodil-contact-driver-in-memory.js.map
