import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { of } from 'rxjs';
import { createEffect, ofType, Actions, EffectsModule } from '@ngrx/effects';
import { StoreModule, createFeatureSelector, createSelector, select, Store } from '@ngrx/store';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffPaypalActionTypes = {
    GeneratePaypalExpressTokenAction: '[Daff Paypal] Generate Express Token Action',
    GeneratePaypalExpressTokenSuccessAction: '[Daff Paypal] Generate Express Token Success Action',
    GeneratePaypalExpressTokenFailureAction: '[Daff Paypal] Generate Express Token Failure Action',
};
/**
 * @template T
 */
class DaffGeneratePaypalExpressToken {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffPaypalActionTypes.GeneratePaypalExpressTokenAction;
    }
}
if (false) {
    /** @type {?} */
    DaffGeneratePaypalExpressToken.prototype.type;
    /** @type {?} */
    DaffGeneratePaypalExpressToken.prototype.payload;
}
/**
 * @template T
 */
class DaffGeneratePaypalExpressTokenSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffGeneratePaypalExpressTokenSuccess.prototype.type;
    /** @type {?} */
    DaffGeneratePaypalExpressTokenSuccess.prototype.payload;
}
class DaffGeneratePaypalExpressTokenFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffPaypalActionTypes.GeneratePaypalExpressTokenFailureAction;
    }
}
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
const DaffPaypalTransformer = new InjectionToken('DaffPaypalTransformer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffPaypalDriver = new InjectionToken('DaffPaypalDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffPaypalConfig = new InjectionToken('DaffPaypalConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const GenerateTokenMutation = gql `
	mutation GenerateToken($input: MagentoPaypalTokenRequest) {
		createPaypalExpressToken(input: $input) {
			token
			paypal_urls {
				start
				edit
			}
		}
	}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMagentoPaypalService {
    /**
     * @param {?} apollo
     * @param {?} transformer
     * @param {?} config
     */
    constructor(apollo, transformer, config) {
        this.apollo = apollo;
        this.transformer = transformer;
        this.config = config;
    }
    /**
     * @param {?} tokenRequest
     * @return {?}
     */
    generateToken(tokenRequest) {
        return this.apollo.mutate({
            mutation: GenerateTokenMutation,
            variables: {
                input: this.transformer.transformOut(tokenRequest, this.config)
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            return this.transformer.transformIn(result.data.createPaypalExpressToken);
        })));
    }
}
DaffMagentoPaypalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoPaypalService.ctorParameters = () => [
    { type: Apollo },
    { type: undefined, decorators: [{ type: Inject, args: [DaffPaypalTransformer,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffPaypalConfig,] }] }
];
/** @nocollapse */ DaffMagentoPaypalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoPaypalService_Factory() { return new DaffMagentoPaypalService(ɵɵinject(Apollo), ɵɵinject(DaffPaypalTransformer), ɵɵinject(DaffPaypalConfig)); }, token: DaffMagentoPaypalService, providedIn: "root" });
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
class DaffMagentoPaypalTransformerService {
    /**
     * @param {?} tokenRequest
     * @param {?} config
     * @return {?}
     */
    transformOut(tokenRequest, config) {
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
    }
    /**
     * @param {?} tokenResponse
     * @return {?}
     */
    transformIn(tokenResponse) {
        return {
            token: tokenResponse.token,
            urls: {
                start: tokenResponse.paypal_urls.start,
                edit: tokenResponse.paypal_urls.edit
            }
        };
    }
}
DaffMagentoPaypalTransformerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoPaypalTransformerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoPaypalTransformerService_Factory() { return new DaffMagentoPaypalTransformerService(); }, token: DaffMagentoPaypalTransformerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffPaypalMagentoDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
DaffPaypalMagentoDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, V
 */
class DaffPaypalEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     */
    constructor(actions$, driver) {
        this.actions$ = actions$;
        this.driver = driver;
        this.generatePaypalExpressToken$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(DaffPaypalActionTypes.GeneratePaypalExpressTokenAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            return this.driver.generateToken(action.payload).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => {
                return new DaffGeneratePaypalExpressTokenSuccess(resp);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => {
                return of(new DaffGeneratePaypalExpressTokenFailure('Failed to retrieve token'));
            })));
        })))));
    }
}
DaffPaypalEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffPaypalEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffPaypalDriver,] }] }
];
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
const initialState = {
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
function daffPaypalReducer(state = initialState, action) {
    switch (action.type) {
        case DaffPaypalActionTypes.GeneratePaypalExpressTokenAction:
            return Object.assign({}, state, { loading: true });
        case DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction:
            return Object.assign({}, state, { paypalTokenResponse: action.payload, loading: false, error: null });
        case DaffPaypalActionTypes.GeneratePaypalExpressTokenFailureAction:
            return Object.assign({}, state, { error: action.payload, loading: false, paypalTokenResponse: null });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffPaypalReducers = {
    paypal: daffPaypalReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffPaypalStateModule {
}
DaffPaypalStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature('paypal', daffPaypalReducers),
                    EffectsModule.forFeature([DaffPaypalEffects])
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffPaypalModule {
}
DaffPaypalModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    DaffPaypalStateModule
                ]
            },] }
];

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
const createPaypalSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    /**
     * Paypal Feature State
     * @type {?}
     */
    const selectPaypalFeatureState = createFeatureSelector('paypal');
    /**
     * Paypal State
     * @type {?}
     */
    const selectPaypalState = createSelector(selectPaypalFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.paypal));
    /** @type {?} */
    const selectPaypalTokenResponse = createSelector(selectPaypalState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.paypalTokenResponse));
    /** @type {?} */
    const selectPaypalLoading = createSelector(selectPaypalState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.loading));
    /** @type {?} */
    const selectPaypalError = createSelector(selectPaypalState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.error));
    /** @type {?} */
    const selectPaypalToken = createSelector(selectPaypalTokenResponse, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.token));
    /** @type {?} */
    const selectPaypalStartUrl = createSelector(selectPaypalTokenResponse, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.urls.start));
    /** @type {?} */
    const selectPaypalEditUrl = createSelector(selectPaypalTokenResponse, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.urls.edit));
    return {
        selectPaypalFeatureState,
        selectPaypalState,
        selectPaypalTokenResponse,
        selectPaypalLoading,
        selectPaypalError,
        selectPaypalToken,
        selectPaypalStartUrl,
        selectPaypalEditUrl
    };
});
const ɵ0 = createPaypalSelectors;
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
        : createPaypalSelectors());
};
/** @type {?} */
const getDaffPaypalSelectors = ((ɵ1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DaffPaypalFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        const { selectPaypalTokenResponse, selectPaypalToken, selectPaypalStartUrl, selectPaypalEditUrl, selectPaypalLoading, selectPaypalError } = getDaffPaypalSelectors();
        this.paypalTokenResponse$ = this.store.pipe(select(selectPaypalTokenResponse));
        this.paypalToken$ = this.store.pipe(select(selectPaypalToken));
        this.paypalStartUrl$ = this.store.pipe(select(selectPaypalStartUrl));
        this.paypalEditUrl$ = this.store.pipe(select(selectPaypalEditUrl));
        this.loading$ = this.store.pipe(select(selectPaypalLoading));
        this.error$ = this.store.pipe(select(selectPaypalError));
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
DaffPaypalFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffPaypalModule
            },] }
];
/** @nocollapse */
DaffPaypalFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffPaypalFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffPaypalFacade_Factory() { return new DaffPaypalFacade(ɵɵinject(Store)); }, token: DaffPaypalFacade, providedIn: DaffPaypalModule });
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
