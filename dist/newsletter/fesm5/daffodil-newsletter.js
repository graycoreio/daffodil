import { __assign } from 'tslib';
import { createFeatureSelector, createSelector, StoreModule, Store } from '@ngrx/store';
import { Injectable, InjectionToken, NgModule, Inject, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { createEffect, ofType, Actions, EffectsModule } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DaffHubspotFormsService, daffHubspotFormsServiceFactory } from '@daffodil/driver/hubspot';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffNewsletterActionTypes = {
    NewsletterSubscribeAction: '[Daff-Newsletter] Newsletter Subscribe Action',
    NewsletterCancelAction: '[Daff-Newsletter] Newsletter Cancel Action',
    NewsletterSuccessSubscribeAction: '[Daff-Newsletter] Succeeded on Newsletter Subscribe Action',
    NewsletterFailedSubscribeAction: '[Daff-Newsletter] Failed on Newsletter Subscribe Action',
    NewsletterRetry: '[Daff-Newsletter] Retrying submission',
    NewsletterReset: '[Daff-Newsletter] Reset Newsletter',
};
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffNewsletterSubscribe = /** @class */ (function () {
    function DaffNewsletterSubscribe(payload) {
        this.payload = payload;
        this.type = DaffNewsletterActionTypes.NewsletterSubscribeAction;
    }
    return DaffNewsletterSubscribe;
}());
if (false) {
    /** @type {?} */
    DaffNewsletterSubscribe.prototype.type;
    /** @type {?} */
    DaffNewsletterSubscribe.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffNewsletterRetry = /** @class */ (function () {
    function DaffNewsletterRetry(payload) {
        this.payload = payload;
        this.type = DaffNewsletterActionTypes.NewsletterRetry;
    }
    return DaffNewsletterRetry;
}());
if (false) {
    /** @type {?} */
    DaffNewsletterRetry.prototype.type;
    /** @type {?} */
    DaffNewsletterRetry.prototype.payload;
}
var DaffNewsletterCancel = /** @class */ (function () {
    function DaffNewsletterCancel() {
        this.type = DaffNewsletterActionTypes.NewsletterCancelAction;
    }
    return DaffNewsletterCancel;
}());
if (false) {
    /** @type {?} */
    DaffNewsletterCancel.prototype.type;
}
var DaffNewsletterFailedSubscribe = /** @class */ (function () {
    function DaffNewsletterFailedSubscribe(payload) {
        this.payload = payload;
        this.type = DaffNewsletterActionTypes.NewsletterFailedSubscribeAction;
    }
    return DaffNewsletterFailedSubscribe;
}());
if (false) {
    /** @type {?} */
    DaffNewsletterFailedSubscribe.prototype.type;
    /** @type {?} */
    DaffNewsletterFailedSubscribe.prototype.payload;
}
var DaffNewsletterSuccessSubscribe = /** @class */ (function () {
    function DaffNewsletterSuccessSubscribe() {
        this.type = DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction;
    }
    return DaffNewsletterSuccessSubscribe;
}());
if (false) {
    /** @type {?} */
    DaffNewsletterSuccessSubscribe.prototype.type;
}
var DaffNewsletterReset = /** @class */ (function () {
    function DaffNewsletterReset() {
        this.type = DaffNewsletterActionTypes.NewsletterReset;
    }
    return DaffNewsletterReset;
}());
if (false) {
    /** @type {?} */
    DaffNewsletterReset.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DaffNewsletterState() { }
if (false) {
    /** @type {?} */
    DaffNewsletterState.prototype.success;
    /** @type {?} */
    DaffNewsletterState.prototype.loading;
    /** @type {?} */
    DaffNewsletterState.prototype.error;
}
/** @type {?} */
var initialState = {
    success: false,
    loading: false,
    error: null
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
        case DaffNewsletterActionTypes.NewsletterRetry:
        case DaffNewsletterActionTypes.NewsletterSubscribeAction:
            return __assign({}, state, { loading: true });
        case DaffNewsletterActionTypes.NewsletterFailedSubscribeAction:
            return __assign({}, state, { loading: false, error: action.payload });
        case DaffNewsletterActionTypes.NewsletterCancelAction:
            return __assign({}, state, { loading: false });
        case DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction:
            return __assign({}, state, { success: true, loading: false });
        case DaffNewsletterActionTypes.NewsletterReset:
            return __assign({}, state, initialState);
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function State() { }
if (false) {
    /** @type {?} */
    State.prototype.newsletter;
}
/**
 * Feature State Selector
 * @type {?}
 */
var selectNewsletterFeatureState = createFeatureSelector('newsletter');
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.loading; };
/**
 * Child key of feature state
 * @type {?}
 */
var selectDaffNewsletterLoading = createSelector(selectNewsletterFeatureState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.error; };
/** @type {?} */
var selectDaffNewsletterError = createSelector(selectNewsletterFeatureState, (ɵ1));
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.success; };
/** @type {?} */
var selectDaffNewsletterSuccess = createSelector(selectNewsletterFeatureState, (ɵ2));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffNewsletterHubspotService = /** @class */ (function () {
    function DaffNewsletterHubspotService(hubspotService) {
        this.hubspotService = hubspotService;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    DaffNewsletterHubspotService.prototype.send = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return this.hubspotService.submit(payload);
    };
    DaffNewsletterHubspotService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffNewsletterHubspotService.ctorParameters = function () { return [
        { type: DaffHubspotFormsService }
    ]; };
    return DaffNewsletterHubspotService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffNewsletterHubspotService.prototype.hubspotService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DaffNewsletterDriver = new InjectionToken('DaffNewsletterDriver');
/**
 * @record
 * @template T, V
 */
function DaffNewsletterServiceInterface() { }
if (false) {
    /**
     * @param {?} email
     * @return {?}
     */
    DaffNewsletterServiceInterface.prototype.send = function (email) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DaffNewsletterConfigToken = new InjectionToken('DaffNewsletterConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffNewsletterHubSpotDriverModule = /** @class */ (function () {
    function DaffNewsletterHubSpotDriverModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    DaffNewsletterHubSpotDriverModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: DaffNewsletterHubSpotDriverModule,
            providers: [
                {
                    provide: DaffNewsletterDriver,
                    useClass: DaffNewsletterHubspotService,
                },
                {
                    provide: DaffNewsletterConfigToken,
                    useValue: config,
                },
                {
                    provide: DaffHubspotFormsService,
                    useFactory: daffHubspotFormsServiceFactory,
                    deps: [
                        HttpClient,
                        DOCUMENT,
                        Router,
                        Title,
                        DaffNewsletterConfigToken
                    ],
                }
            ],
        };
    };
    DaffNewsletterHubSpotDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                },] }
    ];
    return DaffNewsletterHubSpotDriverModule;
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
/**
 * @template T, V
 */
var DaffNewsletterEffects = /** @class */ (function () {
    function DaffNewsletterEffects(actions$, driver) {
        var _this = this;
        this.actions$ = actions$;
        this.driver = driver;
        this.trySubmission$ = createEffect((/**
         * @return {?}
         */
        function () { return _this.actions$.pipe(ofType(DaffNewsletterActionTypes.NewsletterSubscribeAction, DaffNewsletterActionTypes.NewsletterRetry, DaffNewsletterActionTypes.NewsletterCancelAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            if ((action.type === DaffNewsletterActionTypes.NewsletterCancelAction)) {
                return of(action);
            }
            else if (action instanceof DaffNewsletterSubscribe || action instanceof DaffNewsletterRetry) {
                return _this.driver.send(action.payload).pipe(map((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    return new DaffNewsletterSuccessSubscribe();
                })), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return of(new DaffNewsletterFailedSubscribe('Failed to subscribe to newsletter'));
                })));
            }
        })), ofType(DaffNewsletterActionTypes.NewsletterFailedSubscribeAction, DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction)); }));
    }
    DaffNewsletterEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffNewsletterEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffNewsletterDriver,] }] }
    ]; };
    return DaffNewsletterEffects;
}());
if (false) {
    /** @type {?} */
    DaffNewsletterEffects.prototype.trySubmission$;
    /**
     * @type {?}
     * @private
     */
    DaffNewsletterEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffNewsletterEffects.prototype.driver;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffNewsletterModule = /** @class */ (function () {
    function DaffNewsletterModule() {
    }
    DaffNewsletterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        StoreModule.forFeature('newsletter', reducer),
                        EffectsModule.forFeature([
                            DaffNewsletterEffects
                        ])
                    ]
                },] }
    ];
    return DaffNewsletterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffNewsletterFacade = /** @class */ (function () {
    function DaffNewsletterFacade(store) {
        this.store = store;
        this.success$ = this.store.select(selectDaffNewsletterSuccess);
        this.error$ = this.store.select(selectDaffNewsletterError);
        this.loading$ = this.store.select(selectDaffNewsletterLoading);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    DaffNewsletterFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffNewsletterFacade.decorators = [
        { type: Injectable, args: [{ providedIn: DaffNewsletterModule },] }
    ];
    /** @nocollapse */
    DaffNewsletterFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffNewsletterFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffNewsletterFacade_Factory() { return new DaffNewsletterFacade(ɵɵinject(Store)); }, token: DaffNewsletterFacade, providedIn: DaffNewsletterModule });
    return DaffNewsletterFacade;
}());
if (false) {
    /** @type {?} */
    DaffNewsletterFacade.prototype.success$;
    /** @type {?} */
    DaffNewsletterFacade.prototype.error$;
    /** @type {?} */
    DaffNewsletterFacade.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    DaffNewsletterFacade.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffNewsletterActionTypes, DaffNewsletterCancel, DaffNewsletterDriver, DaffNewsletterFacade, DaffNewsletterFailedSubscribe, DaffNewsletterHubSpotDriverModule, DaffNewsletterModule, DaffNewsletterReset, DaffNewsletterRetry, DaffNewsletterSubscribe, DaffNewsletterSuccessSubscribe, reducer, selectDaffNewsletterError, selectDaffNewsletterLoading, selectDaffNewsletterSuccess, DaffNewsletterEffects as ɵa, DaffNewsletterHubspotService as ɵb, DaffNewsletterConfigToken as ɵc };
//# sourceMappingURL=daffodil-newsletter.js.map
