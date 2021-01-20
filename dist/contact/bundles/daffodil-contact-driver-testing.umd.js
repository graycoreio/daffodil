(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@daffodil/contact/driver'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@daffodil/contact/driver/testing', ['exports', '@angular/core', '@angular/common', '@daffodil/contact/driver', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.contact = global.daffodil.contact || {}, global.daffodil.contact.driver = global.daffodil.contact.driver || {}, global.daffodil.contact.driver.testing = {}), global.ng.core, global.ng.common, global.daffodil.contact.driver, global.rxjs, global.rxjs.operators));
}(this, function (exports, core, common, driver, rxjs, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffTestingContactService = /** @class */ (function () {
        function DaffTestingContactService() {
        }
        /**
         * @param {?} payload
         * @return {?}
         */
        DaffTestingContactService.prototype.send = /**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return rxjs.of('Success').pipe(operators.delay(10));
        };
        DaffTestingContactService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffTestingContactService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingContactService_Factory() { return new DaffTestingContactService(); }, token: DaffTestingContactService, providedIn: "root" });
        return DaffTestingContactService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffContactTestingDriverModule = /** @class */ (function () {
        function DaffContactTestingDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffContactTestingDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffContactTestingDriverModule,
                providers: [
                    {
                        provide: driver.DaffContactDriver,
                        useClass: DaffTestingContactService,
                    },
                ],
            };
        };
        DaffContactTestingDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                    },] }
        ];
        return DaffContactTestingDriverModule;
    }());

    exports.DaffContactTestingDriverModule = DaffContactTestingDriverModule;
    exports.ɵa = DaffTestingContactService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-contact-driver-testing.umd.js.map
