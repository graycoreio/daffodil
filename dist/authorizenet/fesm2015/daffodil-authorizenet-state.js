import { createFeatureSelector, createSelector, select, Store, StoreModule } from '@ngrx/store';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Inject, NgModule } from '@angular/core';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { __decorate, __metadata } from 'tslib';
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
const DaffAuthorizeNetActionTypes = {
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
class DaffAuthorizeNetUpdatePayment {
    /**
     * @param {?} tokenRequest
     * @param {?} address
     */
    constructor(tokenRequest, address) {
        this.tokenRequest = tokenRequest;
        this.address = address;
        this.type = DaffAuthorizeNetActionTypes.UpdatePaymentAction;
    }
}
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
class DaffAuthorizeNetUpdatePaymentSuccess {
    constructor() {
        this.type = DaffAuthorizeNetActionTypes.UpdatePaymentSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetUpdatePaymentSuccess.prototype.type;
}
/**
 * An action triggered upon failing to update the payment method.
 *
 * @param payload - A string that is an error message.
 */
class DaffAuthorizeNetUpdatePaymentFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffAuthorizeNetActionTypes.UpdatePaymentFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthorizeNetUpdatePaymentFailure.prototype.type;
    /** @type {?} */
    DaffAuthorizeNetUpdatePaymentFailure.prototype.payload;
}
class DaffLoadAcceptJs {
    constructor() {
        this.type = DaffAuthorizeNetActionTypes.LoadAcceptJsAction;
    }
}
if (false) {
    /** @type {?} */
    DaffLoadAcceptJs.prototype.type;
}
/**
 * Indicates that the AcceptJs library has loaded successfully.
 */
class DaffLoadAcceptJsSuccess {
    constructor() {
        this.type = DaffAuthorizeNetActionTypes.LoadAcceptJsSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffLoadAcceptJsSuccess.prototype.type;
}
/**
 * Indicates that the AcceptJs library has failed to load
 */
class DaffLoadAcceptJsFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffAuthorizeNetActionTypes.LoadAcceptJsFailureAction;
    }
    ;
}
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
const DAFF_AUTHORIZENET_STORE_FEATURE_KEY = 'daffAuthorizenet';

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
const createAuthorizeNetSelectors = (/**
 * @return {?}
 */
() => {
    /**
     * AuthorizeNet Feature State
     * @type {?}
     */
    const selectAuthorizeNetFeatureState = createFeatureSelector(DAFF_AUTHORIZENET_STORE_FEATURE_KEY);
    /**
     * AuthorizeNet State
     * @type {?}
     */
    const selectAuthorizeNetState = createSelector(selectAuthorizeNetFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.authorizeNet));
    /**
     * AuthorizeNet loading state
     * @type {?}
     */
    const selectLoading = createSelector(selectAuthorizeNetState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.loading));
    /**
     * AuthorizeNet payment error
     * @type {?}
     */
    const selectPaymentError = createSelector(selectAuthorizeNetState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.paymentError));
    /**
     * AcceptJs load error
     * @type {?}
     */
    const selectAcceptJsLoadError = createSelector(selectAuthorizeNetState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.acceptJsLoadError));
    /**
     * AcceptJs is loaded
     * @type {?}
     */
    const selectIsAcceptJsLoaded = createSelector(selectAuthorizeNetState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.isAcceptLoaded));
    return {
        selectAuthorizeNetFeatureState,
        selectAuthorizeNetState,
        selectLoading,
        selectPaymentError,
        selectAcceptJsLoadError,
        selectIsAcceptJsLoaded
    };
});
const ɵ0 = createAuthorizeNetSelectors;
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createAuthorizeNetSelectors());
};
/** @type {?} */
const daffAuthorizeNetSelectors = ((ɵ1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffAuthorizeNetFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        const { selectIsAcceptJsLoaded, selectLoading, selectPaymentError, selectAcceptJsLoadError } = daffAuthorizeNetSelectors();
        this.isAcceptJsLoaded$ = this.store.pipe(select(selectIsAcceptJsLoaded));
        this.loading$ = this.store.pipe(select(selectLoading));
        this.paymentError$ = this.store.pipe(select(selectPaymentError));
        this.acceptJsLoadError$ = this.store.pipe(select(selectAcceptJsLoadError));
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffAuthorizeNetFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffAuthorizeNetFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffAuthorizeNetFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffAuthorizeNetFacade_Factory() { return new DaffAuthorizeNetFacade(ɵɵinject(Store)); }, token: DaffAuthorizeNetFacade, providedIn: "root" });
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
const initialState = {
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
function daffAuthorizeNetReducer(state = initialState, action) {
    switch (action.type) {
        case DaffAuthorizeNetActionTypes.UpdatePaymentAction:
            return Object.assign({}, state, { loading: true });
        case DaffAuthorizeNetActionTypes.UpdatePaymentSuccessAction:
            return Object.assign({}, state, { loading: false, paymentError: null });
        case DaffAuthorizeNetActionTypes.UpdatePaymentFailureAction:
            return Object.assign({}, state, { loading: false, paymentError: action.payload });
        case DaffAuthorizeNetActionTypes.LoadAcceptJsSuccessAction:
            return Object.assign({}, state, { isAcceptLoaded: true, acceptJsLoadError: null });
        case DaffAuthorizeNetActionTypes.LoadAcceptJsFailureAction:
            return Object.assign({}, state, { loading: false, acceptJsLoadError: action.payload });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffAuthorizeNetReducers = {
    authorizeNet: daffAuthorizeNetReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DaffAuthorizeNetEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     * @param {?} authorizeNetPaymentId
     * @param {?} errorMatcher
     * @param {?} acceptJsLoadingService
     */
    constructor(actions$, driver, authorizeNetPaymentId, errorMatcher, acceptJsLoadingService) {
        this.actions$ = actions$;
        this.driver = driver;
        this.authorizeNetPaymentId = authorizeNetPaymentId;
        this.errorMatcher = errorMatcher;
        this.acceptJsLoadingService = acceptJsLoadingService;
        this.updatePayment$ = this.actions$.pipe(ofType(DaffAuthorizeNetActionTypes.UpdatePaymentAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.generateToken(action.tokenRequest).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffCartPaymentUpdateWithBilling({
            method: this.authorizeNetPaymentId,
            payment_info: resp
        }, action.address))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => of(new DaffAuthorizeNetUpdatePaymentFailure(this.errorMatcher(error)))))))));
        this.updatePaymentSuccessSubstream$ = this.actions$.pipe(substream([DaffAuthorizeNetActionTypes.UpdatePaymentAction, DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction], DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction), mapTo(new DaffAuthorizeNetUpdatePaymentSuccess()));
        this.updatePaymentFailureSubstream$ = this.actions$.pipe(substream([DaffAuthorizeNetActionTypes.UpdatePaymentAction, DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction], DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([updatePaymentAction, updatePaymentFailureAction]) => new DaffAuthorizeNetUpdatePaymentFailure(this.errorMatcher(updatePaymentFailureAction.payload)))));
        this.loadAcceptJs$ = (/**
         * @param {?=} maxTries
         * @param {?=} ms
         * @return {?}
         */
        (maxTries = 10, ms = 10) => this.actions$.pipe(ofType(DaffAuthorizeNetActionTypes.LoadAcceptJsAction), tap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.acceptJsLoadingService.load())), switchMap((/**
         * @return {?}
         */
        () => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.acceptJsLoadingService.getAccept())), backoff(maxTries, ms), mapTo(new DaffLoadAcceptJsSuccess()), catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => of(new DaffLoadAcceptJsFailure(this.errorMatcher(error))))))))));
    }
}
DaffAuthorizeNetEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffAuthorizeNetEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffAuthorizeNetDriver,] }] },
    { type: String, decorators: [{ type: Inject, args: [DaffAuthorizeNetPaymentId,] }] },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_AUTHORIZENET_ERROR_MATCHER,] }] },
    { type: DaffAcceptJsLoadingService }
];
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
class DaffAuthorizeNetStateModule {
}
DaffAuthorizeNetStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature(DAFF_AUTHORIZENET_STORE_FEATURE_KEY, daffAuthorizeNetReducers),
                    EffectsModule.forFeature([DaffAuthorizeNetEffects]),
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

export { DAFF_AUTHORIZENET_STORE_FEATURE_KEY, DaffAuthorizeNetActionTypes, DaffAuthorizeNetFacade, DaffAuthorizeNetStateModule, DaffAuthorizeNetUpdatePayment, DaffAuthorizeNetUpdatePaymentFailure, DaffAuthorizeNetUpdatePaymentSuccess, DaffLoadAcceptJs, DaffLoadAcceptJsFailure, DaffLoadAcceptJsSuccess, daffAuthorizeNetReducer, daffAuthorizeNetReducers, daffAuthorizeNetSelectors, DaffAuthorizeNetEffects as ɵa };
//# sourceMappingURL=daffodil-authorizenet-state.js.map
