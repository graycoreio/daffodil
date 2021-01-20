/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { DaffNavigationDriver } from '@daffodil/navigation/driver';
import { DaffNavigationActionTypes, DaffNavigationLoadSuccess, DaffNavigationLoadFailure } from '../actions/navigation.actions';
/**
 * @template T
 */
var DaffNavigationEffects = /** @class */ (function () {
    function DaffNavigationEffects(actions$, driver) {
        var _this = this;
        this.actions$ = actions$;
        this.driver = driver;
        this.loadNavigation$ = this.actions$.pipe(ofType(DaffNavigationActionTypes.NavigationLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.get(action.payload)
                .pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                return new DaffNavigationLoadSuccess(resp);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new DaffNavigationLoadFailure('Failed to load the navigation tree'));
            })));
        })));
    }
    DaffNavigationEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffNavigationEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffNavigationDriver,] }] }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], DaffNavigationEffects.prototype, "loadNavigation$", void 0);
    return DaffNavigationEffects;
}());
export { DaffNavigationEffects };
if (false) {
    /** @type {?} */
    DaffNavigationEffects.prototype.loadNavigation$;
    /**
     * @type {?}
     * @private
     */
    DaffNavigationEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffNavigationEffects.prototype.driver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25hdmlnYXRpb24vc3RhdGUvIiwic291cmNlcyI6WyJlZmZlY3RzL25hdmlnYXRpb24uZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd0QyxPQUFPLEVBQUUsb0JBQW9CLEVBQWtDLE1BQU0sNkJBQTZCLENBQUM7QUFFbkcsT0FBTyxFQUNMLHlCQUF5QixFQUV6Qix5QkFBeUIsRUFDekIseUJBQXlCLEVBQzFCLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFFdkM7SUFHRSwrQkFDVSxRQUFpQixFQUNhLE1BQXlDO1FBRmpGLGlCQUVvRjtRQUQxRSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2EsV0FBTSxHQUFOLE1BQU0sQ0FBbUM7UUFHakYsb0JBQWUsR0FBcUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BELE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBQyxFQUN0RCxTQUFTOzs7O1FBQUMsVUFBQyxNQUEwQjtZQUNuQyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7aUJBQzVCLElBQUksQ0FDSCxHQUFHOzs7O1lBQUMsVUFBQyxJQUFJO2dCQUNQLE9BQU8sSUFBSSx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxDQUFDLElBQUkseUJBQXlCLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1lBQ2pGLENBQUMsRUFBQyxDQUNIO1FBUkgsQ0FRRyxFQUNKLENBQ0YsQ0FBQTtJQWhCa0YsQ0FBQzs7Z0JBTHJGLFVBQVU7Ozs7Z0JBZEYsT0FBTztnREFtQlgsTUFBTSxTQUFDLG9CQUFvQjs7SUFHOUI7UUFEQyxNQUFNLEVBQUU7MENBQ1MsVUFBVTtrRUFhM0I7SUFDSCw0QkFBQztDQUFBLEFBdEJELElBc0JDO1NBckJZLHFCQUFxQjs7O0lBTWhDLGdEQWNDOzs7OztJQWpCQyx5Q0FBeUI7Ozs7O0lBQ3pCLHVDQUErRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkdlbmVyaWNOYXZpZ2F0aW9uVHJlZSB9IGZyb20gJ0BkYWZmb2RpbC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IERhZmZOYXZpZ2F0aW9uRHJpdmVyLCBEYWZmTmF2aWdhdGlvblNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvbmF2aWdhdGlvbi9kcml2ZXInO1xuXG5pbXBvcnQge1xuICBEYWZmTmF2aWdhdGlvbkFjdGlvblR5cGVzLFxuICBEYWZmTmF2aWdhdGlvbkxvYWQsXG4gIERhZmZOYXZpZ2F0aW9uTG9hZFN1Y2Nlc3MsXG4gIERhZmZOYXZpZ2F0aW9uTG9hZEZhaWx1cmVcbn0gZnJvbSAnLi4vYWN0aW9ucy9uYXZpZ2F0aW9uLmFjdGlvbnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZk5hdmlnYXRpb25FZmZlY3RzPFQgZXh0ZW5kcyBEYWZmR2VuZXJpY05hdmlnYXRpb25UcmVlPFQ+PiB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERhZmZOYXZpZ2F0aW9uRHJpdmVyKSBwcml2YXRlIGRyaXZlcjogRGFmZk5hdmlnYXRpb25TZXJ2aWNlSW50ZXJmYWNlPFQ+KXt9XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWROYXZpZ2F0aW9uJCA6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZk5hdmlnYXRpb25BY3Rpb25UeXBlcy5OYXZpZ2F0aW9uTG9hZEFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZOYXZpZ2F0aW9uTG9hZCkgPT5cbiAgICAgIHRoaXMuZHJpdmVyLmdldChhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXNwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhZmZOYXZpZ2F0aW9uTG9hZFN1Y2Nlc3MocmVzcCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YobmV3IERhZmZOYXZpZ2F0aW9uTG9hZEZhaWx1cmUoJ0ZhaWxlZCB0byBsb2FkIHRoZSBuYXZpZ2F0aW9uIHRyZWUnKSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgIClcbiAgKVxufVxuIl19