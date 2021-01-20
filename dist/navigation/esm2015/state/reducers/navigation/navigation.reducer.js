/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffNavigationActionTypes } from '../../actions/navigation.actions';
/** @type {?} */
export const initialState = {
    navigationTree: null,
    loading: false,
    errors: []
};
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffNavigationReducer(state = initialState, action) {
    switch (action.type) {
        case DaffNavigationActionTypes.NavigationLoadAction:
            return Object.assign({}, state, { loading: true });
        case DaffNavigationActionTypes.NavigationLoadSuccessAction:
            return Object.assign({}, state, { loading: false, navigationTree: action.payload });
        case DaffNavigationActionTypes.NavigationLoadFailureAction:
            return Object.assign({}, state, { loading: false, errors: [action.payload] });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25hdmlnYXRpb24vc3RhdGUvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9uYXZpZ2F0aW9uL25hdmlnYXRpb24ucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLHlCQUF5QixFQUF5QixNQUFNLGtDQUFrQyxDQUFDOztBQUdwRyxNQUFNLE9BQU8sWUFBWSxHQUFvQztJQUM1RCxjQUFjLEVBQUUsSUFBSTtJQUNwQixPQUFPLEVBQUUsS0FBSztJQUNkLE1BQU0sRUFBRSxFQUFFO0NBQ1Y7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLFFBQXVDLFlBQVksRUFBRSxNQUFnQztJQUNyRixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyx5QkFBeUIsQ0FBQyxvQkFBb0I7WUFDakQseUJBQVcsS0FBSyxJQUFFLE9BQU8sRUFBRSxJQUFJLElBQUU7UUFDbkMsS0FBSyx5QkFBeUIsQ0FBQywyQkFBMkI7WUFDeEQseUJBQVcsS0FBSyxJQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUU7UUFDcEUsS0FBSyx5QkFBeUIsQ0FBQywyQkFBMkI7WUFDeEQseUJBQVcsS0FBSyxJQUNkLE9BQU8sRUFBRSxLQUFLLEVBQ2QsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUN4QjtRQUNKO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkdlbmVyaWNOYXZpZ2F0aW9uVHJlZSB9IGZyb20gJ0BkYWZmb2RpbC9uYXZpZ2F0aW9uJztcblxuaW1wb3J0IHsgRGFmZk5hdmlnYXRpb25BY3Rpb25UeXBlcywgRGFmZk5hdmlnYXRpb25BY3Rpb25zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9uYXZpZ2F0aW9uLmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZk5hdmlnYXRpb25SZWR1Y2VyU3RhdGUgfSBmcm9tICcuL25hdmlnYXRpb24tcmVkdWNlci1zdGF0ZS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBEYWZmTmF2aWdhdGlvblJlZHVjZXJTdGF0ZTxhbnk+ID0ge1xuXHRuYXZpZ2F0aW9uVHJlZTogbnVsbCxcblx0bG9hZGluZzogZmFsc2UsXG5cdGVycm9yczogW11cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkYWZmTmF2aWdhdGlvblJlZHVjZXIgPFQgZXh0ZW5kcyBEYWZmR2VuZXJpY05hdmlnYXRpb25UcmVlPFQ+PlxuXHQoc3RhdGU6IERhZmZOYXZpZ2F0aW9uUmVkdWNlclN0YXRlPFQ+ID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IERhZmZOYXZpZ2F0aW9uQWN0aW9uczxUPik6IERhZmZOYXZpZ2F0aW9uUmVkdWNlclN0YXRlPFQ+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRGFmZk5hdmlnYXRpb25BY3Rpb25UeXBlcy5OYXZpZ2F0aW9uTG9hZEFjdGlvbjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IHRydWV9O1xuICAgIGNhc2UgRGFmZk5hdmlnYXRpb25BY3Rpb25UeXBlcy5OYXZpZ2F0aW9uTG9hZFN1Y2Nlc3NBY3Rpb246XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgbmF2aWdhdGlvblRyZWU6IGFjdGlvbi5wYXlsb2FkfTtcbiAgICBjYXNlIERhZmZOYXZpZ2F0aW9uQWN0aW9uVHlwZXMuTmF2aWdhdGlvbkxvYWRGYWlsdXJlQWN0aW9uOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczogW2FjdGlvbi5wYXlsb2FkXVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=