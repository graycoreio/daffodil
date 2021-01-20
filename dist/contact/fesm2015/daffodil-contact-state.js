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
const DaffContactActionTypes = {
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
class DaffContactSubmit {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffContactActionTypes.ContactSubmitAction;
    }
}
if (false) {
    /** @type {?} */
    DaffContactSubmit.prototype.type;
    /** @type {?} */
    DaffContactSubmit.prototype.payload;
}
/**
 * @template T
 */
class DaffContactRetry {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffContactActionTypes.ContactRetryAction;
    }
}
if (false) {
    /** @type {?} */
    DaffContactRetry.prototype.type;
    /** @type {?} */
    DaffContactRetry.prototype.payload;
}
class DaffContactFailedSubmit {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffContactActionTypes.ContactFailedSubmitAction;
    }
}
if (false) {
    /** @type {?} */
    DaffContactFailedSubmit.prototype.type;
    /** @type {?} */
    DaffContactFailedSubmit.prototype.payload;
}
class DaffContactCancel {
    constructor() {
        this.type = DaffContactActionTypes.ContactCancelAction;
    }
}
if (false) {
    /** @type {?} */
    DaffContactCancel.prototype.type;
}
class DaffContactSuccessSubmit {
    constructor() {
        this.type = DaffContactActionTypes.ContactSuccessSubmitAction;
    }
}
if (false) {
    /** @type {?} */
    DaffContactSuccessSubmit.prototype.type;
}
class DaffContactReset {
    constructor() {
        this.type = DaffContactActionTypes.ContactResetAction;
    }
}
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
class DaffContactEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     */
    constructor(actions$, driver) {
        this.actions$ = actions$;
        this.driver = driver;
        this.trySubmission$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(DaffContactActionTypes.ContactSubmitAction, DaffContactActionTypes.ContactRetryAction, DaffContactActionTypes.ContactCancelAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            if (action instanceof DaffContactCancel) {
                return EMPTY;
            }
            else {
                return this.submitContact(action.payload);
            }
        })))));
    }
    /**
     * @private
     * @param {?} contact
     * @return {?}
     */
    submitContact(contact) {
        return this.driver.send(contact).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => {
            return new DaffContactSuccessSubmit();
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return of(new DaffContactFailedSubmit(['Failed to submit']));
        })));
    }
}
DaffContactEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffContactEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffContactDriver,] }] }
];
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
const selectContactFeatureState = createFeatureSelector('contact');
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.loading;
/** @type {?} */
const selectDaffContactLoading = createSelector(selectContactFeatureState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.success;
/** @type {?} */
const selectDaffContactSuccess = createSelector(selectContactFeatureState, (ɵ1));
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.errors;
/** @type {?} */
const selectDaffContactError = createSelector(selectContactFeatureState, (ɵ2));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const initialState = {
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
function reducer(state = initialState, action) {
    switch (action.type) {
        case DaffContactActionTypes.ContactRetryAction:
        case DaffContactActionTypes.ContactSubmitAction:
            return Object.assign({}, state, { loading: true });
        case DaffContactActionTypes.ContactFailedSubmitAction:
            return Object.assign({}, state, { loading: false, errors: action.payload });
        case DaffContactActionTypes.ContactSuccessSubmitAction:
            return Object.assign({}, state, { success: true, loading: false });
        case DaffContactActionTypes.ContactCancelAction:
            return Object.assign({}, state, { loading: false });
        case DaffContactActionTypes.ContactResetAction:
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffContactStateModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffContactFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.success$ = this.store.select(selectDaffContactSuccess);
        this.error$ = this.store.select(selectDaffContactError);
        this.loading$ = this.store.select(selectDaffContactLoading);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffContactFacade.decorators = [
    { type: Injectable, args: [{ providedIn: DaffContactStateModule },] }
];
/** @nocollapse */
DaffContactFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffContactFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffContactFacade_Factory() { return new DaffContactFacade(ɵɵinject(Store)); }, token: DaffContactFacade, providedIn: DaffContactStateModule });
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
