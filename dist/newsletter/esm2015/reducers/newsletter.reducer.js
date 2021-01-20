/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const initialState = {
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
export function reducer(state = initialState, action) {
    switch (action.type) {
        case DaffNewsletterActionTypes.NewsletterRetry:
        case DaffNewsletterActionTypes.NewsletterSubscribeAction:
            return Object.assign({}, state, { loading: true });
        case DaffNewsletterActionTypes.NewsletterFailedSubscribeAction:
            return Object.assign({}, state, { loading: false, error: action.payload });
        case DaffNewsletterActionTypes.NewsletterCancelAction:
            return Object.assign({}, state, { loading: false });
        case DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction:
            return Object.assign({}, state, { success: true, loading: false });
        case DaffNewsletterActionTypes.NewsletterReset:
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25ld3NsZXR0ZXIvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9uZXdzbGV0dGVyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7OztBQUVuRyx5Q0FJQzs7O0lBSEMsc0NBQWlCOztJQUNqQixzQ0FBaUI7O0lBQ2pCLG9DQUFxQjs7O01BR2pCLFlBQVksR0FBd0I7SUFDeEMsT0FBTyxFQUFFLEtBQUs7SUFDZCxPQUFPLEVBQUUsS0FBSztJQUNkLEtBQUssRUFBRSxJQUFJO0NBQ1o7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFxQyxRQUE2QixZQUFZLEVBQUUsTUFBZ0M7SUFDckksUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUsseUJBQXlCLENBQUMsZUFBZSxDQUFDO1FBQy9DLEtBQUsseUJBQXlCLENBQUMseUJBQXlCO1lBQ3RELHlCQUFXLEtBQUssSUFBRSxPQUFPLEVBQUUsSUFBSSxJQUFFO1FBQ25DLEtBQUsseUJBQXlCLENBQUMsK0JBQStCO1lBQzVELHlCQUFZLEtBQUssSUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxJQUFHO1FBQzdELEtBQUsseUJBQXlCLENBQUMsc0JBQXNCO1lBQ25ELHlCQUFZLEtBQUssSUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFFO1FBQ3JDLEtBQUsseUJBQXlCLENBQUMsZ0NBQWdDO1lBQzNELHlCQUFZLEtBQUssSUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLElBQUU7UUFDdEQsS0FBSyx5QkFBeUIsQ0FBQyxlQUFlO1lBQzFDLHlCQUFXLEtBQUssRUFBSyxZQUFZLEVBQUU7UUFDdkM7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmTmV3c2xldHRlclN1Ym1pc3Npb24gfSBmcm9tICcuLy4uL21vZGVscy9uZXdzbGV0dGVyLm1vZGVsJztcbmltcG9ydCB7IERhZmZOZXdzbGV0dGVyQWN0aW9ucywgRGFmZk5ld3NsZXR0ZXJBY3Rpb25UeXBlcyB9IGZyb20gJy4vLi4vYWN0aW9ucy9uZXdzbGV0dGVyLmFjdGlvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZOZXdzbGV0dGVyU3RhdGUge1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBEYWZmTmV3c2xldHRlclN0YXRlID0ge1xuICBzdWNjZXNzOiBmYWxzZSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyPFQgZXh0ZW5kcyBEYWZmTmV3c2xldHRlclN1Ym1pc3Npb24+KHN0YXRlOiBEYWZmTmV3c2xldHRlclN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IERhZmZOZXdzbGV0dGVyQWN0aW9uczxUPikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBEYWZmTmV3c2xldHRlckFjdGlvblR5cGVzLk5ld3NsZXR0ZXJSZXRyeTpcbiAgICBjYXNlIERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlclN1YnNjcmliZUFjdGlvbjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IHRydWV9O1xuICAgIGNhc2UgRGFmZk5ld3NsZXR0ZXJBY3Rpb25UeXBlcy5OZXdzbGV0dGVyRmFpbGVkU3Vic2NyaWJlQWN0aW9uOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlIERhZmZOZXdzbGV0dGVyQWN0aW9uVHlwZXMuTmV3c2xldHRlckNhbmNlbEFjdGlvbjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZX07XG4gICAgY2FzZSBEYWZmTmV3c2xldHRlckFjdGlvblR5cGVzLk5ld3NsZXR0ZXJTdWNjZXNzU3Vic2NyaWJlQWN0aW9uOlxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3VjY2VzczogdHJ1ZSwgbG9hZGluZzogZmFsc2V9O1xuICAgIGNhc2UgRGFmZk5ld3NsZXR0ZXJBY3Rpb25UeXBlcy5OZXdzbGV0dGVyUmVzZXQ6XG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmluaXRpYWxTdGF0ZX07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSJdfQ==