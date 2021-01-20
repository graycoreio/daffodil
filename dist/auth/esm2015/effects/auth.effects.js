/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mapTo, tap, switchMapTo } from 'rxjs/operators';
import { of, Observable, EMPTY } from 'rxjs';
import { DaffAuthActionTypes, DaffAuthLogin, DaffAuthLoginSuccess, DaffAuthLoginFailure, DaffAuthRegisterSuccess, DaffAuthRegisterFailure, DaffAuthCheckSuccess, DaffAuthCheckFailure, DaffAuthLogoutSuccess, DaffAuthLogoutFailure, DaffAuthGuardCheckCompletion, DaffAuthStorageFailure } from '../actions/auth.actions';
import { DaffRegisterDriver } from '../drivers/interfaces/register-service.interface';
import { DaffLoginDriver } from '../drivers/interfaces/login-service.interface';
import { DaffAuthDriver } from '../drivers/interfaces/auth-service.interface';
import { DaffAuthStorageService } from '../storage/auth-storage.service';
/**
 * @template T, U, S
 */
export class DaffAuthEffects {
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
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], DaffAuthEffects.prototype, "check$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], DaffAuthEffects.prototype, "login$", void 0);
tslib_1.__decorate([
    Effect({
        dispatch: false
    }),
    tslib_1.__metadata("design:type", Object)
], DaffAuthEffects.prototype, "storeAuthToken$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], DaffAuthEffects.prototype, "logout$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], DaffAuthEffects.prototype, "loginAfterRegister$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], DaffAuthEffects.prototype, "register$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvIiwic291cmNlcyI6WyJlZmZlY3RzL2F1dGguZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRixPQUFPLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0MsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUVwQix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQixvQkFBb0IsRUFFcEIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUVyQiw0QkFBNEIsRUFFNUIsc0JBQXNCLEVBQ3ZCLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGtCQUFrQixFQUFnQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ3BILE9BQU8sRUFBRSxlQUFlLEVBQTZCLE1BQU0sK0NBQStDLENBQUM7QUFJM0csT0FBTyxFQUFFLGNBQWMsRUFBNEIsTUFBTSw4Q0FBOEMsQ0FBQztBQUN4RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7OztBQUd6RSxNQUFNLE9BQU8sZUFBZTs7Ozs7Ozs7SUFLMUIsWUFDVSxRQUFpQixFQUNXLGNBQWtELEVBQ3JELFdBQTRDLEVBQzdDLFVBQW9DLEVBQzVELE9BQStCO1FBSi9CLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDVyxtQkFB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QyxNQUFNLEVBQUU7c0NBQ0csVUFBVTtrREFZckI7QUFHRDtJQURDLE1BQU0sRUFBRTtzQ0FDSSxVQUFVO29EQVV0Qjs7O0lBckZELGlDQVdDOztJQUVELGlDQWFDOztJQUVELDBDQVVDOztJQUVELGtDQVdDOztJQUVELDhDQUlDOztJQUVELG9DQWFDOztJQUVELHNDQVdDOzs7OztJQTVGQyxtQ0FBeUI7Ozs7O0lBQ3pCLHlDQUFzRjs7Ozs7SUFDdEYsc0NBQTZFOzs7OztJQUM3RSxxQ0FBb0U7Ozs7O0lBQ3BFLGtDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yLCBtYXBUbywgdGFwLCBzd2l0Y2hNYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlLCBFTVBUWSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBEYWZmQXV0aEFjdGlvblR5cGVzLFxuICBEYWZmQXV0aExvZ2luLFxuICBEYWZmQXV0aExvZ2luU3VjY2VzcyxcbiAgRGFmZkF1dGhMb2dpbkZhaWx1cmUsXG4gIERhZmZBdXRoUmVnaXN0ZXIsXG4gIERhZmZBdXRoUmVnaXN0ZXJTdWNjZXNzLFxuICBEYWZmQXV0aFJlZ2lzdGVyRmFpbHVyZSxcbiAgRGFmZkF1dGhDaGVja1N1Y2Nlc3MsXG4gIERhZmZBdXRoQ2hlY2tGYWlsdXJlLFxuICBEYWZmQXV0aENoZWNrLFxuICBEYWZmQXV0aExvZ291dFN1Y2Nlc3MsXG4gIERhZmZBdXRoTG9nb3V0RmFpbHVyZSxcbiAgRGFmZkF1dGhMb2dvdXQsXG4gIERhZmZBdXRoR3VhcmRDaGVja0NvbXBsZXRpb24sXG4gIERhZmZBdXRoR3VhcmRDaGVjayxcbiAgRGFmZkF1dGhTdG9yYWdlRmFpbHVyZVxufSBmcm9tICcuLi9hY3Rpb25zL2F1dGguYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmUmVnaXN0ZXJEcml2ZXIsIERhZmZSZWdpc3RlclNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICcuLi9kcml2ZXJzL2ludGVyZmFjZXMvcmVnaXN0ZXItc2VydmljZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkxvZ2luRHJpdmVyLCBEYWZmTG9naW5TZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnLi4vZHJpdmVycy9pbnRlcmZhY2VzL2xvZ2luLXNlcnZpY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZBdXRoVG9rZW4gfSBmcm9tICcuLi9tb2RlbHMvYXV0aC10b2tlbic7XG5pbXBvcnQgeyBEYWZmQWNjb3VudFJlZ2lzdHJhdGlvbiB9IGZyb20gJy4uL21vZGVscy9hY2NvdW50LXJlZ2lzdHJhdGlvbic7XG5pbXBvcnQgeyBEYWZmTG9naW5JbmZvIH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLWluZm8nO1xuaW1wb3J0IHsgRGFmZkF1dGhEcml2ZXIsIERhZmZBdXRoU2VydmljZUludGVyZmFjZSB9IGZyb20gJy4uL2RyaXZlcnMvaW50ZXJmYWNlcy9hdXRoLXNlcnZpY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZBdXRoU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9zdG9yYWdlL2F1dGgtc3RvcmFnZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhZmZBdXRoRWZmZWN0czxcbiAgVCBleHRlbmRzIERhZmZMb2dpbkluZm8sXG4gIFUgZXh0ZW5kcyBEYWZmQXV0aFRva2VuLFxuICBTIGV4dGVuZHMgRGFmZkFjY291bnRSZWdpc3RyYXRpb24sXG4+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERhZmZSZWdpc3RlckRyaXZlcikgcHJpdmF0ZSByZWdpc3RlckRyaXZlcjogRGFmZlJlZ2lzdGVyU2VydmljZUludGVyZmFjZTxTLCBUPixcbiAgICBASW5qZWN0KERhZmZMb2dpbkRyaXZlcikgcHJpdmF0ZSBsb2dpbkRyaXZlcjogRGFmZkxvZ2luU2VydmljZUludGVyZmFjZTxULCBVPixcbiAgICBASW5qZWN0KERhZmZBdXRoRHJpdmVyKSBwcml2YXRlIGF1dGhEcml2ZXI6IERhZmZBdXRoU2VydmljZUludGVyZmFjZSxcbiAgICBwcml2YXRlIHN0b3JhZ2U6IERhZmZBdXRoU3RvcmFnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBjaGVjayQgOiBPYnNlcnZhYmxlPERhZmZBdXRoQ2hlY2tTdWNjZXNzIHwgRGFmZkF1dGhDaGVja0ZhaWx1cmU+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhDaGVja0FjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZBdXRoQ2hlY2spID0+XG4gICAgICB0aGlzLmNoZWNrVG9rZW4oKS5waXBlKFxuICAgICAgICBtYXBUbyhuZXcgRGFmZkF1dGhDaGVja1N1Y2Nlc3MoKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgRGFmZkF1dGhDaGVja0ZhaWx1cmUoJ0F1dGggdG9rZW4gaXMgbm90IHZhbGlkJykpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcblxuICBARWZmZWN0KClcbiAgbG9naW4kIDogT2JzZXJ2YWJsZTxEYWZmQXV0aExvZ2luU3VjY2VzczxVPiB8IERhZmZBdXRoTG9naW5GYWlsdXJlPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoTG9naW5BY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQXV0aExvZ2luPFQ+KSA9PlxuICAgICAgdGhpcy5sb2dpbkRyaXZlci5sb2dpbihhY3Rpb24ubG9naW5JbmZvKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3ApID0+XG4gICAgICAgICAgbmV3IERhZmZBdXRoTG9naW5TdWNjZXNzPFU+KHJlc3ApXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgRGFmZkF1dGhMb2dpbkZhaWx1cmUoJ0ZhaWxlZCB0byBsb2cgaW4nKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxuXG4gIEBFZmZlY3Qoe1xuICAgIGRpc3BhdGNoOiBmYWxzZVxuICB9KVxuICBzdG9yZUF1dGhUb2tlbiQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZBdXRoQWN0aW9uVHlwZXMuQXV0aExvZ2luU3VjY2Vzc0FjdGlvbiksXG4gICAgdGFwKChhY3Rpb246IERhZmZBdXRoTG9naW5TdWNjZXNzPFU+KSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2Uuc2V0QXV0aFRva2VuKGFjdGlvbi5hdXRoLnRva2VuKVxuICAgIH0pLFxuICAgIHN3aXRjaE1hcFRvKEVNUFRZKSxcbiAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBEYWZmQXV0aFN0b3JhZ2VGYWlsdXJlKCdTdG9yYWdlIG9mIGF1dGggdG9rZW4gaGFzIGZhaWxlZC4nKSkpXG4gIClcblxuICBARWZmZWN0KClcbiAgbG9nb3V0JCA6IE9ic2VydmFibGU8RGFmZkF1dGhMb2dvdXRTdWNjZXNzIHwgRGFmZkF1dGhMb2dvdXRGYWlsdXJlPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoTG9nb3V0QWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkF1dGhMb2dvdXQpID0+XG4gICAgICB0aGlzLmxvZ2luRHJpdmVyLmxvZ291dCgpLnBpcGUoXG4gICAgICAgIG1hcFRvKG5ldyBEYWZmQXV0aExvZ291dFN1Y2Nlc3MoKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgRGFmZkF1dGhMb2dvdXRGYWlsdXJlKCdGYWlsZWQgdG8gbG9nIG91dCcpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG5cbiAgQEVmZmVjdCgpXG4gIGxvZ2luQWZ0ZXJSZWdpc3RlciQ6IE9ic2VydmFibGU8RGFmZkF1dGhMb2dpbjxUPj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZBdXRoQWN0aW9uVHlwZXMuQXV0aFJlZ2lzdGVyU3VjY2Vzc0FjdGlvbiksXG4gICAgbWFwKChhY3Rpb246IERhZmZBdXRoUmVnaXN0ZXJTdWNjZXNzPFQ+KSA9PiBuZXcgRGFmZkF1dGhMb2dpbihhY3Rpb24ubG9naW5JbmZvKSlcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICByZWdpc3RlciQgOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZBdXRoQWN0aW9uVHlwZXMuQXV0aFJlZ2lzdGVyQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkF1dGhSZWdpc3RlcjxTPikgPT5cbiAgICAgIHRoaXMucmVnaXN0ZXJEcml2ZXIucmVnaXN0ZXIoYWN0aW9uLnJlZ2lzdHJhdGlvbikucGlwZShcbiAgICAgICAgbWFwKChyZXNwKSA9PlxuICAgICAgICAgIG5ldyBEYWZmQXV0aFJlZ2lzdGVyU3VjY2VzczxUPihyZXNwKVxuICAgICAgICApLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IERhZmZBdXRoUmVnaXN0ZXJGYWlsdXJlKCdGYWlsZWQgdG8gcmVnaXN0ZXIgYSBuZXcgdXNlcicpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG5cbiAgQEVmZmVjdCgpXG4gIGd1YXJkQ2hlY2skOiBPYnNlcnZhYmxlPERhZmZBdXRoR3VhcmRDaGVja0NvbXBsZXRpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhHdWFyZENoZWNrQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkF1dGhHdWFyZENoZWNrKSA9PlxuICAgICAgdGhpcy5jaGVja1Rva2VuKCkucGlwZShcbiAgICAgICAgbWFwVG8obmV3IERhZmZBdXRoR3VhcmRDaGVja0NvbXBsZXRpb24odHJ1ZSkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IERhZmZBdXRoR3VhcmRDaGVja0NvbXBsZXRpb24oZmFsc2UpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG5cbiAgcHJpdmF0ZSBjaGVja1Rva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmF1dGhEcml2ZXIuY2hlY2soKVxuICB9XG59XG4iXX0=