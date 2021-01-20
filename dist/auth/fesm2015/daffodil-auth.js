import { createFeatureSelector, createSelector, select, Store, StoreModule } from '@ngrx/store';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, InjectionToken, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { __decorate, __metadata } from 'tslib';
import { switchMap, mapTo, catchError, map, tap, switchMapTo } from 'rxjs/operators';
import { of, EMPTY, Observable, throwError } from 'rxjs';
import { DaffPersistenceServiceToken, DaffInheritableError } from '@daffodil/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { daffTransformMagentoError } from '@daffodil/driver/magento';
import { DaffBadInputError } from '@daffodil/driver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffAuthActionTypes = {
    AuthGuardCheckAction: '[Daff-Auth] Auth Guard Check Action',
    AuthGuardCheckCompletionAction: '[Daff-Auth] Auth Guard Check Completion Action',
    AuthStorageFailureAction: '[Daff-Auth] Auth Storage Failure Action',
    AuthLoginAction: '[Daff-Auth] Auth Login Action',
    AuthLoginSuccessAction: '[Daff-Auth] Auth Login Success Action',
    AuthLoginFailureAction: '[Daff-Auth] Auth Login Failure Action',
    AuthLogoutAction: '[Daff-Auth] Auth Logout Action',
    AuthLogoutSuccessAction: '[Daff-Auth] Auth Logout Success Action',
    AuthLogoutFailureAction: '[Daff-Auth] Auth Logout Failure Action',
    AuthCheckAction: '[Daff-Auth] Auth Check Action',
    AuthCheckSuccessAction: '[Daff-Auth] Auth Check Success Action',
    AuthCheckFailureAction: '[Daff-Auth] Auth Check Failure Action',
    AuthRegisterAction: '[Daff-Auth] Auth Register Action',
    AuthRegisterSuccessAction: '[Daff-Auth] Auth Register Success Action',
    AuthRegisterFailureAction: '[Daff-Auth] Auth Register Failure Action',
};
/**
 * An action triggered by guards to initialize an auth check request.
 */
class DaffAuthGuardCheck {
    constructor() {
        this.type = DaffAuthActionTypes.AuthGuardCheckAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthGuardCheck.prototype.type;
}
/**
 * An action triggered on the completion of a guard token check.
 */
class DaffAuthGuardCheckCompletion {
    /**
     * @param {?} result
     */
    constructor(result) {
        this.result = result;
        this.type = DaffAuthActionTypes.AuthGuardCheckCompletionAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthGuardCheckCompletion.prototype.type;
    /** @type {?} */
    DaffAuthGuardCheckCompletion.prototype.result;
}
/*
 * An action triggered upon a failed auth storage operation.
 */
class DaffAuthStorageFailure {
    /**
     * @param {?} errorMessage
     */
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
        this.type = DaffAuthActionTypes.AuthStorageFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthStorageFailure.prototype.type;
    /** @type {?} */
    DaffAuthStorageFailure.prototype.errorMessage;
}
/**
 * An action triggered to initialize a auth login request.
 * @template T
 */
class DaffAuthLogin {
    /**
     * @param {?} loginInfo
     */
    constructor(loginInfo) {
        this.loginInfo = loginInfo;
        this.type = DaffAuthActionTypes.AuthLoginAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthLogin.prototype.type;
    /** @type {?} */
    DaffAuthLogin.prototype.loginInfo;
}
/**
 * An action triggered upon a successful auth login.
 *
 * @param token - the customer access token
 * @template T
 */
class DaffAuthLoginSuccess {
    /**
     * @param {?} auth
     */
    constructor(auth) {
        this.auth = auth;
        this.type = DaffAuthActionTypes.AuthLoginSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthLoginSuccess.prototype.type;
    /** @type {?} */
    DaffAuthLoginSuccess.prototype.auth;
}
/**
 * An action triggered upon a failed auth login request.
 *
 * @param errorMessage - an error message
 */
class DaffAuthLoginFailure {
    /**
     * @param {?} errorMessage
     */
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
        this.type = DaffAuthActionTypes.AuthLoginFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthLoginFailure.prototype.type;
    /** @type {?} */
    DaffAuthLoginFailure.prototype.errorMessage;
}
/**
 * An action triggered to initialize a logout request.
 */
class DaffAuthLogout {
    constructor() {
        this.type = DaffAuthActionTypes.AuthLogoutAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthLogout.prototype.type;
}
/**
 * An action triggered upon a successful logout.
 *
 * @param token - the customer access token
 */
class DaffAuthLogoutSuccess {
    constructor() {
        this.type = DaffAuthActionTypes.AuthLogoutSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthLogoutSuccess.prototype.type;
}
/**
 * An action triggered upon a failed logout request.
 *
 * @param errorMessage - an error message
 */
class DaffAuthLogoutFailure {
    /**
     * @param {?} errorMessage
     */
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
        this.type = DaffAuthActionTypes.AuthLogoutFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthLogoutFailure.prototype.type;
    /** @type {?} */
    DaffAuthLogoutFailure.prototype.errorMessage;
}
/**
 * An action triggered to initialize an auth check request.
 */
class DaffAuthCheck {
    constructor() {
        this.type = DaffAuthActionTypes.AuthCheckAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthCheck.prototype.type;
}
/**
 * An action triggered upon a successful auth check.
 *
 * @param token - the customer access token
 */
class DaffAuthCheckSuccess {
    constructor() {
        this.type = DaffAuthActionTypes.AuthCheckSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthCheckSuccess.prototype.type;
}
/**
 * An action triggered upon a failed auth check request.
 *
 * @param errorMessage - an error message
 */
class DaffAuthCheckFailure {
    /**
     * @param {?} errorMessage
     */
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
        this.type = DaffAuthActionTypes.AuthCheckFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthCheckFailure.prototype.type;
    /** @type {?} */
    DaffAuthCheckFailure.prototype.errorMessage;
}
/**
 * An action triggered to initialize a auth register request.
 *
 * @param registration
 * @template T
 */
class DaffAuthRegister {
    /**
     * @param {?} registration
     */
    constructor(registration) {
        this.registration = registration;
        this.type = DaffAuthActionTypes.AuthRegisterAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthRegister.prototype.type;
    /** @type {?} */
    DaffAuthRegister.prototype.registration;
}
/**
 * An action triggered upon a successful auth register request.
 *
 * @param token - the customer access token
 * @template T
 */
class DaffAuthRegisterSuccess {
    /**
     * @param {?} loginInfo
     */
    constructor(loginInfo) {
        this.loginInfo = loginInfo;
        this.type = DaffAuthActionTypes.AuthRegisterSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthRegisterSuccess.prototype.type;
    /** @type {?} */
    DaffAuthRegisterSuccess.prototype.loginInfo;
}
/**
 * An action triggered upon a failed auth request.
 *
 * @param errorMessage - an error message
 */
class DaffAuthRegisterFailure {
    /**
     * @param {?} errorMessage
     */
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
        this.type = DaffAuthActionTypes.AuthRegisterFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAuthRegisterFailure.prototype.type;
    /** @type {?} */
    DaffAuthRegisterFailure.prototype.errorMessage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffAuthInitialState = {
    loading: false,
    errors: []
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, U, S
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffAuthReducer(state = daffAuthInitialState, action) {
    switch (action.type) {
        case DaffAuthActionTypes.AuthCheckAction:
            return Object.assign({}, state, { loading: true });
        case DaffAuthActionTypes.AuthCheckSuccessAction:
            return Object.assign({}, state, { loading: false });
        case DaffAuthActionTypes.AuthCheckFailureAction:
            return Object.assign({}, state, { loading: false, errors: [action.errorMessage] });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffAuthLoginInitialState = {
    auth: null,
    loading: false,
    errors: []
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, U, S
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffAuthLoginReducer(state = daffAuthLoginInitialState, action) {
    switch (action.type) {
        case DaffAuthActionTypes.AuthLoginAction:
        case DaffAuthActionTypes.AuthLogoutAction:
            return Object.assign({}, state, { loading: true });
        case DaffAuthActionTypes.AuthLoginSuccessAction:
            return Object.assign({}, state, { loading: false, auth: action.auth });
        case DaffAuthActionTypes.AuthLogoutSuccessAction:
            return Object.assign({}, state, { auth: null, loading: false });
        case DaffAuthActionTypes.AuthLoginFailureAction:
        case DaffAuthActionTypes.AuthLogoutFailureAction:
            return Object.assign({}, state, { loading: false, errors: [action.errorMessage] });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffAuthRegisterInitialState = {
    loading: false,
    errors: []
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, U, S
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffAuthRegisterReducer(state = daffAuthRegisterInitialState, action) {
    switch (action.type) {
        case DaffAuthActionTypes.AuthRegisterAction:
            return Object.assign({}, state, { loading: true });
        case DaffAuthActionTypes.AuthRegisterSuccessAction:
            return Object.assign({}, state, { loading: false });
        case DaffAuthActionTypes.AuthRegisterFailureAction:
            return Object.assign({}, state, { loading: false, errors: [action.errorMessage] });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DAFF_AUTH_STORE_FEATURE_KEY = 'daffAuth';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffAuthReducers = {
    auth: daffAuthReducer,
    login: daffAuthLoginReducer,
    register: daffAuthRegisterReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || createFeatureSelector(DAFF_AUTH_STORE_FEATURE_KEY));
};
/**
 * Feature State Selector
 * @type {?}
 */
const getDaffAuthFeatureStateSelector = ((ɵ0))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AuthSelectors() { }
if (false) {
    /** @type {?} */
    AuthSelectors.prototype.selectAuthState;
    /** @type {?} */
    AuthSelectors.prototype.selectAuthLoading;
    /** @type {?} */
    AuthSelectors.prototype.selectAuthErrors;
}
/** @type {?} */
const createAuthSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    /** @type {?} */
    const selectAuthState = createSelector(getDaffAuthFeatureStateSelector(), (/**
     * @param {?} state
     * @return {?}
     */
    state => state.auth));
    /** @type {?} */
    const selectAuthLoading = createSelector(selectAuthState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.loading));
    /** @type {?} */
    const selectAuthErrors = createSelector(selectAuthState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.errors));
    return {
        selectAuthState,
        selectAuthLoading,
        selectAuthErrors,
    };
});
const ɵ0$1 = createAuthSelectors;
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
    () => cache = cache || createAuthSelectors());
};
/** @type {?} */
const getAuthSelectors = ((ɵ1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DaffAuthLoginSelectors() { }
if (false) {
    /** @type {?} */
    DaffAuthLoginSelectors.prototype.selectAuthLoginState;
    /** @type {?} */
    DaffAuthLoginSelectors.prototype.selectAuthLoginLoading;
    /** @type {?} */
    DaffAuthLoginSelectors.prototype.selectAuthLoginErrors;
    /** @type {?} */
    DaffAuthLoginSelectors.prototype.selectAuthLoginToken;
    /** @type {?} */
    DaffAuthLoginSelectors.prototype.selectAuthLoginTokenValue;
}
/** @type {?} */
const createLoginSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    /** @type {?} */
    const selectAuthLoginState = createSelector(getDaffAuthFeatureStateSelector(), (/**
     * @param {?} state
     * @return {?}
     */
    state => state.login));
    /** @type {?} */
    const selectAuthLoginLoading = createSelector(selectAuthLoginState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.loading));
    /** @type {?} */
    const selectAuthLoginErrors = createSelector(selectAuthLoginState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.errors));
    /** @type {?} */
    const selectAuthLoginToken = createSelector(selectAuthLoginState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.auth));
    /** @type {?} */
    const selectAuthLoginTokenValue = createSelector(selectAuthLoginToken, (/**
     * @param {?} state
     * @return {?}
     */
    state => state ? state.token : null));
    return {
        selectAuthLoginState,
        selectAuthLoginLoading,
        selectAuthLoginErrors,
        selectAuthLoginToken,
        selectAuthLoginTokenValue
    };
});
const ɵ0$2 = createLoginSelectors;
const ɵ1$1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || createLoginSelectors());
};
/** @type {?} */
const getDaffAuthLoginSelectors = ((ɵ1$1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DaffAuthRegisterSelectors() { }
if (false) {
    /** @type {?} */
    DaffAuthRegisterSelectors.prototype.selectAuthRegisterState;
    /** @type {?} */
    DaffAuthRegisterSelectors.prototype.selectAuthRegisterLoading;
    /** @type {?} */
    DaffAuthRegisterSelectors.prototype.selectAuthRegisterErrors;
}
/** @type {?} */
const createRegisterSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    /** @type {?} */
    const selectAuthRegisterState = createSelector(getDaffAuthFeatureStateSelector(), (/**
     * @param {?} state
     * @return {?}
     */
    state => state.register));
    /** @type {?} */
    const selectAuthRegisterLoading = createSelector(selectAuthRegisterState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.loading));
    /** @type {?} */
    const selectAuthRegisterErrors = createSelector(selectAuthRegisterState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.errors));
    return {
        selectAuthRegisterState,
        selectAuthRegisterLoading,
        selectAuthRegisterErrors,
    };
});
const ɵ0$3 = createRegisterSelectors;
const ɵ1$2 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || createRegisterSelectors());
};
/** @type {?} */
const getDaffAuthRegisterSelectors = ((ɵ1$2))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DaffAuthSelectors() { }
if (false) {
    /** @type {?} */
    DaffAuthSelectors.prototype.selectAuthFeatureState;
}
const ɵ0$4 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || Object.assign({}, getAuthSelectors(), getDaffAuthLoginSelectors(), getDaffAuthRegisterSelectors(), { selectAuthFeatureState: getDaffAuthFeatureStateSelector() }));
};
/** @type {?} */
const getDaffAuthSelectors = ((ɵ0$4))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DaffAuthFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        const { selectAuthLoginToken, selectAuthLoading, selectAuthErrors, selectAuthLoginLoading, selectAuthLoginErrors, selectAuthRegisterLoading, selectAuthRegisterErrors, selectAuthLoginTokenValue } = getDaffAuthSelectors();
        this.auth$ = this.store.pipe(select(selectAuthLoginToken));
        this.token$ = this.store.pipe(select(selectAuthLoginTokenValue));
        this.authLoading$ = this.store.pipe(select(selectAuthLoading));
        this.authErrors$ = this.store.pipe(select(selectAuthErrors));
        this.loginLoading$ = this.store.pipe(select(selectAuthLoginLoading));
        this.loginErrors$ = this.store.pipe(select(selectAuthLoginErrors));
        this.registerLoading$ = this.store.pipe(select(selectAuthRegisterLoading));
        this.registerErrors$ = this.store.pipe(select(selectAuthRegisterErrors));
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffAuthFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffAuthFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffAuthFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffAuthFacade_Factory() { return new DaffAuthFacade(ɵɵinject(Store)); }, token: DaffAuthFacade, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffAuthFacade.prototype.auth$;
    /** @type {?} */
    DaffAuthFacade.prototype.token$;
    /** @type {?} */
    DaffAuthFacade.prototype.authLoading$;
    /** @type {?} */
    DaffAuthFacade.prototype.authErrors$;
    /** @type {?} */
    DaffAuthFacade.prototype.loginLoading$;
    /** @type {?} */
    DaffAuthFacade.prototype.loginErrors$;
    /** @type {?} */
    DaffAuthFacade.prototype.registerLoading$;
    /** @type {?} */
    DaffAuthFacade.prototype.registerErrors$;
    /**
     * @type {?}
     * @private
     */
    DaffAuthFacade.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template TRequest, TResponse
 */
function DaffRegisterServiceInterface() { }
if (false) {
    /**
     * Registers an account for the specified customer.
     *
     * @param {?} registration The account registration info.
     * @return {?} Login info.
     */
    DaffRegisterServiceInterface.prototype.register = function (registration) { };
}
/** @type {?} */
const DaffRegisterDriver = new InjectionToken('DaffRegisterDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template TRequest, TResponse
 */
function DaffLoginServiceInterface() { }
if (false) {
    /**
     * Logs the user in.
     *
     * @param {?} loginInfo
     * @return {?} An access token.
     */
    DaffLoginServiceInterface.prototype.login = function (loginInfo) { };
    /**
     * Logs the user out by revoking their access token.
     * @return {?}
     */
    DaffLoginServiceInterface.prototype.logout = function () { };
}
/** @type {?} */
const DaffLoginDriver = new InjectionToken('DaffLoginDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DaffAuthServiceInterface() { }
if (false) {
    /**
     * Checks the validity of an auth token.
     * @return {?}
     */
    DaffAuthServiceInterface.prototype.check = function () { };
}
/** @type {?} */
const DaffAuthDriver = new InjectionToken('DaffAuthDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffAuthStorageService {
    /**
     * @param {?} storageService
     */
    constructor(storageService) {
        this.storageService = storageService;
        this.AUTH_STORAGE_TOKEN = 'DAFF_AUTH_TOKEN';
    }
    /**
     * @return {?}
     */
    getAuthToken() {
        return this.storageService.getItem(this.AUTH_STORAGE_TOKEN);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setAuthToken(value) {
        this.storageService.setItem(this.AUTH_STORAGE_TOKEN, value);
    }
    /**
     * @return {?}
     */
    removeAuthToken() {
        this.storageService.removeItem(this.AUTH_STORAGE_TOKEN);
    }
}
DaffAuthStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffAuthStorageService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DaffPersistenceServiceToken,] }] }
];
/** @nocollapse */ DaffAuthStorageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffAuthStorageService_Factory() { return new DaffAuthStorageService(ɵɵinject(DaffPersistenceServiceToken)); }, token: DaffAuthStorageService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffAuthStorageService.prototype.AUTH_STORAGE_TOKEN;
    /**
     * @type {?}
     * @private
     */
    DaffAuthStorageService.prototype.storageService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, U, S
 */
class DaffAuthEffects {
    /**
     * @param {?} actions$
     * @param {?} registerDriver
     * @param {?} loginDriver
     * @param {?} authDriver
     * @param {?} storage
     */
    constructor(actions$, registerDriver, loginDriver, authDriver, storage) {
        this.actions$ = actions$;
        this.registerDriver = registerDriver;
        this.loginDriver = loginDriver;
        this.authDriver = authDriver;
        this.storage = storage;
        this.check$ = this.actions$.pipe(ofType(DaffAuthActionTypes.AuthCheckAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.checkToken().pipe(mapTo(new DaffAuthCheckSuccess()), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffAuthCheckFailure('Auth token is not valid'))))))));
        this.login$ = this.actions$.pipe(ofType(DaffAuthActionTypes.AuthLoginAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.loginDriver.login(action.loginInfo).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffAuthLoginSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffAuthLoginFailure('Failed to log in'))))))));
        this.storeAuthToken$ = this.actions$.pipe(ofType(DaffAuthActionTypes.AuthLoginSuccessAction), tap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            this.storage.setAuthToken(action.auth.token);
        })), switchMapTo(EMPTY), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffAuthStorageFailure('Storage of auth token has failed.')))));
        this.logout$ = this.actions$.pipe(ofType(DaffAuthActionTypes.AuthLogoutAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.loginDriver.logout().pipe(mapTo(new DaffAuthLogoutSuccess()), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffAuthLogoutFailure('Failed to log out'))))))));
        this.loginAfterRegister$ = this.actions$.pipe(ofType(DaffAuthActionTypes.AuthRegisterSuccessAction), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => new DaffAuthLogin(action.loginInfo))));
        this.register$ = this.actions$.pipe(ofType(DaffAuthActionTypes.AuthRegisterAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.registerDriver.register(action.registration).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffAuthRegisterSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffAuthRegisterFailure('Failed to register a new user'))))))));
        this.guardCheck$ = this.actions$.pipe(ofType(DaffAuthActionTypes.AuthGuardCheckAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.checkToken().pipe(mapTo(new DaffAuthGuardCheckCompletion(true)), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffAuthGuardCheckCompletion(false))))))));
    }
    /**
     * @private
     * @return {?}
     */
    checkToken() {
        return this.authDriver.check();
    }
}
DaffAuthEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffAuthEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffRegisterDriver,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffLoginDriver,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffAuthDriver,] }] },
    { type: DaffAuthStorageService }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], DaffAuthEffects.prototype, "check$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], DaffAuthEffects.prototype, "login$", void 0);
__decorate([
    Effect({
        dispatch: false
    }),
    __metadata("design:type", Object)
], DaffAuthEffects.prototype, "storeAuthToken$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], DaffAuthEffects.prototype, "logout$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], DaffAuthEffects.prototype, "loginAfterRegister$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], DaffAuthEffects.prototype, "register$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], DaffAuthEffects.prototype, "guardCheck$", void 0);
if (false) {
    /** @type {?} */
    DaffAuthEffects.prototype.check$;
    /** @type {?} */
    DaffAuthEffects.prototype.login$;
    /** @type {?} */
    DaffAuthEffects.prototype.storeAuthToken$;
    /** @type {?} */
    DaffAuthEffects.prototype.logout$;
    /** @type {?} */
    DaffAuthEffects.prototype.loginAfterRegister$;
    /** @type {?} */
    DaffAuthEffects.prototype.register$;
    /** @type {?} */
    DaffAuthEffects.prototype.guardCheck$;
    /**
     * @type {?}
     * @private
     */
    DaffAuthEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffAuthEffects.prototype.registerDriver;
    /**
     * @type {?}
     * @private
     */
    DaffAuthEffects.prototype.loginDriver;
    /**
     * @type {?}
     * @private
     */
    DaffAuthEffects.prototype.authDriver;
    /**
     * @type {?}
     * @private
     */
    DaffAuthEffects.prototype.storage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffAuthStateModule {
}
DaffAuthStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature(DAFF_AUTH_STORE_FEATURE_KEY, daffAuthReducers),
                    EffectsModule.forFeature([DaffAuthEffects]),
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffAuthModule {
}
DaffAuthModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    DaffAuthStateModule
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento auths into an object usable by daffodil.
 */
class DaffMagentoLoginInfoTransformerService {
    /**
     * @param {?} registration
     * @return {?}
     */
    transform(registration) {
        return {
            email: registration.customer.email,
            password: registration.password
        };
    }
}
DaffMagentoLoginInfoTransformerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoLoginInfoTransformerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoLoginInfoTransformerService_Factory() { return new DaffMagentoLoginInfoTransformerService(); }, token: DaffMagentoLoginInfoTransformerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const checkTokenQuery = gql `
  query CheckToken {
    customer {
      id
    }
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const createCustomerMutation = gql `
  mutation CreateCustomer(
    $email: String!,
    $password: String!,
    $firstname: String!,
    $lastname: String!,
  ) {
    createCustomer(input: {
      firstname: $firstname,
      lastname: $lastname,
      email: $email,
      password: $password
    })
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const generateTokenMutation = gql `
  mutation GenerateToken($email: String!, $password: String!) {
    generateCustomerToken(
      email: $email,
      password: $password
    ) {
      token
    }
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const revokeCustomerTokenMutation = gql `
  mutation revokeCustomerToken {
    revokeCustomerToken {
      result
    }
  }
`;

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
/** @enum {string} */
const MagentoAuthGraphQlErrorCode = {
    UNAUTHORIZED: 'graphql-authorization',
    AUTHENTICATION_FAILED: 'graphql-authentication',
    BAD_INPUT: 'graphql-input',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffUnauthorizedError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTH_UNAUTHORIZED';
    }
}
if (false) {
    /** @type {?} */
    DaffUnauthorizedError.prototype.code;
    /** @type {?} */
    DaffUnauthorizedError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffAuthenticationFailedError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTH_AUTHENTICATION_FAILED';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthenticationFailedError.prototype.code;
    /** @type {?} */
    DaffAuthenticationFailedError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffAuthInvalidAPIResponseError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_AUTH_INVALID_API_RESPONSE';
    }
}
if (false) {
    /** @type {?} */
    DaffAuthInvalidAPIResponseError.prototype.code;
    /** @type {?} */
    DaffAuthInvalidAPIResponseError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffAuthMagentoErrorMap = {
    [MagentoAuthGraphQlErrorCode.UNAUTHORIZED]: DaffUnauthorizedError,
    [MagentoAuthGraphQlErrorCode.AUTHENTICATION_FAILED]: DaffAuthenticationFailedError,
    [MagentoAuthGraphQlErrorCode.BAD_INPUT]: DaffBadInputError,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const transformMagentoAuthError = (/**
 * @param {?} error
 * @return {?}
 */
(error) => {
    return daffTransformMagentoError(error, DaffAuthMagentoErrorMap);
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMagentoRegisterService {
    /**
     * @param {?} apollo
     * @param {?} loginInfoTransformer
     */
    constructor(apollo, loginInfoTransformer) {
        this.apollo = apollo;
        this.loginInfoTransformer = loginInfoTransformer;
    }
    /**
     * @param {?} registration
     * @return {?}
     */
    register(registration) {
        return this.apollo.mutate({
            mutation: createCustomerMutation,
            variables: {
                email: registration.customer.email,
                password: registration.password,
                firstname: registration.customer.firstName,
                lastname: registration.customer.lastName
            }
        }).pipe(mapTo(this.loginInfoTransformer.transform(registration)), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformMagentoAuthError(err)))));
    }
}
DaffMagentoRegisterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoRegisterService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffMagentoLoginInfoTransformerService }
];
/** @nocollapse */ DaffMagentoRegisterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoRegisterService_Factory() { return new DaffMagentoRegisterService(ɵɵinject(Apollo), ɵɵinject(DaffMagentoLoginInfoTransformerService)); }, token: DaffMagentoRegisterService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoRegisterService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoRegisterService.prototype.loginInfoTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento auths into an object usable by daffodil.
 */
class DaffMagentoAuthTransformerService {
    /**
     * Transforms the magento AuthNode from the magento auth query into a DaffAuthToken.
     * @param {?} auth the auth from a magento auth query.
     * @return {?}
     */
    transform(auth) {
        return {
            token: auth.token
        };
    }
}
DaffMagentoAuthTransformerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoAuthTransformerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoAuthTransformerService_Factory() { return new DaffMagentoAuthTransformerService(); }, token: DaffMagentoAuthTransformerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const validateCheckTokenResponse = (/**
 * @param {?} response
 * @return {?}
 */
(response) => {
    if (response.data.customer.id) {
        return response;
    }
    else {
        throw new DaffAuthInvalidAPIResponseError('Check token response does not contain a valid customer ID.');
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const validateGenerateTokenResponse = (/**
 * @param {?} response
 * @return {?}
 */
(response) => {
    if (response.data.generateCustomerToken.token) {
        return response;
    }
    else {
        throw new DaffAuthInvalidAPIResponseError('Generate token response does not contain an auth token.');
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const validateRevokeTokenResponse = (/**
 * @param {?} response
 * @return {?}
 */
(response) => {
    if (response.data.revokeCustomerToken.result) {
        return response;
    }
    else {
        throw new DaffAuthInvalidAPIResponseError('Revoke token response does not contain a successful result.');
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMagentoLoginService {
    /**
     * @param {?} apollo
     * @param {?} authTransformer
     */
    constructor(apollo, authTransformer) {
        this.apollo = apollo;
        this.authTransformer = authTransformer;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    login({ email, password }) {
        return this.apollo.mutate({
            mutation: generateTokenMutation,
            variables: {
                email,
                password
            }
        }).pipe(map(validateGenerateTokenResponse), map((/**
         * @param {?} res
         * @return {?}
         */
        res => this.authTransformer.transform(res.data.generateCustomerToken))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformMagentoAuthError(err)))));
    }
    /**
     * @return {?}
     */
    logout() {
        return this.apollo.mutate({ mutation: revokeCustomerTokenMutation }).pipe(map(validateRevokeTokenResponse), mapTo(undefined), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformMagentoAuthError(err)))));
    }
}
DaffMagentoLoginService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoLoginService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffMagentoAuthTransformerService }
];
/** @nocollapse */ DaffMagentoLoginService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoLoginService_Factory() { return new DaffMagentoLoginService(ɵɵinject(Apollo), ɵɵinject(DaffMagentoAuthTransformerService)); }, token: DaffMagentoLoginService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoLoginService.prototype.apollo;
    /** @type {?} */
    DaffMagentoLoginService.prototype.authTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMagentoAuthService {
    /**
     * @param {?} apollo
     */
    constructor(apollo) {
        this.apollo = apollo;
    }
    /**
     * @return {?}
     */
    check() {
        return this.apollo.query({ query: checkTokenQuery }).pipe(map(validateCheckTokenResponse), mapTo(undefined), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformMagentoAuthError(err)))));
    }
}
DaffMagentoAuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoAuthService.ctorParameters = () => [
    { type: Apollo }
];
/** @nocollapse */ DaffMagentoAuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoAuthService_Factory() { return new DaffMagentoAuthService(ɵɵinject(Apollo)); }, token: DaffMagentoAuthService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoAuthService.prototype.apollo;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffAuthMagentoDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffAuthMagentoDriverModule,
            providers: [
                {
                    provide: DaffRegisterDriver,
                    useExisting: DaffMagentoRegisterService
                },
                {
                    provide: DaffLoginDriver,
                    useExisting: DaffMagentoLoginService
                },
                {
                    provide: DaffAuthDriver,
                    useExisting: DaffMagentoAuthService
                }
            ]
        };
    }
}
DaffAuthMagentoDriverModule.decorators = [
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MemberOnlyGuard {
    /**
     * @param {?} facade
     * @param {?} actions$
     */
    constructor(facade, actions$) {
        this.facade = facade;
        this.actions$ = actions$;
    }
    /**
     * @return {?}
     */
    canActivate() {
        /** @type {?} */
        const ret = this.isAuthenticated();
        this.facade.dispatch(new DaffAuthGuardCheck());
        return ret;
    }
    /**
     * @return {?}
     */
    isAuthenticated() {
        return this.actions$.pipe(ofType(DaffAuthActionTypes.AuthGuardCheckCompletionAction), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.result)));
    }
}
MemberOnlyGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
MemberOnlyGuard.ctorParameters = () => [
    { type: DaffAuthFacade },
    { type: Actions }
];
/** @nocollapse */ MemberOnlyGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function MemberOnlyGuard_Factory() { return new MemberOnlyGuard(ɵɵinject(DaffAuthFacade), ɵɵinject(Actions)); }, token: MemberOnlyGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MemberOnlyGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    MemberOnlyGuard.prototype.actions$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GuestOnlyGuard {
    /**
     * @param {?} facade
     * @param {?} memberOnlyGuard
     */
    constructor(facade, memberOnlyGuard) {
        this.facade = facade;
        this.memberOnlyGuard = memberOnlyGuard;
    }
    /**
     * @return {?}
     */
    canActivate() {
        /** @type {?} */
        const ret = this.isUnauthenticated();
        this.facade.dispatch(new DaffAuthGuardCheck());
        return ret;
    }
    /**
     * @return {?}
     */
    isUnauthenticated() {
        return this.memberOnlyGuard.isAuthenticated().pipe(map((/**
         * @param {?} authenticated
         * @return {?}
         */
        authenticated => !authenticated)));
    }
}
GuestOnlyGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
GuestOnlyGuard.ctorParameters = () => [
    { type: DaffAuthFacade },
    { type: MemberOnlyGuard }
];
/** @nocollapse */ GuestOnlyGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function GuestOnlyGuard_Factory() { return new GuestOnlyGuard(ɵɵinject(DaffAuthFacade), ɵɵinject(MemberOnlyGuard)); }, token: GuestOnlyGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    GuestOnlyGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    GuestOnlyGuard.prototype.memberOnlyGuard;
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

export { DAFF_AUTH_STORE_FEATURE_KEY, DaffAuthActionTypes, DaffAuthCheck, DaffAuthCheckFailure, DaffAuthCheckSuccess, DaffAuthDriver, DaffAuthFacade, DaffAuthGuardCheck, DaffAuthGuardCheckCompletion, DaffAuthInvalidAPIResponseError, DaffAuthLogin, DaffAuthLoginFailure, DaffAuthLoginSuccess, DaffAuthLogout, DaffAuthLogoutFailure, DaffAuthLogoutSuccess, DaffAuthMagentoDriverModule, DaffAuthModule, DaffAuthRegister, DaffAuthRegisterFailure, DaffAuthRegisterSuccess, DaffAuthStorageFailure, DaffAuthStorageService, DaffAuthenticationFailedError, DaffLoginDriver, DaffMagentoAuthService, DaffMagentoAuthTransformerService, DaffMagentoLoginInfoTransformerService, DaffMagentoLoginService, DaffMagentoRegisterService, DaffRegisterDriver, DaffUnauthorizedError, GuestOnlyGuard, MemberOnlyGuard, daffAuthInitialState, daffAuthLoginInitialState, daffAuthLoginReducer, daffAuthReducer, daffAuthReducers, daffAuthRegisterInitialState, daffAuthRegisterReducer, getDaffAuthSelectors, DaffAuthStateModule as ɵa, DaffAuthEffects as ɵb };
//# sourceMappingURL=daffodil-auth.js.map
