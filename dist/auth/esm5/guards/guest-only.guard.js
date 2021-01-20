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
    /** @nocollapse */ GuestOnlyGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GuestOnlyGuard_Factory() { return new GuestOnlyGuard(i0.ɵɵinject(i1.DaffAuthFacade), i0.ɵɵinject(i2.MemberOnlyGuard)); }, token: GuestOnlyGuard, providedIn: "root" });
    return GuestOnlyGuard;
}());
export { GuestOnlyGuard };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3Qtb25seS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoLyIsInNvdXJjZXMiOlsiZ3VhcmRzL2d1ZXN0LW9ubHkuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFN0Q7SUFJRSx3QkFDVSxNQUFzQixFQUN0QixlQUFnQztRQURoQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDdkMsQ0FBQzs7OztJQUVKLG9DQUFXOzs7SUFBWDs7WUFDUSxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBRXBDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBRS9DLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQzs7OztJQUVELDBDQUFpQjs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FDaEQsR0FBRzs7OztRQUFDLFVBQUEsYUFBYSxJQUFJLE9BQUEsQ0FBQyxhQUFhLEVBQWQsQ0FBYyxFQUFDLENBQ3JDLENBQUE7SUFDSCxDQUFDOztnQkFyQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxjQUFjO2dCQURkLGVBQWU7Ozt5QkFUeEI7Q0FtQ0MsQUF0QkQsSUFzQkM7U0FuQlksY0FBYzs7Ozs7O0lBRXZCLGdDQUE4Qjs7Ozs7SUFDOUIseUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FuQWN0aXZhdGUsXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIFJvdXRlclN0YXRlU25hcHNob3QsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE1lbWJlck9ubHlHdWFyZCB9IGZyb20gJy4vbWVtYmVyLW9ubHkuZ3VhcmQnO1xuaW1wb3J0IHsgRGFmZkF1dGhGYWNhZGUgfSBmcm9tICcuLi9mYWNhZGVzL2F1dGguZmFjYWRlJztcbmltcG9ydCB7IERhZmZBdXRoR3VhcmRDaGVjayB9IGZyb20gJy4uL2FjdGlvbnMvYXV0aC5hY3Rpb25zJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEd1ZXN0T25seUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZhY2FkZTogRGFmZkF1dGhGYWNhZGUsXG4gICAgcHJpdmF0ZSBtZW1iZXJPbmx5R3VhcmQ6IE1lbWJlck9ubHlHdWFyZFxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgcmV0ID0gdGhpcy5pc1VuYXV0aGVudGljYXRlZCgpO1xuXG4gICAgdGhpcy5mYWNhZGUuZGlzcGF0Y2gobmV3IERhZmZBdXRoR3VhcmRDaGVjaygpKTtcblxuICAgIHJldHVybiByZXRcbiAgfVxuXG4gIGlzVW5hdXRoZW50aWNhdGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLm1lbWJlck9ubHlHdWFyZC5pc0F1dGhlbnRpY2F0ZWQoKS5waXBlKFxuICAgICAgbWFwKGF1dGhlbnRpY2F0ZWQgPT4gIWF1dGhlbnRpY2F0ZWQpXG4gICAgKVxuICB9XG59XG4iXX0=