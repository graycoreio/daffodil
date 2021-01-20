import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffContactDriver } from '@daffodil/contact/driver';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryContactService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/contact';
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    send(payload) {
        return this.http.post(this.url, payload);
    }
}
DaffInMemoryContactService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryContactService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryContactService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryContactService_Factory() { return new DaffInMemoryContactService(ɵɵinject(HttpClient)); }, token: DaffInMemoryContactService, providedIn: "root" });
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
class DaffContactInMemoryDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffContactInMemoryDriverModule,
            providers: [
                {
                    provide: DaffContactDriver,
                    useClass: DaffInMemoryContactService,
                },
            ],
        };
    }
}
DaffContactInMemoryDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryBackendContactService {
    constructor() {
        this.forums = [];
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
            forums: this.forums
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
        else if (this.forums.indexOf(reqInfo.body) !== -1) {
            return Error('Already contains submission');
        }
        else {
            this.forums.push(reqInfo.body);
            return of(reqInfo);
        }
    }
}
DaffInMemoryBackendContactService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendContactService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendContactService_Factory() { return new DaffInMemoryBackendContactService(); }, token: DaffInMemoryBackendContactService, providedIn: "root" });
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
