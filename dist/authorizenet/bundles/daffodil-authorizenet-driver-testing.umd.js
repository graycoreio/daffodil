(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@daffodil/authorizenet/driver'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@daffodil/authorizenet/driver/testing', ['exports', '@angular/core', '@angular/common', '@daffodil/authorizenet/driver', 'rxjs'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.authorizenet = global.daffodil.authorizenet || {}, global.daffodil.authorizenet.driver = global.daffodil.authorizenet.driver || {}, global.daffodil.authorizenet.driver.testing = {}), global.ng.core, global.ng.common, global.daffodil.authorizenet.driver, global.rxjs));
}(this, function (exports, core, common, driver, rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffTestingAuthorizeNetService = /** @class */ (function () {
        function DaffTestingAuthorizeNetService() {
        }
        /**
         * @param {?} tokenRequest
         * @return {?}
         */
        DaffTestingAuthorizeNetService.prototype.generateToken = /**
         * @param {?} tokenRequest
         * @return {?}
         */
        function (tokenRequest) {
            return rxjs.of({ paymentInfo: 'paymentInfo' });
        };
        DaffTestingAuthorizeNetService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffTestingAuthorizeNetService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingAuthorizeNetService_Factory() { return new DaffTestingAuthorizeNetService(); }, token: DaffTestingAuthorizeNetService, providedIn: "root" });
        return DaffTestingAuthorizeNetService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffTestingAuthorizeNetDriverModule = /** @class */ (function () {
        function DaffTestingAuthorizeNetDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffTestingAuthorizeNetDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffTestingAuthorizeNetDriverModule,
                providers: [
                    {
                        provide: driver.DaffAuthorizeNetDriver,
                        useExisting: DaffTestingAuthorizeNetService
                    }
                ]
            };
        };
        DaffTestingAuthorizeNetDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffTestingAuthorizeNetDriverModule;
    }());

    exports.DaffTestingAuthorizeNetDriverModule = DaffTestingAuthorizeNetDriverModule;
    exports.DaffTestingAuthorizeNetService = DaffTestingAuthorizeNetService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-authorizenet-driver-testing.umd.js.map
