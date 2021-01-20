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
const DaffNewsletterActionTypes = {
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
class DaffNewsletterSubscribe {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffNewsletterActionTypes.NewsletterSubscribeAction;
    }
}
if (false) {
    /** @type {?} */
    DaffNewsletterSubscribe.prototype.type;
    /** @type {?} */
    DaffNewsletterSubscribe.prototype.payload;
}
/**
 * @template T
 */
class DaffNewsletterRetry {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffNewsletterActionTypes.NewsletterRetry;
    }
}
if (false) {
    /** @type {?} */
    DaffNewsletterRetry.prototype.type;
    /** @type {?} */
    DaffNewsletterRetry.prototype.payload;
}
class DaffNewsletterCancel {
    constructor() {
        this.type = DaffNewsletterActionTypes.NewsletterCancelAction;
    }
}
if (false) {
    /** @type {?} */
    DaffNewsletterCancel.prototype.type;
}
class DaffNewsletterFailedSubscribe {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffNewsletterActionTypes.NewsletterFailedSubscribeAction;
    }
}
if (false) {
    /** @type {?} */
    DaffNewsletterFailedSubscribe.prototype.type;
    /** @type {?} */
    DaffNewsletterFailedSubscribe.prototype.payload;
}
class DaffNewsletterSuccessSubscribe {
    constructor() {
        this.type = DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction;
    }
}
if (false) {
    /** @type {?} */
    DaffNewsletterSuccessSubscribe.prototype.type;
}
class DaffNewsletterReset {
    constructor() {
        this.type = DaffNewsletterActionTypes.NewsletterReset;
    }
}
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
const initialState = {
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
function reducer(state = initialState, action) {
    switch (action.type) {
        case DaffNewsletterActionTypes.NewsletterRetry:
        case DaffNewsletterActionTypes.NewsletterSubscribeAction:
            return Object.assign({}, state, { loading: true });
        case DaffNewsletterActionTypes.NewsletterFailedSubscribeAction:
            return Object.assign({}, state, { loading: false, error: action.payload });
        case DaffNewsletterActionTypes.NewsletterCancelAction:
            return Object.assign({}, state, { loading: false });
        case DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction:
            return Object.assign({}, state, { success: true, loading: false });
        case DaffNewsletterActionTypes.NewsletterReset:
            return Object.assign({}, state, initialState);
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
const selectNewsletterFeatureState = createFeatureSelector('newsletter');
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.loading;
/**
 * Child key of feature state
 * @type {?}
 */
const selectDaffNewsletterLoading = createSelector(selectNewsletterFeatureState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.error;
/** @type {?} */
const selectDaffNewsletterError = createSelector(selectNewsletterFeatureState, (ɵ1));
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.success;
/** @type {?} */
const selectDaffNewsletterSuccess = createSelector(selectNewsletterFeatureState, (ɵ2));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffNewsletterHubspotService {
    /**
     * @param {?} hubspotService
     */
    constructor(hubspotService) {
        this.hubspotService = hubspotService;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    send(payload) {
        return this.hubspotService.submit(payload);
    }
}
DaffNewsletterHubspotService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffNewsletterHubspotService.ctorParameters = () => [
    { type: DaffHubspotFormsService }
];
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
const DaffNewsletterDriver = new InjectionToken('DaffNewsletterDriver');
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
const DaffNewsletterConfigToken = new InjectionToken('DaffNewsletterConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffNewsletterHubSpotDriverModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
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
    }
}
DaffNewsletterHubSpotDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
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
/**
 * @template T, V
 */
class DaffNewsletterEffects {
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
        () => this.actions$.pipe(ofType(DaffNewsletterActionTypes.NewsletterSubscribeAction, DaffNewsletterActionTypes.NewsletterRetry, DaffNewsletterActionTypes.NewsletterCancelAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            if ((action.type === DaffNewsletterActionTypes.NewsletterCancelAction)) {
                return of(action);
            }
            else if (action instanceof DaffNewsletterSubscribe || action instanceof DaffNewsletterRetry) {
                return this.driver.send(action.payload).pipe(map((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    return new DaffNewsletterSuccessSubscribe();
                })), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    return of(new DaffNewsletterFailedSubscribe('Failed to subscribe to newsletter'));
                })));
            }
        })), ofType(DaffNewsletterActionTypes.NewsletterFailedSubscribeAction, DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction))));
    }
}
DaffNewsletterEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffNewsletterEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffNewsletterDriver,] }] }
];
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
class DaffNewsletterModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffNewsletterFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.success$ = this.store.select(selectDaffNewsletterSuccess);
        this.error$ = this.store.select(selectDaffNewsletterError);
        this.loading$ = this.store.select(selectDaffNewsletterLoading);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffNewsletterFacade.decorators = [
    { type: Injectable, args: [{ providedIn: DaffNewsletterModule },] }
];
/** @nocollapse */
DaffNewsletterFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffNewsletterFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffNewsletterFacade_Factory() { return new DaffNewsletterFacade(ɵɵinject(Store)); }, token: DaffNewsletterFacade, providedIn: DaffNewsletterModule });
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
