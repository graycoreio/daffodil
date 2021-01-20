/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { DaffContactDriver, } from '@daffodil/contact/driver';
import { DaffContactActionTypes, DaffContactCancel, DaffContactSuccessSubmit, DaffContactFailedSubmit, } from '../actions/contact.actions';
/**
 * @template T, V
 */
var DaffContactEffects = /** @class */ (function () {
    function DaffContactEffects(actions$, driver) {
        var _this = this;
        this.actions$ = actions$;
        this.driver = driver;
        this.trySubmission$ = createEffect((/**
         * @return {?}
         */
        function () {
            return _this.actions$.pipe(ofType(DaffContactActionTypes.ContactSubmitAction, DaffContactActionTypes.ContactRetryAction, DaffContactActionTypes.ContactCancelAction), switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                if (action instanceof DaffContactCancel) {
                    return EMPTY;
                }
                else {
                    return _this.submitContact(action.payload);
                }
            })));
        }));
    }
    /**
     * @private
     * @param {?} contact
     * @return {?}
     */
    DaffContactEffects.prototype.submitContact = /**
     * @private
     * @param {?} contact
     * @return {?}
     */
    function (contact) {
        return this.driver.send(contact).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) {
            return new DaffContactSuccessSubmit();
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return of(new DaffContactFailedSubmit(['Failed to submit']));
        })));
    };
    DaffContactEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffContactEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffContactDriver,] }] }
    ]; };
    return DaffContactEffects;
}());
export { DaffContactEffects };
if (false) {
    /** @type {?} */
    DaffContactEffects.prototype.trySubmission$;
    /**
     * @type {?}
     * @private
     */
    DaffContactEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffContactEffects.prototype.driver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvbnRhY3Qvc3RhdGUvIiwic291cmNlcyI6WyJlZmZlY3RzL2NvbnRhY3QuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sRUFFTixpQkFBaUIsR0FDakIsTUFBTSwwQkFBMEIsQ0FBQztBQUVsQyxPQUFPLEVBQ04sc0JBQXNCLEVBRXRCLGlCQUFpQixFQUNqQix3QkFBd0IsRUFDeEIsdUJBQXVCLEdBRXZCLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFFcEM7SUFFQyw0QkFDUyxRQUFpQixFQUVqQixNQUF5QztRQUhsRCxpQkFJSTtRQUhLLGFBQVEsR0FBUixRQUFRLENBQVM7UUFFakIsV0FBTSxHQUFOLE1BQU0sQ0FBbUM7UUFHbEQsbUJBQWMsR0FBdUIsWUFBWTs7O1FBQUM7WUFDakQsT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDakIsTUFBTSxDQUNMLHNCQUFzQixDQUFDLG1CQUFtQixFQUMxQyxzQkFBc0IsQ0FBQyxrQkFBa0IsRUFDekMsc0JBQXNCLENBQUMsbUJBQW1CLENBQzFDLEVBQ0QsU0FBUzs7OztZQUNSLFVBQ0MsTUFHb0I7Z0JBRXBCLElBQUksTUFBTSxZQUFZLGlCQUFpQixFQUFFO29CQUN4QyxPQUFPLEtBQUssQ0FBQztpQkFDYjtxQkFBTTtvQkFDTixPQUFPLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMxQztZQUNGLENBQUMsRUFDRCxDQUNEO1FBcEJELENBb0JDLEVBQ0QsQ0FBQztJQXhCQyxDQUFDOzs7Ozs7SUEwQkksMENBQWE7Ozs7O0lBQXJCLFVBQXNCLE9BQVU7UUFDL0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3BDLEdBQUc7Ozs7UUFBQyxVQUFDLElBQU87WUFDWCxPQUFPLElBQUksd0JBQXdCLEVBQUUsQ0FBQztRQUN2QyxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2YsT0FBTyxFQUFFLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSCxDQUFDOztnQkF6Q0QsVUFBVTs7OztnQkFuQkYsT0FBTztnREF1QmIsTUFBTSxTQUFDLGlCQUFpQjs7SUFzQzNCLHlCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0F6Q1ksa0JBQWtCOzs7SUFPOUIsNENBc0JFOzs7OztJQTNCRCxzQ0FBeUI7Ozs7O0lBQ3pCLG9DQUNpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgY3JlYXRlRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBFTVBUWSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG5cdERhZmZDb250YWN0U2VydmljZUludGVyZmFjZSxcblx0RGFmZkNvbnRhY3REcml2ZXIsXG59IGZyb20gJ0BkYWZmb2RpbC9jb250YWN0L2RyaXZlcic7XG5cbmltcG9ydCB7XG5cdERhZmZDb250YWN0QWN0aW9uVHlwZXMsXG5cdERhZmZDb250YWN0U3VibWl0LFxuXHREYWZmQ29udGFjdENhbmNlbCxcblx0RGFmZkNvbnRhY3RTdWNjZXNzU3VibWl0LFxuXHREYWZmQ29udGFjdEZhaWxlZFN1Ym1pdCxcblx0RGFmZkNvbnRhY3RSZXRyeSxcbn0gZnJvbSAnLi4vYWN0aW9ucy9jb250YWN0LmFjdGlvbnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZkNvbnRhY3RFZmZlY3RzPFQsIFY+IHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcblx0XHRASW5qZWN0KERhZmZDb250YWN0RHJpdmVyKVxuXHRcdHByaXZhdGUgZHJpdmVyOiBEYWZmQ29udGFjdFNlcnZpY2VJbnRlcmZhY2U8VCwgVj4sXG5cdCkge31cblxuXHR0cnlTdWJtaXNzaW9uJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gY3JlYXRlRWZmZWN0KCgpID0+XG5cdFx0dGhpcy5hY3Rpb25zJC5waXBlKFxuXHRcdFx0b2ZUeXBlKFxuXHRcdFx0XHREYWZmQ29udGFjdEFjdGlvblR5cGVzLkNvbnRhY3RTdWJtaXRBY3Rpb24sXG5cdFx0XHRcdERhZmZDb250YWN0QWN0aW9uVHlwZXMuQ29udGFjdFJldHJ5QWN0aW9uLFxuXHRcdFx0XHREYWZmQ29udGFjdEFjdGlvblR5cGVzLkNvbnRhY3RDYW5jZWxBY3Rpb24sXG5cdFx0XHQpLFxuXHRcdFx0c3dpdGNoTWFwKFxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0YWN0aW9uOlxuXHRcdFx0XHRcdFx0fCBEYWZmQ29udGFjdFN1Ym1pdDxUPlxuXHRcdFx0XHRcdFx0fCBEYWZmQ29udGFjdFJldHJ5PFQ+XG5cdFx0XHRcdFx0XHR8IERhZmZDb250YWN0Q2FuY2VsLFxuXHRcdFx0XHQpID0+IHtcblx0XHRcdFx0XHRpZiAoYWN0aW9uIGluc3RhbmNlb2YgRGFmZkNvbnRhY3RDYW5jZWwpIHtcblx0XHRcdFx0XHRcdHJldHVybiBFTVBUWTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuc3VibWl0Q29udGFjdChhY3Rpb24ucGF5bG9hZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0KSxcblx0XHQpLFxuXHQpO1xuXG5cdHByaXZhdGUgc3VibWl0Q29udGFjdChjb250YWN0OiBUKTogT2JzZXJ2YWJsZTxBY3Rpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5kcml2ZXIuc2VuZChjb250YWN0KS5waXBlKFxuXHRcdFx0bWFwKChyZXNwOiBWKSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgRGFmZkNvbnRhY3RTdWNjZXNzU3VibWl0KCk7XG5cdFx0XHR9KSxcblx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHRyZXR1cm4gb2YobmV3IERhZmZDb250YWN0RmFpbGVkU3VibWl0KFsnRmFpbGVkIHRvIHN1Ym1pdCddKSk7XG5cdFx0XHR9KSxcblx0XHQpO1xuXHR9XG59XG4iXX0=