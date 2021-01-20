/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MemberOnlyGuard } from './member-only.guard';
import { DaffAuthFacade } from '../facades/auth.facade';
import { DaffAuthGuardCheck } from '../actions/auth.actions';
import * as i0 from "@angular/core";
import * as i1 from "../facades/auth.facade";
import * as i2 from "./member-only.guard";
export class GuestOnlyGuard {
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
/** @nocollapse */ GuestOnlyGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GuestOnlyGuard_Factory() { return new GuestOnlyGuard(i0.ɵɵinject(i1.DaffAuthFacade), i0.ɵɵinject(i2.MemberOnlyGuard)); }, token: GuestOnlyGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3Qtb25seS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoLyIsInNvdXJjZXMiOlsiZ3VhcmRzL2d1ZXN0LW9ubHkuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFLN0QsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBQ3pCLFlBQ1UsTUFBc0IsRUFDdEIsZUFBZ0M7UUFEaEMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3ZDLENBQUM7Ozs7SUFFSixXQUFXOztjQUNILEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFFcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFFL0MsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FDaEQsR0FBRzs7OztRQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLEVBQUMsQ0FDckMsQ0FBQTtJQUNILENBQUM7OztZQXJCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMUSxjQUFjO1lBRGQsZUFBZTs7Ozs7Ozs7SUFTcEIsZ0NBQThCOzs7OztJQUM5Qix5Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYW5BY3RpdmF0ZSxcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTWVtYmVyT25seUd1YXJkIH0gZnJvbSAnLi9tZW1iZXItb25seS5ndWFyZCc7XG5pbXBvcnQgeyBEYWZmQXV0aEZhY2FkZSB9IGZyb20gJy4uL2ZhY2FkZXMvYXV0aC5mYWNhZGUnO1xuaW1wb3J0IHsgRGFmZkF1dGhHdWFyZENoZWNrIH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoLmFjdGlvbnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgR3Vlc3RPbmx5R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmFjYWRlOiBEYWZmQXV0aEZhY2FkZSxcbiAgICBwcml2YXRlIG1lbWJlck9ubHlHdWFyZDogTWVtYmVyT25seUd1YXJkXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCByZXQgPSB0aGlzLmlzVW5hdXRoZW50aWNhdGVkKCk7XG5cbiAgICB0aGlzLmZhY2FkZS5kaXNwYXRjaChuZXcgRGFmZkF1dGhHdWFyZENoZWNrKCkpO1xuXG4gICAgcmV0dXJuIHJldFxuICB9XG5cbiAgaXNVbmF1dGhlbnRpY2F0ZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMubWVtYmVyT25seUd1YXJkLmlzQXV0aGVudGljYXRlZCgpLnBpcGUoXG4gICAgICBtYXAoYXV0aGVudGljYXRlZCA9PiAhYXV0aGVudGljYXRlZClcbiAgICApXG4gIH1cbn1cbiJdfQ==