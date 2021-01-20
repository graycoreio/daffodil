(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/core'), require('@daffodil/contact/state')) :
    typeof define === 'function' && define.amd ? define('@daffodil/contact/state/testing', ['exports', 'rxjs', '@angular/core', '@daffodil/contact/state'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.contact = global.daffodil.contact || {}, global.daffodil.contact.state = global.daffodil.contact.state || {}, global.daffodil.contact.state.testing = {}), global.rxjs, global.ng.core, global.daffodil.contact.state));
}(this, function (exports, rxjs, core, state) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockDaffContactFacade = /** @class */ (function () {
        function MockDaffContactFacade() {
            this.success$ = new rxjs.BehaviorSubject(false);
            this.error$ = new rxjs.BehaviorSubject([]);
            this.loading$ = new rxjs.BehaviorSubject(false);
        }
        /**
         * @param {?} action
         * @return {?}
         */
        MockDaffContactFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) { };
        ;
        MockDaffContactFacade.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ MockDaffContactFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MockDaffContactFacade_Factory() { return new MockDaffContactFacade(); }, token: MockDaffContactFacade, providedIn: "root" });
        return MockDaffContactFacade;
    }());
    if (false) {
        /** @type {?} */
        MockDaffContactFacade.prototype.success$;
        /** @type {?} */
        MockDaffContactFacade.prototype.error$;
        /** @type {?} */
        MockDaffContactFacade.prototype.loading$;
        /* Skipping unhandled member: ;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffContactStateTestingModule = /** @class */ (function () {
        function DaffContactStateTestingModule() {
        }
        DaffContactStateTestingModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [{ provide: state.DaffContactFacade, useClass: MockDaffContactFacade }],
                    },] }
        ];
        return DaffContactStateTestingModule;
    }());

    exports.DaffContactStateTestingModule = DaffContactStateTestingModule;
    exports.MockDaffContactFacade = MockDaffContactFacade;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-contact-state-testing.umd.js.map
