(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@daffodil/navigation/state'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@daffodil/navigation/state/testing', ['exports', '@angular/core', '@angular/common', '@daffodil/navigation/state', 'rxjs'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.navigation = global.daffodil.navigation || {}, global.daffodil.navigation.state = global.daffodil.navigation.state || {}, global.daffodil.navigation.state.testing = {}), global.ng.core, global.ng.common, global.daffodil.navigation.state, global.rxjs));
}(this, function (exports, core, common, state, rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A mock of the DaffNavigationFacade used to remove any interaction with the ngrx store.
     * This mock should be imported into tests using the DaffNavigationTestingModule.
     * @template T
     */
    var MockDaffNavigationFacade = /** @class */ (function () {
        function MockDaffNavigationFacade() {
            this.loading$ = new rxjs.BehaviorSubject(false);
            this.tree$ = new rxjs.BehaviorSubject(null);
            this.errors$ = new rxjs.BehaviorSubject([]);
        }
        /**
         * @param {?} action
         * @return {?}
         */
        MockDaffNavigationFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) { };
        MockDaffNavigationFacade.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ MockDaffNavigationFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MockDaffNavigationFacade_Factory() { return new MockDaffNavigationFacade(); }, token: MockDaffNavigationFacade, providedIn: "root" });
        return MockDaffNavigationFacade;
    }());
    if (false) {
        /** @type {?} */
        MockDaffNavigationFacade.prototype.loading$;
        /** @type {?} */
        MockDaffNavigationFacade.prototype.tree$;
        /** @type {?} */
        MockDaffNavigationFacade.prototype.errors$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The DaffNavigationTestingModule provides a mock for the DaffNavigationFacade. This makes testing much simpler
     * by removing any interaction with the ngrx store.
     */
    var DaffNavigationTestingModule = /** @class */ (function () {
        function DaffNavigationTestingModule() {
        }
        DaffNavigationTestingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        providers: [
                            { provide: state.DaffNavigationFacade, useExisting: MockDaffNavigationFacade }
                        ]
                    },] }
        ];
        return DaffNavigationTestingModule;
    }());

    exports.DaffNavigationTestingModule = DaffNavigationTestingModule;
    exports.MockDaffNavigationFacade = MockDaffNavigationFacade;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-navigation-state-testing.umd.js.map
