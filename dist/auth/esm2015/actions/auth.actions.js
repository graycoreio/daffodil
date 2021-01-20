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
export { DaffAuthActionTypes };
/**
 * An action triggered by guards to initialize an auth check request.
 */
export class DaffAuthGuardCheck {
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
export class DaffAuthGuardCheckCompletion {
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
export class DaffAuthStorageFailure {
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
export class DaffAuthLogin {
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
export class DaffAuthLoginSuccess {
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
export class DaffAuthLoginFailure {
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
export class DaffAuthLogout {
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
export class DaffAuthLogoutSuccess {
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
export class DaffAuthLogoutFailure {
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
export class DaffAuthCheck {
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
export class DaffAuthCheckSuccess {
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
export class DaffAuthCheckFailure {
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
export class DaffAuthRegister {
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
export class DaffAuthRegisterSuccess {
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
export class DaffAuthRegisterFailure {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvIiwic291cmNlcyI6WyJhY3Rpb25zL2F1dGguYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFPRSxzQkFBdUIscUNBQXFDO0lBQzVELGdDQUFpQyxnREFBZ0Q7SUFDakYsMEJBQTJCLHlDQUF5QztJQUNwRSxpQkFBa0IsK0JBQStCO0lBQ2pELHdCQUF5Qix1Q0FBdUM7SUFDaEUsd0JBQXlCLHVDQUF1QztJQUNoRSxrQkFBbUIsZ0NBQWdDO0lBQ25ELHlCQUEwQix3Q0FBd0M7SUFDbEUseUJBQTBCLHdDQUF3QztJQUNsRSxpQkFBa0IsK0JBQStCO0lBQ2pELHdCQUF5Qix1Q0FBdUM7SUFDaEUsd0JBQXlCLHVDQUF1QztJQUNoRSxvQkFBcUIsa0NBQWtDO0lBQ3ZELDJCQUE0QiwwQ0FBMEM7SUFDdEUsMkJBQTRCLDBDQUEwQzs7Ozs7O0FBTXhFLE1BQU0sT0FBTyxrQkFBa0I7SUFBL0I7UUFDVyxTQUFJLEdBQUcsbUJBQW1CLENBQUMsb0JBQW9CLENBQUM7SUFDM0QsQ0FBQztDQUFBOzs7SUFEQyxrQ0FBeUQ7Ozs7O0FBTTNELE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFHdkMsWUFBbUIsTUFBZTtRQUFmLFdBQU0sR0FBTixNQUFNLENBQVM7UUFGekIsU0FBSSxHQUFHLG1CQUFtQixDQUFDLDhCQUE4QixDQUFDO0lBRTlCLENBQUM7Q0FDdkM7OztJQUhDLDRDQUFtRTs7SUFFdkQsOENBQXNCOzs7OztBQU1wQyxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBR2pDLFlBQW1CLFlBQW9CO1FBQXBCLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBRjlCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQztJQUVuQixDQUFDO0NBQzVDOzs7SUFIQyxzQ0FBNkQ7O0lBRWpELDhDQUEyQjs7Ozs7O0FBTXpDLE1BQU0sT0FBTyxhQUFhOzs7O0lBR3hCLFlBQW1CLFNBQVk7UUFBWixjQUFTLEdBQVQsU0FBUyxDQUFHO1FBRnRCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQyxlQUFlLENBQUM7SUFFbEIsQ0FBQztDQUNwQzs7O0lBSEMsNkJBQW9EOztJQUV4QyxrQ0FBbUI7Ozs7Ozs7O0FBUWpDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFHL0IsWUFBbUIsSUFBTztRQUFQLFNBQUksR0FBSixJQUFJLENBQUc7UUFGakIsU0FBSSxHQUFHLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDO0lBRTlCLENBQUM7Q0FDL0I7OztJQUhDLG9DQUEyRDs7SUFFL0Msb0NBQWM7Ozs7Ozs7QUFRNUIsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUcvQixZQUFtQixZQUFvQjtRQUFwQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUY5QixTQUFJLEdBQUcsbUJBQW1CLENBQUMsc0JBQXNCLENBQUM7SUFFakIsQ0FBQztDQUM1Qzs7O0lBSEMsb0NBQTJEOztJQUUvQyw0Q0FBMkI7Ozs7O0FBTXpDLE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ1csU0FBSSxHQUFHLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDO0lBQ3ZELENBQUM7Q0FBQTs7O0lBREMsOEJBQXFEOzs7Ozs7O0FBUXZELE1BQU0sT0FBTyxxQkFBcUI7SUFBbEM7UUFDVyxTQUFJLEdBQUcsbUJBQW1CLENBQUMsdUJBQXVCLENBQUM7SUFDOUQsQ0FBQztDQUFBOzs7SUFEQyxxQ0FBNEQ7Ozs7Ozs7QUFROUQsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUdoQyxZQUFtQixZQUFvQjtRQUFwQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUY5QixTQUFJLEdBQUcsbUJBQW1CLENBQUMsdUJBQXVCLENBQUM7SUFFbEIsQ0FBQztDQUM1Qzs7O0lBSEMscUNBQTREOztJQUVoRCw2Q0FBMkI7Ozs7O0FBT3pDLE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBQ1csU0FBSSxHQUFHLG1CQUFtQixDQUFDLGVBQWUsQ0FBQztJQUN0RCxDQUFDO0NBQUE7OztJQURDLDZCQUFvRDs7Ozs7OztBQVF0RCxNQUFNLE9BQU8sb0JBQW9CO0lBQWpDO1FBQ1csU0FBSSxHQUFHLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDO0lBQzdELENBQUM7Q0FBQTs7O0lBREMsb0NBQTJEOzs7Ozs7O0FBUTdELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFHL0IsWUFBbUIsWUFBb0I7UUFBcEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFGOUIsU0FBSSxHQUFHLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDO0lBRWpCLENBQUM7Q0FDNUM7OztJQUhDLG9DQUEyRDs7SUFFL0MsNENBQTJCOzs7Ozs7OztBQVF6QyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRzNCLFlBQW1CLFlBQWU7UUFBZixpQkFBWSxHQUFaLFlBQVksQ0FBRztRQUZ6QixTQUFJLEdBQUcsbUJBQW1CLENBQUMsa0JBQWtCLENBQUM7SUFFbEIsQ0FBQztDQUN2Qzs7O0lBSEMsZ0NBQXVEOztJQUUzQyx3Q0FBc0I7Ozs7Ozs7O0FBUXBDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFHbEMsWUFBbUIsU0FBWTtRQUFaLGNBQVMsR0FBVCxTQUFTLENBQUc7UUFGdEIsU0FBSSxHQUFHLG1CQUFtQixDQUFDLHlCQUF5QixDQUFDO0lBRTVCLENBQUM7Q0FDcEM7OztJQUhDLHVDQUE4RDs7SUFFbEQsNENBQW1COzs7Ozs7O0FBUWpDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFHbEMsWUFBbUIsWUFBb0I7UUFBcEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFGOUIsU0FBSSxHQUFHLG1CQUFtQixDQUFDLHlCQUF5QixDQUFDO0lBRXBCLENBQUM7Q0FDNUM7OztJQUhDLHVDQUE4RDs7SUFFbEQsK0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmTG9naW5JbmZvIH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLWluZm8nO1xuaW1wb3J0IHsgRGFmZkF1dGhUb2tlbiB9IGZyb20gJy4uL21vZGVscy9hdXRoLXRva2VuJztcbmltcG9ydCB7IERhZmZBY2NvdW50UmVnaXN0cmF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2FjY291bnQtcmVnaXN0cmF0aW9uJztcblxuZXhwb3J0IGVudW0gRGFmZkF1dGhBY3Rpb25UeXBlcyB7XG4gIEF1dGhHdWFyZENoZWNrQWN0aW9uID0gJ1tEYWZmLUF1dGhdIEF1dGggR3VhcmQgQ2hlY2sgQWN0aW9uJyxcbiAgQXV0aEd1YXJkQ2hlY2tDb21wbGV0aW9uQWN0aW9uID0gJ1tEYWZmLUF1dGhdIEF1dGggR3VhcmQgQ2hlY2sgQ29tcGxldGlvbiBBY3Rpb24nLFxuICBBdXRoU3RvcmFnZUZhaWx1cmVBY3Rpb24gPSAnW0RhZmYtQXV0aF0gQXV0aCBTdG9yYWdlIEZhaWx1cmUgQWN0aW9uJyxcbiAgQXV0aExvZ2luQWN0aW9uID0gJ1tEYWZmLUF1dGhdIEF1dGggTG9naW4gQWN0aW9uJyxcbiAgQXV0aExvZ2luU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIExvZ2luIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQXV0aExvZ2luRmFpbHVyZUFjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIExvZ2luIEZhaWx1cmUgQWN0aW9uJyxcbiAgQXV0aExvZ291dEFjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIExvZ291dCBBY3Rpb24nLFxuICBBdXRoTG9nb3V0U3VjY2Vzc0FjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIExvZ291dCBTdWNjZXNzIEFjdGlvbicsXG4gIEF1dGhMb2dvdXRGYWlsdXJlQWN0aW9uID0gJ1tEYWZmLUF1dGhdIEF1dGggTG9nb3V0IEZhaWx1cmUgQWN0aW9uJyxcbiAgQXV0aENoZWNrQWN0aW9uID0gJ1tEYWZmLUF1dGhdIEF1dGggQ2hlY2sgQWN0aW9uJyxcbiAgQXV0aENoZWNrU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIENoZWNrIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQXV0aENoZWNrRmFpbHVyZUFjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIENoZWNrIEZhaWx1cmUgQWN0aW9uJyxcbiAgQXV0aFJlZ2lzdGVyQWN0aW9uID0gJ1tEYWZmLUF1dGhdIEF1dGggUmVnaXN0ZXIgQWN0aW9uJyxcbiAgQXV0aFJlZ2lzdGVyU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIFJlZ2lzdGVyIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQXV0aFJlZ2lzdGVyRmFpbHVyZUFjdGlvbiA9ICdbRGFmZi1BdXRoXSBBdXRoIFJlZ2lzdGVyIEZhaWx1cmUgQWN0aW9uJyxcbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIGJ5IGd1YXJkcyB0byBpbml0aWFsaXplIGFuIGF1dGggY2hlY2sgcmVxdWVzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZBdXRoR3VhcmRDaGVjayBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhHdWFyZENoZWNrQWN0aW9uO1xufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgb24gdGhlIGNvbXBsZXRpb24gb2YgYSBndWFyZCB0b2tlbiBjaGVjay5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZBdXRoR3VhcmRDaGVja0NvbXBsZXRpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoR3VhcmRDaGVja0NvbXBsZXRpb25BY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlc3VsdDogYm9vbGVhbikge31cbn1cblxuLypcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgdXBvbiBhIGZhaWxlZCBhdXRoIHN0b3JhZ2Ugb3BlcmF0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhTdG9yYWdlRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhTdG9yYWdlRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZXJyb3JNZXNzYWdlOiBzdHJpbmcpIHt9XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIHRyaWdnZXJlZCB0byBpbml0aWFsaXplIGEgYXV0aCBsb2dpbiByZXF1ZXN0LlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhMb2dpbjxUIGV4dGVuZHMgRGFmZkxvZ2luSW5mbz4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoTG9naW5BY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxvZ2luSW5mbzogVCkge31cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIHVwb24gYSBzdWNjZXNzZnVsIGF1dGggbG9naW4uXG4gKlxuICogQHBhcmFtIHRva2VuIC0gdGhlIGN1c3RvbWVyIGFjY2VzcyB0b2tlblxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhMb2dpblN1Y2Nlc3M8VCBleHRlbmRzIERhZmZBdXRoVG9rZW4+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZBdXRoQWN0aW9uVHlwZXMuQXV0aExvZ2luU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aDogVCkge31cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIHVwb24gYSBmYWlsZWQgYXV0aCBsb2dpbiByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSBlcnJvck1lc3NhZ2UgLSBhbiBlcnJvciBtZXNzYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQXV0aExvZ2luRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhMb2dpbkZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nKSB7fVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgdG8gaW5pdGlhbGl6ZSBhIGxvZ291dCByZXF1ZXN0LlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhMb2dvdXQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoTG9nb3V0QWN0aW9uO1xufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgdXBvbiBhIHN1Y2Nlc3NmdWwgbG9nb3V0LlxuICpcbiAqIEBwYXJhbSB0b2tlbiAtIHRoZSBjdXN0b21lciBhY2Nlc3MgdG9rZW5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZBdXRoTG9nb3V0U3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhMb2dvdXRTdWNjZXNzQWN0aW9uO1xufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgdXBvbiBhIGZhaWxlZCBsb2dvdXQgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gZXJyb3JNZXNzYWdlIC0gYW4gZXJyb3IgbWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhMb2dvdXRGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZBdXRoQWN0aW9uVHlwZXMuQXV0aExvZ291dEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nKSB7fVxufVxuXG5cbi8qKlxuICogQW4gYWN0aW9uIHRyaWdnZXJlZCB0byBpbml0aWFsaXplIGFuIGF1dGggY2hlY2sgcmVxdWVzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZBdXRoQ2hlY2sgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoQ2hlY2tBY3Rpb247XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIHRyaWdnZXJlZCB1cG9uIGEgc3VjY2Vzc2Z1bCBhdXRoIGNoZWNrLlxuICpcbiAqIEBwYXJhbSB0b2tlbiAtIHRoZSBjdXN0b21lciBhY2Nlc3MgdG9rZW5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZBdXRoQ2hlY2tTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZBdXRoQWN0aW9uVHlwZXMuQXV0aENoZWNrU3VjY2Vzc0FjdGlvbjtcbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIHVwb24gYSBmYWlsZWQgYXV0aCBjaGVjayByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSBlcnJvck1lc3NhZ2UgLSBhbiBlcnJvciBtZXNzYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQXV0aENoZWNrRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhDaGVja0ZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nKSB7fVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgdG8gaW5pdGlhbGl6ZSBhIGF1dGggcmVnaXN0ZXIgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gcmVnaXN0cmF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQXV0aFJlZ2lzdGVyPFQgZXh0ZW5kcyBEYWZmQWNjb3VudFJlZ2lzdHJhdGlvbj4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoUmVnaXN0ZXJBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlZ2lzdHJhdGlvbjogVCkge31cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIHVwb24gYSBzdWNjZXNzZnVsIGF1dGggcmVnaXN0ZXIgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gdG9rZW4gLSB0aGUgY3VzdG9tZXIgYWNjZXNzIHRva2VuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQXV0aFJlZ2lzdGVyU3VjY2VzczxUIGV4dGVuZHMgRGFmZkxvZ2luSW5mbz4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoUmVnaXN0ZXJTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2dpbkluZm86IFQpIHt9XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIHRyaWdnZXJlZCB1cG9uIGEgZmFpbGVkIGF1dGggcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gZXJyb3JNZXNzYWdlIC0gYW4gZXJyb3IgbWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhSZWdpc3RlckZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoUmVnaXN0ZXJGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlcnJvck1lc3NhZ2U6IHN0cmluZykge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkF1dGhBY3Rpb25zPFxuICBUIGV4dGVuZHMgRGFmZkxvZ2luSW5mbyxcbiAgVSBleHRlbmRzIERhZmZBdXRoVG9rZW4sXG4gIFMgZXh0ZW5kcyBEYWZmQWNjb3VudFJlZ2lzdHJhdGlvbixcbj4gPVxuICB8IERhZmZBdXRoR3VhcmRDaGVja0NvbXBsZXRpb25cbiAgfCBEYWZmQXV0aEd1YXJkQ2hlY2tcbiAgfCBEYWZmQXV0aFN0b3JhZ2VGYWlsdXJlXG4gIHwgRGFmZkF1dGhMb2dpbjxUPlxuICB8IERhZmZBdXRoTG9naW5TdWNjZXNzPFU+XG4gIHwgRGFmZkF1dGhMb2dpbkZhaWx1cmVcbiAgfCBEYWZmQXV0aExvZ291dFxuICB8IERhZmZBdXRoTG9nb3V0U3VjY2Vzc1xuICB8IERhZmZBdXRoTG9nb3V0RmFpbHVyZVxuICB8IERhZmZBdXRoQ2hlY2tcbiAgfCBEYWZmQXV0aENoZWNrU3VjY2Vzc1xuICB8IERhZmZBdXRoQ2hlY2tGYWlsdXJlXG4gIHwgRGFmZkF1dGhSZWdpc3RlcjxTPlxuICB8IERhZmZBdXRoUmVnaXN0ZXJTdWNjZXNzPFQ+XG4gIHwgRGFmZkF1dGhSZWdpc3RlckZhaWx1cmVcbiJdfQ==