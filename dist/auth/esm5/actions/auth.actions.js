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
export { DaffAuthActionTypes };
/**
 * An action triggered by guards to initialize an auth check request.
 */
var /**
 * An action triggered by guards to initialize an auth check request.
 */
DaffAuthGuardCheck = /** @class */ (function () {
    function DaffAuthGuardCheck() {
        this.type = DaffAuthActionTypes.AuthGuardCheckAction;
    }
    return DaffAuthGuardCheck;
}());
/**
 * An action triggered by guards to initialize an auth check request.
 */
export { DaffAuthGuardCheck };
if (false) {
    /** @type {?} */
    DaffAuthGuardCheck.prototype.type;
}
/**
 * An action triggered on the completion of a guard token check.
 */
var /**
 * An action triggered on the completion of a guard token check.
 */
DaffAuthGuardCheckCompletion = /** @class */ (function () {
    function DaffAuthGuardCheckCompletion(result) {
        this.result = result;
        this.type = DaffAuthActionTypes.AuthGuardCheckCompletionAction;
    }
    return DaffAuthGuardCheckCompletion;
}());
/**
 * An action triggered on the completion of a guard token check.
 */
export { DaffAuthGuardCheckCompletion };
if (false) {
    /** @type {?} */
    DaffAuthGuardCheckCompletion.prototype.type;
    /** @type {?} */
    DaffAuthGuardCheckCompletion.prototype.result;
}
/*
 * An action triggered upon a failed auth storage operation.
 */
var /*
 * An action triggered upon a failed auth storage operation.
 */
DaffAuthStorageFailure = /** @class */ (function () {
    function DaffAuthStorageFailure(errorMessage) {
        this.errorMessage = errorMessage;
        this.type = DaffAuthActionTypes.AuthStorageFailureAction;
    }
    return DaffAuthStorageFailure;
}());
/*
 * An action triggered upon a failed auth storage operation.
 */
export { DaffAuthStorageFailure };
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
var /**
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
/**
 * An action triggered to initialize a auth login request.
 * @template T
 */
export { DaffAuthLogin };
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
var /**
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
/**
 * An action triggered upon a successful auth login.
 *
 * @param token - the customer access token
 * @template T
 */
export { DaffAuthLoginSuccess };
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
var /**
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
/**
 * An action triggered upon a failed auth login request.
 *
 * @param errorMessage - an error message
 */
export { DaffAuthLoginFailure };
if (false) {
    /** @type {?} */
    DaffAuthLoginFailure.prototype.type;
    /** @type {?} */
    DaffAuthLoginFailure.prototype.errorMessage;
}
/**
 * An action triggered to initialize a logout request.
 */
var /**
 * An action triggered to initialize a logout request.
 */
DaffAuthLogout = /** @class */ (function () {
    function DaffAuthLogout() {
        this.type = DaffAuthActionTypes.AuthLogoutAction;
    }
    return DaffAuthLogout;
}());
/**
 * An action triggered to initialize a logout request.
 */
export { DaffAuthLogout };
if (false) {
    /** @type {?} */
    DaffAuthLogout.prototype.type;
}
/**
 * An action triggered upon a successful logout.
 *
 * @param token - the customer access token
 */
var /**
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
/**
 * An action triggered upon a successful logout.
 *
 * @param token - the customer access token
 */
export { DaffAuthLogoutSuccess };
if (false) {
    /** @type {?} */
    DaffAuthLogoutSuccess.prototype.type;
}
/**
 * An action triggered upon a failed logout request.
 *
 * @param errorMessage - an error message
 */
var /**
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
/**
 * An action triggered upon a failed logout request.
 *
 * @param errorMessage - an error message
 */
export { DaffAuthLogoutFailure };
if (false) {
    /** @type {?} */
    DaffAuthLogoutFailure.prototype.type;
    /** @type {?} */
    DaffAuthLogoutFailure.prototype.errorMessage;
}
/**
 * An action triggered to initialize an auth check request.
 */
var /**
 * An action triggered to initialize an auth check request.
 */
DaffAuthCheck = /** @class */ (function () {
    function DaffAuthCheck() {
        this.type = DaffAuthActionTypes.AuthCheckAction;
    }
    return DaffAuthCheck;
}());
/**
 * An action triggered to initialize an auth check request.
 */
export { DaffAuthCheck };
if (false) {
    /** @type {?} */
    DaffAuthCheck.prototype.type;
}
/**
 * An action triggered upon a successful auth check.
 *
 * @param token - the customer access token
 */
var /**
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
/**
 * An action triggered upon a successful auth check.
 *
 * @param token - the customer access token
 */
export { DaffAuthCheckSuccess };
if (false) {
    /** @type {?} */
    DaffAuthCheckSuccess.prototype.type;
}
/**
 * An action triggered upon a failed auth check request.
 *
 * @param errorMessage - an error message
 */
var /**
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
/**
 * An action triggered upon a failed auth check request.
 *
 * @param errorMessage - an error message
 */
export { DaffAuthCheckFailure };
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
var /**
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
/**
 * An action triggered to initialize a auth register request.
 *
 * @param registration
 * @template T
 */
export { DaffAuthRegister };
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
var /**
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
/**
 * An action triggered upon a successful auth register request.
 *
 * @param token - the customer access token
 * @template T
 */
export { DaffAuthRegisterSuccess };
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
var /**
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
/**
 * An action triggered upon a failed auth request.
 *
 * @param errorMessage - an error message
 */
export { DaffAuthRegisterFailure };
if (false) {
    /** @type {?} */
    DaffAuthRegisterFailure.prototype.type;
    /** @type {?} */
    DaffAuthRegisterFailure.prototype.errorMessage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvIiwic291cmNlcyI6WyJhY3Rpb25zL2F1dGguYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFPRSxzQkFBdUIscUNBQXFDO0lBQzVELGdDQUFpQyxnREFBZ0Q7SUFDakYsMEJBQTJCLHlDQUF5QztJQUNwRSxpQkFBa0IsK0JBQStCO0lBQ2pELHdCQUF5Qix1Q0FBdUM7SUFDaEUsd0JBQXlCLHVDQUF1QztJQUNoRSxrQkFBbUIsZ0NBQWdDO0lBQ25ELHlCQUEwQix3Q0FBd0M7SUFDbEUseUJBQTBCLHdDQUF3QztJQUNsRSxpQkFBa0IsK0JBQStCO0lBQ2pELHdCQUF5Qix1Q0FBdUM7SUFDaEUsd0JBQXlCLHVDQUF1QztJQUNoRSxvQkFBcUIsa0NBQWtDO0lBQ3ZELDJCQUE0QiwwQ0FBMEM7SUFDdEUsMkJBQTRCLDBDQUEwQzs7Ozs7O0FBTXhFOzs7O0lBQUE7UUFDVyxTQUFJLEdBQUcsbUJBQW1CLENBQUMsb0JBQW9CLENBQUM7SUFDM0QsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7Ozs7SUFEQyxrQ0FBeUQ7Ozs7O0FBTTNEOzs7O0lBR0Usc0NBQW1CLE1BQWU7UUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBRnpCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQztJQUU5QixDQUFDO0lBQ3hDLG1DQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQyw0Q0FBbUU7O0lBRXZELDhDQUFzQjs7Ozs7QUFNcEM7Ozs7SUFHRSxnQ0FBbUIsWUFBb0I7UUFBcEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFGOUIsU0FBSSxHQUFHLG1CQUFtQixDQUFDLHdCQUF3QixDQUFDO0lBRW5CLENBQUM7SUFDN0MsNkJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLHNDQUE2RDs7SUFFakQsOENBQTJC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RyxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQztJQUVwQixDQUFDO0lBQzdDLDhCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7OztJQUhDLHVDQUE4RDs7SUFFbEQsK0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmTG9naW5JbmZvIH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLWluZm8nO1xuaW1wb3J0IHsgRGFmZkF1dGhUb2tlbiB9IGZyb20gJy4uL21vZGVscy9hdXRoLXRva2VuJztcbmltcG9ydCB7IERhZmZBY2NvdW50UmVnaXN0cmF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2FjY291bnQtcmVnaXN0cmF0aW9uJztcblxuZXhwb3J0IGVudW0gRGFmZkF1dGhBY3Rpb25UeXBlcyB7XG4gIEF1dGhHdWFyZENoZWNrQWN0aW9uID0gJ1tEYWZmLUF1dGhdIEF1dGggR3VhcmQgQ2hlY2sgQWN0aW9uJyxcbiAgQXV0aEd1YXJkQ2hlY2tDb21wbGV0aW9uQWN0aW9uID0gJ1tEYWZmLUF1dGhdIEF1dGggR3VhcmQgQ2hlY2sgQ29tcGxldGlvbiBBY3Rpb24nLFxuICBBdXRoU3RvcmFnZUZhaWx1cmVBY3Rpb24gPSAnW0RhZmYtQXV0aF0gQXV0aCBTdG9yYWdlIEZhaWx1cmUgQWN0aW9uJyxcbiAgQXV0aExvZ2luQWN0aW9uID0gJ1tEYWZmLUF1dGhdIEF1dGggTG9naW4gQWN0aW9uJyxcbiAgQXV0aExvZ2luU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIExvZ2luIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQXV0aExvZ2luRmFpbHVyZUFjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIExvZ2luIEZhaWx1cmUgQWN0aW9uJyxcbiAgQXV0aExvZ291dEFjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIExvZ291dCBBY3Rpb24nLFxuICBBdXRoTG9nb3V0U3VjY2Vzc0FjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIExvZ291dCBTdWNjZXNzIEFjdGlvbicsXG4gIEF1dGhMb2dvdXRGYWlsdXJlQWN0aW9uID0gJ1tEYWZmLUF1dGhdIEF1dGggTG9nb3V0IEZhaWx1cmUgQWN0aW9uJyxcbiAgQXV0aENoZWNrQWN0aW9uID0gJ1tEYWZmLUF1dGhdIEF1dGggQ2hlY2sgQWN0aW9uJyxcbiAgQXV0aENoZWNrU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIENoZWNrIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQXV0aENoZWNrRmFpbHVyZUFjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIENoZWNrIEZhaWx1cmUgQWN0aW9uJyxcbiAgQXV0aFJlZ2lzdGVyQWN0aW9uID0gJ1tEYWZmLUF1dGhdIEF1dGggUmVnaXN0ZXIgQWN0aW9uJyxcbiAgQXV0aFJlZ2lzdGVyU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIFJlZ2lzdGVyIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQXV0aFJlZ2lzdGVyRmFpbHVyZUFjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIFJlZ2lzdGVyIEZhaWx1cmUgQWN0aW9uJyxcbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIGJ5IGd1YXJkcyB0byBpbml0aWFsaXplIGFuIGF1dGggY2hlY2sgcmVxdWVzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZBdXRoR3VhcmRDaGVjayBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhHdWFyZENoZWNrQWN0aW9uO1xufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgb24gdGhlIGNvbXBsZXRpb24gb2YgYSBndWFyZCB0b2tlbiBjaGVjay5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZBdXRoR3VhcmRDaGVja0NvbXBsZXRpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoR3VhcmRDaGVja0NvbXBsZXRpb25BY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlc3VsdDogYm9vbGVhbikge31cbn1cblxuLypcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgdXBvbiBhIGZhaWxlZCBhdXRoIHN0b3JhZ2Ugb3BlcmF0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhTdG9yYWdlRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhTdG9yYWdlRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZXJyb3JNZXNzYWdlOiBzdHJpbmcpIHt9XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIHRyaWdnZXJlZCB0byBpbml0aWFsaXplIGEgYXV0aCBsb2dpbiByZXF1ZXN0LlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhMb2dpbjxUIGV4dGVuZHMgRGFmZkxvZ2luSW5mbz4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoTG9naW5BY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxvZ2luSW5mbzogVCkge31cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIHVwb24gYSBzdWNjZXNzZnVsIGF1dGggbG9naW4uXG4gKlxuICogQHBhcmFtIHRva2VuIC0gdGhlIGN1c3RvbWVyIGFjY2VzcyB0b2tlblxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhMb2dpblN1Y2Nlc3M8VCBleHRlbmRzIERhZmZBdXRoVG9rZW4+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZBdXRoQWN0aW9uVHlwZXMuQXV0aExvZ2luU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aDogVCkge31cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIHVwb24gYSBmYWlsZWQgYXV0aCBsb2dpbiByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSBlcnJvck1lc3NhZ2UgLSBhbiBlcnJvciBtZXNzYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQXV0aExvZ2luRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhMb2dpbkZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nKSB7fVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgdG8gaW5pdGlhbGl6ZSBhIGxvZ291dCByZXF1ZXN0LlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhMb2dvdXQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoTG9nb3V0QWN0aW9uO1xufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgdXBvbiBhIHN1Y2Nlc3NmdWwgbG9nb3V0LlxuICpcbiAqIEBwYXJhbSB0b2tlbiAtIHRoZSBjdXN0b21lciBhY2Nlc3MgdG9rZW5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZBdXRoTG9nb3V0U3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhMb2dvdXRTdWNjZXNzQWN0aW9uO1xufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgdXBvbiBhIGZhaWxlZCBsb2dvdXQgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gZXJyb3JNZXNzYWdlIC0gYW4gZXJyb3IgbWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhMb2dvdXRGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZBdXRoQWN0aW9uVHlwZXMuQXV0aExvZ291dEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nKSB7fVxufVxuXG5cbi8qKlxuICogQW4gYWN0aW9uIHRyaWdnZXJlZCB0byBpbml0aWFsaXplIGFuIGF1dGggY2hlY2sgcmVxdWVzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZBdXRoQ2hlY2sgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoQ2hlY2tBY3Rpb247XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIHRyaWdnZXJlZCB1cG9uIGEgc3VjY2Vzc2Z1bCBhdXRoIGNoZWNrLlxuICpcbiAqIEBwYXJhbSB0b2tlbiAtIHRoZSBjdXN0b21lciBhY2Nlc3MgdG9rZW5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZBdXRoQ2hlY2tTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZBdXRoQWN0aW9uVHlwZXMuQXV0aENoZWNrU3VjY2Vzc0FjdGlvbjtcbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIHVwb24gYSBmYWlsZWQgYXV0aCBjaGVjayByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSBlcnJvck1lc3NhZ2UgLSBhbiBlcnJvciBtZXNzYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQXV0aENoZWNrRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhDaGVja0ZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nKSB7fVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgdG8gaW5pdGlhbGl6ZSBhIGF1dGggcmVnaXN0ZXIgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gcmVnaXN0cmF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQXV0aFJlZ2lzdGVyPFQgZXh0ZW5kcyBEYWZmQWNjb3VudFJlZ2lzdHJhdGlvbj4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoUmVnaXN0ZXJBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlZ2lzdHJhdGlvbjogVCkge31cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIHVwb24gYSBzdWNjZXNzZnVsIGF1dGggcmVnaXN0ZXIgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gdG9rZW4gLSB0aGUgY3VzdG9tZXIgYWNjZXNzIHRva2VuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQXV0aFJlZ2lzdGVyU3VjY2VzczxUIGV4dGVuZHMgRGFmZkxvZ2luSW5mbz4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoUmVnaXN0ZXJTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2dpbkluZm86IFQpIHt9XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIHRyaWdnZXJlZCB1cG9uIGEgZmFpbGVkIGF1dGggcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gZXJyb3JNZXNzYWdlIC0gYW4gZXJyb3IgbWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhSZWdpc3RlckZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoUmVnaXN0ZXJGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlcnJvck1lc3NhZ2U6IHN0cmluZykge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkF1dGhBY3Rpb25zPFxuICBUIGV4dGVuZHMgRGFmZkxvZ2luSW5mbyxcbiAgVSBleHRlbmRzIERhZmZBdXRoVG9rZW4sXG4gIFMgZXh0ZW5kcyBEYWZmQWNjb3VudFJlZ2lzdHJhdGlvbixcbj4gPVxuICB8IERhZmZBdXRoR3VhcmRDaGVja0NvbXBsZXRpb25cbiAgfCBEYWZmQXV0aEd1YXJkQ2hlY2tcbiAgfCBEYWZmQXV0aFN0b3JhZ2VGYWlsdXJlXG4gIHwgRGFmZkF1dGhMb2dpbjxUPlxuICB8IERhZmZBdXRoTG9naW5TdWNjZXNzPFU+XG4gIHwgRGFmZkF1dGhMb2dpbkZhaWx1cmVcbiAgfCBEYWZmQXV0aExvZ291dFxuICB8IERhZmZBdXRoTG9nb3V0U3VjY2Vzc1xuICB8IERhZmZBdXRoTG9nb3V0RmFpbHVyZVxuICB8IERhZmZBdXRoQ2hlY2tcbiAgfCBEYWZmQXV0aENoZWNrU3VjY2Vzc1xuICB8IERhZmZBdXRoQ2hlY2tGYWlsdXJlXG4gIHwgRGFmZkF1dGhSZWdpc3RlcjxTPlxuICB8IERhZmZBdXRoUmVnaXN0ZXJTdWNjZXNzPFQ+XG4gIHwgRGFmZkF1dGhSZWdpc3RlckZhaWx1cmVcbiJdfQ==