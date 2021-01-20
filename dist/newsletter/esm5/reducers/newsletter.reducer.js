/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffNewsletterActionTypes } from './../actions/newsletter.actions';
/**
 * @record
 */
export function DaffNewsletterState() { }
if (false) {
    /** @type {?} */
    DaffNewsletterState.prototype.success;
    /** @type {?} */
    DaffNewsletterState.prototype.loading;
    /** @type {?} */
    DaffNewsletterState.prototype.error;
}
/** @type {?} */
var initialState = {
    success: false,
    loading: false,
    error: null
};
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffNewsletterActionTypes.NewsletterRetry:
        case DaffNewsletterActionTypes.NewsletterSubscribeAction:
            return tslib_1.__assign({}, state, { loading: true });
        case DaffNewsletterActionTypes.NewsletterFailedSubscribeAction:
            return tslib_1.__assign({}, state, { loading: false, error: action.payload });
        case DaffNewsletterActionTypes.NewsletterCancelAction:
            return tslib_1.__assign({}, state, { loading: false });
        case DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction:
            return tslib_1.__assign({}, state, { success: true, loading: false });
        case DaffNewsletterActionTypes.NewsletterReset:
            return tslib_1.__assign({}, state, initialState);
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25ld3NsZXR0ZXIvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9uZXdzbGV0dGVyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFFbkcseUNBSUM7OztJQUhDLHNDQUFpQjs7SUFDakIsc0NBQWlCOztJQUNqQixvQ0FBcUI7OztJQUdqQixZQUFZLEdBQXdCO0lBQ3hDLE9BQU8sRUFBRSxLQUFLO0lBQ2QsT0FBTyxFQUFFLEtBQUs7SUFDZCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBcUMsS0FBeUMsRUFBRSxNQUFnQztJQUEzRSxzQkFBQSxFQUFBLG9CQUF5QztJQUNuRyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyx5QkFBeUIsQ0FBQyxlQUFlLENBQUM7UUFDL0MsS0FBSyx5QkFBeUIsQ0FBQyx5QkFBeUI7WUFDdEQsNEJBQVcsS0FBSyxJQUFFLE9BQU8sRUFBRSxJQUFJLElBQUU7UUFDbkMsS0FBSyx5QkFBeUIsQ0FBQywrQkFBK0I7WUFDNUQsNEJBQVksS0FBSyxJQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUc7UUFDN0QsS0FBSyx5QkFBeUIsQ0FBQyxzQkFBc0I7WUFDbkQsNEJBQVksS0FBSyxJQUFFLE9BQU8sRUFBRSxLQUFLLElBQUU7UUFDckMsS0FBSyx5QkFBeUIsQ0FBQyxnQ0FBZ0M7WUFDM0QsNEJBQVksS0FBSyxJQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssSUFBRTtRQUN0RCxLQUFLLHlCQUF5QixDQUFDLGVBQWU7WUFDMUMsNEJBQVcsS0FBSyxFQUFLLFlBQVksRUFBRTtRQUN2QztZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZOZXdzbGV0dGVyU3VibWlzc2lvbiB9IGZyb20gJy4vLi4vbW9kZWxzL25ld3NsZXR0ZXIubW9kZWwnO1xuaW1wb3J0IHsgRGFmZk5ld3NsZXR0ZXJBY3Rpb25zLCBEYWZmTmV3c2xldHRlckFjdGlvblR5cGVzIH0gZnJvbSAnLi8uLi9hY3Rpb25zL25ld3NsZXR0ZXIuYWN0aW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZk5ld3NsZXR0ZXJTdGF0ZSB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGVycm9yOiBzdHJpbmcgfCBudWxsO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IERhZmZOZXdzbGV0dGVyU3RhdGUgPSB7XG4gIHN1Y2Nlc3M6IGZhbHNlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXI8VCBleHRlbmRzIERhZmZOZXdzbGV0dGVyU3VibWlzc2lvbj4oc3RhdGU6IERhZmZOZXdzbGV0dGVyU3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRGFmZk5ld3NsZXR0ZXJBY3Rpb25zPFQ+KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlclJldHJ5OlxuICAgIGNhc2UgRGFmZk5ld3NsZXR0ZXJBY3Rpb25UeXBlcy5OZXdzbGV0dGVyU3Vic2NyaWJlQWN0aW9uOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZX07XG4gICAgY2FzZSBEYWZmTmV3c2xldHRlckFjdGlvblR5cGVzLk5ld3NsZXR0ZXJGYWlsZWRTdWJzY3JpYmVBY3Rpb246XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGNhc2UgRGFmZk5ld3NsZXR0ZXJBY3Rpb25UeXBlcy5OZXdzbGV0dGVyQ2FuY2VsQWN0aW9uOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlfTtcbiAgICBjYXNlIERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlclN1Y2Nlc3NTdWJzY3JpYmVBY3Rpb246XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdWNjZXNzOiB0cnVlLCBsb2FkaW5nOiBmYWxzZX07XG4gICAgY2FzZSBEYWZmTmV3c2xldHRlckFjdGlvblR5cGVzLk5ld3NsZXR0ZXJSZXNldDpcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uaW5pdGlhbFN0YXRlfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59Il19