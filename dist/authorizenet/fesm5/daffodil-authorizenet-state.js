import { createFeatureSelector, createSelector, select, Store, StoreModule } from '@ngrx/store';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Inject, NgModule } from '@angular/core';
import { __assign, __read, __decorate, __metadata } from 'tslib';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { switchMap, map, catchError, mapTo, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { DaffCartPaymentUpdateWithBilling, DaffCartPaymentActionTypes } from '@daffodil/cart/state';
import { backoff } from '@daffodil/core';
import { substream } from '@daffodil/core/state';
import { DAFF_AUTHORIZENET_ERROR_MATCHER, DaffAcceptJsLoadingService } from '@daffodil/authorizenet';
import { DaffAuthorizeNetDriver, DaffAuthorizeNetPaymentId } from '@daffodil/authorizenet/driver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffAuthorizeNetActionTypes = {
    UpdatePaymentAction: '[Daff-Authorize-Net] Update Payment',
    UpdatePaymentSuccessAction: '[Daff-Authorize-Net] Update Payment Success',
    UpdatePaymentFailureAction: '[Daff-Authorize-Net] Update Payment Failure',
    LoadAcceptJsAction: '[Daff-Authorize-Net] Load Accept Js',
    LoadAcceptJsSuccessAction: '[Daff-Authorize-Net] Load Accept Js Success',
    LoadAcceptJsFailureAction: '[Daff-Authorize-Net] Load Accept Js Failure',
};
/**
 * An action triggered to initialize a generate token request.
 *
 * @param payload - An DaffAuthorizeNetRequestData object.
 * @template T, V
 */
var  /**
 * An action triggered to initialize a generate token request.
 *
 * @param payload - An DaffAuthorizeNetRequestData object.
 * @template T, V
 */
DaffAuthorizeNetUpdatePayment = /** @class */ (function () {
    function DaffAuthorizeNetUpdatePayment(tokenRequest, address) {
        this.tokenRequest = tokenRequest;
        this.address = address;
        this.type = DaffAuthorizeNetActionTypes.UpdatePaymentAction;
    }
    return DaffAuthorizeNetUpdatePayment;
}());
if (false) {
    /** @type {?} */
    DaffAuthorizeNetUpdatePayment.prototype.type;
    /** @type {?} */
    DaffAuthorizeNetUpdatePayment.prototype.tokenRequest;
    /** @type {?} */
    DaffAuthorizeNetUpdatePayment.prototype.address;
}
/**
 * An action triggered upon successfully updating the payment method.
 *
 * @param payload - A string that is the payment nonce for a credit card.
 */
var  /**
 * An action triggered upon successfully updating the payment method.
 *
 * @param payload - A string that is the payment nonce for a credit card.
 */
DaffAuthorizeNetUpdatePaymentSuccess = /** @class */ (function () {
    function DaffAuthorizeNetUpdatePaymentSuccess() {
        this.type = DaffAuthorizeNetActionTypes.UpdatePaymentSuccessAction;
    }
    return DaffAuthorizeNetUpdatePaymentSuccess;
}());
if (false) {
    /** @type {?} */
    DaffAuthorizeNetUpdatePaymentSuccess.prototype.type;
}
/**
 * An action triggered upon failing to update the payment method.
 *
 * @param payload - A string that is an error message.
 */
var  /**
 * An action triggered upon failing to update the payment method.
 *
 * @param payload - A string that is an error message.
 */
DaffAuthorizeNetUpdatePaymentFailure = /** @class */ (function () {
    function DaffAuthorizeNetUpdatePaymentFailure(payload) {
        this.payload = payload;
        this.type = DaffAuthorizeNetActionTypes.UpdatePaymentFailureAction;
    }
    return DaffAuthorizeNetUpdatePaymentFailure;
}());
if (false) {
    /** @type {?} */
    DaffAuthorizeNetUpdatePaymentFailure.prototype.type;
    /** @type {?} */
    DaffAuthorizeNetUpdatePaymentFailure.prototype.payload;
}
var DaffLoadAcceptJs = /** @class */ (function () {
    function DaffLoadAcceptJs() {
        this.type = DaffAuthorizeNetActionTypes.LoadAcceptJsAction;
    }
    return DaffLoadAcceptJs;
}());
if (false) {
    /** @type {?} */
    DaffLoadAcceptJs.prototype.type;
}
/**
 * Indicates that the AcceptJs library has loaded successfully.
 */
var  /**
 * Indicates that the AcceptJs library has loaded successfully.
 */
DaffLoadAcceptJsSuccess = /** @class */ (function () {
    function DaffLoadAcceptJsSuccess() {
        this.type = DaffAuthorizeNetActionTypes.LoadAcceptJsSuccessAction;
    }
    return DaffLoadAcceptJsSuccess;
}());
if (false) {
    /** @type {?} */
    DaffLoadAcceptJsSuccess.prototype.type;
}
/**
 * Indicates that the AcceptJs library has failed to load
 */
var  /**
 * Indicates that the AcceptJs library has failed to load
 */
DaffLoadAcceptJsFailure = /** @class */ (function () {
    function DaffLoadAcceptJsFailure(payload) {
        this.payload = payload;
        this.type = DaffAuthorizeNetActionTypes.LoadAcceptJsFailureAction;
    }
    ;
    return DaffLoadAcceptJsFailure;
}());
if (false) {
    /** @type {?} */
    DaffLoadAcceptJsFailure.prototype.type;
    /** @type {?} */
    DaffLoadAcceptJsFailure.prototype.payload;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DAFF_AUTHORIZENET_STORE_FEATURE_KEY = 'daffAuthorizenet';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DaffAuthorizeNetMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffAuthorizeNetMemoizedSelectors.prototype.selectAuthorizeNetFeatureState;
    /** @type {?} */
    DaffAuthorizeNetMemoizedSelectors.prototype.selectAuthorizeNetState;
    /** @type {?} */
    DaffAuthorizeNetMemoizedSelectors.prototype.selectLoading;
    /** @type {?} */
    DaffAuthorizeNetMemoizedSelectors.prototype.selectPaymentError;
    /** @type {?} */
    DaffAuthorizeNetMemoizedSelectors.prototype.selectAcceptJsLoadError;
    /** @type {?} */
    DaffAuthorizeNetMemoizedSelectors.prototype.selectIsAcceptJsLoaded;
}
/** @type {?} */
var createAuthorizeNetSelectors = (/**
 * @return {?}
 */
function () {
    /**
     * AuthorizeNet Feature State
     * @type {?}
     */
    var selectAuthorizeNetFeatureState = createFeatureSelector(DAFF_AUTHORIZENET_STORE_FEATURE_KEY);
    /**
     * AuthorizeNet State
     * @type {?}
     */
    var selectAuthorizeNetState = createSelector(selectAuthorizeNetFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.authorizeNet; }));
    /**
     * AuthorizeNet loading state
     * @type {?}
     */
    var selectLoading = createSelector(selectAuthorizeNetState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /**
     * AuthorizeNet payment error
     * @type {?}
     */
    var selectPaymentError = createSelector(selectAuthorizeNetState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.paymentError; }));
    /**
     * AcceptJs load error
     * @type {?}
     */
    var selectAcceptJsLoadError = createSelector(selectAuthorizeNetState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.acceptJsLoadError; }));
    /**
     * AcceptJs is loaded
     * @type {?}
     */
    var selectIsAcceptJsLoaded = createSelector(selectAuthorizeNetState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.isAcceptLoaded; }));
    return {
        selectAuthorizeNetFeatureState: selectAuthorizeNetFeatureState,
        selectAuthorizeNetState: selectAuthorizeNetState,
        selectLoading: selectLoading,
        selectPaymentError: selectPaymentError,
        selectAcceptJsLoadError: selectAcceptJsLoadError,
        selectIsAcceptJsLoaded: selectIsAcceptJsLoaded
    };
});
var ɵ0 = createAuthorizeNetSelectors;
var ɵ1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createAuthorizeNetSelectors(); });
};
/** @type {?} */
var daffAuthorizeNetSelectors = ((ɵ1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffAuthorizeNetFacade = /** @class */ (function () {
    function DaffAuthorizeNetFacade(store) {
        this.store = store;
        var _a = daffAuthorizeNetSelectors(), selectIsAcceptJsLoaded = _a.selectIsAcceptJsLoaded, selectLoading = _a.selectLoading, selectPaymentError = _a.selectPaymentError, selectAcceptJsLoadError = _a.selectAcceptJsLoadError;
        this.isAcceptJsLoaded$ = this.store.pipe(select(selectIsAcceptJsLoaded));
        this.loading$ = this.store.pipe(select(selectLoading));
        this.paymentError$ = this.store.pipe(select(selectPaymentError));
        this.acceptJsLoadError$ = this.store.pipe(select(selectAcceptJsLoadError));
    }
    /**
     * @param {?} action
     * @return {?}
     */
    DaffAuthorizeNetFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffAuthorizeNetFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffAuthorizeNetFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffAuthorizeNetFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffAuthorizeNetFacade_Factory() { return new DaffAuthorizeNetFacade(ɵɵinject(Store)); }, token: DaffAuthorizeNetFacade, providedIn: "root" });
    return DaffAuthorizeNetFacade;
}());
if (false) {
    /** @type {?} */
    DaffAuthorizeNetFacade.prototype.isAcceptJsLoaded$;
    /** @type {?} */
    DaffAuthorizeNetFacade.prototype.loading$;
    /** @type {?} */
    DaffAuthorizeNetFacade.prototype.paymentError$;
    /** @type {?} */
    DaffAuthorizeNetFacade.prototype.acceptJsLoadError$;
    /**
     * @type {?}
     * @private
     */
    DaffAuthorizeNetFacade.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState = {
    isAcceptLoaded: false,
    paymentError: null,
    acceptJsLoadError: null,
    loading: false
};
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffAuthorizeNetReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffAuthorizeNetActionTypes.UpdatePaymentAction:
            return __assign({}, state, { loading: true });
        case DaffAuthorizeNetActionTypes.UpdatePaymentSuccessAction:
            return __assign({}, state, { loading: false, paymentError: null });
        case DaffAuthorizeNetActionTypes.UpdatePaymentFailureAction:
            return __assign({}, state, { loading: false, paymentError: action.payload });
        case DaffAuthorizeNetActionTypes.LoadAcceptJsSuccessAction:
            return __assign({}, state, { isAcceptLoaded: true, acceptJsLoadError: null });
        case DaffAuthorizeNetActionTypes.LoadAcceptJsFailureAction:
            return __assign({}, state, { loading: false, acceptJsLoadError: action.payload });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var daffAuthorizeNetReducers = {
    authorizeNet: daffAuthorizeNetReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var DaffAuthorizeNetEffects = /** @class */ (function () {
    function DaffAuthorizeNetEffects(actions$, driver, authorizeNetPaymentId, errorMatcher, acceptJsLoadingService) {
        var _this = this;
        this.actions$ = actions$;
        this.driver = driver;
        this.authorizeNetPaymentId = authorizeNetPaymentId;
        this.errorMatcher = errorMatcher;
        this.acceptJsLoadingService = acceptJsLoadingService;
        this.updatePayment$ = this.actions$.pipe(ofType(DaffAuthorizeNetActionTypes.UpdatePaymentAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.generateToken(action.tokenRequest).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartPaymentUpdateWithBilling({
                method: _this.authorizeNetPaymentId,
                payment_info: resp
            }, action.address); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new DaffAuthorizeNetUpdatePaymentFailure(_this.errorMatcher(error)));
            })));
        })));
        this.updatePaymentSuccessSubstream$ = this.actions$.pipe(substream([DaffAuthorizeNetActionTypes.UpdatePaymentAction, DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction], DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction), mapTo(new DaffAuthorizeNetUpdatePaymentSuccess()));
        this.updatePaymentFailureSubstream$ = this.actions$.pipe(substream([DaffAuthorizeNetActionTypes.UpdatePaymentAction, DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction], DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), updatePaymentAction = _b[0], updatePaymentFailureAction = _b[1];
            return new DaffAuthorizeNetUpdatePaymentFailure(_this.errorMatcher(updatePaymentFailureAction.payload));
        })));
        this.loadAcceptJs$ = (/**
         * @param {?=} maxTries
         * @param {?=} ms
         * @return {?}
         */
        function (maxTries, ms) {
            if (maxTries === void 0) { maxTries = 10; }
            if (ms === void 0) { ms = 10; }
            return _this.actions$.pipe(ofType(DaffAuthorizeNetActionTypes.LoadAcceptJsAction), tap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return _this.acceptJsLoadingService.load(); })), switchMap((/**
             * @return {?}
             */
            function () { return of(null).pipe(map((/**
             * @return {?}
             */
            function () { return _this.acceptJsLoadingService.getAccept(); })), backoff(maxTries, ms), mapTo(new DaffLoadAcceptJsSuccess()), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffLoadAcceptJsFailure(_this.errorMatcher(error))); }))); })));
        });
    }
    DaffAuthorizeNetEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffAuthorizeNetEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffAuthorizeNetDriver,] }] },
        { type: String, decorators: [{ type: Inject, args: [DaffAuthorizeNetPaymentId,] }] },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_AUTHORIZENET_ERROR_MATCHER,] }] },
        { type: DaffAcceptJsLoadingService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], DaffAuthorizeNetEffects.prototype, "updatePayment$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], DaffAuthorizeNetEffects.prototype, "updatePaymentSuccessSubstream$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], DaffAuthorizeNetEffects.prototype, "updatePaymentFailureSubstream$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DaffAuthorizeNetEffects.prototype, "loadAcceptJs$", void 0);
    return DaffAuthorizeNetEffects;
}());
if (false) {
    /** @type {?} */
    DaffAuthorizeNetEffects.prototype.updatePayment$;
    /** @type {?} */
    DaffAuthorizeNetEffects.prototype.updatePaymentSuccessSubstream$;
    /** @type {?} */
    DaffAuthorizeNetEffects.prototype.updatePaymentFailureSubstream$;
    /** @type {?} */
    DaffAuthorizeNetEffects.prototype.loadAcceptJs$;
    /**
     * @type {?}
     * @private
     */
    DaffAuthorizeNetEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffAuthorizeNetEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffAuthorizeNetEffects.prototype.authorizeNetPaymentId;
    /**
     * @type {?}
     * @private
     */
    DaffAuthorizeNetEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffAuthorizeNetEffects.prototype.acceptJsLoadingService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffAuthorizeNetStateModule = /** @class */ (function () {
    function DaffAuthorizeNetStateModule() {
    }
    DaffAuthorizeNetStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature(DAFF_AUTHORIZENET_STORE_FEATURE_KEY, daffAuthorizeNetReducers),
                        EffectsModule.forFeature([DaffAuthorizeNetEffects]),
                    ]
                },] }
    ];
    return DaffAuthorizeNetStateModule;
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

export { DAFF_AUTHORIZENET_STORE_FEATURE_KEY, DaffAuthorizeNetActionTypes, DaffAuthorizeNetFacade, DaffAuthorizeNetStateModule, DaffAuthorizeNetUpdatePayment, DaffAuthorizeNetUpdatePaymentFailure, DaffAuthorizeNetUpdatePaymentSuccess, DaffLoadAcceptJs, DaffLoadAcceptJsFailure, DaffLoadAcceptJsSuccess, daffAuthorizeNetReducer, daffAuthorizeNetReducers, daffAuthorizeNetSelectors, DaffAuthorizeNetEffects as ɵa };
//# sourceMappingURL=daffodil-authorizenet-state.js.map
