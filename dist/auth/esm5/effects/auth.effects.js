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
    return DaffAuthEffects;
}());
export { DaffAuthEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvIiwic291cmNlcyI6WyJlZmZlY3RzL2F1dGguZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRixPQUFPLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0MsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUVwQix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQixvQkFBb0IsRUFFcEIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUVyQiw0QkFBNEIsRUFFNUIsc0JBQXNCLEVBQ3ZCLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGtCQUFrQixFQUFnQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ3BILE9BQU8sRUFBRSxlQUFlLEVBQTZCLE1BQU0sK0NBQStDLENBQUM7QUFJM0csT0FBTyxFQUFFLGNBQWMsRUFBNEIsTUFBTSw4Q0FBOEMsQ0FBQztBQUN4RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7OztBQUV6RTtJQU1FLHlCQUNVLFFBQWlCLEVBQ1csY0FBa0QsRUFDckQsV0FBNEMsRUFDN0MsVUFBb0MsRUFDNUQsT0FBK0I7UUFMekMsaUJBTUk7UUFMTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ1csbUJBQWMsR0FBZCxjQUFj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QUUsS0FBSztTQUNoQixDQUFDOzs0REFRRDtJQUdEO1FBREMsTUFBTSxFQUFFOzBDQUNDLFVBQVU7b0RBVW5CO0lBR0Q7UUFEQyxNQUFNLEVBQUU7MENBQ1ksVUFBVTtnRUFHOUI7SUFHRDtRQURDLE1BQU0sRUFBRTswQ0FDRyxVQUFVO3NEQVlyQjtJQUdEO1FBREMsTUFBTSxFQUFFOzBDQUNJLFVBQVU7d0RBVXRCO0lBS0gsc0JBQUM7Q0FBQSxBQXhHRCxJQXdHQztTQXZHWSxlQUFlOzs7SUFhMUIsaUNBV0M7O0lBRUQsaUNBYUM7O0lBRUQsMENBVUM7O0lBRUQsa0NBV0M7O0lBRUQsOENBSUM7O0lBRUQsb0NBYUM7O0lBRUQsc0NBV0M7Ozs7O0lBNUZDLG1DQUF5Qjs7Ozs7SUFDekIseUNBQXNGOzs7OztJQUN0RixzQ0FBNkU7Ozs7O0lBQzdFLHFDQUFvRTs7Ozs7SUFDcEUsa0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IsIG1hcFRvLCB0YXAsIHN3aXRjaE1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIEVNUFRZIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIERhZmZBdXRoQWN0aW9uVHlwZXMsXG4gIERhZmZBdXRoTG9naW4sXG4gIERhZmZBdXRoTG9naW5TdWNjZXNzLFxuICBEYWZmQXV0aExvZ2luRmFpbHVyZSxcbiAgRGFmZkF1dGhSZWdpc3RlcixcbiAgRGFmZkF1dGhSZWdpc3RlclN1Y2Nlc3MsXG4gIERhZmZBdXRoUmVnaXN0ZXJGYWlsdXJlLFxuICBEYWZmQXV0aENoZWNrU3VjY2VzcyxcbiAgRGFmZkF1dGhDaGVja0ZhaWx1cmUsXG4gIERhZmZBdXRoQ2hlY2ssXG4gIERhZmZBdXRoTG9nb3V0U3VjY2VzcyxcbiAgRGFmZkF1dGhMb2dvdXRGYWlsdXJlLFxuICBEYWZmQXV0aExvZ291dCxcbiAgRGFmZkF1dGhHdWFyZENoZWNrQ29tcGxldGlvbixcbiAgRGFmZkF1dGhHdWFyZENoZWNrLFxuICBEYWZmQXV0aFN0b3JhZ2VGYWlsdXJlXG59IGZyb20gJy4uL2FjdGlvbnMvYXV0aC5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZSZWdpc3RlckRyaXZlciwgRGFmZlJlZ2lzdGVyU2VydmljZUludGVyZmFjZSB9IGZyb20gJy4uL2RyaXZlcnMvaW50ZXJmYWNlcy9yZWdpc3Rlci1zZXJ2aWNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmTG9naW5Ecml2ZXIsIERhZmZMb2dpblNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICcuLi9kcml2ZXJzL2ludGVyZmFjZXMvbG9naW4tc2VydmljZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkF1dGhUb2tlbiB9IGZyb20gJy4uL21vZGVscy9hdXRoLXRva2VuJztcbmltcG9ydCB7IERhZmZBY2NvdW50UmVnaXN0cmF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2FjY291bnQtcmVnaXN0cmF0aW9uJztcbmltcG9ydCB7IERhZmZMb2dpbkluZm8gfSBmcm9tICcuLi9tb2RlbHMvbG9naW4taW5mbyc7XG5pbXBvcnQgeyBEYWZmQXV0aERyaXZlciwgRGFmZkF1dGhTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnLi4vZHJpdmVycy9pbnRlcmZhY2VzL2F1dGgtc2VydmljZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkF1dGhTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL3N0b3JhZ2UvYXV0aC1zdG9yYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZkF1dGhFZmZlY3RzPFxuICBUIGV4dGVuZHMgRGFmZkxvZ2luSW5mbyxcbiAgVSBleHRlbmRzIERhZmZBdXRoVG9rZW4sXG4gIFMgZXh0ZW5kcyBEYWZmQWNjb3VudFJlZ2lzdHJhdGlvbixcbj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoRGFmZlJlZ2lzdGVyRHJpdmVyKSBwcml2YXRlIHJlZ2lzdGVyRHJpdmVyOiBEYWZmUmVnaXN0ZXJTZXJ2aWNlSW50ZXJmYWNlPFMsIFQ+LFxuICAgIEBJbmplY3QoRGFmZkxvZ2luRHJpdmVyKSBwcml2YXRlIGxvZ2luRHJpdmVyOiBEYWZmTG9naW5TZXJ2aWNlSW50ZXJmYWNlPFQsIFU+LFxuICAgIEBJbmplY3QoRGFmZkF1dGhEcml2ZXIpIHByaXZhdGUgYXV0aERyaXZlcjogRGFmZkF1dGhTZXJ2aWNlSW50ZXJmYWNlLFxuICAgIHByaXZhdGUgc3RvcmFnZTogRGFmZkF1dGhTdG9yYWdlU2VydmljZVxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGNoZWNrJCA6IE9ic2VydmFibGU8RGFmZkF1dGhDaGVja1N1Y2Nlc3MgfCBEYWZmQXV0aENoZWNrRmFpbHVyZT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZBdXRoQWN0aW9uVHlwZXMuQXV0aENoZWNrQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkF1dGhDaGVjaykgPT5cbiAgICAgIHRoaXMuY2hlY2tUb2tlbigpLnBpcGUoXG4gICAgICAgIG1hcFRvKG5ldyBEYWZmQXV0aENoZWNrU3VjY2VzcygpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBEYWZmQXV0aENoZWNrRmFpbHVyZSgnQXV0aCB0b2tlbiBpcyBub3QgdmFsaWQnKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICBsb2dpbiQgOiBPYnNlcnZhYmxlPERhZmZBdXRoTG9naW5TdWNjZXNzPFU+IHwgRGFmZkF1dGhMb2dpbkZhaWx1cmU+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhMb2dpbkFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZBdXRoTG9naW48VD4pID0+XG4gICAgICB0aGlzLmxvZ2luRHJpdmVyLmxvZ2luKGFjdGlvbi5sb2dpbkluZm8pLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcCkgPT5cbiAgICAgICAgICBuZXcgRGFmZkF1dGhMb2dpblN1Y2Nlc3M8VT4ocmVzcClcbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBEYWZmQXV0aExvZ2luRmFpbHVyZSgnRmFpbGVkIHRvIGxvZyBpbicpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG5cbiAgQEVmZmVjdCh7XG4gICAgZGlzcGF0Y2g6IGZhbHNlXG4gIH0pXG4gIHN0b3JlQXV0aFRva2VuJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoTG9naW5TdWNjZXNzQWN0aW9uKSxcbiAgICB0YXAoKGFjdGlvbjogRGFmZkF1dGhMb2dpblN1Y2Nlc3M8VT4pID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZS5zZXRBdXRoVG9rZW4oYWN0aW9uLmF1dGgudG9rZW4pXG4gICAgfSksXG4gICAgc3dpdGNoTWFwVG8oRU1QVFkpLFxuICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZBdXRoU3RvcmFnZUZhaWx1cmUoJ1N0b3JhZ2Ugb2YgYXV0aCB0b2tlbiBoYXMgZmFpbGVkLicpKSlcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICBsb2dvdXQkIDogT2JzZXJ2YWJsZTxEYWZmQXV0aExvZ291dFN1Y2Nlc3MgfCBEYWZmQXV0aExvZ291dEZhaWx1cmU+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhMb2dvdXRBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQXV0aExvZ291dCkgPT5cbiAgICAgIHRoaXMubG9naW5Ecml2ZXIubG9nb3V0KCkucGlwZShcbiAgICAgICAgbWFwVG8obmV3IERhZmZBdXRoTG9nb3V0U3VjY2VzcygpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBEYWZmQXV0aExvZ291dEZhaWx1cmUoJ0ZhaWxlZCB0byBsb2cgb3V0JykpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcblxuICBARWZmZWN0KClcbiAgbG9naW5BZnRlclJlZ2lzdGVyJDogT2JzZXJ2YWJsZTxEYWZmQXV0aExvZ2luPFQ+PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoUmVnaXN0ZXJTdWNjZXNzQWN0aW9uKSxcbiAgICBtYXAoKGFjdGlvbjogRGFmZkF1dGhSZWdpc3RlclN1Y2Nlc3M8VD4pID0+IG5ldyBEYWZmQXV0aExvZ2luKGFjdGlvbi5sb2dpbkluZm8pKVxuICApXG5cbiAgQEVmZmVjdCgpXG4gIHJlZ2lzdGVyJCA6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoUmVnaXN0ZXJBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQXV0aFJlZ2lzdGVyPFM+KSA9PlxuICAgICAgdGhpcy5yZWdpc3RlckRyaXZlci5yZWdpc3RlcihhY3Rpb24ucmVnaXN0cmF0aW9uKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3ApID0+XG4gICAgICAgICAgbmV3IERhZmZBdXRoUmVnaXN0ZXJTdWNjZXNzPFQ+KHJlc3ApXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgRGFmZkF1dGhSZWdpc3RlckZhaWx1cmUoJ0ZhaWxlZCB0byByZWdpc3RlciBhIG5ldyB1c2VyJykpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcblxuICBARWZmZWN0KClcbiAgZ3VhcmRDaGVjayQ6IE9ic2VydmFibGU8RGFmZkF1dGhHdWFyZENoZWNrQ29tcGxldGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZBdXRoQWN0aW9uVHlwZXMuQXV0aEd1YXJkQ2hlY2tBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQXV0aEd1YXJkQ2hlY2spID0+XG4gICAgICB0aGlzLmNoZWNrVG9rZW4oKS5waXBlKFxuICAgICAgICBtYXBUbyhuZXcgRGFmZkF1dGhHdWFyZENoZWNrQ29tcGxldGlvbih0cnVlKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgRGFmZkF1dGhHdWFyZENoZWNrQ29tcGxldGlvbihmYWxzZSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcblxuICBwcml2YXRlIGNoZWNrVG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aERyaXZlci5jaGVjaygpXG4gIH1cbn1cbiJdfQ==