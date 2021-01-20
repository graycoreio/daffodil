import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { __makeTemplateObject, __assign } from 'tslib';
import gql from 'graphql-tag';
import { of } from 'rxjs';
import { createEffect, ofType, Actions, EffectsModule } from '@ngrx/effects';
import { StoreModule, createFeatureSelector, createSelector, select, Store } from '@ngrx/store';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffPaypalActionTypes = {
    GeneratePaypalExpressTokenAction: '[Daff Paypal] Generate Express Token Action',
    GeneratePaypalExpressTokenSuccessAction: '[Daff Paypal] Generate Express Token Success Action',
    GeneratePaypalExpressTokenFailureAction: '[Daff Paypal] Generate Express Token Failure Action',
};
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffGeneratePaypalExpressToken = /** @class */ (function () {
    function DaffGeneratePaypalExpressToken(payload) {
        this.payload = payload;
        this.type = DaffPaypalActionTypes.GeneratePaypalExpressTokenAction;
    }
    return DaffGeneratePaypalExpressToken;
}());
if (false) {
    /** @type {?} */
    DaffGeneratePaypalExpressToken.prototype.type;
    /** @type {?} */
    DaffGeneratePaypalExpressToken.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffGeneratePaypalExpressTokenSuccess = /** @class */ (function () {
    function DaffGeneratePaypalExpressTokenSuccess(payload) {
        this.payload = payload;
        this.type = DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction;
    }
    return DaffGeneratePaypalExpressTokenSuccess;
}());
if (false) {
    /** @type {?} */
    DaffGeneratePaypalExpressTokenSuccess.prototype.type;
    /** @type {?} */
    DaffGeneratePaypalExpressTokenSuccess.prototype.payload;
}
var DaffGeneratePaypalExpressTokenFailure = /** @class */ (function () {
    function DaffGeneratePaypalExpressTokenFailure(payload) {
        this.payload = payload;
        this.type = DaffPaypalActionTypes.GeneratePaypalExpressTokenFailureAction;
    }
    return DaffGeneratePaypalExpressTokenFailure;
}());
if (false) {
    /** @type {?} */
    DaffGeneratePaypalExpressTokenFailure.prototype.type;
    /** @type {?} */
    DaffGeneratePaypalExpressTokenFailure.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DaffPaypalTransformer = new InjectionToken('DaffPaypalTransformer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DaffPaypalDriver = new InjectionToken('DaffPaypalDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DaffPaypalConfig = new InjectionToken('DaffPaypalConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var GenerateTokenMutation = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmutation GenerateToken($input: MagentoPaypalTokenRequest) {\n\t\tcreatePaypalExpressToken(input: $input) {\n\t\t\ttoken\n\t\t\tpaypal_urls {\n\t\t\t\tstart\n\t\t\t\tedit\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\tmutation GenerateToken($input: MagentoPaypalTokenRequest) {\n\t\tcreatePaypalExpressToken(input: $input) {\n\t\t\ttoken\n\t\t\tpaypal_urls {\n\t\t\t\tstart\n\t\t\t\tedit\n\t\t\t}\n\t\t}\n\t}\n"])));
var templateObject_1;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoPaypalService = /** @class */ (function () {
    function DaffMagentoPaypalService(apollo, transformer, config) {
        this.apollo = apollo;
        this.transformer = transformer;
        this.config = config;
    }
    /**
     * @param {?} tokenRequest
     * @return {?}
     */
    DaffMagentoPaypalService.prototype.generateToken = /**
     * @param {?} tokenRequest
     * @return {?}
     */
    function (tokenRequest) {
        var _this = this;
        return this.apollo.mutate({
            mutation: GenerateTokenMutation,
            variables: {
                input: this.transformer.transformOut(tokenRequest, this.config)
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            return _this.transformer.transformIn(result.data.createPaypalExpressToken);
        })));
    };
    DaffMagentoPaypalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoPaypalService.ctorParameters = function () { return [
        { type: Apollo },
        { type: undefined, decorators: [{ type: Inject, args: [DaffPaypalTransformer,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffPaypalConfig,] }] }
    ]; };
    /** @nocollapse */ DaffMagentoPaypalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoPaypalService_Factory() { return new DaffMagentoPaypalService(ɵɵinject(Apollo), ɵɵinject(DaffPaypalTransformer), ɵɵinject(DaffPaypalConfig)); }, token: DaffMagentoPaypalService, providedIn: "root" });
    return DaffMagentoPaypalService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoPaypalService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoPaypalService.prototype.transformer;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoPaypalService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoPaypalTransformerService = /** @class */ (function () {
    function DaffMagentoPaypalTransformerService() {
    }
    /**
     * @param {?} tokenRequest
     * @param {?} config
     * @return {?}
     */
    DaffMagentoPaypalTransformerService.prototype.transformOut = /**
     * @param {?} tokenRequest
     * @param {?} config
     * @return {?}
     */
    function (tokenRequest, config) {
        return {
            cart_id: tokenRequest.cartId,
            code: config.code ? config.code : 'paypal_express',
            urls: {
                cancel_url: config.cancel_url,
                return_url: config.return_url,
                pending_url: config.pending_url,
                success_url: config.success_url
            },
            express_button: config.express_button ? config.express_button : false,
            use_paypal_credit: config.use_paypal_credit ? config.use_paypal_credit : false
        };
    };
    /**
     * @param {?} tokenResponse
     * @return {?}
     */
    DaffMagentoPaypalTransformerService.prototype.transformIn = /**
     * @param {?} tokenResponse
     * @return {?}
     */
    function (tokenResponse) {
        return {
            token: tokenResponse.token,
            urls: {
                start: tokenResponse.paypal_urls.start,
                edit: tokenResponse.paypal_urls.edit
            }
        };
    };
    DaffMagentoPaypalTransformerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoPaypalTransformerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoPaypalTransformerService_Factory() { return new DaffMagentoPaypalTransformerService(); }, token: DaffMagentoPaypalTransformerService, providedIn: "root" });
    return DaffMagentoPaypalTransformerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffPaypalMagentoDriverModule = /** @class */ (function () {
    function DaffPaypalMagentoDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffPaypalMagentoDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffPaypalMagentoDriverModule,
            providers: [
                {
                    provide: DaffPaypalDriver,
                    useExisting: DaffMagentoPaypalService
                },
                {
                    provide: DaffPaypalTransformer,
                    useExisting: DaffMagentoPaypalTransformerService
                }
            ]
        };
    };
    DaffPaypalMagentoDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffPaypalMagentoDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, V
 */
var DaffPaypalEffects = /** @class */ (function () {
    function DaffPaypalEffects(actions$, driver) {
        var _this = this;
        this.actions$ = actions$;
        this.driver = driver;
        this.generatePaypalExpressToken$ = createEffect((/**
         * @return {?}
         */
        function () { return _this.actions$.pipe(ofType(DaffPaypalActionTypes.GeneratePaypalExpressTokenAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.generateToken(action.payload).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                return new DaffGeneratePaypalExpressTokenSuccess(resp);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new DaffGeneratePaypalExpressTokenFailure('Failed to retrieve token'));
            })));
        }))); }));
    }
    DaffPaypalEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffPaypalEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffPaypalDriver,] }] }
    ]; };
    return DaffPaypalEffects;
}());
if (false) {
    /** @type {?} */
    DaffPaypalEffects.prototype.generatePaypalExpressToken$;
    /**
     * @type {?}
     * @private
     */
    DaffPaypalEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffPaypalEffects.prototype.driver;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState = {
    paypalTokenResponse: null,
    loading: false,
    error: null
};
/**
 * @template T, V
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffPaypalReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffPaypalActionTypes.GeneratePaypalExpressTokenAction:
            return __assign({}, state, { loading: true });
        case DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction:
            return __assign({}, state, { paypalTokenResponse: action.payload, loading: false, error: null });
        case DaffPaypalActionTypes.GeneratePaypalExpressTokenFailureAction:
            return __assign({}, state, { error: action.payload, loading: false, paypalTokenResponse: null });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var daffPaypalReducers = {
    paypal: daffPaypalReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffPaypalStateModule = /** @class */ (function () {
    function DaffPaypalStateModule() {
    }
    DaffPaypalStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature('paypal', daffPaypalReducers),
                        EffectsModule.forFeature([DaffPaypalEffects])
                    ]
                },] }
    ];
    return DaffPaypalStateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffPaypalModule = /** @class */ (function () {
    function DaffPaypalModule() {
    }
    DaffPaypalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        DaffPaypalStateModule
                    ]
                },] }
    ];
    return DaffPaypalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DaffPaypalMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalFeatureState;
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalState;
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalTokenResponse;
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalLoading;
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalError;
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalToken;
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalStartUrl;
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalEditUrl;
}
/** @type {?} */
var createPaypalSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    /**
     * Paypal Feature State
     * @type {?}
     */
    var selectPaypalFeatureState = createFeatureSelector('paypal');
    /**
     * Paypal State
     * @type {?}
     */
    var selectPaypalState = createSelector(selectPaypalFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.paypal; }));
    /** @type {?} */
    var selectPaypalTokenResponse = createSelector(selectPaypalState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.paypalTokenResponse; }));
    /** @type {?} */
    var selectPaypalLoading = createSelector(selectPaypalState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /** @type {?} */
    var selectPaypalError = createSelector(selectPaypalState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.error; }));
    /** @type {?} */
    var selectPaypalToken = createSelector(selectPaypalTokenResponse, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.token; }));
    /** @type {?} */
    var selectPaypalStartUrl = createSelector(selectPaypalTokenResponse, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.urls.start; }));
    /** @type {?} */
    var selectPaypalEditUrl = createSelector(selectPaypalTokenResponse, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.urls.edit; }));
    return {
        selectPaypalFeatureState: selectPaypalFeatureState,
        selectPaypalState: selectPaypalState,
        selectPaypalTokenResponse: selectPaypalTokenResponse,
        selectPaypalLoading: selectPaypalLoading,
        selectPaypalError: selectPaypalError,
        selectPaypalToken: selectPaypalToken,
        selectPaypalStartUrl: selectPaypalStartUrl,
        selectPaypalEditUrl: selectPaypalEditUrl
    };
});
var ɵ0 = createPaypalSelectors;
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
        : createPaypalSelectors(); });
};
/** @type {?} */
var getDaffPaypalSelectors = ((ɵ1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var DaffPaypalFacade = /** @class */ (function () {
    function DaffPaypalFacade(store) {
        this.store = store;
        var _a = getDaffPaypalSelectors(), selectPaypalTokenResponse = _a.selectPaypalTokenResponse, selectPaypalToken = _a.selectPaypalToken, selectPaypalStartUrl = _a.selectPaypalStartUrl, selectPaypalEditUrl = _a.selectPaypalEditUrl, selectPaypalLoading = _a.selectPaypalLoading, selectPaypalError = _a.selectPaypalError;
        this.paypalTokenResponse$ = this.store.pipe(select(selectPaypalTokenResponse));
        this.paypalToken$ = this.store.pipe(select(selectPaypalToken));
        this.paypalStartUrl$ = this.store.pipe(select(selectPaypalStartUrl));
        this.paypalEditUrl$ = this.store.pipe(select(selectPaypalEditUrl));
        this.loading$ = this.store.pipe(select(selectPaypalLoading));
        this.error$ = this.store.pipe(select(selectPaypalError));
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
    DaffPaypalFacade.prototype.dispatch = /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffPaypalFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: DaffPaypalModule
                },] }
    ];
    /** @nocollapse */
    DaffPaypalFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffPaypalFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffPaypalFacade_Factory() { return new DaffPaypalFacade(ɵɵinject(Store)); }, token: DaffPaypalFacade, providedIn: DaffPaypalModule });
    return DaffPaypalFacade;
}());
if (false) {
    /**
     * The entire DaffPaypalTokenResponse object.
     * @type {?}
     */
    DaffPaypalFacade.prototype.paypalTokenResponse$;
    /**
     * The paypal token nonce.
     * @type {?}
     */
    DaffPaypalFacade.prototype.paypalToken$;
    /**
     * A URL for the PayPal login page.
     * @type {?}
     */
    DaffPaypalFacade.prototype.paypalStartUrl$;
    /**
     * A PayPal URL that allows a customer to edit their checkout details.
     * @type {?}
     */
    DaffPaypalFacade.prototype.paypalEditUrl$;
    /**
     * The loading state for retrieving a single paypal.
     * @type {?}
     */
    DaffPaypalFacade.prototype.loading$;
    /**
     * Errors associated with retrieving a single paypal.
     * @type {?}
     */
    DaffPaypalFacade.prototype.error$;
    /**
     * @type {?}
     * @private
     */
    DaffPaypalFacade.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffGeneratePaypalExpressToken, DaffGeneratePaypalExpressTokenFailure, DaffGeneratePaypalExpressTokenSuccess, DaffPaypalActionTypes, DaffPaypalConfig, DaffPaypalDriver, DaffPaypalEffects, DaffPaypalFacade, DaffPaypalMagentoDriverModule, DaffPaypalModule, DaffPaypalStateModule, DaffPaypalTransformer, GenerateTokenMutation, daffPaypalReducer, daffPaypalReducers, getDaffPaypalSelectors, DaffMagentoPaypalService as ɵa, DaffMagentoPaypalTransformerService as ɵc };
//# sourceMappingURL=daffodil-paypal.js.map
