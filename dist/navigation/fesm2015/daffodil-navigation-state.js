import { createFeatureSelector, createSelector, select, Store, StoreModule } from '@ngrx/store';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Inject, NgModule } from '@angular/core';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { __decorate, __metadata } from 'tslib';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { DaffNavigationDriver } from '@daffodil/navigation/driver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffNavigationActionTypes = {
    NavigationLoadAction: '[Daff-Navigation] Navigation Load Action',
    NavigationLoadSuccessAction: '[Daff-Navigation] Navigation Load Success Action',
    NavigationLoadFailureAction: '[Daff-Navigation] Navigation Load Failure Action',
};
class DaffNavigationLoad {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffNavigationActionTypes.NavigationLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffNavigationLoad.prototype.type;
    /** @type {?} */
    DaffNavigationLoad.prototype.payload;
}
/**
 * @template T
 */
class DaffNavigationLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffNavigationActionTypes.NavigationLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffNavigationLoadSuccess.prototype.type;
    /** @type {?} */
    DaffNavigationLoadSuccess.prototype.payload;
}
class DaffNavigationLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffNavigationActionTypes.NavigationLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffNavigationLoadFailure.prototype.type;
    /** @type {?} */
    DaffNavigationLoadFailure.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState = {
    navigationTree: null,
    loading: false,
    errors: []
};
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffNavigationReducer(state = initialState, action) {
    switch (action.type) {
        case DaffNavigationActionTypes.NavigationLoadAction:
            return Object.assign({}, state, { loading: true });
        case DaffNavigationActionTypes.NavigationLoadSuccessAction:
            return Object.assign({}, state, { loading: false, navigationTree: action.payload });
        case DaffNavigationActionTypes.NavigationLoadFailureAction:
            return Object.assign({}, state, { loading: false, errors: [action.payload] });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffNavigationReducers = {
    navigation: daffNavigationReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DAFF_NAVIGATION_STORE_FEATURE_KEY = 'daffNavigation';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DaffNavigationMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffNavigationMemoizedSelectors.prototype.selectNavigationFeatureState;
    /** @type {?} */
    DaffNavigationMemoizedSelectors.prototype.selectNavigationState;
    /** @type {?} */
    DaffNavigationMemoizedSelectors.prototype.selectNavigationTree;
    /** @type {?} */
    DaffNavigationMemoizedSelectors.prototype.selectNavigationLoading;
    /** @type {?} */
    DaffNavigationMemoizedSelectors.prototype.selectNavigationErrors;
}
/** @type {?} */
const createNavigationFeatureSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    /** @type {?} */
    const selectNavigationFeatureState = createFeatureSelector(DAFF_NAVIGATION_STORE_FEATURE_KEY);
    /** @type {?} */
    const selectNavigationState = createSelector(selectNavigationFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.navigation));
    /** @type {?} */
    const selectNavigationTree = createSelector(selectNavigationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.navigationTree));
    /** @type {?} */
    const selectNavigationLoading = createSelector(selectNavigationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.loading));
    /** @type {?} */
    const selectNavigationErrors = createSelector(selectNavigationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.errors));
    return {
        selectNavigationFeatureState,
        selectNavigationState,
        selectNavigationTree,
        selectNavigationLoading,
        selectNavigationErrors
    };
});
const ɵ0 = createNavigationFeatureSelectors;
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createNavigationFeatureSelectors());
};
/** @type {?} */
const getDaffNavigationSelectors = ((ɵ1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DaffNavigationFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        const { selectNavigationTree, selectNavigationLoading, selectNavigationErrors } = getDaffNavigationSelectors();
        this.tree$ = this.store.pipe(select(selectNavigationTree));
        this.loading$ = this.store.pipe(select(selectNavigationLoading));
        this.errors$ = this.store.pipe(select(selectNavigationErrors));
    }
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffNavigationFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffNavigationFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffNavigationFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffNavigationFacade_Factory() { return new DaffNavigationFacade(ɵɵinject(Store)); }, token: DaffNavigationFacade, providedIn: "root" });
if (false) {
    /**
     * The navigation retrieved in a single navigation call.
     * @type {?}
     */
    DaffNavigationFacade.prototype.tree$;
    /**
     * The loading state for retrieving a single navigation.
     * @type {?}
     */
    DaffNavigationFacade.prototype.loading$;
    /**
     * Errors associated with retrieving a single navigation.
     * @type {?}
     */
    DaffNavigationFacade.prototype.errors$;
    /**
     * @type {?}
     * @private
     */
    DaffNavigationFacade.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DaffNavigationEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     */
    constructor(actions$, driver) {
        this.actions$ = actions$;
        this.driver = driver;
        this.loadNavigation$ = this.actions$.pipe(ofType(DaffNavigationActionTypes.NavigationLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.get(action.payload)
            .pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => {
            return new DaffNavigationLoadSuccess(resp);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return of(new DaffNavigationLoadFailure('Failed to load the navigation tree'));
        }))))));
    }
}
DaffNavigationEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffNavigationEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffNavigationDriver,] }] }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], DaffNavigationEffects.prototype, "loadNavigation$", void 0);
if (false) {
    /** @type {?} */
    DaffNavigationEffects.prototype.loadNavigation$;
    /**
     * @type {?}
     * @private
     */
    DaffNavigationEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffNavigationEffects.prototype.driver;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffNavigationStateModule {
}
DaffNavigationStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature(DAFF_NAVIGATION_STORE_FEATURE_KEY, daffNavigationReducers),
                    EffectsModule.forFeature([DaffNavigationEffects]),
                ]
            },] }
];

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

export { DAFF_NAVIGATION_STORE_FEATURE_KEY, DaffNavigationActionTypes, DaffNavigationFacade, DaffNavigationLoad, DaffNavigationLoadFailure, DaffNavigationLoadSuccess, DaffNavigationStateModule, daffNavigationReducer, daffNavigationReducers, getDaffNavigationSelectors, initialState, DaffNavigationEffects as ɵa };
//# sourceMappingURL=daffodil-navigation-state.js.map
