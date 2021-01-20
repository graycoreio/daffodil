(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngrx/effects'), require('rxjs'), require('rxjs/operators'), require('@daffodil/contact/driver'), require('@ngrx/store')) :
    typeof define === 'function' && define.amd ? define('@daffodil/contact/state', ['exports', '@angular/core', '@ngrx/effects', 'rxjs', 'rxjs/operators', '@daffodil/contact/driver', '@ngrx/store'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.contact = global.daffodil.contact || {}, global.daffodil.contact.state = {}), global.ng.core, global.effects, global.rxjs, global.rxjs.operators, global.daffodil.contact.driver, global.store));
}(this, function (exports, core, effects, rxjs, operators, driver, store) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DaffContactActionTypes = {
        ContactSubmitAction: '[Daff-Contact] Contact Submit Action',
        ContactCancelAction: '[Daff-Contact] Contact Cancel Action',
        ContactSuccessSubmitAction: '[Daff-Contact] Contact Success Submit Action',
        ContactFailedSubmitAction: '[Daff-Contact] Contact Failed Submit Action',
        ContactRetryAction: '[Daff-Contact] Contact Retry Action',
        ContactResetAction: '[Daff-Contact] Contact Reset Action',
    };
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    DaffContactSubmit = /** @class */ (function () {
        function DaffContactSubmit(payload) {
            this.payload = payload;
            this.type = DaffContactActionTypes.ContactSubmitAction;
        }
        return DaffContactSubmit;
    }());
    if (false) {
        /** @type {?} */
        DaffContactSubmit.prototype.type;
        /** @type {?} */
        DaffContactSubmit.prototype.payload;
    }
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    DaffContactRetry = /** @class */ (function () {
        function DaffContactRetry(payload) {
            this.payload = payload;
            this.type = DaffContactActionTypes.ContactRetryAction;
        }
        return DaffContactRetry;
    }());
    if (false) {
        /** @type {?} */
        DaffContactRetry.prototype.type;
        /** @type {?} */
        DaffContactRetry.prototype.payload;
    }
    var DaffContactFailedSubmit = /** @class */ (function () {
        function DaffContactFailedSubmit(payload) {
            this.payload = payload;
            this.type = DaffContactActionTypes.ContactFailedSubmitAction;
        }
        return DaffContactFailedSubmit;
    }());
    if (false) {
        /** @type {?} */
        DaffContactFailedSubmit.prototype.type;
        /** @type {?} */
        DaffContactFailedSubmit.prototype.payload;
    }
    var DaffContactCancel = /** @class */ (function () {
        function DaffContactCancel() {
            this.type = DaffContactActionTypes.ContactCancelAction;
        }
        return DaffContactCancel;
    }());
    if (false) {
        /** @type {?} */
        DaffContactCancel.prototype.type;
    }
    var DaffContactSuccessSubmit = /** @class */ (function () {
        function DaffContactSuccessSubmit() {
            this.type = DaffContactActionTypes.ContactSuccessSubmitAction;
        }
        return DaffContactSuccessSubmit;
    }());
    if (false) {
        /** @type {?} */
        DaffContactSuccessSubmit.prototype.type;
    }
    var DaffContactReset = /** @class */ (function () {
        function DaffContactReset() {
            this.type = DaffContactActionTypes.ContactResetAction;
        }
        return DaffContactReset;
    }());
    if (false) {
        /** @type {?} */
        DaffContactReset.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T, V
     */
    var DaffContactEffects = /** @class */ (function () {
        function DaffContactEffects(actions$, driver) {
            var _this = this;
            this.actions$ = actions$;
            this.driver = driver;
            this.trySubmission$ = effects.createEffect((/**
             * @return {?}
             */
            function () {
                return _this.actions$.pipe(effects.ofType(DaffContactActionTypes.ContactSubmitAction, DaffContactActionTypes.ContactRetryAction, DaffContactActionTypes.ContactCancelAction), operators.switchMap((/**
                 * @param {?} action
                 * @return {?}
                 */
                function (action) {
                    if (action instanceof DaffContactCancel) {
                        return rxjs.EMPTY;
                    }
                    else {
                        return _this.submitContact(action.payload);
                    }
                })));
            }));
        }
        /**
         * @private
         * @param {?} contact
         * @return {?}
         */
        DaffContactEffects.prototype.submitContact = /**
         * @private
         * @param {?} contact
         * @return {?}
         */
        function (contact) {
            return this.driver.send(contact).pipe(operators.map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                return new DaffContactSuccessSubmit();
            })), operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return rxjs.of(new DaffContactFailedSubmit(['Failed to submit']));
            })));
        };
        DaffContactEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DaffContactEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: undefined, decorators: [{ type: core.Inject, args: [driver.DaffContactDriver,] }] }
        ]; };
        return DaffContactEffects;
    }());
    if (false) {
        /** @type {?} */
        DaffContactEffects.prototype.trySubmission$;
        /**
         * @type {?}
         * @private
         */
        DaffContactEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        DaffContactEffects.prototype.driver;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffContactFeatureState() { }
    if (false) {
        /** @type {?} */
        DaffContactFeatureState.prototype.contact;
    }
    /** @type {?} */
    var selectContactFeatureState = store.createFeatureSelector('contact');
    var ɵ0 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; };
    /** @type {?} */
    var selectDaffContactLoading = store.createSelector(selectContactFeatureState, (ɵ0));
    var ɵ1 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.success; };
    /** @type {?} */
    var selectDaffContactSuccess = store.createSelector(selectContactFeatureState, (ɵ1));
    var ɵ2 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; };
    /** @type {?} */
    var selectDaffContactError = store.createSelector(selectContactFeatureState, (ɵ2));

    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    /**
     * @record
     */
    function DaffContactState() { }
    if (false) {
        /** @type {?} */
        DaffContactState.prototype.success;
        /** @type {?} */
        DaffContactState.prototype.loading;
        /** @type {?} */
        DaffContactState.prototype.errors;
    }
    /** @type {?} */
    var initialState = {
        success: false,
        loading: false,
        errors: null
    };
    /**
     * @template T
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case DaffContactActionTypes.ContactRetryAction:
            case DaffContactActionTypes.ContactSubmitAction:
                return __assign({}, state, { loading: true });
            case DaffContactActionTypes.ContactFailedSubmitAction:
                return __assign({}, state, { loading: false, errors: action.payload });
            case DaffContactActionTypes.ContactSuccessSubmitAction:
                return __assign({}, state, { success: true, loading: false });
            case DaffContactActionTypes.ContactCancelAction:
                return __assign({}, state, { loading: false });
            case DaffContactActionTypes.ContactResetAction:
                return __assign({}, state, initialState);
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffContactStateModule = /** @class */ (function () {
        function DaffContactStateModule() {
        }
        DaffContactStateModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [
                            store.StoreModule.forFeature('contact', reducer),
                            effects.EffectsModule.forFeature([DaffContactEffects])
                        ],
                        providers: [],
                    },] }
        ];
        return DaffContactStateModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffContactFacade = /** @class */ (function () {
        function DaffContactFacade(store) {
            this.store = store;
            this.success$ = this.store.select(selectDaffContactSuccess);
            this.error$ = this.store.select(selectDaffContactError);
            this.loading$ = this.store.select(selectDaffContactLoading);
        }
        /**
         * @param {?} action
         * @return {?}
         */
        DaffContactFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffContactFacade.decorators = [
            { type: core.Injectable, args: [{ providedIn: DaffContactStateModule },] }
        ];
        /** @nocollapse */
        DaffContactFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffContactFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffContactFacade_Factory() { return new DaffContactFacade(core.ɵɵinject(store.Store)); }, token: DaffContactFacade, providedIn: DaffContactStateModule });
        return DaffContactFacade;
    }());
    if (false) {
        /** @type {?} */
        DaffContactFacade.prototype.success$;
        /** @type {?} */
        DaffContactFacade.prototype.error$;
        /** @type {?} */
        DaffContactFacade.prototype.loading$;
        /**
         * @type {?}
         * @private
         */
        DaffContactFacade.prototype.store;
    }

    exports.DaffContactActionTypes = DaffContactActionTypes;
    exports.DaffContactCancel = DaffContactCancel;
    exports.DaffContactEffects = DaffContactEffects;
    exports.DaffContactFacade = DaffContactFacade;
    exports.DaffContactFailedSubmit = DaffContactFailedSubmit;
    exports.DaffContactReset = DaffContactReset;
    exports.DaffContactRetry = DaffContactRetry;
    exports.DaffContactSubmit = DaffContactSubmit;
    exports.DaffContactSuccessSubmit = DaffContactSuccessSubmit;
    exports.reducer = reducer;
    exports.selectContactFeatureState = selectContactFeatureState;
    exports.selectDaffContactError = selectDaffContactError;
    exports.selectDaffContactLoading = selectDaffContactLoading;
    exports.selectDaffContactSuccess = selectDaffContactSuccess;
    exports.ɵa = DaffContactStateModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-contact-state.umd.js.map
