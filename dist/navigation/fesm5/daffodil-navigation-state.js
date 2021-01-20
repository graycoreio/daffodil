import { createFeatureSelector, createSelector, select, Store, StoreModule } from '@ngrx/store';
import { __assign, __decorate, __metadata } from 'tslib';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Inject, NgModule } from '@angular/core';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { DaffNavigationDriver } from '@daffodil/navigation/driver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffNavigationActionTypes = {
    NavigationLoadAction: '[Daff-Navigation] Navigation Load Action',
    NavigationLoadSuccessAction: '[Daff-Navigation] Navigation Load Success Action',
    NavigationLoadFailureAction: '[Daff-Navigation] Navigation Load Failure Action',
};
var DaffNavigationLoad = /** @class */ (function () {
    function DaffNavigationLoad(payload) {
        this.payload = payload;
        this.type = DaffNavigationActionTypes.NavigationLoadAction;
    }
    return DaffNavigationLoad;
}());
if (false) {
    /** @type {?} */
    DaffNavigationLoad.prototype.type;
    /** @type {?} */
    DaffNavigationLoad.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffNavigationLoadSuccess = /** @class */ (function () {
    function DaffNavigationLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffNavigationActionTypes.NavigationLoadSuccessAction;
    }
    return DaffNavigationLoadSuccess;
}());
if (false) {
    /** @type {?} */
    DaffNavigationLoadSuccess.prototype.type;
    /** @type {?} */
    DaffNavigationLoadSuccess.prototype.payload;
}
var DaffNavigationLoadFailure = /** @class */ (function () {
    function DaffNavigationLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffNavigationActionTypes.NavigationLoadFailureAction;
    }
    return DaffNavigationLoadFailure;
}());
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
var initialState = {
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
function daffNavigationReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffNavigationActionTypes.NavigationLoadAction:
            return __assign({}, state, { loading: true });
        case DaffNavigationActionTypes.NavigationLoadSuccessAction:
            return __assign({}, state, { loading: false, navigationTree: action.payload });
        case DaffNavigationActionTypes.NavigationLoadFailureAction:
            return __assign({}, state, { loading: false, errors: [action.payload] });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var daffNavigationReducers = {
    navigation: daffNavigationReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DAFF_NAVIGATION_STORE_FEATURE_KEY = 'daffNavigation';

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
var createNavigationFeatureSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    /** @type {?} */
    var selectNavigationFeatureState = createFeatureSelector(DAFF_NAVIGATION_STORE_FEATURE_KEY);
    /** @type {?} */
    var selectNavigationState = createSelector(selectNavigationFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.navigation; }));
    /** @type {?} */
    var selectNavigationTree = createSelector(selectNavigationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.navigationTree; }));
    /** @type {?} */
    var selectNavigationLoading = createSelector(selectNavigationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /** @type {?} */
    var selectNavigationErrors = createSelector(selectNavigationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    return {
        selectNavigationFeatureState: selectNavigationFeatureState,
        selectNavigationState: selectNavigationState,
        selectNavigationTree: selectNavigationTree,
        selectNavigationLoading: selectNavigationLoading,
        selectNavigationErrors: selectNavigationErrors
    };
});
var ɵ0 = createNavigationFeatureSelectors;
var ɵ1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createNavigationFeatureSelectors(); });
};
/** @type {?} */
var getDaffNavigationSelectors = ((ɵ1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var DaffNavigationFacade = /** @class */ (function () {
    function DaffNavigationFacade(store) {
        this.store = store;
        var _a = getDaffNavigationSelectors(), selectNavigationTree = _a.selectNavigationTree, selectNavigationLoading = _a.selectNavigationLoading, selectNavigationErrors = _a.selectNavigationErrors;
        this.tree$ = this.store.pipe(select(selectNavigationTree));
        this.loading$ = this.store.pipe(select(selectNavigationLoading));
        this.errors$ = this.store.pipe(select(selectNavigationErrors));
    }
    /**
     * Dispatches the given action.
     * @param action action to dispatch.
     */
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    DaffNavigationFacade.prototype.dispatch = /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffNavigationFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffNavigationFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffNavigationFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffNavigationFacade_Factory() { return new DaffNavigationFacade(ɵɵinject(Store)); }, token: DaffNavigationFacade, providedIn: "root" });
    return DaffNavigationFacade;
}());
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
var DaffNavigationEffects = /** @class */ (function () {
    function DaffNavigationEffects(actions$, driver) {
        var _this = this;
        this.actions$ = actions$;
        this.driver = driver;
        this.loadNavigation$ = this.actions$.pipe(ofType(DaffNavigationActionTypes.NavigationLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.get(action.payload)
                .pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                return new DaffNavigationLoadSuccess(resp);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new DaffNavigationLoadFailure('Failed to load the navigation tree'));
            })));
        })));
    }
    DaffNavigationEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffNavigationEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffNavigationDriver,] }] }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], DaffNavigationEffects.prototype, "loadNavigation$", void 0);
    return DaffNavigationEffects;
}());
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
var DaffNavigationStateModule = /** @class */ (function () {
    function DaffNavigationStateModule() {
    }
    DaffNavigationStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature(DAFF_NAVIGATION_STORE_FEATURE_KEY, daffNavigationReducers),
                        EffectsModule.forFeature([DaffNavigationEffects]),
                    ]
                },] }
    ];
    return DaffNavigationStateModule;
}());

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
