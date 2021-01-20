import { Injectable, Inject, NgModule, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { createEffect, ofType, Actions, EffectsModule } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { DaffContactDriver } from '@daffodil/contact/driver';
import { createFeatureSelector, createSelector, StoreModule, Store } from '@ngrx/store';

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
var  /**
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
var  /**
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
        this.trySubmission$ = createEffect((/**
         * @return {?}
         */
        function () {
            return _this.actions$.pipe(ofType(DaffContactActionTypes.ContactSubmitAction, DaffContactActionTypes.ContactRetryAction, DaffContactActionTypes.ContactCancelAction), switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                if (action instanceof DaffContactCancel) {
                    return EMPTY;
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
        return this.driver.send(contact).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) {
            return new DaffContactSuccessSubmit();
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return of(new DaffContactFailedSubmit(['Failed to submit']));
        })));
    };
    DaffContactEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffContactEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffContactDriver,] }] }
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
var selectContactFeatureState = createFeatureSelector('contact');
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.loading; };
/** @type {?} */
var selectDaffContactLoading = createSelector(selectContactFeatureState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.success; };
/** @type {?} */
var selectDaffContactSuccess = createSelector(selectContactFeatureState, (ɵ1));
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.errors; };
/** @type {?} */
var selectDaffContactError = createSelector(selectContactFeatureState, (ɵ2));

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
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        StoreModule.forFeature('contact', reducer),
                        EffectsModule.forFeature([DaffContactEffects])
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
        { type: Injectable, args: [{ providedIn: DaffContactStateModule },] }
    ];
    /** @nocollapse */
    DaffContactFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffContactFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffContactFacade_Factory() { return new DaffContactFacade(ɵɵinject(Store)); }, token: DaffContactFacade, providedIn: DaffContactStateModule });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffContactActionTypes, DaffContactCancel, DaffContactEffects, DaffContactFacade, DaffContactFailedSubmit, DaffContactReset, DaffContactRetry, DaffContactSubmit, DaffContactSuccessSubmit, reducer, selectContactFeatureState, selectDaffContactError, selectDaffContactLoading, selectDaffContactSuccess, DaffContactStateModule as ɵa };
//# sourceMappingURL=daffodil-contact-state.js.map
