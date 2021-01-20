(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@daffodil/contact/driver'), require('@angular/common/http'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@daffodil/contact/driver/in-memory', ['exports', '@angular/core', '@angular/common', '@daffodil/contact/driver', '@angular/common/http', 'rxjs'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.contact = global.daffodil.contact || {}, global.daffodil.contact.driver = global.daffodil.contact.driver || {}, global.daffodil.contact.driver['in-memory'] = {}), global.ng.core, global.ng.common, global.daffodil.contact.driver, global.ng.common.http, global.rxjs));
}(this, function (exports, core, common, driver, http, rxjs) { 'use strict';

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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryContactService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryContactService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryContactService_Factory() { return new DaffInMemoryContactService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryContactService, providedIn: "root" });
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
                        provide: driver.DaffContactDriver,
                        useClass: DaffInMemoryContactService,
                    },
                ],
            };
        };
        DaffContactInMemoryDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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
                return rxjs.of(reqInfo);
            }
        };
        DaffInMemoryBackendContactService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffInMemoryBackendContactService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendContactService_Factory() { return new DaffInMemoryBackendContactService(); }, token: DaffInMemoryBackendContactService, providedIn: "root" });
        return DaffInMemoryBackendContactService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryBackendContactService.prototype.forums;
    }

    exports.DaffContactInMemoryDriverModule = DaffContactInMemoryDriverModule;
    exports.DaffInMemoryBackendContactService = DaffInMemoryBackendContactService;
    exports.ɵa = DaffInMemoryContactService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-contact-driver-in-memory.umd.js.map
