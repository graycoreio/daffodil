/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { DaffNewsletterActionTypes, DaffNewsletterSubscribe, DaffNewsletterSuccessSubscribe, DaffNewsletterFailedSubscribe, DaffNewsletterRetry } from '../actions/newsletter.actions';
import { DaffNewsletterDriver } from '../driver/public_api';
/**
 * @template T, V
 */
var DaffNewsletterEffects = /** @class */ (function () {
    function DaffNewsletterEffects(actions$, driver) {
        var _this = this;
        this.actions$ = actions$;
        this.driver = driver;
        this.trySubmission$ = createEffect((/**
         * @return {?}
         */
        function () { return _this.actions$.pipe(ofType(DaffNewsletterActionTypes.NewsletterSubscribeAction, DaffNewsletterActionTypes.NewsletterRetry, DaffNewsletterActionTypes.NewsletterCancelAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            if ((action.type === DaffNewsletterActionTypes.NewsletterCancelAction)) {
                return of(action);
            }
            else if (action instanceof DaffNewsletterSubscribe || action instanceof DaffNewsletterRetry) {
                return _this.driver.send(action.payload).pipe(map((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    return new DaffNewsletterSuccessSubscribe();
                })), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return of(new DaffNewsletterFailedSubscribe('Failed to subscribe to newsletter'));
                })));
            }
        })), ofType(DaffNewsletterActionTypes.NewsletterFailedSubscribeAction, DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction)); }));
    }
    DaffNewsletterEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffNewsletterEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffNewsletterDriver,] }] }
    ]; };
    return DaffNewsletterEffects;
}());
export { DaffNewsletterEffects };
if (false) {
    /** @type {?} */
    DaffNewsletterEffects.prototype.trySubmission$;
    /**
     * @type {?}
     * @private
     */
    DaffNewsletterEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffNewsletterEffects.prototype.driver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25ld3NsZXR0ZXIvIiwic291cmNlcyI6WyJlZmZlY3RzL25ld3NsZXR0ZXIuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLEVBQUUsRUFBUyxNQUFNLE1BQU0sQ0FBQztBQUVqQyxPQUFPLEVBQUUsT0FBTyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJNUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLHVCQUF1QixFQUFFLDhCQUE4QixFQUFFLDZCQUE2QixFQUFFLG1CQUFtQixFQUF3QixNQUFNLCtCQUErQixDQUFDO0FBRTdNLE9BQU8sRUFBRSxvQkFBb0IsRUFBa0MsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUU1RjtJQUdFLCtCQUNVLFFBQWlCLEVBQ2EsTUFBNEM7UUFGcEYsaUJBRXlGO1FBRC9FLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDYSxXQUFNLEdBQU4sTUFBTSxDQUFzQztRQUVwRixtQkFBYyxHQUF1QixZQUFZOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3hFLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyx5QkFBeUIsRUFDeEQseUJBQXlCLENBQUMsZUFBZSxFQUN6Qyx5QkFBeUIsQ0FBQyxzQkFBc0IsQ0FBQyxFQUNuRCxTQUFTOzs7O1FBQUMsVUFBQyxNQUFrRjtZQUMzRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyx5QkFBeUIsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO2dCQUN0RSxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuQjtpQkFDSSxJQUFJLE1BQU0sWUFBWSx1QkFBdUIsSUFBSSxNQUFNLFlBQVksbUJBQW1CLEVBQUM7Z0JBQzFGLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDMUMsR0FBRzs7OztnQkFBQyxVQUFDLElBQU87b0JBQ1YsT0FBTyxJQUFJLDhCQUE4QixFQUFFLENBQUM7Z0JBQzlDLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7Z0JBQUMsVUFBQSxLQUFLO29CQUNkLE9BQU8sRUFBRSxDQUFDLElBQUksNkJBQTZCLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO2dCQUNwRixDQUFDLEVBQUMsQ0FDSCxDQUFBO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsRUFDRixNQUFNLENBQUMseUJBQXlCLENBQUMsK0JBQStCLEVBQUUseUJBQXlCLENBQUMsZ0NBQWdDLENBQUMsQ0FDOUgsRUFwQnVELENBb0J2RCxFQUFDLENBQUM7SUF0QnFGLENBQUM7O2dCQUwxRixVQUFVOzs7O2dCQVRGLE9BQU87Z0RBY1gsTUFBTSxTQUFDLG9CQUFvQjs7SUF1QmhDLDRCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0EzQlkscUJBQXFCOzs7SUFNaEMsK0NBb0JHOzs7OztJQXZCRCx5Q0FBeUI7Ozs7O0lBQ3pCLHVDQUFrRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YsIEVNUFRZIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlLCBjcmVhdGVFZmZlY3QgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmTmV3c2xldHRlckFjdGlvblR5cGVzLCBEYWZmTmV3c2xldHRlclN1YnNjcmliZSwgRGFmZk5ld3NsZXR0ZXJTdWNjZXNzU3Vic2NyaWJlLCBEYWZmTmV3c2xldHRlckZhaWxlZFN1YnNjcmliZSwgRGFmZk5ld3NsZXR0ZXJSZXRyeSwgRGFmZk5ld3NsZXR0ZXJDYW5jZWwgfSBmcm9tICcuLi9hY3Rpb25zL25ld3NsZXR0ZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmTmV3c2xldHRlclN1Ym1pc3Npb24gfSBmcm9tICcuLi9tb2RlbHMvbmV3c2xldHRlci5tb2RlbCc7XG5pbXBvcnQgeyBEYWZmTmV3c2xldHRlckRyaXZlciwgRGFmZk5ld3NsZXR0ZXJTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnLi4vZHJpdmVyL3B1YmxpY19hcGknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZk5ld3NsZXR0ZXJFZmZlY3RzPFQgZXh0ZW5kcyBEYWZmTmV3c2xldHRlclN1Ym1pc3Npb24sIFY+e1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgQEluamVjdChEYWZmTmV3c2xldHRlckRyaXZlcikgcHJpdmF0ZSBkcml2ZXI6IERhZmZOZXdzbGV0dGVyU2VydmljZUludGVyZmFjZTxULCBWPikgeyB9XG5cbiAgdHJ5U3VibWlzc2lvbiQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IGNyZWF0ZUVmZmVjdCgoKSA9PiB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlclN1YnNjcmliZUFjdGlvbixcbiAgICAgIERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlclJldHJ5LFxuICAgICAgRGFmZk5ld3NsZXR0ZXJBY3Rpb25UeXBlcy5OZXdzbGV0dGVyQ2FuY2VsQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZk5ld3NsZXR0ZXJTdWJzY3JpYmU8VD4gfCBEYWZmTmV3c2xldHRlclJldHJ5PFQ+IHwgRGFmZk5ld3NsZXR0ZXJDYW5jZWwpID0+IHtcbiAgICAgIGlmICgoYWN0aW9uLnR5cGUgPT09IERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlckNhbmNlbEFjdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIG9mKGFjdGlvbik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhY3Rpb24gaW5zdGFuY2VvZiBEYWZmTmV3c2xldHRlclN1YnNjcmliZSB8fCBhY3Rpb24gaW5zdGFuY2VvZiBEYWZmTmV3c2xldHRlclJldHJ5KXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJpdmVyLnNlbmQoYWN0aW9uLnBheWxvYWQpLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXNwOiBWKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhZmZOZXdzbGV0dGVyU3VjY2Vzc1N1YnNjcmliZSgpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBEYWZmTmV3c2xldHRlckZhaWxlZFN1YnNjcmliZSgnRmFpbGVkIHRvIHN1YnNjcmliZSB0byBuZXdzbGV0dGVyJykpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KSxcbiAgICBvZlR5cGUoRGFmZk5ld3NsZXR0ZXJBY3Rpb25UeXBlcy5OZXdzbGV0dGVyRmFpbGVkU3Vic2NyaWJlQWN0aW9uLCBEYWZmTmV3c2xldHRlckFjdGlvblR5cGVzLk5ld3NsZXR0ZXJTdWNjZXNzU3Vic2NyaWJlQWN0aW9uKVxuICApKTtcbn0iXX0=