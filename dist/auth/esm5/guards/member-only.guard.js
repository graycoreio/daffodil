/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import { DaffAuthActionTypes, DaffAuthGuardCheck } from '../actions/auth.actions';
import { DaffAuthFacade } from '../facades/auth.facade';
import * as i0 from "@angular/core";
import * as i1 from "../facades/auth.facade";
import * as i2 from "@ngrx/effects";
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
    /** @nocollapse */ MemberOnlyGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MemberOnlyGuard_Factory() { return new MemberOnlyGuard(i0.ɵɵinject(i1.DaffAuthFacade), i0.ɵɵinject(i2.Actions)); }, token: MemberOnlyGuard, providedIn: "root" });
    return MemberOnlyGuard;
}());
export { MemberOnlyGuard };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLW9ubHkuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC8iLCJzb3VyY2VzIjpbImd1YXJkcy9tZW1iZXItb25seS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8zQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEQsT0FBTyxFQUNMLG1CQUFtQixFQUVuQixrQkFBa0IsRUFDbkIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFeEQ7SUFJRSx5QkFDVSxNQUFzQixFQUN0QixRQUFpQjtRQURqQixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFTO0lBQ3hCLENBQUM7Ozs7SUFFSixxQ0FBVzs7O0lBQVg7O1lBQ1EsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUU7UUFFbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFFL0MsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDOzs7O0lBRUQseUNBQWU7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdkIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEVBQzFELEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW9DLElBQUssT0FBQSxNQUFNLENBQUMsTUFBTSxFQUFiLENBQWEsRUFBQyxDQUM3RCxDQUFBO0lBQ0gsQ0FBQzs7Z0JBdEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsY0FBYztnQkFQZCxPQUFPOzs7MEJBUmhCO0NBd0NDLEFBdkJELElBdUJDO1NBcEJZLGVBQWU7Ozs7OztJQUV4QixpQ0FBOEI7Ozs7O0lBQzlCLG1DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbkFjdGl2YXRlLFxuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7XG4gIERhZmZBdXRoQWN0aW9uVHlwZXMsXG4gIERhZmZBdXRoR3VhcmRDaGVja0NvbXBsZXRpb24sXG4gIERhZmZBdXRoR3VhcmRDaGVja1xufSBmcm9tICcuLi9hY3Rpb25zL2F1dGguYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmQXV0aEZhY2FkZSB9IGZyb20gJy4uL2ZhY2FkZXMvYXV0aC5mYWNhZGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWVtYmVyT25seUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZhY2FkZTogRGFmZkF1dGhGYWNhZGUsXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJldCA9IHRoaXMuaXNBdXRoZW50aWNhdGVkKCk7XG5cbiAgICB0aGlzLmZhY2FkZS5kaXNwYXRjaChuZXcgRGFmZkF1dGhHdWFyZENoZWNrKCkpO1xuXG4gICAgcmV0dXJuIHJldFxuICB9XG5cbiAgaXNBdXRoZW50aWNhdGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICBvZlR5cGUoRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoR3VhcmRDaGVja0NvbXBsZXRpb25BY3Rpb24pLFxuICAgICAgbWFwKChhY3Rpb246IERhZmZBdXRoR3VhcmRDaGVja0NvbXBsZXRpb24pID0+IGFjdGlvbi5yZXN1bHQpXG4gICAgKVxuICB9XG59XG4iXX0=