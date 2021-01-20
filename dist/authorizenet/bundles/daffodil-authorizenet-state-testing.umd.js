(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/core'), require('@daffodil/authorizenet/state')) :
    typeof define === 'function' && define.amd ? define('@daffodil/authorizenet/state/testing', ['exports', 'rxjs', '@angular/core', '@daffodil/authorizenet/state'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.authorizenet = global.daffodil.authorizenet || {}, global.daffodil.authorizenet.state = global.daffodil.authorizenet.state || {}, global.daffodil.authorizenet.state.testing = {}), global.rxjs, global.ng.core, global.daffodil.authorizenet.state));
}(this, function (exports, rxjs, core, state) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockDaffAuthorizeNetFacade = /** @class */ (function () {
        function MockDaffAuthorizeNetFacade() {
            this.isAcceptJsLoaded$ = new rxjs.BehaviorSubject(false);
            this.loading$ = new rxjs.BehaviorSubject(false);
            this.paymentError$ = new rxjs.BehaviorSubject(null);
            this.acceptJsLoadError$ = new rxjs.BehaviorSubject(null);
        }
        /**
         * @param {?} action
         * @return {?}
         */
        MockDaffAuthorizeNetFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) { };
        ;
        MockDaffAuthorizeNetFacade.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ MockDaffAuthorizeNetFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MockDaffAuthorizeNetFacade_Factory() { return new MockDaffAuthorizeNetFacade(); }, token: MockDaffAuthorizeNetFacade, providedIn: "root" });
        return MockDaffAuthorizeNetFacade;
    }());
    if (false) {
        /** @type {?} */
        MockDaffAuthorizeNetFacade.prototype.isAcceptJsLoaded$;
        /** @type {?} */
        MockDaffAuthorizeNetFacade.prototype.loading$;
        /** @type {?} */
        MockDaffAuthorizeNetFacade.prototype.paymentError$;
        /** @type {?} */
        MockDaffAuthorizeNetFacade.prototype.acceptJsLoadError$;
        /* Skipping unhandled member: ;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffAuthorizeNetTestingModule = /** @class */ (function () {
        function DaffAuthorizeNetTestingModule() {
        }
        DaffAuthorizeNetTestingModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [
                            { provide: state.DaffAuthorizeNetFacade, useExisting: MockDaffAuthorizeNetFacade }
                        ]
                    },] }
        ];
        return DaffAuthorizeNetTestingModule;
    }());

    exports.DaffAuthorizeNetTestingModule = DaffAuthorizeNetTestingModule;
    exports.MockDaffAuthorizeNetFacade = MockDaffAuthorizeNetFacade;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-authorizenet-state-testing.umd.js.map
