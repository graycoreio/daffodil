(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@daffodil/geography/driver'), require('rxjs'), require('@daffodil/geography/testing')) :
    typeof define === 'function' && define.amd ? define('@daffodil/geography/driver/testing', ['exports', '@angular/core', '@angular/common', '@daffodil/geography/driver', 'rxjs', '@daffodil/geography/testing'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.geography = global.daffodil.geography || {}, global.daffodil.geography.driver = global.daffodil.geography.driver || {}, global.daffodil.geography.driver.testing = {}), global.ng.core, global.ng.common, global.daffodil.geography.driver, global.rxjs, global.daffodil.geography.testing));
}(this, function (exports, core, common, driver, rxjs, testing) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffTestingGeographyService = /** @class */ (function () {
        function DaffTestingGeographyService(countryFactory, subdivisionFactory) {
            this.countryFactory = countryFactory;
            this.subdivisionFactory = subdivisionFactory;
        }
        /**
         * @param {?} countryId
         * @return {?}
         */
        DaffTestingGeographyService.prototype.get = /**
         * @param {?} countryId
         * @return {?}
         */
        function (countryId) {
            return rxjs.of(this.countryFactory.create({
                id: countryId,
                subdivisions: this.subdivisionFactory.createMany(3)
            }));
        };
        /**
         * @return {?}
         */
        DaffTestingGeographyService.prototype.list = /**
         * @return {?}
         */
        function () {
            return rxjs.of(this.countryFactory.createMany(5));
        };
        DaffTestingGeographyService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingGeographyService.ctorParameters = function () { return [
            { type: testing.DaffCountryFactory },
            { type: testing.DaffSubdivisionFactory }
        ]; };
        /** @nocollapse */ DaffTestingGeographyService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingGeographyService_Factory() { return new DaffTestingGeographyService(core.ɵɵinject(testing.DaffCountryFactory), core.ɵɵinject(testing.DaffSubdivisionFactory)); }, token: DaffTestingGeographyService, providedIn: "root" });
        return DaffTestingGeographyService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffTestingGeographyService.prototype.countryFactory;
        /**
         * @type {?}
         * @private
         */
        DaffTestingGeographyService.prototype.subdivisionFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffGeographyTestingDriverModule = /** @class */ (function () {
        function DaffGeographyTestingDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffGeographyTestingDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffGeographyTestingDriverModule,
                providers: [
                    {
                        provide: driver.DaffGeographyDriver,
                        useExisting: DaffTestingGeographyService
                    }
                ]
            };
        };
        DaffGeographyTestingDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffGeographyTestingDriverModule;
    }());

    exports.DaffGeographyTestingDriverModule = DaffGeographyTestingDriverModule;
    exports.DaffTestingGeographyService = DaffTestingGeographyService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-geography-driver-testing.umd.js.map
