import { __assign, __decorate, __metadata, __makeTemplateObject, __extends } from 'tslib';
import { createFeatureSelector, createSelector, select, Store, StoreModule } from '@ngrx/store';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, InjectionToken, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
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
var DaffAuthActionTypes = {
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
var  /**
 * An action triggered by guards to initialize an auth check request.
 */
DaffAuthGuardCheck = /** @class */ (function () {
    function DaffAuthGuardCheck() {
        this.type = DaffAuthActionTypes.AuthGuardCheckAction;
    }
    return DaffAuthGuardCheck;
}());
if (false) {
    /** @type {?} */
    DaffAuthGuardCheck.prototype.type;
}
/**
 * An action triggered on the completion of a guard token check.
 */
var  /**
 * An action triggered on the completion of a guard token check.
 */
DaffAuthGuardCheckCompletion = /** @class */ (function () {
    function DaffAuthGuardCheckCompletion(result) {
        this.result = result;
        this.type = DaffAuthActionTypes.AuthGuardCheckCompletionAction;
    }
    return DaffAuthGuardCheckCompletion;
}());
if (false) {
    /** @type {?} */
    DaffAuthGuardCheckCompletion.prototype.type;
    /** @type {?} */
    DaffAuthGuardCheckCompletion.prototype.result;
}
/*
 * An action triggered upon a failed auth storage operation.
 */
var  /*
 * An action triggered upon a failed auth storage operation.
 */
DaffAuthStorageFailure = /** @class */ (function () {
    function DaffAuthStorageFailure(errorMessage) {
        this.errorMessage = errorMessage;
        this.type = DaffAuthActionTypes.AuthStorageFailureAction;
    }
    return DaffAuthStorageFailure;
}());
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
var  /**
 * An action triggered to initialize a auth login request.
 * @template T
 */
DaffAuthLogin = /** @class */ (function () {
    function DaffAuthLogin(loginInfo) {
        this.loginInfo = loginInfo;
        this.type = DaffAuthActionTypes.AuthLoginAction;
    }
    return DaffAuthLogin;
}());
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
var  /**
 * An action triggered upon a successful auth login.
 *
 * @param token - the customer access token
 * @template T
 */
DaffAuthLoginSuccess = /** @class */ (function () {
    function DaffAuthLoginSuccess(auth) {
        this.auth = auth;
        this.type = DaffAuthActionTypes.AuthLoginSuccessAction;
    }
    return DaffAuthLoginSuccess;
}());
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
var  /**
 * An action triggered upon a failed auth login request.
 *
 * @param errorMessage - an error message
 */
DaffAuthLoginFailure = /** @class */ (function () {
    function DaffAuthLoginFailure(errorMessage) {
        this.errorMessage = errorMessage;
        this.type = DaffAuthActionTypes.AuthLoginFailureAction;
    }
    return DaffAuthLoginFailure;
}());
if (false) {
    /** @type {?} */
    DaffAuthLoginFailure.prototype.type;
    /** @type {?} */
    DaffAuthLoginFailure.prototype.errorMessage;
}
/**
 * An action triggered to initialize a logout request.
 */
var  /**
 * An action triggered to initialize a logout request.
 */
DaffAuthLogout = /** @class */ (function () {
    function DaffAuthLogout() {
        this.type = DaffAuthActionTypes.AuthLogoutAction;
    }
    return DaffAuthLogout;
}());
if (false) {
    /** @type {?} */
    DaffAuthLogout.prototype.type;
}
/**
 * An action triggered upon a successful logout.
 *
 * @param token - the customer access token
 */
var  /**
 * An action triggered upon a successful logout.
 *
 * @param token - the customer access token
 */
DaffAuthLogoutSuccess = /** @class */ (function () {
    function DaffAuthLogoutSuccess() {
        this.type = DaffAuthActionTypes.AuthLogoutSuccessAction;
    }
    return DaffAuthLogoutSuccess;
}());
if (false) {
    /** @type {?} */
    DaffAuthLogoutSuccess.prototype.type;
}
/**
 * An action triggered upon a failed logout request.
 *
 * @param errorMessage - an error message
 */
var  /**
 * An action triggered upon a failed logout request.
 *
 * @param errorMessage - an error message
 */
DaffAuthLogoutFailure = /** @class */ (function () {
    function DaffAuthLogoutFailure(errorMessage) {
        this.errorMessage = errorMessage;
        this.type = DaffAuthActionTypes.AuthLogoutFailureAction;
    }
    return DaffAuthLogoutFailure;
}());
if (false) {
    /** @type {?} */
    DaffAuthLogoutFailure.prototype.type;
    /** @type {?} */
    DaffAuthLogoutFailure.prototype.errorMessage;
}
/**
 * An action triggered to initialize an auth check request.
 */
var  /**
 * An action triggered to initialize an auth check request.
 */
DaffAuthCheck = /** @class */ (function () {
    function DaffAuthCheck() {
        this.type = DaffAuthActionTypes.AuthCheckAction;
    }
    return DaffAuthCheck;
}());
if (false) {
    /** @type {?} */
    DaffAuthCheck.prototype.type;
}
/**
 * An action triggered upon a successful auth check.
 *
 * @param token - the customer access token
 */
var  /**
 * An action triggered upon a successful auth check.
 *
 * @param token - the customer access token
 */
DaffAuthCheckSuccess = /** @class */ (function () {
    function DaffAuthCheckSuccess() {
        this.type = DaffAuthActionTypes.AuthCheckSuccessAction;
    }
    return DaffAuthCheckSuccess;
}());
if (false) {
    /** @type {?} */
    DaffAuthCheckSuccess.prototype.type;
}
/**
 * An action triggered upon a failed auth check request.
 *
 * @param errorMessage - an error message
 */
var  /**
 * An action triggered upon a failed auth check request.
 *
 * @param errorMessage - an error message
 */
DaffAuthCheckFailure = /** @class */ (function () {
    function DaffAuthCheckFailure(errorMessage) {
        this.errorMessage = errorMessage;
        this.type = DaffAuthActionTypes.AuthCheckFailureAction;
    }
    return DaffAuthCheckFailure;
}());
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
var  /**
 * An action triggered to initialize a auth register request.
 *
 * @param registration
 * @template T
 */
DaffAuthRegister = /** @class */ (function () {
    function DaffAuthRegister(registration) {
        this.registration = registration;
        this.type = DaffAuthActionTypes.AuthRegisterAction;
    }
    return DaffAuthRegister;
}());
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
var  /**
 * An action triggered upon a successful auth register request.
 *
 * @param token - the customer access token
 * @template T
 */
DaffAuthRegisterSuccess = /** @class */ (function () {
    function DaffAuthRegisterSuccess(loginInfo) {
        this.loginInfo = loginInfo;
        this.type = DaffAuthActionTypes.AuthRegisterSuccessAction;
    }
    return DaffAuthRegisterSuccess;
}());
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
var  /**
 * An action triggered upon a failed auth request.
 *
 * @param errorMessage - an error message
 */
DaffAuthRegisterFailure = /** @class */ (function () {
    function DaffAuthRegisterFailure(errorMessage) {
        this.errorMessage = errorMessage;
        this.type = DaffAuthActionTypes.AuthRegisterFailureAction;
    }
    return DaffAuthRegisterFailure;
}());
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
var daffAuthInitialState = {
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
function daffAuthReducer(state, action) {
    if (state === void 0) { state = daffAuthInitialState; }
    switch (action.type) {
        case DaffAuthActionTypes.AuthCheckAction:
            return __assign({}, state, { loading: true });
        case DaffAuthActionTypes.AuthCheckSuccessAction:
            return __assign({}, state, { loading: false });
        case DaffAuthActionTypes.AuthCheckFailureAction:
            return __assign({}, state, { loading: false, errors: [action.errorMessage] });
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
var daffAuthLoginInitialState = {
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
function daffAuthLoginReducer(state, action) {
    if (state === void 0) { state = daffAuthLoginInitialState; }
    switch (action.type) {
        case DaffAuthActionTypes.AuthLoginAction:
        case DaffAuthActionTypes.AuthLogoutAction:
            return __assign({}, state, { loading: true });
        case DaffAuthActionTypes.AuthLoginSuccessAction:
            return __assign({}, state, { loading: false, auth: action.auth });
        case DaffAuthActionTypes.AuthLogoutSuccessAction:
            return __assign({}, state, { auth: null, loading: false });
        case DaffAuthActionTypes.AuthLoginFailureAction:
        case DaffAuthActionTypes.AuthLogoutFailureAction:
            return __assign({}, state, { loading: false, errors: [action.errorMessage] });
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
var daffAuthRegisterInitialState = {
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
function daffAuthRegisterReducer(state, action) {
    if (state === void 0) { state = daffAuthRegisterInitialState; }
    switch (action.type) {
        case DaffAuthActionTypes.AuthRegisterAction:
            return __assign({}, state, { loading: true });
        case DaffAuthActionTypes.AuthRegisterSuccessAction:
            return __assign({}, state, { loading: false });
        case DaffAuthActionTypes.AuthRegisterFailureAction:
            return __assign({}, state, { loading: false, errors: [action.errorMessage] });
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
var DAFF_AUTH_STORE_FEATURE_KEY = 'daffAuth';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var daffAuthReducers = {
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
var ɵ0 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T
     * @return {?}
     */
    function () {
        return cache = cache || createFeatureSelector(DAFF_AUTH_STORE_FEATURE_KEY);
    });
};
/**
 * Feature State Selector
 * @type {?}
 */
var getDaffAuthFeatureStateSelector = ((ɵ0))();

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
var createAuthSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    /** @type {?} */
    var selectAuthState = createSelector(getDaffAuthFeatureStateSelector(), (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.auth; }));
    /** @type {?} */
    var selectAuthLoading = createSelector(selectAuthState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /** @type {?} */
    var selectAuthErrors = createSelector(selectAuthState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    return {
        selectAuthState: selectAuthState,
        selectAuthLoading: selectAuthLoading,
        selectAuthErrors: selectAuthErrors,
    };
});
var ɵ0$1 = createAuthSelectors;
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
    function () {
        return cache = cache || createAuthSelectors();
    });
};
/** @type {?} */
var getAuthSelectors = ((ɵ1))();

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
var createLoginSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    /** @type {?} */
    var selectAuthLoginState = createSelector(getDaffAuthFeatureStateSelector(), (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.login; }));
    /** @type {?} */
    var selectAuthLoginLoading = createSelector(selectAuthLoginState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /** @type {?} */
    var selectAuthLoginErrors = createSelector(selectAuthLoginState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    /** @type {?} */
    var selectAuthLoginToken = createSelector(selectAuthLoginState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.auth; }));
    /** @type {?} */
    var selectAuthLoginTokenValue = createSelector(selectAuthLoginToken, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state ? state.token : null; }));
    return {
        selectAuthLoginState: selectAuthLoginState,
        selectAuthLoginLoading: selectAuthLoginLoading,
        selectAuthLoginErrors: selectAuthLoginErrors,
        selectAuthLoginToken: selectAuthLoginToken,
        selectAuthLoginTokenValue: selectAuthLoginTokenValue
    };
});
var ɵ0$2 = createLoginSelectors;
var ɵ1$1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T
     * @return {?}
     */
    function () {
        return cache = cache || createLoginSelectors();
    });
};
/** @type {?} */
var getDaffAuthLoginSelectors = ((ɵ1$1))();

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
var createRegisterSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    /** @type {?} */
    var selectAuthRegisterState = createSelector(getDaffAuthFeatureStateSelector(), (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.register; }));
    /** @type {?} */
    var selectAuthRegisterLoading = createSelector(selectAuthRegisterState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /** @type {?} */
    var selectAuthRegisterErrors = createSelector(selectAuthRegisterState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    return {
        selectAuthRegisterState: selectAuthRegisterState,
        selectAuthRegisterLoading: selectAuthRegisterLoading,
        selectAuthRegisterErrors: selectAuthRegisterErrors,
    };
});
var ɵ0$3 = createRegisterSelectors;
var ɵ1$2 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T
     * @return {?}
     */
    function () {
        return cache = cache || createRegisterSelectors();
    });
};
/** @type {?} */
var getDaffAuthRegisterSelectors = ((ɵ1$2))();

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
var ɵ0$4 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T
     * @return {?}
     */
    function () {
        return cache = cache || __assign({}, getAuthSelectors(), getDaffAuthLoginSelectors(), getDaffAuthRegisterSelectors(), { selectAuthFeatureState: getDaffAuthFeatureStateSelector() });
    });
};
/** @type {?} */
var getDaffAuthSelectors = ((ɵ0$4))();

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
var DaffAuthFacade = /** @class */ (function () {
    function DaffAuthFacade(store) {
        this.store = store;
        var _a = getDaffAuthSelectors(), selectAuthLoginToken = _a.selectAuthLoginToken, selectAuthLoading = _a.selectAuthLoading, selectAuthErrors = _a.selectAuthErrors, selectAuthLoginLoading = _a.selectAuthLoginLoading, selectAuthLoginErrors = _a.selectAuthLoginErrors, selectAuthRegisterLoading = _a.selectAuthRegisterLoading, selectAuthRegisterErrors = _a.selectAuthRegisterErrors, selectAuthLoginTokenValue = _a.selectAuthLoginTokenValue;
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
    DaffAuthFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffAuthFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffAuthFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffAuthFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffAuthFacade_Factory() { return new DaffAuthFacade(ɵɵinject(Store)); }, token: DaffAuthFacade, providedIn: "root" });
    return DaffAuthFacade;
}());
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
var DaffRegisterDriver = new InjectionToken('DaffRegisterDriver');

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
var DaffLoginDriver = new InjectionToken('DaffLoginDriver');

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
var DaffAuthDriver = new InjectionToken('DaffAuthDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffAuthStorageService = /** @class */ (function () {
    function DaffAuthStorageService(storageService) {
        this.storageService = storageService;
        this.AUTH_STORAGE_TOKEN = 'DAFF_AUTH_TOKEN';
    }
    /**
     * @return {?}
     */
    DaffAuthStorageService.prototype.getAuthToken = /**
     * @return {?}
     */
    function () {
        return this.storageService.getItem(this.AUTH_STORAGE_TOKEN);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DaffAuthStorageService.prototype.setAuthToken = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.storageService.setItem(this.AUTH_STORAGE_TOKEN, value);
    };
    /**
     * @return {?}
     */
    DaffAuthStorageService.prototype.removeAuthToken = /**
     * @return {?}
     */
    function () {
        this.storageService.removeItem(this.AUTH_STORAGE_TOKEN);
    };
    DaffAuthStorageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffAuthStorageService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DaffPersistenceServiceToken,] }] }
    ]; };
    /** @nocollapse */ DaffAuthStorageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffAuthStorageService_Factory() { return new DaffAuthStorageService(ɵɵinject(DaffPersistenceServiceToken)); }, token: DaffAuthStorageService, providedIn: "root" });
    return DaffAuthStorageService;
}());
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
var DaffAuthEffects = /** @class */ (function () {
    function DaffAuthEffects(actions$, registerDriver, loginDriver, authDriver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.registerDriver = registerDriver;
        this.loginDriver = loginDriver;
        this.authDriver = authDriver;
        this.storage = storage;
        this.check$ = this.actions$.pipe(ofType(DaffAuthActionTypes.AuthCheckAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.checkToken().pipe(mapTo(new DaffAuthCheckSuccess()), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new DaffAuthCheckFailure('Auth token is not valid'));
            })));
        })));
        this.login$ = this.actions$.pipe(ofType(DaffAuthActionTypes.AuthLoginAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.loginDriver.login(action.loginInfo).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                return new DaffAuthLoginSuccess(resp);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new DaffAuthLoginFailure('Failed to log in'));
            })));
        })));
        this.storeAuthToken$ = this.actions$.pipe(ofType(DaffAuthActionTypes.AuthLoginSuccessAction), tap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            _this.storage.setAuthToken(action.auth.token);
        })), switchMapTo(EMPTY), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(new DaffAuthStorageFailure('Storage of auth token has failed.')); })));
        this.logout$ = this.actions$.pipe(ofType(DaffAuthActionTypes.AuthLogoutAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.loginDriver.logout().pipe(mapTo(new DaffAuthLogoutSuccess()), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new DaffAuthLogoutFailure('Failed to log out'));
            })));
        })));
        this.loginAfterRegister$ = this.actions$.pipe(ofType(DaffAuthActionTypes.AuthRegisterSuccessAction), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return new DaffAuthLogin(action.loginInfo); })));
        this.register$ = this.actions$.pipe(ofType(DaffAuthActionTypes.AuthRegisterAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.registerDriver.register(action.registration).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                return new DaffAuthRegisterSuccess(resp);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new DaffAuthRegisterFailure('Failed to register a new user'));
            })));
        })));
        this.guardCheck$ = this.actions$.pipe(ofType(DaffAuthActionTypes.AuthGuardCheckAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.checkToken().pipe(mapTo(new DaffAuthGuardCheckCompletion(true)), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new DaffAuthGuardCheckCompletion(false));
            })));
        })));
    }
    /**
     * @private
     * @return {?}
     */
    DaffAuthEffects.prototype.checkToken = /**
     * @private
     * @return {?}
     */
    function () {
        return this.authDriver.check();
    };
    DaffAuthEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffAuthEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffRegisterDriver,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffLoginDriver,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffAuthDriver,] }] },
        { type: DaffAuthStorageService }
    ]; };
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
    return DaffAuthEffects;
}());
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
var DaffAuthStateModule = /** @class */ (function () {
    function DaffAuthStateModule() {
    }
    DaffAuthStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature(DAFF_AUTH_STORE_FEATURE_KEY, daffAuthReducers),
                        EffectsModule.forFeature([DaffAuthEffects]),
                    ]
                },] }
    ];
    return DaffAuthStateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffAuthModule = /** @class */ (function () {
    function DaffAuthModule() {
    }
    DaffAuthModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        DaffAuthStateModule
                    ],
                },] }
    ];
    return DaffAuthModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento auths into an object usable by daffodil.
 */
var DaffMagentoLoginInfoTransformerService = /** @class */ (function () {
    function DaffMagentoLoginInfoTransformerService() {
    }
    /**
     * @param {?} registration
     * @return {?}
     */
    DaffMagentoLoginInfoTransformerService.prototype.transform = /**
     * @param {?} registration
     * @return {?}
     */
    function (registration) {
        return {
            email: registration.customer.email,
            password: registration.password
        };
    };
    DaffMagentoLoginInfoTransformerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoLoginInfoTransformerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoLoginInfoTransformerService_Factory() { return new DaffMagentoLoginInfoTransformerService(); }, token: DaffMagentoLoginInfoTransformerService, providedIn: "root" });
    return DaffMagentoLoginInfoTransformerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var checkTokenQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query CheckToken {\n    customer {\n      id\n    }\n  }\n"], ["\n  query CheckToken {\n    customer {\n      id\n    }\n  }\n"])));
var templateObject_1;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var createCustomerMutation = gql(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  mutation CreateCustomer(\n    $email: String!,\n    $password: String!,\n    $firstname: String!,\n    $lastname: String!,\n  ) {\n    createCustomer(input: {\n      firstname: $firstname,\n      lastname: $lastname,\n      email: $email,\n      password: $password\n    })\n  }\n"], ["\n  mutation CreateCustomer(\n    $email: String!,\n    $password: String!,\n    $firstname: String!,\n    $lastname: String!,\n  ) {\n    createCustomer(input: {\n      firstname: $firstname,\n      lastname: $lastname,\n      email: $email,\n      password: $password\n    })\n  }\n"])));
var templateObject_1$1;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var generateTokenMutation = gql(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  mutation GenerateToken($email: String!, $password: String!) {\n    generateCustomerToken(\n      email: $email,\n      password: $password\n    ) {\n      token\n    }\n  }\n"], ["\n  mutation GenerateToken($email: String!, $password: String!) {\n    generateCustomerToken(\n      email: $email,\n      password: $password\n    ) {\n      token\n    }\n  }\n"])));
var templateObject_1$2;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var revokeCustomerTokenMutation = gql(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  mutation revokeCustomerToken {\n    revokeCustomerToken {\n      result\n    }\n  }\n"], ["\n  mutation revokeCustomerToken {\n    revokeCustomerToken {\n      result\n    }\n  }\n"])));
var templateObject_1$3;

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
var MagentoAuthGraphQlErrorCode = {
    UNAUTHORIZED: 'graphql-authorization',
    AUTHENTICATION_FAILED: 'graphql-authentication',
    BAD_INPUT: 'graphql-input',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffUnauthorizedError = /** @class */ (function (_super) {
    __extends(DaffUnauthorizedError, _super);
    function DaffUnauthorizedError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTH_UNAUTHORIZED';
        return _this;
    }
    return DaffUnauthorizedError;
}(DaffInheritableError));
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
var DaffAuthenticationFailedError = /** @class */ (function (_super) {
    __extends(DaffAuthenticationFailedError, _super);
    function DaffAuthenticationFailedError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTH_AUTHENTICATION_FAILED';
        return _this;
    }
    return DaffAuthenticationFailedError;
}(DaffInheritableError));
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
var DaffAuthInvalidAPIResponseError = /** @class */ (function (_super) {
    __extends(DaffAuthInvalidAPIResponseError, _super);
    function DaffAuthInvalidAPIResponseError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = 'DAFF_AUTH_INVALID_API_RESPONSE';
        return _this;
    }
    return DaffAuthInvalidAPIResponseError;
}(DaffInheritableError));
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

var _a;
/** @type {?} */
var DaffAuthMagentoErrorMap = (_a = {},
    _a[MagentoAuthGraphQlErrorCode.UNAUTHORIZED] = DaffUnauthorizedError,
    _a[MagentoAuthGraphQlErrorCode.AUTHENTICATION_FAILED] = DaffAuthenticationFailedError,
    _a[MagentoAuthGraphQlErrorCode.BAD_INPUT] = DaffBadInputError,
    _a);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var transformMagentoAuthError = (/**
 * @param {?} error
 * @return {?}
 */
function (error) {
    return daffTransformMagentoError(error, DaffAuthMagentoErrorMap);
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoRegisterService = /** @class */ (function () {
    function DaffMagentoRegisterService(apollo, loginInfoTransformer) {
        this.apollo = apollo;
        this.loginInfoTransformer = loginInfoTransformer;
    }
    /**
     * @param {?} registration
     * @return {?}
     */
    DaffMagentoRegisterService.prototype.register = /**
     * @param {?} registration
     * @return {?}
     */
    function (registration) {
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
        function (err) { return throwError(transformMagentoAuthError(err)); })));
    };
    DaffMagentoRegisterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoRegisterService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffMagentoLoginInfoTransformerService }
    ]; };
    /** @nocollapse */ DaffMagentoRegisterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoRegisterService_Factory() { return new DaffMagentoRegisterService(ɵɵinject(Apollo), ɵɵinject(DaffMagentoLoginInfoTransformerService)); }, token: DaffMagentoRegisterService, providedIn: "root" });
    return DaffMagentoRegisterService;
}());
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
var DaffMagentoAuthTransformerService = /** @class */ (function () {
    function DaffMagentoAuthTransformerService() {
    }
    /**
     * Transforms the magento AuthNode from the magento auth query into a DaffAuthToken.
     * @param auth the auth from a magento auth query.
     */
    /**
     * Transforms the magento AuthNode from the magento auth query into a DaffAuthToken.
     * @param {?} auth the auth from a magento auth query.
     * @return {?}
     */
    DaffMagentoAuthTransformerService.prototype.transform = /**
     * Transforms the magento AuthNode from the magento auth query into a DaffAuthToken.
     * @param {?} auth the auth from a magento auth query.
     * @return {?}
     */
    function (auth) {
        return {
            token: auth.token
        };
    };
    DaffMagentoAuthTransformerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoAuthTransformerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoAuthTransformerService_Factory() { return new DaffMagentoAuthTransformerService(); }, token: DaffMagentoAuthTransformerService, providedIn: "root" });
    return DaffMagentoAuthTransformerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var validateCheckTokenResponse = (/**
 * @param {?} response
 * @return {?}
 */
function (response) {
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
var validateGenerateTokenResponse = (/**
 * @param {?} response
 * @return {?}
 */
function (response) {
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
var validateRevokeTokenResponse = (/**
 * @param {?} response
 * @return {?}
 */
function (response) {
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
var DaffMagentoLoginService = /** @class */ (function () {
    function DaffMagentoLoginService(apollo, authTransformer) {
        this.apollo = apollo;
        this.authTransformer = authTransformer;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    DaffMagentoLoginService.prototype.login = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var email = _a.email, password = _a.password;
        return this.apollo.mutate({
            mutation: generateTokenMutation,
            variables: {
                email: email,
                password: password
            }
        }).pipe(map(validateGenerateTokenResponse), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.authTransformer.transform(res.data.generateCustomerToken); })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformMagentoAuthError(err)); })));
    };
    /**
     * @return {?}
     */
    DaffMagentoLoginService.prototype.logout = /**
     * @return {?}
     */
    function () {
        return this.apollo.mutate({ mutation: revokeCustomerTokenMutation }).pipe(map(validateRevokeTokenResponse), mapTo(undefined), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformMagentoAuthError(err)); })));
    };
    DaffMagentoLoginService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoLoginService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffMagentoAuthTransformerService }
    ]; };
    /** @nocollapse */ DaffMagentoLoginService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoLoginService_Factory() { return new DaffMagentoLoginService(ɵɵinject(Apollo), ɵɵinject(DaffMagentoAuthTransformerService)); }, token: DaffMagentoLoginService, providedIn: "root" });
    return DaffMagentoLoginService;
}());
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
var DaffMagentoAuthService = /** @class */ (function () {
    function DaffMagentoAuthService(apollo) {
        this.apollo = apollo;
    }
    /**
     * @return {?}
     */
    DaffMagentoAuthService.prototype.check = /**
     * @return {?}
     */
    function () {
        return this.apollo.query({ query: checkTokenQuery }).pipe(map(validateCheckTokenResponse), mapTo(undefined), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformMagentoAuthError(err)); })));
    };
    DaffMagentoAuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoAuthService.ctorParameters = function () { return [
        { type: Apollo }
    ]; };
    /** @nocollapse */ DaffMagentoAuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoAuthService_Factory() { return new DaffMagentoAuthService(ɵɵinject(Apollo)); }, token: DaffMagentoAuthService, providedIn: "root" });
    return DaffMagentoAuthService;
}());
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
var DaffAuthMagentoDriverModule = /** @class */ (function () {
    function DaffAuthMagentoDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffAuthMagentoDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
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
    };
    DaffAuthMagentoDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffAuthMagentoDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MemberOnlyGuard = /** @class */ (function () {
    function MemberOnlyGuard(facade, actions$) {
        this.facade = facade;
        this.actions$ = actions$;
    }
    /**
     * @return {?}
     */
    MemberOnlyGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ret = this.isAuthenticated();
        this.facade.dispatch(new DaffAuthGuardCheck());
        return ret;
    };
    /**
     * @return {?}
     */
    MemberOnlyGuard.prototype.isAuthenticated = /**
     * @return {?}
     */
    function () {
        return this.actions$.pipe(ofType(DaffAuthActionTypes.AuthGuardCheckCompletionAction), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.result; })));
    };
    MemberOnlyGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    MemberOnlyGuard.ctorParameters = function () { return [
        { type: DaffAuthFacade },
        { type: Actions }
    ]; };
    /** @nocollapse */ MemberOnlyGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function MemberOnlyGuard_Factory() { return new MemberOnlyGuard(ɵɵinject(DaffAuthFacade), ɵɵinject(Actions)); }, token: MemberOnlyGuard, providedIn: "root" });
    return MemberOnlyGuard;
}());
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
var GuestOnlyGuard = /** @class */ (function () {
    function GuestOnlyGuard(facade, memberOnlyGuard) {
        this.facade = facade;
        this.memberOnlyGuard = memberOnlyGuard;
    }
    /**
     * @return {?}
     */
    GuestOnlyGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ret = this.isUnauthenticated();
        this.facade.dispatch(new DaffAuthGuardCheck());
        return ret;
    };
    /**
     * @return {?}
     */
    GuestOnlyGuard.prototype.isUnauthenticated = /**
     * @return {?}
     */
    function () {
        return this.memberOnlyGuard.isAuthenticated().pipe(map((/**
         * @param {?} authenticated
         * @return {?}
         */
        function (authenticated) { return !authenticated; })));
    };
    GuestOnlyGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    GuestOnlyGuard.ctorParameters = function () { return [
        { type: DaffAuthFacade },
        { type: MemberOnlyGuard }
    ]; };
    /** @nocollapse */ GuestOnlyGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function GuestOnlyGuard_Factory() { return new GuestOnlyGuard(ɵɵinject(DaffAuthFacade), ɵɵinject(MemberOnlyGuard)); }, token: GuestOnlyGuard, providedIn: "root" });
    return GuestOnlyGuard;
}());
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
