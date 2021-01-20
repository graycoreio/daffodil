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
export class DaffNewsletterEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     */
    constructor(actions$, driver) {
        this.actions$ = actions$;
        this.driver = driver;
        this.trySubmission$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(DaffNewsletterActionTypes.NewsletterSubscribeAction, DaffNewsletterActionTypes.NewsletterRetry, DaffNewsletterActionTypes.NewsletterCancelAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            if ((action.type === DaffNewsletterActionTypes.NewsletterCancelAction)) {
                return of(action);
            }
            else if (action instanceof DaffNewsletterSubscribe || action instanceof DaffNewsletterRetry) {
                return this.driver.send(action.payload).pipe(map((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    return new DaffNewsletterSuccessSubscribe();
                })), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    return of(new DaffNewsletterFailedSubscribe('Failed to subscribe to newsletter'));
                })));
            }
        })), ofType(DaffNewsletterActionTypes.NewsletterFailedSubscribeAction, DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction))));
    }
}
DaffNewsletterEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffNewsletterEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffNewsletterDriver,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25ld3NsZXR0ZXIvIiwic291cmNlcyI6WyJlZmZlY3RzL25ld3NsZXR0ZXIuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLEVBQUUsRUFBUyxNQUFNLE1BQU0sQ0FBQztBQUVqQyxPQUFPLEVBQUUsT0FBTyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJNUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLHVCQUF1QixFQUFFLDhCQUE4QixFQUFFLDZCQUE2QixFQUFFLG1CQUFtQixFQUF3QixNQUFNLCtCQUErQixDQUFDO0FBRTdNLE9BQU8sRUFBRSxvQkFBb0IsRUFBa0MsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUc1RixNQUFNLE9BQU8scUJBQXFCOzs7OztJQUVoQyxZQUNVLFFBQWlCLEVBQ2EsTUFBNEM7UUFEMUUsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNhLFdBQU0sR0FBTixNQUFNLENBQXNDO1FBRXBGLG1CQUFjLEdBQXVCLFlBQVk7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN4RSxNQUFNLENBQUMseUJBQXlCLENBQUMseUJBQXlCLEVBQ3hELHlCQUF5QixDQUFDLGVBQWUsRUFDekMseUJBQXlCLENBQUMsc0JBQXNCLENBQUMsRUFDbkQsU0FBUzs7OztRQUFDLENBQUMsTUFBa0YsRUFBRSxFQUFFO1lBQy9GLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLHlCQUF5QixDQUFDLHNCQUFzQixDQUFDLEVBQUU7Z0JBQ3RFLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ25CO2lCQUNJLElBQUksTUFBTSxZQUFZLHVCQUF1QixJQUFJLE1BQU0sWUFBWSxtQkFBbUIsRUFBQztnQkFDMUYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMxQyxHQUFHOzs7O2dCQUFDLENBQUMsSUFBTyxFQUFFLEVBQUU7b0JBQ2QsT0FBTyxJQUFJLDhCQUE4QixFQUFFLENBQUM7Z0JBQzlDLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7Z0JBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2pCLE9BQU8sRUFBRSxDQUFDLElBQUksNkJBQTZCLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO2dCQUNwRixDQUFDLEVBQUMsQ0FDSCxDQUFBO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsRUFDRixNQUFNLENBQUMseUJBQXlCLENBQUMsK0JBQStCLEVBQUUseUJBQXlCLENBQUMsZ0NBQWdDLENBQUMsQ0FDOUgsRUFBQyxDQUFDO0lBdEJxRixDQUFDOzs7WUFMMUYsVUFBVTs7OztZQVRGLE9BQU87NENBY1gsTUFBTSxTQUFDLG9CQUFvQjs7OztJQUU5QiwrQ0FvQkc7Ozs7O0lBdkJELHlDQUF5Qjs7Ozs7SUFDekIsdUNBQWtGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiwgRU1QVFkgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUsIGNyZWF0ZUVmZmVjdCB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMsIERhZmZOZXdzbGV0dGVyU3Vic2NyaWJlLCBEYWZmTmV3c2xldHRlclN1Y2Nlc3NTdWJzY3JpYmUsIERhZmZOZXdzbGV0dGVyRmFpbGVkU3Vic2NyaWJlLCBEYWZmTmV3c2xldHRlclJldHJ5LCBEYWZmTmV3c2xldHRlckNhbmNlbCB9IGZyb20gJy4uL2FjdGlvbnMvbmV3c2xldHRlci5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZOZXdzbGV0dGVyU3VibWlzc2lvbiB9IGZyb20gJy4uL21vZGVscy9uZXdzbGV0dGVyLm1vZGVsJztcbmltcG9ydCB7IERhZmZOZXdzbGV0dGVyRHJpdmVyLCBEYWZmTmV3c2xldHRlclNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICcuLi9kcml2ZXIvcHVibGljX2FwaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYWZmTmV3c2xldHRlckVmZmVjdHM8VCBleHRlbmRzIERhZmZOZXdzbGV0dGVyU3VibWlzc2lvbiwgVj57XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERhZmZOZXdzbGV0dGVyRHJpdmVyKSBwcml2YXRlIGRyaXZlcjogRGFmZk5ld3NsZXR0ZXJTZXJ2aWNlSW50ZXJmYWNlPFQsIFY+KSB7IH1cblxuICB0cnlTdWJtaXNzaW9uJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gY3JlYXRlRWZmZWN0KCgpID0+IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZk5ld3NsZXR0ZXJBY3Rpb25UeXBlcy5OZXdzbGV0dGVyU3Vic2NyaWJlQWN0aW9uLFxuICAgICAgRGFmZk5ld3NsZXR0ZXJBY3Rpb25UeXBlcy5OZXdzbGV0dGVyUmV0cnksXG4gICAgICBEYWZmTmV3c2xldHRlckFjdGlvblR5cGVzLk5ld3NsZXR0ZXJDYW5jZWxBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmTmV3c2xldHRlclN1YnNjcmliZTxUPiB8IERhZmZOZXdzbGV0dGVyUmV0cnk8VD4gfCBEYWZmTmV3c2xldHRlckNhbmNlbCkgPT4ge1xuICAgICAgaWYgKChhY3Rpb24udHlwZSA9PT0gRGFmZk5ld3NsZXR0ZXJBY3Rpb25UeXBlcy5OZXdzbGV0dGVyQ2FuY2VsQWN0aW9uKSkge1xuICAgICAgICByZXR1cm4gb2YoYWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIERhZmZOZXdzbGV0dGVyU3Vic2NyaWJlIHx8IGFjdGlvbiBpbnN0YW5jZW9mIERhZmZOZXdzbGV0dGVyUmV0cnkpe1xuICAgICAgICByZXR1cm4gdGhpcy5kcml2ZXIuc2VuZChhY3Rpb24ucGF5bG9hZCkucGlwZShcbiAgICAgICAgICBtYXAoKHJlc3A6IFYpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGFmZk5ld3NsZXR0ZXJTdWNjZXNzU3Vic2NyaWJlKCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YobmV3IERhZmZOZXdzbGV0dGVyRmFpbGVkU3Vic2NyaWJlKCdGYWlsZWQgdG8gc3Vic2NyaWJlIHRvIG5ld3NsZXR0ZXInKSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pLFxuICAgIG9mVHlwZShEYWZmTmV3c2xldHRlckFjdGlvblR5cGVzLk5ld3NsZXR0ZXJGYWlsZWRTdWJzY3JpYmVBY3Rpb24sIERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlclN1Y2Nlc3NTdWJzY3JpYmVBY3Rpb24pXG4gICkpO1xufSJdfQ==