(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@daffodil/geography/state'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@daffodil/geography/state/testing', ['exports', '@angular/core', '@daffodil/geography/state', 'rxjs'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.geography = global.daffodil.geography || {}, global.daffodil.geography.state = global.daffodil.geography.state || {}, global.daffodil.geography.state.testing = {}), global.ng.core, global.daffodil.geography.state, global.rxjs));
}(this, function (exports, core, state, rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockDaffGeographyFacade = /** @class */ (function () {
        function MockDaffGeographyFacade() {
            this.loading$ = new rxjs.BehaviorSubject(null);
            this.errors$ = new rxjs.BehaviorSubject([]);
            this.countries$ = new rxjs.BehaviorSubject([]);
            this.countryIds$ = new rxjs.BehaviorSubject([]);
            this.countryCount$ = new rxjs.BehaviorSubject(null);
            this.countryEntities$ = new rxjs.BehaviorSubject(null);
        }
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffGeographyFacade.prototype.getCountry = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffGeographyFacade.prototype.getCountrySubdivisions = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject([]);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffGeographyFacade.prototype.isCountryFullyLoaded = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(false);
        };
        /**
         * @param {?} action
         * @return {?}
         */
        MockDaffGeographyFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) { };
        ;
        MockDaffGeographyFacade.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ MockDaffGeographyFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MockDaffGeographyFacade_Factory() { return new MockDaffGeographyFacade(); }, token: MockDaffGeographyFacade, providedIn: "root" });
        return MockDaffGeographyFacade;
    }());
    if (false) {
        /** @type {?} */
        MockDaffGeographyFacade.prototype.loading$;
        /** @type {?} */
        MockDaffGeographyFacade.prototype.errors$;
        /** @type {?} */
        MockDaffGeographyFacade.prototype.countries$;
        /** @type {?} */
        MockDaffGeographyFacade.prototype.countryIds$;
        /** @type {?} */
        MockDaffGeographyFacade.prototype.countryCount$;
        /** @type {?} */
        MockDaffGeographyFacade.prototype.countryEntities$;
        /* Skipping unhandled member: ;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffGeographyTestingModule = /** @class */ (function () {
        function DaffGeographyTestingModule() {
        }
        DaffGeographyTestingModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [
                            { provide: state.DaffGeographyFacade, useExisting: MockDaffGeographyFacade }
                        ]
                    },] }
        ];
        return DaffGeographyTestingModule;
    }());

    exports.DaffGeographyTestingModule = DaffGeographyTestingModule;
    exports.MockDaffGeographyFacade = MockDaffGeographyFacade;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-geography-state-testing.umd.js.map
