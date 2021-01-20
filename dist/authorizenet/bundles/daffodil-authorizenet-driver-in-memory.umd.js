(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@daffodil/authorizenet/driver'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@daffodil/authorizenet/driver/in-memory', ['exports', '@angular/core', '@angular/common', '@daffodil/authorizenet/driver', '@angular/common/http'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.authorizenet = global.daffodil.authorizenet || {}, global.daffodil.authorizenet.driver = global.daffodil.authorizenet.driver || {}, global.daffodil.authorizenet.driver['in-memory'] = {}), global.ng.core, global.ng.common, global.daffodil.authorizenet.driver, global.ng.common.http));
}(this, function (exports, core, common, driver, http) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryAuthorizeNetService = /** @class */ (function () {
        function DaffInMemoryAuthorizeNetService(http) {
            this.http = http;
            this.url = '/api/authorizenet';
        }
        /**
         * @param {?} paymentTokenRequest
         * @return {?}
         */
        DaffInMemoryAuthorizeNetService.prototype.generateToken = /**
         * @param {?} paymentTokenRequest
         * @return {?}
         */
        function (paymentTokenRequest) {
            return this.http.post(this.url + '/generateToken', paymentTokenRequest);
        };
        DaffInMemoryAuthorizeNetService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryAuthorizeNetService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryAuthorizeNetService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryAuthorizeNetService_Factory() { return new DaffInMemoryAuthorizeNetService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryAuthorizeNetService, providedIn: "root" });
        return DaffInMemoryAuthorizeNetService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryAuthorizeNetService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryAuthorizeNetService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffAuthorizeNetInMemoryDriverModule = /** @class */ (function () {
        function DaffAuthorizeNetInMemoryDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffAuthorizeNetInMemoryDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffAuthorizeNetInMemoryDriverModule,
                providers: [
                    {
                        provide: driver.DaffAuthorizeNetDriver,
                        useExisting: DaffInMemoryAuthorizeNetService
                    }
                ]
            };
        };
        DaffAuthorizeNetInMemoryDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffAuthorizeNetInMemoryDriverModule;
    }());

    exports.DaffAuthorizeNetInMemoryDriverModule = DaffAuthorizeNetInMemoryDriverModule;
    exports.DaffInMemoryAuthorizeNetService = DaffInMemoryAuthorizeNetService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-authorizenet-driver-in-memory.umd.js.map
