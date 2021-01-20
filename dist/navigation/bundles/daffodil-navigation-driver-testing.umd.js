(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@daffodil/navigation/testing'), require('@angular/common'), require('@daffodil/navigation/driver')) :
    typeof define === 'function' && define.amd ? define('@daffodil/navigation/driver/testing', ['exports', '@angular/core', 'rxjs', '@daffodil/navigation/testing', '@angular/common', '@daffodil/navigation/driver'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.navigation = global.daffodil.navigation || {}, global.daffodil.navigation.driver = global.daffodil.navigation.driver || {}, global.daffodil.navigation.driver.testing = {}), global.ng.core, global.rxjs, global.daffodil.navigation.testing, global.ng.common, global.daffodil.navigation.driver));
}(this, function (exports, core, rxjs, testing, common, driver) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffTestingNavigationService = /** @class */ (function () {
        function DaffTestingNavigationService(navigationTreeFactory) {
            this.navigationTreeFactory = navigationTreeFactory;
        }
        /**
         * @param {?} navigationTreeId
         * @return {?}
         */
        DaffTestingNavigationService.prototype.get = /**
         * @param {?} navigationTreeId
         * @return {?}
         */
        function (navigationTreeId) {
            return rxjs.of(this.navigationTreeFactory.create());
        };
        DaffTestingNavigationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingNavigationService.ctorParameters = function () { return [
            { type: testing.DaffNavigationTreeFactory }
        ]; };
        /** @nocollapse */ DaffTestingNavigationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingNavigationService_Factory() { return new DaffTestingNavigationService(core.ɵɵinject(testing.DaffNavigationTreeFactory)); }, token: DaffTestingNavigationService, providedIn: "root" });
        return DaffTestingNavigationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffTestingNavigationService.prototype.navigationTreeFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffNavigationTestingDriverModule = /** @class */ (function () {
        function DaffNavigationTestingDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffNavigationTestingDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffNavigationTestingDriverModule,
                providers: [
                    {
                        provide: driver.DaffNavigationDriver,
                        useExisting: DaffTestingNavigationService
                    }
                ]
            };
        };
        DaffNavigationTestingDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffNavigationTestingDriverModule;
    }());

    exports.DaffNavigationTestingDriverModule = DaffNavigationTestingDriverModule;
    exports.DaffTestingNavigationService = DaffTestingNavigationService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-navigation-driver-testing.umd.js.map
